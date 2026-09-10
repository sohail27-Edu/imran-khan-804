"use strict";

const START = new Date("2023-08-05T12:59:00+05:00");


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


  /*
   * Normalize milliseconds
   */
  if (milliseconds < 0) {
    milliseconds += 1000;
    seconds--;
  }


  /*
   * Normalize seconds
   */
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }


  /*
   * Normalize minutes
   */
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }


  /*
   * Normalize hours
   */
  if (hours < 0) {
    hours += 24;
    days--;
  }


  /*
   * Normalize days
   */
  if (days < 0) {

    months--;

    const daysInPreviousMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();

    days += daysInPreviousMonth;
  }


  /*
   * Normalize months
   */
  if (months < 0) {
    months += 12;
    years--;
  }


  /*
   * Total elapsed days
   */
  const totalDays = Math.floor(
    (now.getTime() - START.getTime()) /
    (1000 * 60 * 60 * 24)
  );


  /*
   * Update HTML
   */
  document.getElementById("years").textContent =
    years;

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


/*
 * Run immediately
 */
updateCounter();


/*
 * Update 20 times per second
 */
setInterval(updateCounter, 50);
