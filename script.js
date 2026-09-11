const SUPABASE_URL = "https://eaedcygrkcadsnpozezl.supabase.co";
const SUPABASE_KEY = "sb_publishable_9MJEM4a1rlIUMbd9B4lAIA_K2Wnul6t";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
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


  // ==========================================
  // LIVE TIME COUNTER
  // ==========================================

  function updateCounter() {

    const now = new Date();

    // Calendar difference
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
    // DISPLAY CALENDAR TIME
    // ==========================================

    yearsEl.textContent = years;
    monthsEl.textContent = months;
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

    // Always show 3 digits: 001, 045, 999
    millisecondsEl.textContent = String(milliseconds).padStart(3, "0");


    // ==========================================
    // TOTAL DAYS
    // ==========================================

    const totalMilliseconds = now - START;
    const totalDays = Math.floor(
      totalMilliseconds / (1000 * 60 * 60 * 24)
    );

    totalDaysEl.textContent = totalDays.toLocaleString();
  }


  // Update immediately
  updateCounter();


  // Update every 10 milliseconds
  // This makes milliseconds visibly move.
  setInterval(updateCounter, 10);

const VISITOR_KEY = "imranKhanSupportVisitorId";

let visitorId = localStorage.getItem(VISITOR_KEY);

if (!visitorId) {
  visitorId = crypto.randomUUID();
  localStorage.setItem(VISITOR_KEY, visitorId);
}

async function loadSupportCount() {
  const { count, error } = await db
    .from("supporters")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("Support count error:", error);
    loveCount.textContent = "0";
    return;
  }

  loveCount.textContent = count || 0;
}

loveButton.addEventListener("click", async function () {

  if (localStorage.getItem("loveSupportClicked")) {
    return;
  }

  const { error } = await db
    .from("supporters")
    .insert({
      visitor_id: visitorId
    });

  if (error) {
    if (error.code === "23505") {
      localStorage.setItem("loveSupportClicked", "true");
      return;
    }

    console.error("Support button error:", error);
    return;
  }

  localStorage.setItem("loveSupportClicked", "true");

  loadSupportCount();

  if (heartBurst) {
    heartBurst.innerHTML = "♥";
    heartBurst.classList.remove("show");
    void heartBurst.offsetWidth;
    heartBurst.classList.add("show");
  }
});

loadSupportCount();

  
    // Heart animation
    if (heartBurst) {
      heartBurst.innerHTML = "♥";

      heartBurst.classList.remove("show");

      // Force animation restart
      void heartBurst.offsetWidth;

      heartBurst.classList.add("show");
    }
  });

});

