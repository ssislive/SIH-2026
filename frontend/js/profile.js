/* =========================================================
   KRISHISETU — COMMON PROFILE

   ONE PAGE FOR:

       Farmer
       Buyer

   TEMPORARY FRONTEND SESSION:

       sessionStorage.getItem("krishisetuUserRole")

   FUTURE BACKEND:

       GET  /api/profile
       PUT  /api/profile
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
        function () {

            const isOpen =
                mainNav.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    mainNav
        .querySelectorAll("a")
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mainNav.classList.remove(
                            "open"
                        );

                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );

}


/* =========================================================
   STATE / DISTRICT DATA
   ========================================================= */

const stateDistricts = {

    "Andhra Pradesh": [
        "Anantapur",
        "Chittoor",
        "Guntur",
        "Kurnool",
        "Nellore",
        "Prakasam",
        "Srikakulam",
        "Visakhapatnam",
        "Vizianagaram",
        "West Godavari"
    ],

    "Assam": [
        "Barpeta",
        "Cachar",
        "Dibrugarh",
        "Jorhat",
        "Kamrup",
        "Nagaon",
        "Sonitpur",
        "Tinsukia"
    ],

    "Bihar": [
        "Begusarai",
        "Bhagalpur",
        "Darbhanga",
        "Gaya",
        "Muzaffarpur",
        "Nalanda",
        "Patna",
        "Purnia",
        "Rohtas",
        "Samastipur"
    ],

    "Chhattisgarh": [
        "Bastar",
        "Bilaspur",
        "Dhamtari",
        "Durg",
        "Korba",
        "Raipur",
        "Rajnandgaon",
        "Surguja"
    ],

    "Delhi": [
        "Central Delhi",
        "East Delhi",
        "New Delhi",
        "North Delhi",
        "South Delhi",
        "West Delhi"
    ],

    "Gujarat": [
        "Ahmedabad",
        "Amreli",
        "Anand",
        "Banaskantha",
        "Bharuch",
        "Bhavnagar",
        "Gandhinagar",
        "Jamnagar",
        "Junagadh",
        "Kutch",
        "Mehsana",
        "Rajkot",
        "Surat",
        "Vadodara"
    ],

    "Haryana": [
        "Ambala",
        "Bhiwani",
        "Faridabad",
        "Fatehabad",
        "Gurugram",
        "Hisar",
        "Jind",
        "Karnal",
        "Kurukshetra",
        "Panipat",
        "Rohtak",
        "Sirsa",
        "Sonipat"
    ],

    "Himachal Pradesh": [
        "Bilaspur",
        "Chamba",
        "Hamirpur",
        "Kangra",
        "Kullu",
        "Mandi",
        "Shimla",
        "Sirmaur",
        "Solan",
        "Una"
    ],

    "Jharkhand": [
        "Bokaro",
        "Deoghar",
        "Dhanbad",
        "Dumka",
        "East Singhbhum",
        "Giridih",
        "Hazaribagh",
        "Ranchi",
        "West Singhbhum"
    ],

    "Karnataka": [
        "Bengaluru Rural",
        "Bengaluru Urban",
        "Belagavi",
        "Ballari",
        "Chikkaballapur",
        "Dharwad",
        "Hassan",
        "Kolar",
        "Mandya",
        "Mysuru",
        "Raichur",
        "Shivamogga",
        "Tumakuru"
    ],

    "Kerala": [
        "Alappuzha",
        "Ernakulam",
        "Idukki",
        "Kannur",
        "Kasaragod",
        "Kollam",
        "Kottayam",
        "Kozhikode",
        "Malappuram",
        "Palakkad",
        "Thiruvananthapuram",
        "Thrissur",
        "Wayanad"
    ],

    "Madhya Pradesh": [
        "Bhopal",
        "Dewas",
        "Gwalior",
        "Indore",
        "Jabalpur",
        "Ratlam",
        "Sagar",
        "Sehore",
        "Ujjain",
        "Vidisha"
    ],

    "Maharashtra": [
        "Ahmednagar",
        "Akola",
        "Amravati",
        "Beed",
        "Bhandara",
        "Buldhana",
        "Chandrapur",
        "Chhatrapati Sambhajinagar",
        "Dhule",
        "Gadchiroli",
        "Gondia",
        "Jalgaon",
        "Jalna",
        "Kolhapur",
        "Latur",
        "Nagpur",
        "Nanded",
        "Nashik",
        "Parbhani",
        "Pune",
        "Raigad",
        "Ratnagiri",
        "Sangli",
        "Satara",
        "Solapur",
        "Thane",
        "Wardha",
        "Washim",
        "Yavatmal"
    ],

    "Odisha": [
        "Angul",
        "Balangir",
        "Balasore",
        "Bargarh",
        "Cuttack",
        "Dhenkanal",
        "Ganjam",
        "Jajpur",
        "Kalahandi",
        "Koraput",
        "Mayurbhanj",
        "Puri",
        "Sambalpur"
    ],

    "Punjab": [
        "Amritsar",
        "Bathinda",
        "Fazilka",
        "Ferozepur",
        "Gurdaspur",
        "Hoshiarpur",
        "Jalandhar",
        "Ludhiana",
        "Mansa",
        "Patiala",
        "Sangrur"
    ],

    "Rajasthan": [
        "Ajmer",
        "Alwar",
        "Bharatpur",
        "Bikaner",
        "Jaipur",
        "Jaisalmer",
        "Jodhpur",
        "Kota",
        "Nagaur",
        "Pali",
        "Sikar",
        "Udaipur"
    ],

    "Tamil Nadu": [
        "Chennai",
        "Coimbatore",
        "Cuddalore",
        "Dindigul",
        "Erode",
        "Madurai",
        "Namakkal",
        "Salem",
        "Thanjavur",
        "Theni",
        "Tiruchirappalli",
        "Tirunelveli",
        "Vellore"
    ],

    "Telangana": [
        "Adilabad",
        "Hyderabad",
        "Karimnagar",
        "Khammam",
        "Mahbubnagar",
        "Medak",
        "Nalgonda",
        "Nizamabad",
        "Rangareddy",
        "Warangal"
    ],

    "Uttar Pradesh": [
        "Agra",
        "Aligarh",
        "Bareilly",
        "Farrukhabad",
        "Firozabad",
        "Ghaziabad",
        "Gorakhpur",
        "Kanpur Nagar",
        "Lucknow",
        "Mathura",
        "Meerut",
        "Moradabad",
        "Muzaffarnagar",
        "Prayagraj",
        "Saharanpur",
        "Varanasi"
    ],

    "Uttarakhand": [
        "Almora",
        "Bageshwar",
        "Chamoli",
        "Champawat",
        "Dehradun",
        "Haridwar",
        "Nainital",
        "Pauri Garhwal",
        "Pithoragarh",
        "Rudraprayag",
        "Tehri Garhwal",
        "Udham Singh Nagar",
        "Uttarkashi"
    ],

    "West Bengal": [
        "Bankura",
        "Bardhaman",
        "Birbhum",
        "Darjeeling",
        "Hooghly",
        "Howrah",
        "Jalpaiguri",
        "Malda",
        "Murshidabad",
        "Nadia",
        "Purulia"
    ]

};


/* =========================================================
   DEMO PROFILE DATA

   TEMPORARY FRONTEND DATA ONLY.

   Backend will eventually replace this.
   ========================================================= */

const demoUsers = {

    farmer: {

        id: "KS-FARMER-001",

        role: "farmer",

        name: "Rahul Patil",

        phone: "9876543210",

        email: "rahul@example.com",

        state: "Maharashtra",

        district: "Pune",

        memberSince: "2026",

        verificationStatus: "Verified",

        farmSize: "4.5",

        experience: "12",

        preferredSeason: "Rabi",

        typicalQuantity: "20–30",

        crops: [
            "Wheat",
            "Rice",
            "Mustard",
            "Onion"
        ]

    },


    buyer: {

        id: "KS-BUYER-001",

        role: "buyer",

        name: "Arjun Mehta",

        phone: "9876543210",

        email: "arjun@example.com",

        state: "Maharashtra",

        district: "Pune",

        memberSince: "2026",

        verificationStatus: "Verified",

        businessName: "FreshMart",

        purchaseRequirement: "50–100 quintals",

        preferredCategory: "Vegetables",

        preferredProduce: [
            "Onion",
            "Potato",
            "Tomato"
        ]

    }

};


/* =========================================================
   CURRENT ROLE

   IMPORTANT:

   Login currently stores:

       krishisetuUserRole

   Therefore profile reads the same session value.

   If nothing exists, farmer is used only as a safe
   frontend fallback.
   ========================================================= */

const storedRole =
    sessionStorage.getItem(
        "krishisetuUserRole"
    );


let currentRole =
    storedRole === "buyer"
        ? "buyer"
        : "farmer";


let profileData =
    {
        ...demoUsers[currentRole]
    };


/* =========================================================
   ELEMENTS
   ========================================================= */

const editProfileButton =
    document.getElementById(
        "editProfileButton"
    );

const editModal =
    document.getElementById(
        "editModal"
    );

const closeModalButton =
    document.getElementById(
        "closeModalButton"
    );

const cancelEditButton =
    document.getElementById(
        "cancelEditButton"
    );

const profileForm =
    document.getElementById(
        "profileForm"
    );

const editState =
    document.getElementById(
        "editState"
    );

const editDistrict =
    document.getElementById(
        "editDistrict"
    );

const farmerEditBlock =
    document.getElementById(
        "farmerEditBlock"
    );

const buyerEditBlock =
    document.getElementById(
        "buyerEditBlock"
    );

const dashboardLink =
    document.getElementById(
        "dashboardLink"
    );

const roleActionLink =
    document.getElementById(
        "roleActionLink"
    );

const headerProfileButton =
    document.getElementById(
        "headerProfileButton"
    );


/* =========================================================
   POPULATE STATES
   ========================================================= */

function populateStates() {

    editState.innerHTML = "";

    Object.keys(stateDistricts)
        .sort()
        .forEach(
            function (stateName) {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    stateName;

                option.textContent =
                    stateName;

                editState.appendChild(
                    option
                );

            }
        );

}


/* =========================================================
   POPULATE DISTRICTS
   ========================================================= */

function populateDistricts(
    selectedState,
    selectedDistrict = ""
) {

    editDistrict.innerHTML = "";

    const districts =
        stateDistricts[
            selectedState
        ] || [];


    districts.forEach(
        function (districtName) {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                districtName;

            option.textContent =
                districtName;

            editDistrict.appendChild(
                option
            );

        }
    );


    if (
        districts.includes(
            selectedDistrict
        )
    ) {

        editDistrict.value =
            selectedDistrict;

    }

}


/* =========================================================
   ADD DETAIL CARD
   ========================================================= */

function addDetail(
    container,
    label,
    value
) {

    const item =
        document.createElement(
            "div"
        );

    item.className =
        "detail-card";


    const labelElement =
        document.createElement(
            "span"
        );

    labelElement.textContent =
        label;


    const valueElement =
        document.createElement(
            "strong"
        );

    valueElement.textContent =
        value || "—";


    item.appendChild(
        labelElement
    );

    item.appendChild(
        valueElement
    );


    container.appendChild(
        item
    );

}


/* =========================================================
   RENDER NAVIGATION
   ========================================================= */

function renderNavigation(data) {

    if (data.role === "farmer") {

        dashboardLink.href =
            "dashboard.html";

        roleActionLink.href =
            "sell-produce.html";

        roleActionLink.textContent =
            "Sell Produce";

    } else {

        dashboardLink.href =
            "buyer-dashboard.html";

        roleActionLink.href =
            "buyers.html";

        roleActionLink.textContent =
            "Find Produce";

    }


    headerProfileButton.textContent =
        data.name
            ? data.name
                .charAt(0)
                .toUpperCase()
            : "U";

}


/* =========================================================
   RENDER ROLE DETAILS
   ========================================================= */

function renderRoleDetails(data) {

    const label =
        document.getElementById(
            "roleDetailsLabel"
        );

    const title =
        document.getElementById(
            "roleDetailsTitle"
        );

    const grid =
        document.getElementById(
            "roleDetailsGrid"
        );


    grid.innerHTML = "";


    if (data.role === "farmer") {

        label.textContent =
            "FARMING INFORMATION";

        title.textContent =
            "What you offer";


        addDetail(
            grid,
            "Farm Size",
            data.farmSize
                ? data.farmSize + " acres"
                : "—"
        );


        addDetail(
            grid,
            "Experience",
            data.experience
                ? data.experience + " years"
                : "—"
        );


        addDetail(
            grid,
            "Preferred Season",
            data.preferredSeason
        );


        addDetail(
            grid,
            "Typical Quantity",
            data.typicalQuantity
                ? data.typicalQuantity + " quintals"
                : "—"
        );


        addDetail(
            grid,
            "What You Sell",
            data.crops &&
            data.crops.length
                ? data.crops.join(", ")
                : "—"
        );

    } else {

        label.textContent =
            "BUYING INFORMATION";

        title.textContent =
            "What you are looking for";


        addDetail(
            grid,
            "Business / Organization",
            data.businessName
        );


        addDetail(
            grid,
            "Purchase Requirement",
            data.purchaseRequirement
        );


        addDetail(
            grid,
            "Preferred Category",
            data.preferredCategory
        );


        addDetail(
            grid,
            "What You Buy",
            data.preferredProduce &&
            data.preferredProduce.length
                ? data.preferredProduce.join(", ")
                : "—"
        );

    }

}


/* =========================================================
   RENDER PROFILE
   ========================================================= */

function renderProfile(data) {

    const firstLetter =
        data.name
            ? data.name
                .charAt(0)
                .toUpperCase()
            : "U";


    document.getElementById(
        "profileAvatar"
    ).textContent =
        firstLetter;


    document.getElementById(
        "profileName"
    ).textContent =
        data.name;


    document.getElementById(
        "profileLocation"
    ).textContent =
        `${data.district}, ${data.state}`;


    document.getElementById(
        "profileMemberSince"
    ).textContent =
        data.memberSince;


    document.getElementById(
        "roleBadge"
    ).textContent =
        data.role;


    document.getElementById(
        "detailName"
    ).textContent =
        data.name;


    document.getElementById(
        "detailPhone"
    ).textContent =
        data.phone;


    document.getElementById(
        "detailEmail"
    ).textContent =
        data.email;


    document.getElementById(
        "detailRole"
    ).textContent =
        data.role;


    document.getElementById(
        "detailState"
    ).textContent =
        data.state;


    document.getElementById(
        "detailDistrict"
    ).textContent =
        data.district;


    document.getElementById(
        "verificationStatus"
    ).textContent =
        data.verificationStatus;


    const introText =
        document.getElementById(
            "introText"
        );


    if (data.role === "farmer") {

        introText.textContent =
            "Keep your farming information updated so buyers can understand what you grow and what you can supply.";

    } else {

        introText.textContent =
            "Keep your buying information updated so farmers can understand what produce you are looking for.";

    }


    renderRoleDetails(data);

    renderNavigation(data);

    renderEditFields(data);

}


/* =========================================================
   SHOW CORRECT EDIT BLOCK
   ========================================================= */

function renderEditFields(data) {

    if (data.role === "farmer") {

        farmerEditBlock.style.display =
            "";

        buyerEditBlock.style.display =
            "none";

    } else {

        farmerEditBlock.style.display =
            "none";

        buyerEditBlock.style.display =
            "";

    }

}


/* =========================================================
   OPEN EDIT MODAL
   ========================================================= */

function openEditModal() {

    document.getElementById(
        "editName"
    ).value =
        profileData.name || "";


    document.getElementById(
        "editPhone"
    ).value =
        profileData.phone || "";


    document.getElementById(
        "editEmail"
    ).value =
        profileData.email || "";


    editState.value =
        profileData.state;


    populateDistricts(
        profileData.state,
        profileData.district
    );


    /* FARMER */

    if (
        profileData.role === "farmer"
    ) {

        document.getElementById(
            "editFarmSize"
        ).value =
            profileData.farmSize || "";


        document.getElementById(
            "editExperience"
        ).value =
            profileData.experience || "";


        document.getElementById(
            "editSeason"
        ).value =
            profileData.preferredSeason || "";


        document.getElementById(
            "editQuantity"
        ).value =
            profileData.typicalQuantity || "";


        document.getElementById(
            "editCrops"
        ).value =
            profileData.crops
                ? profileData.crops.join(", ")
                : "";

    }


    /* BUYER */

    if (
        profileData.role === "buyer"
    ) {

        document.getElementById(
            "editBusinessName"
        ).value =
            profileData.businessName || "";


        document.getElementById(
            "editRequirement"
        ).value =
            profileData.purchaseRequirement || "";


        document.getElementById(
            "editCategory"
        ).value =
            profileData.preferredCategory || "";


        document.getElementById(
            "editProduce"
        ).value =
            profileData.preferredProduce
                ? profileData.preferredProduce.join(", ")
                : "";

    }


    renderEditFields(
        profileData
    );


    editModal.hidden = false;

    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   CLOSE EDIT MODAL
   ========================================================= */

function closeEditModal() {

    editModal.hidden = true;

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   BUTTON EVENTS
   ========================================================= */

editProfileButton.addEventListener(
    "click",
    openEditModal
);


closeModalButton.addEventListener(
    "click",
    closeEditModal
);


cancelEditButton.addEventListener(
    "click",
    closeEditModal
);


/* Click outside modal */

editModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === editModal
        ) {

            closeEditModal();

        }

    }
);


/* =========================================================
   STATE → DISTRICT
   ========================================================= */

editState.addEventListener(
    "change",
    function () {

        populateDistricts(
            editState.value
        );

    }
);


/* =========================================================
   SAVE PROFILE
   ========================================================= */

profileForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* COMMON INFORMATION */

        profileData.name =
            document.getElementById(
                "editName"
            ).value.trim();


        profileData.phone =
            document.getElementById(
                "editPhone"
            ).value.trim();


        profileData.email =
            document.getElementById(
                "editEmail"
            ).value.trim();


        profileData.state =
            editState.value;


        profileData.district =
            editDistrict.value;


        /* FARMER */

        if (
            profileData.role === "farmer"
        ) {

            profileData.farmSize =
                document.getElementById(
                    "editFarmSize"
                ).value;


            profileData.experience =
                document.getElementById(
                    "editExperience"
                ).value;


            profileData.preferredSeason =
                document.getElementById(
                    "editSeason"
                ).value;


            profileData.typicalQuantity =
                document.getElementById(
                    "editQuantity"
                ).value.trim();


            profileData.crops =
                document.getElementById(
                    "editCrops"
                ).value
                    .split(",")
                    .map(
                        function (crop) {
                            return crop.trim();
                        }
                    )
                    .filter(
                        function (crop) {
                            return crop.length > 0;
                        }
                    );

        }


        /* BUYER */

        if (
            profileData.role === "buyer"
        ) {

            profileData.businessName =
                document.getElementById(
                    "editBusinessName"
                ).value.trim();


            profileData.purchaseRequirement =
                document.getElementById(
                    "editRequirement"
                ).value.trim();


            profileData.preferredCategory =
                document.getElementById(
                    "editCategory"
                ).value;


            profileData.preferredProduce =
                document.getElementById(
                    "editProduce"
                ).value
                    .split(",")
                    .map(
                        function (produce) {
                            return produce.trim();
                        }
                    )
                    .filter(
                        function (produce) {
                            return produce.length > 0;
                        }
                    );

        }


        /* =================================================
           FRONTEND DEMO SAVE COMPLETE

           FUTURE BACKEND:

           PUT /api/profile

           Backend should identify the user from the
           authenticated session/token.

           Do NOT trust a user ID sent by frontend.
           ================================================= */


        renderProfile(
            profileData
        );


        closeEditModal();

    }
);


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            !editModal.hidden
        ) {

            closeEditModal();

        }

    }
);


/* =========================================================
   INITIALISE
   ========================================================= */

populateStates();

renderProfile(
    profileData
);


/* =========================================================
   BACKEND HANDOFF EXAMPLE

   Later replace demoUsers/session logic with:

   async function loadProfile() {

       const response =
           await fetch("/api/profile");

       if (!response.ok) {
           throw new Error(
               "Unable to load profile"
           );
       }

       profileData =
           await response.json();

       currentRole =
           profileData.role;

       renderProfile(
           profileData
       );
   }


   async function saveProfile(data) {

       const response =
           await fetch(
               "/api/profile",
               {
                   method: "PUT",

                   headers: {
                       "Content-Type":
                           "application/json"
                   },

                   body:
                       JSON.stringify(data)
               }
           );

       if (!response.ok) {
           throw new Error(
               "Unable to save profile"
           );
       }

       return response.json();
   }

   ========================================================= */