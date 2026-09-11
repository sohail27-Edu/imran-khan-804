// ==========================================
  // LOVE & SUPPORT
  // ONE SUPPORT PER VISIT
  // ==========================================

  const loveButton = document.getElementById("loveButton");
  const loveCount = document.getElementById("loveCount");
  const heartBurst = document.getElementById("heartBurst");

  let count = Number(localStorage.getItem("loveSupportCount")) || 0;

  loveCount.textContent = count;


  loveButton.addEventListener("click", function () {

    // Only allow one support during this visit
    if (sessionStorage.getItem("supportedThisVisit")) {
      return;
    }

    count++;

    loveCount.textContent = count;

    // Save total count on this browser
    localStorage.setItem("loveSupportCount", count);

    // Mark this visit as supported
    sessionStorage.setItem("supportedThisVisit", "true");


    // Disable button after support
    loveButton.classList.add("supported");

    // Heart animation
    if (heartBurst) {
      heartBurst.innerHTML = "♥";
      heartBurst.classList.remove("show");

      void heartBurst.offsetWidth;

      heartBurst.classList.add("show");
    }
  });
