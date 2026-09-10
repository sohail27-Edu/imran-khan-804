document.addEventListener("DOMContentLoaded", function () {

  const START = new Date("2023-08-05T12:59:00+05:00");

  const yearsEl = document.getElementById("years");
  const monthsEl = document.getElementById("months");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const millisecondsEl = document.getElementById("milliseconds");
  const totalDaysEl = document.getElementById("totalDays");


  function updateCounter() {

    const now = new Date();

    let years = now.getFullYear() - START.getFullYear();
    let months = now.getMonth() - START.getMonth();
    let days = now.getDate() - START.getDate();

    let hours = now.getHours() - START.getHours();
    let minutes = now.getMinutes() - START.getMinutes();
    let seconds = now.getSeconds() - START.getSeconds();
    let milliseconds =
      now.getMilliseconds() - START.getMilliseconds();


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


    // Total days
    const totalDays = Math.floor(
      (now.getTime() - START.getTime()) /
      86400000
    );


    // Update display
    yearsEl.textContent = years;

    monthsEl.textContent =
      String(months).padStart(2, "0");

    daysEl.textContent =
      String(days).padStart(2, "0");

    hoursEl.textContent =
      String(hours).padStart(2, "0");

    minutesEl.textContent =
      String(minutes).padStart(2, "0");

    secondsEl.textContent =
      String(seconds).padStart(2, "0");

    millisecondsEl.textContent =
      String(milliseconds).padStart(3, "0");

    totalDaysEl.textContent =
      totalDays.toLocaleString();
  }


  // Start counter immediately
  updateCounter();

  // Update every 50 milliseconds
  setInterval(updateCounter, 50);



  /*
   * LOVE & SUPPORT BUTTON
   */

  const loveButton = document.getElementById("loveButton");
  const loveCount = document.getElementById("loveCount");
  const heartBurst = document.getElementById("heartBurst");

  let count = Number(localStorage.getItem("loveCount")) || 0;

  loveCount.textContent = count.toLocaleString();


  loveButton.addEventListener("click", function () {

    count++;

    loveCount.textContent =
      count.toLocaleString();

    localStorage.setItem("loveCount", count);


    // Create floating heart
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = "♥";

    heart.style.left =
      (45 + Math.random() * 10) + "%";

    heart.style.bottom =
      (12 + Math.random() * 8) + "%";

    heartBurst.appendChild(heart);


    // Remove after animation
    setTimeout(function () {
      heart.remove();
    }, 1500);

  });

});

// ==========================================
// LOVE & SUPPORT - ONE COUNT PER BROWSER
// ==========================================

const loveButton = document.getElementById("loveButton");
const loveCount = document.getElementById("loveCount");

const loveGivenKey = "imranKhanLoveGiven";
const loveCountKey = "imranKhanLoveCount";

// Get saved count
let totalLove = parseInt(localStorage.getItem(loveCountKey)) || 0;

// Show saved count
loveCount.textContent = totalLove;

// Check if this browser has already supported
if (localStorage.getItem(loveGivenKey) === "true") {
    loveButton.disabled = true;
    loveButton.setAttribute("aria-label", "You have already sent love and support");
}

// Handle button click
loveButton.addEventListener("click", function () {

    // Stop if this browser already voted
    if (localStorage.getItem(loveGivenKey) === "true") {
        return;
    }

    // Add exactly one count
    totalLove++;

    // Save the count
    localStorage.setItem(loveCountKey, totalLove);

    // Remember that this browser has supported
    localStorage.setItem(loveGivenKey, "true");

    // Update number on screen
    loveCount.textContent = totalLove;

    // Disable button
    loveButton.disabled = true;
});
