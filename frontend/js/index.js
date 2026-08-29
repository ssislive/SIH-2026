/* =========================================================
   KRISHISETU LANDING PAGE
   Main JavaScript
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

// Get the menu button and navigation
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


// Open and close the mobile menu
if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        // Show or hide the navigation
        navLinks.classList.toggle("mobile-open");

        // Check whether the menu is open
        const isOpen = navLinks.classList.contains("mobile-open");

        // Update the button state
        menuButton.setAttribute("aria-expanded", isOpen);

    });

}


/* =========================================================
   CLOSE MOBILE MENU
   ========================================================= */

// Close the menu after clicking a navigation link
if (navLinks) {

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            // Hide the mobile navigation
            navLinks.classList.remove("mobile-open");

            if (menuButton) {
                menuButton.setAttribute("aria-expanded", "false");
            }

        });

    });

}


/* =========================================================
   BACKEND CONNECTION PLACEHOLDER
   ========================================================= */

/*
    BACKEND NOTE:

    The landing page does not currently need to fetch
    dynamic information from the backend.

    If the backend team later provides an API for things
    such as market information, farmer statistics, or
    other dynamic content, the fetch() code can be added
    here.

    Do NOT add fake API URLs.

    The backend team should provide the actual endpoint
    before the connection is created.
*/