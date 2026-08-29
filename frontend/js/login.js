/* =========================================================
   KRISHISETU LOGIN PAGE
   ========================================================= */


/* =========================================================
   GET ELEMENTS
   ========================================================= */

const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginMessage = document.getElementById("loginMessage");


/* =========================================================
   SHOW / HIDE PASSWORD
   ========================================================= */

if (togglePassword && passwordInput) {

    togglePassword.addEventListener("click", function () {

        // Show or hide the password
        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            togglePassword.textContent = "Hide";

        } else {

            passwordInput.type = "password";
            togglePassword.textContent = "Show";

        }

    });

}


/* =========================================================
   PROTOTYPE LOGIN
   ========================================================= */

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        // Prevent the page from refreshing
        event.preventDefault();


        const phoneInput = document.getElementById("phone");

        const phone = phoneInput.value.trim();
        const password = passwordInput.value.trim();


        // Clear old message
        loginMessage.textContent = "";


        /* -------------------------------------------------
           CHECK MOBILE NUMBER
           ------------------------------------------------- */

        if (!/^\d{10}$/.test(phone)) {

            loginMessage.textContent =
                "Please enter a valid 10-digit mobile number.";

            phoneInput.focus();

            return;
        }


        /* -------------------------------------------------
           CHECK PASSWORD
           ------------------------------------------------- */

        if (password.length === 0) {

            loginMessage.textContent =
                "Please enter your password.";

            passwordInput.focus();

            return;
        }


        /* -------------------------------------------------
           PROTOTYPE LOGIN SUCCESS
           -------------------------------------------------

           For the current SIH prototype, any valid
           10-digit mobile number and non-empty password
           will allow access to the farmer dashboard.

           BACKEND TEAM:
           Replace this section with real authentication
           when the API is ready.
        */


        loginMessage.textContent = "Login successful!";


        // Store basic prototype information
        localStorage.setItem("userPhone", phone);
        localStorage.setItem("userRole", "farmer");


        // Open the farmer dashboard
        setTimeout(function () {

            window.location.href = "dashboard.html";

        }, 500);

    });

}