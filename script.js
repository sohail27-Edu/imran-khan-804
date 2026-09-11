document.addEventListener("DOMContentLoaded", function () {

  // Start date and time
  const START = new Date("2023-08-05T12:59:00+05:00");

  // Counter elements
  const yearsEl = document.getElementById("years");
  const monthsEl = document.getElementById("months");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const millisecondsEl = document.getElementById("milliseconds");
  const totalDaysEl = document.getElementById("totalDays");

  // Love & Support elements
  const loveButton = document.getElementById("loveButton");
  const loveCount = document.getElementById("loveCount");
  const heartBurst = document.getElementById("heartBurst");


  // =========================
  // LIVE TIME COUNTER
  // =========================

  function updateCounter() {

    const now = new Date();

    let years = now.getFullYear() - START.getFullYear();
    let months = now.getMonth() - START.getMonth();
    let days = now.getDate() - START.getDate();
    let hours = now.getHours() - START.getHours();
    let minutes = now.getMinutes() - START.getMinutes();
    let seconds = now.getSeconds() - START.getSeconds();
    let milliseconds = now.getMilliseconds() - START.getMilliseconds();

    if (milliseconds < 0) {
      milliseconds += 1000;
      seconds--;
    }

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }

    if (minutes < 0) {
      minutes += 60;
      hours--;
    }

    if (hours < 0) {
      hours += 24;
      days--;
    }

    if (days < 0) {
      months--;

      const previousMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      );

      days += previousMonth.getDate();
    }

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

    millisecondsEl.textContent =
      String(milliseconds).padStart(3, "0");

    // Total days
    const totalMilliseconds = now - START;

    const totalDays = Math.floor(
      totalMilliseconds /
      (1000 * 60 * 60 * 24)
    );

    totalDaysEl.textContent =
      totalDays.toLocaleString();
  }


  updateCounter();

  setInterval(updateCounter, 10);


  // =========================
  // LOVE & SUPPORT
  // =========================

  let count =
    Number(localStorage.getItem("loveSupportCount")) || 0;

  loveCount.textContent = count;


  loveButton.addEventListener("click", function () {

    count++;

    loveCount.textContent = count;

    localStorage.setItem(
      "loveSupportCount",
      count
    );


    // Heart animation
    if (heartBurst) {

      heartBurst.innerHTML = "♥";

      heartBurst.classList.remove("show");

      void heartBurst.offsetWidth;

      heartBurst.classList.add("show");
    }

  });

});
