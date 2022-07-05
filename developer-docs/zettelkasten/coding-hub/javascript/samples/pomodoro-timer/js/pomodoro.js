
import {Timer} from './timer.js'

// Timer
const timerValue = document.getElementById('timer-value')

// Pomodoro
const pomodoroButton = document.getElementById('btn-pomodoro')
const nextButton = document.getElementById('btn-next')

// Render
const tabs = document.querySelectorAll('#tab');

const root = document.querySelector(':root') 
const colors = {
    work: '#d95550',
    short: '#4c9195',
    long: '#457ca3'
}

class Pomodoro{
    constructor(settings){
        this.interval = '';
        this.settings = settings;
        this.state = {
            currentState: 0,
            remaining: 0,
            running: false,
            interval: 0,
            getReaminingSeconds: function(){
                return Math.floor((this.remaining % (1000 * 60)) / 1000);
            } 
        }
    }
    resetCycle(renderButton){
        this.state.currentState = 0;
        this.state.remaining = 0;
        this.state.interval = 0;
        this.stopInterval(renderButton);
    }
    nextState(renderButton, renderTimer, skipRemaining = false){
        if(skipRemaining){
            this.state.remaining = 0;
            if(this.state.currentState == 2){
                this.resetCycle(renderButton);
            }
                        
            if((this.state.interval % 2) == 0){
                // Work state
                this.state.currentState = 0;
            } else {
                // Break state
                if(this.state.interval > (3 * 2)){
                    this.state.currentState = 2;
                } else {
                    this.state.currentState = 1;
                }
            }
        }
        return this.createInterval(renderButton, renderTimer);
    }
    decideTime(){
        if(!this.state.remaining <= 0){
            console.log('Interval have remaining of ' + this.state.remaining)
            return parseInt(this.state.getReaminingSeconds());
        } else {
            console.log('Interval does not have any remaining time');
            switch(this.state.currentState){
                case 0: // Pomodoro work
                    return parseInt(this.settings.work); 
                case 1: // Short break
                    return parseInt(this.settings.short);
                case 2: // Long break
                    return parseInt(this.settings.long);
            }
        }
    }
    startInterval() {
        console.log("-----------Interval was initialized!-----------------");
        this.state.running = true;
        this.state.interval += 1;
    }
    delaySeconds(n){
        return new Promise(function(resolve){
            setTimeout(resolve,n*1000);
        });
    }
    createInterval(renderButton ,renderTimer, interval = 1000){
        if(this.state.running){
            this.stopInterval(renderButton);
        }
        this.startInterval();
        
        console.log("Pomotime selected is " + this.decideTime());
        this.printState();

        // Get countdown next difference
        var countDownDate = new Date();
        countDownDate.setSeconds(countDownDate.getSeconds() + this.decideTime());

        // Get today's date and time
        var now = new Date().getTime();
        var step = Timer.countDownStep(now, countDownDate)
        
        // Render html
        renderButton(this.state.running);
        renderTimer(step.minutes, step.seconds);

        this.delaySeconds(1);
        return new Promise((result)=> {
            this.interval = setInterval(() =>{
                now = new Date().getTime();
                step = Timer.countDownStep(now, countDownDate)
                
                // Print html
                renderTimer(step.minutes, step.seconds)
                
                // Save remaining time distance
                this.state.remaining = step.distance;

                // If the count down is finished, write some text
                if (step.distance <= 1) {
                    this.state.remaining = 0;
                    this.stopInterval(renderButton);
                    result(this.state)
                }
                
            }, interval);
        });
    }
    stopInterval(renderButton){
        console.log("-----------Interval was interrupted with a remaining of " + this.state.remaining + "!-----------------" );
        this.state.running = false;
        clearInterval(this.interval);
        renderButton(this.state.running);
        this.delaySeconds(1);
    }
    get getSettings(){
        return this.settings;
    }
    set setSettings(value){
        this.settings = value;
    }
    static createSettings(work, short, long, interval){
        return {
            work: work,
            short: short,
            long: long,
            interval: interval
        }
    }
    printState(){
        console.log(`State (Current: ${this.state.currentState}, Remaining: ${this.state.remaining}, Interval: ${this.state.interval})`)
    }
    toString(){
        return `Pomodoro (Work: ${this.settings.work}, Short Break: ${this.settings.short}, Long Break: ${this.settings.long}, Long Interval: ${this.settings.interval})`
    }
}

const pomodoro = new Pomodoro(Pomodoro.createSettings(60,15,30,4));
console.log(pomodoro.toString());

pomodoroButton.addEventListener('click', () =>{
    let buttonText = pomodoroButton.firstElementChild;
    if(!pomodoro.state.running){
        pomodoro.setSettings = getSettings();
        
        pomodoro.nextState(renderButton, renderTimer, false)
        .then(() => console.log(`Interval was finished!`));
        renderState(pomodoro.state.currentState)
        
        buttonText.innerHTML = "Stop";
        nextButton.classList.remove('button--hidden');
    } 
    else {
        pomodoro.stopInterval(renderButton);
        buttonText.innerHTML = "Start";
        nextButton.classList.add('button--hidden');
    }
});

nextButton.addEventListener('click', () => {
    pomodoro.nextState(renderButton, renderTimer, true)
        .then(() => console.log(`Step was finished!`));
    renderState(pomodoro.state.currentState)
});

function renderButton(isActive) {
    var pomoAction = pomodoroButton.parentElement;
    if(isActive){
        pomoAction.classList.add('pomodoro__action--pressed')
    } else {
        pomoAction.classList.remove('pomodoro__action--pressed')
    }
}

function renderTimer(minutes,seconds){
    var m = minutes < 10 ? "0" + minutes : minutes;
    var s = seconds < 10 ? "0" + seconds : seconds;
    timerValue.innerHTML = m + ":" + s;
}

function renderState(state){
    console.log('Render state ' + state);
    switch(state){
        case 0:
            root.style.setProperty('--background', colors.work);
            tabs[0].classList.add('button--selected');
            tabs[1].classList.remove('button--selected');
            tabs[2].classList.remove('button--selected');
            break;
        case 1:
            root.style.setProperty('--background', colors.short);
            tabs[1].classList.add('button--selected');
            tabs[0].classList.remove('button--selected');
            tabs[2].classList.remove('button--selected');
            break;
        case 2:
            root.style.setProperty('--background', colors.long);
            tabs[2].classList.add('button--selected');
            tabs[0].classList.remove('button--selected');
            tabs[1].classList.remove('button--selected');
            break;
    }
}

function getSettings(){
    let work = document.getElementById('work').value;
    let short = document.getElementById('short').value;
    let long = document.getElementById('long').value;
    
    return Pomodoro.createSettings(work, short, long);
}