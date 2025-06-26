
function updateClock (){

    let Time = document.getElementById('digital')

    let currentTime = new Date()
    let Hours = currentTime.getHours()
    let Minutes = currentTime.getMinutes().toString().padStart(2,0)
    let Seconds = currentTime.getSeconds().toString().padStart(2,0)

    let meridain =  Hours >= 12 ? 'PM' : 'AM'
    Hours = Hours % 12 || 12;
    Hours = Hours.toString().padStart(2,0)
    // let exactTime = `${Hours}:${Minutes}:${Seconds}`;
    // console.log(exactTime)

    Time.textContent = `${Hours}:${Minutes}:${Seconds} ${meridain}`
}

updateClock()

setInterval(updateClock,1000)
