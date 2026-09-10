const startDate = new Date("2023-05-09T00:00:00");

function updateCounter() {
    const now = new Date();

    let difference = now - startDate;

    if (difference < 0) {
        difference = 0;
    }

    const milliseconds = difference % 1000;
    const totalSeconds = Math.floor(difference / 1000);

    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);

    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);

    const hours = totalHours % 24;
    const totalDays = Math.floor(totalHours / 24);

    const years = Math.floor(totalDays / 365.25);
    const remainingDays = Math.floor(totalDays - (years * 365.25));

    const months = Math.floor(remainingDays / 30.44);
    const days = Math.floor(remainingDays - (months * 30.44));

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    document.getElementById("milliseconds").textContent =
        String(milliseconds).padStart(3, "0");
}

setInterval(updateCounter, 10);
updateCounter();
