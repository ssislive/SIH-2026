/* =========================================================
   KRISHISETU — SUPPORT

   FRONTEND / BACKEND HANDOFF

   The support form currently works on the frontend only.

   BACKEND TEAM:
   Connect the form submission to an authenticated support
   endpoint when the backend is available.

   Suggested endpoint:

       POST /api/support/tickets

   Suggested payload:

       {
           name,
           phone,
           category,
           subject,
           message
       }

   The form field names below are intentionally aligned with
   the expected backend payload.
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


if (menuButton && mainNav) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mainNav.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    mainNav.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mainNav.classList.remove(
                        "open"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* =========================================================
   SUPPORT FORM
   ========================================================= */

const supportForm =
    document.getElementById("supportForm");

const formStatus =
    document.getElementById("formStatus");


supportForm.addEventListener(
    "submit",
    async event => {

        event.preventDefault();


        const formData =
            new FormData(supportForm);


        /*
         * This object is the exact structure that can be
         * sent to the backend.
         */

        const supportRequest = {

            name:
                formData.get("name").trim(),

            phone:
                formData.get("phone").trim(),

            category:
                formData.get("category"),

            subject:
                formData.get("subject").trim(),

            message:
                formData.get("message").trim()

        };


        /*
         * FRONTEND DEMONSTRATION
         *
         * Until the backend endpoint exists, we simply show
         * a successful UI state.
         *
         * BACKEND TEAM:
         * Replace the following section with:
         *
         * const response = await fetch(
         *     "/api/support/tickets",
         *     {
         *         method: "POST",
         *         headers: {
         *             "Content-Type":
         *                 "application/json"
         *         },
         *         body:
         *             JSON.stringify(supportRequest)
         *     }
         * );
         *
         * Then handle the API response accordingly.
         */


        formStatus.textContent =
            "Your support request has been prepared successfully.";


        supportForm.reset();


        /*
         * Keep the object available for debugging during
         * frontend development.
         *
         * Remove console logging before production if the
         * project does not need it.
         */

        console.log(
            "Support request:",
            supportRequest
        );

    }
);