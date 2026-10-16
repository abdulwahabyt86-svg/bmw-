
document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // 1. BMW INTRO VIDEO AND SKIP BUTTON
  // ==========================================

  const startButton = document.getElementById("startButton");
  const videoStage = document.getElementById("videoStage");
  const introVideo = document.getElementById("introVideo");
  const skipButton = document.getElementById("skipButton");
  const videoMessage = document.getElementById("videoMessage");

  function goToDashboard() {
    window.location.href = "dashboard.html";
  }

  if (startButton && videoStage && introVideo && skipButton) {

    startButton.addEventListener("click", async () => {

      startButton.hidden = true;
      videoStage.hidden = false;
      introVideo.currentTime = 0;

      try {
        await introVideo.play();
      } catch (error) {

        if (videoMessage) {
          videoMessage.hidden = false;
        }

        skipButton.textContent = "CONTINUE TO SITE ↗";
      }
    });

    // Skip the video and open the admin login page.
    skipButton.addEventListener("click", goToDashboard);

    // Automatically continue when the video finishes.
    introVideo.addEventListener("ended", goToDashboard);

    // Show a message if the video cannot load.
    introVideo.addEventListener("error", () => {

      if (videoMessage) {
        videoMessage.hidden = false;
      }

      skipButton.textContent = "CONTINUE TO SITE ↗";
    });
  }


  // ==========================================
  // 2. SHOW OR HIDE PASSWORD
  // ==========================================

  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");

  if (passwordInput && togglePassword) {

    togglePassword.addEventListener("click", () => {

      const isHidden = passwordInput.type === "password";

      passwordInput.type = isHidden ? "text" : "password";

      togglePassword.setAttribute(
        "aria-label",
        isHidden ? "Hide password" : "Show password"
      );
    });
  }


  // ==========================================
  // 3. BMW ADMIN LOGIN
  // ==========================================

  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  if (loginForm && loginMessage) {

    loginForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const usernameInput = document.getElementById("username");

      const enteredUsername = usernameInput.value.trim();
      const enteredPassword = passwordInput.value;

      // YOUR REQUESTED LOGIN CREDENTIALS
      const correctUsername = "BMW";
      const correctPassword = "WAHAB";

      if (
        enteredUsername === correctUsername &&
        enteredPassword === correctPassword
      ) {

        loginMessage.style.color = "#65e7ad";
        loginMessage.textContent = "ACCESS GRANTED... 🏎️";

        // Move to the new BMW M-Series logo page.
        setTimeout(() => {
          window.location.href = "m-series.html";
        }, 500);

      } else {

        loginMessage.style.color = "#ff7070";
        loginMessage.textContent =
          "Incorrect username or password. Try again.";

      }
    });
  }


  // ==========================================
  // 4. AUTOMATIC COPYRIGHT YEAR
  // ==========================================

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
