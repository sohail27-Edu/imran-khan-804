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


    // Fix milliseconds
    if (milliseconds < 0) {
      milliseconds += 1000;
      seconds--;
    }


    // Fix seconds
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }


    // Fix minutes
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }


    // Fix hours
    if (hours < 0) {
      hours += 24;
      days--;
    }


    // Fix days
    if (days < 0) {
      months--;

      const previousMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      );

      days += previousMonth.getDate();
    }


    // Fix months
    if (months < 0) {
      months += 12;
      years--;
    }


    // ==========================================
    // DISPLAY COUNTER
    // ==========================================

    yearsEl.textContent = years;
    monthsEl.textContent = months;
    daysEl.textContent = days;

    hoursEl.textContent =
      String(hours).padStart(2, "0");

    minutesEl.textContent =
      String(minutes).padStart(2, "0");

    secondsEl.textContent =
      String(seconds).padStart(2, "0");

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


  // Start counter immediately
  updateCounter();


  // Update every 10 milliseconds
  setInterval(updateCounter, 10);


  // ==========================================
  // LOVE & SUPPORT
  // ONE SUPPORT PER VISIT
  // ==========================================

  const loveButton =
    document.getElementById("loveButton");

  const loveCount =
    document.getElementById("loveCount");

  const heartBurst =
    document.getElementById("heartBurst");


  // Get saved total count
  let count =
    Number(localStorage.getItem("loveSupportCount")) || 0;


  // Display current count
  loveCount.textContent = count;


  // ==========================================
  // CHECK IF THIS VISIT ALREADY SUPPORTED
  // ==========================================

  const alreadySupported =
    sessionStorage.getItem("supportedThisVisit");


  if (alreadySupported) {
    loveButton.classList.add("supported");
  }


  // ==========================================
  // SUPPORT BUTTON
  // ==========================================

  loveButton.addEventListener("click", function () {

    // Only one support per visit
    if (sessionStorage.getItem("supportedThisVisit")) {
      return;
    }


    // Increase count
    count++;


    // Display new count
    loveCount.textContent = count;


    // Save total count
    localStorage.setItem(
      "loveSupportCount",
      count
    );


    // Mark this visit as supported
    sessionStorage.setItem(
      "supportedThisVisit",
      "true"
    );


    // Disable visually
    loveButton.classList.add("supported");


    // ==========================================
    // HEART ANIMATION
    // ==========================================

    if (heartBurst) {

      heartBurst.innerHTML = "♥";

      heartBurst.classList.remove("show");

      // Restart animation
      void heartBurst.offsetWidth;

      heartBurst.classList.add("show");
    }

  });

});

This is now one single JavaScript file. Delete the duplicate Support code you had after "});".

The behavior is:

First visit → 1 support allowed → button becomes supported → further clicks do nothing.

The overall count is still stored in "localStorage", while the "already supported during this visit" flag uses "sessionStorage". No Supabase anywhere.
