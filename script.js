const time = document.getElementById('time');
const day = document.getElementById('day_month')
setInterval(() => {
    let date = new Date ();
    time.innerHTML = date.toLocaleTimeString();
    day.innerHTML=date.toDateString();
}, 1000);