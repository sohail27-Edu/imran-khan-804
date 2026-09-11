const startDate = new Date("2023-08-05T00:00:00"); // Updated to match the UI text

function updateCounter() {
    const now = new Date();
    let difference = now - startDate;

    if (difference < 0) {
        difference = 0;
    }

    // Time unit calculations
    const milliseconds = difference % 1000;
    const totalSeconds = Math.floor(difference / 1000);
    const seconds = totalSeconds % 60;
    
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    
    const totalDays = Math.floor(totalHours / 24);

    // Exact calendar calculations for years, months, and days
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    // Adjust if the current day is earlier in the month than the start day
    if (days < 0) {
        months--;
        // Calculate days in the previous month to borrow from
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    // Adjust if the current month is earlier in the year than the start month
    if (months < 0) {
        years--;
        months += 12;
    }

    // Update DOM elements
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    document.getElementById("milliseconds").textContent = String(milliseconds).padStart(3, "0");
    
    // Updates the overall total days counter (adjust the "total-days" ID if needed to match your HTML)
    // Updates the overall total days counter 
    // Make sure "total-days" matches the ID in your HTML exactly
    const totalDaysElement = document.getElementById("total-days");
    if (totalDaysElement) {
        totalDaysElement.textContent = totalDays;
        }

setInterval(updateCounter, 10);
updateCounter();
                            
