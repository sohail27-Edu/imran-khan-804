const START = new Date("2023-08-05T12:59:00+05:00");

function updateCounter() {
  const now = new Date();

  let years = now.getFullYear() - START.getFullYear();
  let months = now.getMonth() - START.getMonth();
  let days = now.getDate() - START.getDate();

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
    years--;
    months += 12;
  }

  const elapsed =
    now -
    new Date(
      START.getFullYear() + years,
      START.getMonth() + months,
      START.getDate(),
      START.getHours(),
      START.getMinutes(),
      START.getSeconds(),
      START.getMilliseconds()
    );

  let remainder = elapsed;

  const hours = Math.floor(remainder / 3600000);
  remainder %= 3600000;

  const minutes = Math.floor(remainder / 60000);
  remainder %= 60000;

  const seconds = Math.floor(remainder / 1000);
  const milliseconds = remainder % 1000;

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent =
    String(months).padStart(2, "0");
  document.getElementById("days").textContent =
    String(days).padStart(2, "0");
  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
  document.getElementById("milliseconds").textContent =
    String(milliseconds).padStart(3, "0");

  document.getElementById("totalDays").textContent =
    Math.floor((now - START) / 86400000).toLocaleString();
}

updateCounter();
setInterval(updateCounter, 50);
