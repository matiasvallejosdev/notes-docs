
import {Timer} from './timer.js'

// Timer
const timerValue = document.getElementById('timer-value')

// Pomodoro
const pomodoroButton = document.getElementById('btn-pomodoro')
const nextButton = document.getElementById('btn-next')

class Pomodoro{
    constructor(settings){
        this.interval = '';
        this.settings = settings;
        this.state = {
            currentState: '0',
            remaining: 0,
            running: false,
            getReaminingSeconds: function(){
                return Math.floor((this.remaining % (1000 * 60)) / 1000);
            }
        }
    }
    decideTime(){
        if(this.state.remaining <= 0){
            return parseInt(this.settings.work);
        } else {
            return parseInt(this.state.getReaminingSeconds());
        }
    }
    createInterval(interval = 1000){
        if(this.state.running){
            this.stopInterval();
        }
    
        console.log("Interval was started!");
        this.state.running = true;

        var countDownDate = new Date();
        console.log(this.decideTime());
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
                if (step.distance <= 0) {
                    result()
                    clearInterval();
                    this.state.remaining = 0;
                }
                
            }, interval);
        });
    }
    stopInterval(){
        console.log("Interval was stopped!");
        clearInterval(this.interval);
        this.state.running = false;
    }
    get getSettings(){
        return this.settings;
    }
    set setSettings(value){
        this.settings = value;
    }
    static createSettings(work, short, long){
        return {
            work: work,
            short: short,
            long: long
        }
    }
    toString(){
        return `Pomodoro (Work: ${this.settings.work}, Short Break: ${this.settings.short}, Long Break: ${this.settings.long})`
    }
}

const pomodoro = new Pomodoro(Pomodoro.createSettings(60,15,30), timerValue);
console.log(pomodoro.toString());


pomodoroButton.addEventListener('click', () =>{
    let buttonText = pomodoroButton.firstElementChild;
    if(!pomodoro.state.running){
        pomodoro.setSettings = getSettings();
        pomodoro.createInterval()
            .then(() => console.log("Interval was finished!"));
        buttonText.innerHTML = "Stop";
        nextButton.classList.remove('button--hidden');
    } 
    else {
        pomodoro.stopInterval();
        buttonText.innerHTML = "Start";
        nextButton.classList.add('button--hidden');
    }
});

function getSettings(){
    let work = document.getElementById('work').value;
    let short = document.getElementById('short').value;
    let long = document.getElementById('long').value;
    
    return Pomodoro.createSettings(work, short, long);
}