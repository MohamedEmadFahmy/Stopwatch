let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let clock = document.getElementById("counter");
clock.innerHTML= "00:00:00";
let [seconds, minutes, hours] = [0,0,0];
let interval = null;

function displayTime(){
    seconds += 1;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    if(hours < 10){
        h = "0" + hours;
    }
    if(minutes < 10){
        m = "0" + minutes;
    }
    if(seconds < 10){
        s = "0" + seconds;
    }
    let result = h+":"+m+":"+s;
    clock.innerHTML = result;
}

startButton.addEventListener('click', function(){
    if(interval != null){
        return
    }
    interval = setInterval(displayTime , 1000);
});
stopButton.addEventListener('click', function(){
    clearInterval(interval);
    interval = null;
});
resetButton.addEventListener('click', function(){
    stopButton.click();
    clock.innerHTML= "00:00:00";
    seconds = 0;
});