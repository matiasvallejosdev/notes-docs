
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
    resetState(){
        this.state.currentState = 0;
        this.state.remaining = 0;
        this.state.interval = 0;
        this.state.running = false;
    }
    nextState(skipRemaining = false){  
        if(skipRemaining){
            this.state.remaining = 0;
            if(this.state.currentState == 2){
                this.resetState();
            }
            
            console.log((this.state.interval % 2) == 0);
            
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
        return this.createInterval();
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
                    break; 
                case 1: // Short break
                    return parseInt(this.settings.short);
                    break; 
                case 2: // Long break
                    return parseInt(this.settings.long);
                    break; 
            }
        }
    }
    startInterval() {
        if(this.state.running){
            this.stopInterval();
        }

        console.log("-----------Interval was initialized!-----------------");
        this.state.running = true;
        this.state.interval += 1;
    }
    createInterval(interval = 1000){

        this.startInterval();
        
        console.log("Pomotime selected is " + this.decideTime());
        this.printState();

        var countDownDate = new Date();
        countDownDate.setSeconds(countDownDate.getSeconds() + this.decideTime());

        return new Promise((result)=> {
            this.interval = setInterval(() =>{
                // Get today's date and time
                var now = new Date().getTime();
                var step = Timer.countDownStep(now, countDownDate)
                
                // Print html
                var m = step.minutes < 10 ? "0" + step.minutes : step.minutes;
                var s = step.seconds < 10 ? "0" + step.seconds : step.seconds;
                timerValue.innerHTML = m + ":" + s;
                
                // Save remaining time distance
                this.state.remaining = step.distance;

                // If the count down is finished, write some text
                if (step.distance <= 1) {
                    this.state.remaining = 0;
                    this.stopInterval();
                    result(this.state)
                }
                
            }, interval);
        });
    }
    stopInterval(){
        console.log("-----------Interval was interrupted with a remaining of " + this.state.remaining + "!-----------------" );
        this.state.running = false;
        clearInterval(this.interval);
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
        
        pomodoro.nextState(false)
        .then(() => console.log(`Interval was finished!`));
        renderState(pomodoro.state.currentState)
        
        buttonText.innerHTML = "Stop";
        nextButton.classList.remove('button--hidden');
    } 
    else {
        pomodoro.stopInterval();
        buttonText.innerHTML = "Start";
        nextButton.classList.add('button--hidden');
    }
});

nextButton.addEventListener('click', () => {
    pomodoro.nextState(true)
    .then(() => console.log(`Step was finished!`));
    renderState(pomodoro.state.currentState)
});

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