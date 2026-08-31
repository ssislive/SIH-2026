/* =========================================================
   KRISHISETU — LOGIN
   =========================================================

   ROLE SYSTEM:

   The login page supports:

       farmer
       buyer

   After successful login, the selected role is stored in:

       sessionStorage:
       "krishisetuUserRole"

   Other common pages such as:

       profile.html
       support.html
       notifications.html
       market-prices.html

   can read this value to determine which user's
   information/UI should be displayed.

   IMPORTANT:

   This is temporary frontend authentication.

   Later the backend should authenticate the user and
   return the actual role from the server.
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const loginForm =
    document.getElementById("loginForm");

const mobileInput =
    document.getElementById("mobile");

const passwordInput =
    document.getElementById("password");

const passwordToggle =
    document.getElementById("passwordToggle");

const mobileError =
    document.getElementById("mobileError");

const passwordError =
    document.getElementById("passwordError");

const roleError =
    document.getElementById("roleError");

const formMessage =
    document.getElementById("formMessage");

const forgotPassword =
    document.getElementById("forgotPassword");


/* =========================================================
   MOBILE NUMBER
   ========================================================= */

mobileInput.addEventListener(
    "input",
    function () {

        this.value =
            this.value
                .replace(/\D/g, "")
                .slice(0, 10);

        mobileError.textContent = "";
        formMessage.textContent = "";

    }
);


/* =========================================================
   PASSWORD VISIBILITY
   ========================================================= */

passwordToggle.addEventListener(
    "click",
    function () {

        const isPassword =
            passwordInput.type === "password";


        passwordInput.type =
            isPassword
                ? "text"
                : "password";


        this.textContent =
            isPassword
                ? "Hide"
                : "Show";


        this.setAttribute(
            "aria-label",
            isPassword
                ? "Hide password"
                : "Show password"
        );

    }
);


/* =========================================================
   VALIDATION
   ========================================================= */

function validateLogin() {

    let valid = true;


    mobileError.textContent = "";
    passwordError.textContent = "";
    roleError.textContent = "";
    formMessage.textContent = "";


    const mobile =
        mobileInput.value.trim();

    const password =
        passwordInput.value;


    const selectedRole =
        document.querySelector(
            'input[name="role"]:checked'
        );


    /* =====================================================
       MOBILE
       ===================================================== */

    if (!/^[6-9]\d{9}$/.test(mobile)) {

        mobileError.textContent =
            "Enter a valid 10-digit Indian mobile number.";

        valid = false;

    }


    /* =====================================================
       PASSWORD
       ===================================================== */

    if (password.length === 0) {

        passwordError.textContent =
            "Please enter your password.";

        valid = false;

    }


    /* =====================================================
       ROLE
       ===================================================== */

    if (!selectedRole) {

        roleError.textContent =
            "Please select Farmer or Buyer.";

        valid = false;

    }


    return valid;

}


/* =========================================================
   LOGIN
   ========================================================= */

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* =================================================
           VALIDATE
           ================================================= */

        if (!validateLogin()) {

            return;

        }


        /* =================================================
           GET LOGIN DATA
           ================================================= */

        const mobile =
            mobileInput.value.trim();

        const password =
            passwordInput.value;

        const selectedRole =
            document.querySelector(
                'input[name="role"]:checked'
            ).value;


        /* =================================================
           TEMPORARY FRONTEND LOGIN
           =================================================

           IMPORTANT:

           This is NOT real authentication.

           We are only storing enough information so
           the other pages know who is currently logged in.

           The role is the important part.

           Common pages will read:

               sessionStorage.getItem(
                   "krishisetuUserRole"
               );

           ================================================= */


        sessionStorage.setItem(
            "krishisetuLoginMobile",
            mobile
        );


        sessionStorage.setItem(
            "krishisetuUserRole",
            selectedRole
        );


        /* =================================================
           OPTIONAL SESSION FLAG
           =================================================

           This lets other pages know that the user
           has completed the demo login.

           Later the backend session/token will replace
           this.
           ================================================= */

        sessionStorage.setItem(
            "krishisetuLoggedIn",
            "true"
        );


        /* =================================================
           BACKEND HANDOFF
           =================================================

           Later replace the temporary section above with:

           fetch("/api/login", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json"
               },
               body: JSON.stringify({
                   mobile: mobile,
                   password: password
               })
           })

           The backend should return something like:

           {
               "success": true,
               "role": "farmer"
           }

           or:

           {
               "success": true,
               "role": "buyer"
           }

           The frontend should then store the returned
           role instead of trusting the selected role.

           IMPORTANT:

           The backend must determine the real role.
           The frontend role selector is ONLY for this
           temporary demo.
           ================================================= */


        /* =================================================
           ROLE-BASED DASHBOARD
           ================================================= */

        if (selectedRole === "farmer") {

            window.location.href =
                "dashboard.html";

            return;

        }


        if (selectedRole === "buyer") {

            window.location.href =
                "buyer-dashboard.html";

            return;

        }

    }
);


/* =========================================================
   FORGOT PASSWORD
   ========================================================= */

forgotPassword.addEventListener(
    "click",
    function (event) {

        event.preventDefault();


        formMessage.textContent =
            "Please contact support to recover your account.";

    }
);