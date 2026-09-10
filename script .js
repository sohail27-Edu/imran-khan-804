const START = new Date("2023-08-05T12:59:00+05:00");

function updateCounter() {
  const now = new Date();

  let diff = now - START;

  if (diff < 0) {
    return;
  }

  // Total days
  const totalDays = Math.floor(diff / 86400000);

  // Calculate calendar years
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

  // Time remaining after years, months and days
  const calendarStart = new Date(
    START.getFullYear() + years,
    START.getMonth() + months,
    START.getDate(),
    START.getHours(),
    START.getMinutes(),
    START.getSeconds(),
    START.getMilliseconds()
  );

  let remainder = now - calendarStart;

  const hours = Math.floor(remainder / 3600000);
  remainder %= 3600000;

  const minutes = Math.floor(remainder / 60000);
  remainder %= 60000;

  const seconds = Math.floor(remainder / 1000);
  const milliseconds = remainder % 1000;

  // Update display
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
    totalDays.toLocaleString();
}

// Start counter
updateCounter();
setInterval(updateCounter, 50);
