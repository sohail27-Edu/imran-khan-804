/*
  Imran Khan Jail Time Counter
  Start date: 5 August 2023.
  The arrest was reported shortly after the 12:30 PM verdict.
  Because an exact official arrest timestamp is not consistently published,
  this counter uses 12:59:00 PM PKT as the working start timestamp.
*/

const START = new Date("2023-08-05T12:59:00+05:00");

const $ = (id) => document.getElementById(id);

function calendarDifference(start, end) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const anchor = new Date(
    start.getFullYear() + years,
    start.getMonth() + months,
    start.getDate(),
    start.getHours(),
    start.getMinutes(),
    start.getSeconds(),
    start.getMilliseconds()
  );

  let remainder = end - anchor;

  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const second = 1000;

  const hours = Math.floor(remainder / hour);
  remainder %= hour;

  const minutes = Math.floor(remainder / minute);
  remainder %= minute;

  const seconds = Math.floor(remainder / second);
  const milliseconds = remainder % second;

  return { years, months, days, hours, minutes, seconds, milliseconds };
}

function updateCounter() {
  const now = new Date();
  const d = calendarDifference(START, now);

  $("years").textContent = d.years;
  $("months").textContent = String(d.months).padStart(2, "0");
  $("days").textContent = String(d.days).padStart(2, "0");
  $("hours").textContent = String(d.hours).padStart(2, "0");
  $("minutes").textContent = String(d.minutes).padStart(2, "0");
  $("seconds").textContent = String(d.seconds).padStart(2, "0");
  $("milliseconds").textContent = String(d.milliseconds).padStart(3, "0");

  $("totalDays").textContent =
    Math.floor((now - START) / 86400000).toLocaleString();
}

function getStoredLoveCount() {
  return Number(localStorage.getItem("imranKhanLoveCount") || 0);
}

let loveCount = getStoredLoveCount();
$("loveCount").textContent = loveCount.toLocaleString();

$("loveButton").addEventListener("click", () => {
  loveCount++;
  localStorage.setItem("imranKhanLoveCount", loveCount);
  $("loveCount").textContent = loveCount.toLocaleString();

  const burst = $("heartBurst");
  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = "♥";
    heart.style.left = `${45 + Math.random() * 10}%`;
    heart.style.animationDelay = `${Math.random() * .18}s`;
    heart.style.fontSize = `${1 + Math.random() * 1.2}rem`;
    burst.appendChild(heart);
    setTimeout(() => heart.remove(), 1700);
  }
});

updateCounter();
setInterval(updateCounter, 47);
  
