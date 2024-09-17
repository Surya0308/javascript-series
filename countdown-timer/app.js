const endDate = "17 september 2025 10: 01 PM";
document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll('input');

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff < 0) return;

    const days = Math.floor((diff/86400));
    const hrs = Math.floor((diff/3600) % 24);
    const minutes = Math.floor((diff/60) % 60);
    const seconds = Math.floor(diff % 60);
    // console.log(end, now, diff, days, hrs, minutes, seconds);
    inputs[0].value = days;
    inputs[1].value = hrs;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}
//initial calling
clock();

setInterval(
    () => {
        clock();
    },
    1000
)

//seconds in a day = 24 * 60 * 60 = 86400
//seconds in an hr = 60 * 60
//seconds in a min = 60