/* =========================================================
   KRISHISETU MARKET PRICES
   ========================================================= */


/* =========================================================
   GET ELEMENTS
   ========================================================= */

const cropSearch =
    document.getElementById("cropSearch");

const stateFilter =
    document.getElementById("stateFilter");

const cropFilter =
    document.getElementById("cropFilter");

const priceCards =
    document.querySelectorAll(".price-card");

const noResults =
    document.getElementById("noResults");

const resultCount =
    document.getElementById("resultCount");

const selectedLocation =
    document.getElementById("selectedLocation");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mainNav =
    document.getElementById("mainNav");

const notificationButton =
    document.getElementById("notificationButton");


/* =========================================================
   FILTER MARKET PRICES
   ========================================================= */

function filterPrices() {

    // Get the values entered by the farmer
    const searchText =
        cropSearch.value.toLowerCase().trim();

    const selectedState =
        stateFilter.value;

    const selectedCrop =
        cropFilter.value;


    let visibleCards = 0;


    priceCards.forEach(function (card) {

        const cropName =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        const cardCrop =
            card.getAttribute("data-crop");

        const cardState =
            card.getAttribute("data-state");


        /* -------------------------------------------------
           CHECK SEARCH
           ------------------------------------------------- */

        const matchesSearch =
            cropName.includes(searchText);


        /* -------------------------------------------------
           CHECK STATE
           ------------------------------------------------- */

        const matchesState =
            selectedState === "all" ||
            cardState === selectedState;


        /* -------------------------------------------------
           CHECK CROP
           ------------------------------------------------- */

        const matchesCrop =
            selectedCrop === "all" ||
            cardCrop === selectedCrop;


        /* -------------------------------------------------
           SHOW / HIDE CARD
           ------------------------------------------------- */

        if (
            matchesSearch &&
            matchesState &&
            matchesCrop
        ) {

            card.style.display = "block";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });


    /* =====================================================
       UPDATE RESULT COUNT
       ===================================================== */

    resultCount.textContent =
        visibleCards + " crops";


    /* =====================================================
       SHOW NO RESULTS MESSAGE
       ===================================================== */

    if (visibleCards === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }


    /* =====================================================
       UPDATE LOCATION TEXT
       ===================================================== */

    if (selectedState === "all") {

        selectedLocation.textContent =
            "All India";

    } else {

        selectedLocation.textContent =
            selectedState + ", India";

    }

}


/* =========================================================
   SEARCH EVENT
   ========================================================= */

if (cropSearch) {

    cropSearch.addEventListener(
        "input",
        filterPrices
    );

}


/* =========================================================
   STATE FILTER EVENT
   ========================================================= */

if (stateFilter) {

    stateFilter.addEventListener(
        "change",
        filterPrices
    );

}


/* =========================================================
   CROP FILTER EVENT
   ========================================================= */

if (cropFilter) {

    cropFilter.addEventListener(
        "change",
        filterPrices
    );

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

if (mobileMenuButton && mainNav) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            // Open or close the mobile navigation
            mainNav.classList.toggle("mobile-open");


            const isOpen =
                mainNav.classList.contains("mobile-open");


            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );

}


/* =========================================================
   NOTIFICATION
   ========================================================= */

if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        function () {

            // Temporary notification for the prototype
            alert(
                "You have 1 new market update."
            );

        }
    );

}


/* =========================================================
   BACKEND CONNECTION
   ========================================================= */

/*
    BACKEND TEAM:

    The price cards currently contain sample data.

    Later, this section can be connected to the market
    prices API.

    The backend can provide:

    - Crop name
    - Market name
    - State
    - Current price
    - Price change
    - Last updated time

    The existing HTML structure can remain the same.

    The filtering/search functionality is already handled
    on the frontend.
*/


/* =========================================================
   INITIAL FILTER
   ========================================================= */

filterPrices();