window.onload = function showTime(){
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let session = "AM";

if(hours == 0){
    hours = 12;
}
else{
    hours = "0" + hours;
}
if(hours > 12){
    hours = hours - 12;
    session = "PM";
}

if(minutes < 10){
    minutes = "0" + minutes;
}
if(seconds < 10){
    seconds = "0" + seconds;
}

let time = `${hours} : ${minutes} : ${seconds} ${session}`; 
const crtTime = document.getElementById("MyClockDisplay").innerHTML = time;

setTimeout(showTime, 1000);
}
