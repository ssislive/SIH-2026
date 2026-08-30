/* =========================================================
   KRISHISETU LOGIN
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
    formMessage.textContent = "";


    const mobile =
        mobileInput.value.trim();

    const password =
        passwordInput.value;


    if (!/^[6-9]\d{9}$/.test(mobile)) {

        mobileError.textContent =
            "Enter a valid 10-digit Indian mobile number.";

        valid = false;

    }


    if (password.length === 0) {

        passwordError.textContent =
            "Please enter your password.";

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


        if (!validateLogin()) {

            return;

        }


        const submitButton =
            loginForm.querySelector(
                ".submit-button"
            );


        submitButton.classList.add(
            "loading"
        );


        /*
            FRONTEND HANDOFF

            The backend team can replace this section with:

                fetch("/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        mobile,
                        password
                    })
                })

            The backend should then return the authenticated
            user/session information.

            Until that API is connected, the page simply
            provides the frontend flow.
        */


        const mobile =
            mobileInput.value.trim();


        /*
            Temporary local session for frontend navigation.
            This is NOT authentication.
        */

        sessionStorage.setItem(
            "krishisetuLoginMobile",
            mobile
        );


        window.location.href =
            "dashboard.html";

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