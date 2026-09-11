document.addEventListener("DOMContentLoaded", function () {

  // Starting date and time
  const START = new Date("2023-08-05T12:59:00+05:00");

  const yearsEl = document.getElementById("years");
  const monthsEl = document.getElementById("months");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCounter() {

    const now = new Date();

    let years = now.getFullYear() - START.getFullYear();
    let months = now.getMonth() - START.getMonth();
    let days = now.getDate() - START.getDate();

    let hours = now.getHours() - START.getHours();
    let minutes = now.getMinutes() - START.getMinutes();
    let seconds = now.getSeconds() - START.getSeconds();

    // Fix negative seconds
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }

    // Fix negative minutes
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }

    // Fix negative hours
    if (hours < 0) {
      hours += 24;
      days--;
    }

    // Fix negative days
    if (days < 0) {
      months--;

      const previousMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      );

      days += previousMonth.getDate();
    }

    // Fix negative months
    if (months < 0) {
      months += 12;
      years--;
    }

    yearsEl.textContent = years;
    monthsEl.textContent = months;
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }

  updateCounter();

  // Update every second
  setInterval(updateCounter, 1000);

});
