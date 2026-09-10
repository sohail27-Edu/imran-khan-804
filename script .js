const START = new Date("2023-08-05T12:59:00+05:00");

function updateCounter() {
  const now = new Date();

  // Total elapsed milliseconds
  let difference = now.getTime() - START.getTime();

  // Years
  const years = Math.floor(difference / (365.2425 * 24 * 60 * 60 * 1000));
  difference -= years * 365.2425 * 24 * 60 * 60 * 1000;

  // Months
  const months = Math.floor(difference / (30.436875 * 24 * 60 * 60 * 1000));
  difference -= months * 30.436875 * 24 * 60 * 60 * 1000;

  // Days
  const days = Math.floor(difference / (24 * 60 * 60 * 1000));
  difference -= days * 24 * 60 * 60 * 1000;

  // Hours
  const hours = Math.floor(difference / (60 * 60 * 1000));
  difference -= hours * 60 * 60 * 1000;

  // Minutes
  const minutes = Math.floor(difference / (60 * 1000));
  difference -= minutes * 60 * 1000;

  // Seconds
  const seconds = Math.floor(difference / 1000);
  const milliseconds = difference % 1000;

  // Display
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = String(months).padStart(2, "0");
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  document.getElementById("milliseconds").textContent = String(milliseconds).padStart(3, "0");

  // Total days since 5 August 2023
  const totalDays = Math.floor(
    (now.getTime() - START.getTime()) / (24 * 60 * 60 * 1000)
  );

  document.getElementById("totalDays").textContent =
    totalDays.toLocaleString();
}

updateCounter();

// Update every 50 milliseconds
setInterval(updateCounter, 50);
