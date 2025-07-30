
const hourHand = document.getElementById('hourHand')
const minuteHand = document.getElementById('minuteHand')
const secondHand = document.getElementById('secondHand');
const clock = document.getElementById('clock')

const backgroundColors = [
    "#0f2027", "#203a43", "#2c5364", "#355c7d", "#6c5b7b",
    "#c06c84", "#ff6f61", "#feb47b", "#ff7e5f", "#00c9ff",
    "#92fe9d", "#f77062", "#ff9966", "#56ab2f", "#614385"
];

function updateClock() {
    const currentTime = new Date();
    const Hour = currentTime.getHours();
    const Minutes = currentTime.getMinutes();
    const Seconds = currentTime.getSeconds();
    const Milliseconds = currentTime.getMilliseconds();


    const hourDegree = (Hour % 12) * 30 + Minutes * 0.5;
    const minutesDegree = Minutes * 6 + Seconds * 0.1;
    const totalSeconds = Seconds + Milliseconds /1000;
    const secondDegree = totalSeconds  * 4;

    hourHand.style.transform = `translateX(-50%) rotate(${hourDegree}deg)`
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegree}deg)`
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegree}deg)`

    // const color = backgroundColors[Minutes % backgroundColors.length];
    // clock.style.background = color;
}

updateClock()

setInterval(updateClock, 100)