let secondsElapsed = 0
let interval = null
let isgoing = false
const time = document.getElementsByClassName('time')[0]
const start = document.getElementsByClassName('start')[0]
const stop = document.getElementsByClassName('stop')[0]
const reset = document.getElementsByClassName('reset')[0]
function padstr(val) {
    let padded = val.toString().padStart(2, '0')
    return padded

}
function setTime() {
    let minutes = Math.floor(secondsElapsed / 60)
    let seconds = secondsElapsed % 60
    let s = `${padstr(minutes)}:${padstr(seconds)}`
    time.innerHTML = s
}

function timer() {
    if (isgoing) {
        secondsElapsed += 1
        setTime()
    }
}

function startTimer() {
    if (isgoing) {
        isgoing = false
    } else {
        isgoing = true
    }
    if (!interval) {

        interval = setInterval(timer, 1000)
    }
}
function stopTimer() {
    isgoing = false
}


function resetTimer() {
    secondsElapsed = 0
    setTime()
    clearInterval(interval)
    interval = null
    isgoing = false

}



start.onclick = function () {
    startTimer()
}
stop.onclick = function () {
    stopTimer()
}
reset.onclick = function () {
    resetTimer()
}