document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // START DATE
  // ==========================================

  const START = new Date("2023-08-05T12:59:00+05:00");


  // ==========================================
  // COUNTER ELEMENTS
  // ==========================================

  const yearsEl = document.getElementById("years");
  const monthsEl = document.getElementById("months");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const millisecondsEl = document.getElementById("milliseconds");
  const totalDaysEl = document.getElementById("totalDays");


  // ==========================================
  // LIVE COUNTER
  // ==========================================

  function updateCounter() {

    const now = new Date();

    let years = now.getFullYear() - START.getFullYear();
    let months = now.getMonth() - START.getMonth();
    let days = now.getDate() - START.getDate();
    let hours = now.getHours() - START.getHours();
    let minutes = now.getMinutes() - START.getMinutes();
    let seconds = now.getSeconds() - START.getSeconds();
    let milliseconds = now.getMilliseconds() - START.getMilliseconds();


    // Milliseconds
    if (milliseconds < 0) {
      milliseconds += 1000;
      seconds--;
    }

    // Seconds
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }

    // Minutes
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }

    // Hours
    if (hours < 0) {
      hours += 24;
      days--;
    }

    // Days
    if (days < 0) {
      months--;

      const previousMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      );

      days += previousMonth.getDate();
    }

    // Months
    if (months < 0) {
      months += 12;
      years--;
    }


    // ==========================================
    // DISPLAY
    // ==========================================

    yearsEl.textContent = years;
    monthsEl.textContent = months;
    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");

    millisecondsEl.textContent =
      String(milliseconds).padStart(3, "0");


    // ==========================================
    // TOTAL DAYS
    // ==========================================

    const totalMilliseconds =
      now.getTime() - START.getTime();

    const totalDays =
      Math.floor(totalMilliseconds / 86400000);

    totalDaysEl.textContent =
      totalDays.toLocaleString();
  }


  // Start immediately
  updateCounter();

  // Update every 10 milliseconds
  setInterval(updateCounter, 10);


  // ==========================================
  // LOVE & SUPPORT
  // ==========================================

  const loveButton =
    document.getElementById("loveButton");

  const loveCount =
    document.getElementById("loveCount");

  const heartBurst =
    document.getElementById("heartBurst");


  // Get saved count from this browser
  let count =
    Number(localStorage.getItem("loveSupportCount")) || 0;

  loveCount.textContent = count;


  // Button click
  loveButton.addEventListener("click", function () {

    count++;

    loveCount.textContent = count;

    // Save count in this browser
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
