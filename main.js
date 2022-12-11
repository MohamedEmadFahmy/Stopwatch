let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let clock = document.getElementById("counter");
clock.innerHTML= "00:00:00";
let [seconds, minutes, hours] = [0,0,0];