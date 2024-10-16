let timerDisplay = document.querySelector('.timerDisplay')
let startBtn = document.getElementById('startBtn')
let stopBtn = document.getElementById('stopBtn')
let resetBtn = document.getElementById('resetBtn')

// console.log(timerDisplay,startBtn,stopBtn,resetBtn)

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null

startBtn.addEventListener('click', () => {
    if(timerId !== null){
        clearInterval(timerId)
    }
    timerId = setInterval(startTimer, 10)
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerId)
})

resetBtn.addEventListener('click', () => {
    clearInterval(timerId)
    timerDisplay.innerHTML = '00 : 00 : 00'
})

function startTimer(){
    msec++
    if(msec == 100){
        msec = 0;
        secs++
        if(secs == 60){
            secs = 0;
            mins++
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = msec < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${msecString} : ${secsString} : ${minsString}`
}