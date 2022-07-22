var seconds=00
var minutes=00
var hour=00
var interval

function style(digit) {
    if(digit<10) {
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start() {
    watch()
    interval = setInterval(watch, 1000)
}

function pause() {
    clearInterval(interval)
}

function reset() {
    clearInterval(interval)
    seconds=00
    minutes=00
    hour=00
    document.getElementById('watch').innerText='00:00:00'
}

function watch() {
    seconds++
    if(seconds==60) {
        minutes++
        seconds=0
        if(minutes==60) {
            hour++
        }
    }
    document.getElementById('watch').innerText=style(hour)+':'+style(minutes)+':'+style(seconds)
}

