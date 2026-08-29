/* =========================================================
   KRISHISETU FARMER DASHBOARD
   Vanilla JavaScript
   ========================================================= */


/* =========================================================
   GET HTML ELEMENTS
   ========================================================= */

const stateSelect =
    document.getElementById("stateSelect");

const districtSelect =
    document.getElementById("districtSelect");

const selectedLocation =
    document.getElementById("selectedLocation");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mainNavigation =
    document.getElementById("mainNavigation");

const notificationButton =
    document.getElementById("notificationButton");

const sellProduceButton =
    document.getElementById("sellProduceButton");

const buyerButton =
    document.getElementById("buyerButton");

const addProduceButton =
    document.getElementById("addProduceButton");


/* =========================================================
   STATE → DISTRICT DATA
   ========================================================= */

/*
    This is temporary frontend data.

    BACKEND CONNECTION:
    Later the backend can provide the complete
    state and district list through an API.

    The frontend will then populate these dropdowns
    using the backend response.
*/

const districts = {

    "Maharashtra": [
        "Pune",
        "Nashik",
        "Nagpur",
        "Mumbai",
        "Ahmednagar",
        "Akola",
        "Amravati",
        "Aurangabad",
        "Beed",
        "Bhandara",
        "Buldhana",
        "Chandrapur",
        "Dhule",
        "Gadchiroli",
        "Gondia",
        "Hingoli",
        "Jalgaon",
        "Jalna",
        "Kolhapur",
        "Latur",
        "Nanded",
        "Nandurbar",
        "Osmanabad",
        "Palghar",
        "Parbhani",
        "Raigad",
        "Ratnagiri",
        "Sangli",
        "Satara",
        "Sindhudurg",
        "Solapur",
        "Thane",
        "Wardha",
        "Washim",
        "Yavatmal"
    ],


    "Uttar Pradesh": [
        "Agra",
        "Aligarh",
        "Ayodhya",
        "Azamgarh",
        "Bareilly",
        "Basti",
        "Bulandshahr",
        "Etawah",
        "Farrukhabad",
        "Fatehpur",
        "Ghaziabad",
        "Gorakhpur",
        "Jhansi",
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


    "Punjab": [
        "Amritsar",
        "Barnala",
        "Bathinda",
        "Faridkot",
        "Fatehgarh Sahib",
        "Fazilka",
        "Ferozepur",
        "Gurdaspur",
        "Hoshiarpur",
        "Jalandhar",
        "Kapurthala",
        "Ludhiana",
        "Mansa",
        "Moga",
        "Muktsar",
        "Pathankot",
        "Patiala",
        "Rupnagar",
        "Sangrur",
        "SAS Nagar",
        "Tarn Taran"
    ],


    "Haryana": [
        "Ambala",
        "Bhiwani",
        "Charkhi Dadri",
        "Faridabad",
        "Fatehabad",
        "Gurugram",
        "Hisar",
        "Jhajjar",
        "Jind",
        "Kaithal",
        "Karnal",
        "Kurukshetra",
        "Mahendragarh",
        "Nuh",
        "Palwal",
        "Panchkula",
        "Panipat",
        "Rewari",
        "Rohtak",
        "Sirsa",
        "Sonipat",
        "Yamunanagar"
    ],


    "Gujarat": [
        "Ahmedabad",
        "Amreli",
        "Anand",
        "Aravalli",
        "Banaskantha",
        "Bharuch",
        "Bhavnagar",
        "Botad",
        "Chhota Udaipur",
        "Dahod",
        "Dang",
        "Devbhumi Dwarka",
        "Gandhinagar",
        "Gir Somnath",
        "Jamnagar",
        "Junagadh",
        "Kheda",
        "Kutch",
        "Mehsana",
        "Morbi",
        "Narmada",
        "Navsari",
        "Panchmahal",
        "Patan",
        "Porbandar",
        "Rajkot",
        "Sabarkantha",
        "Surat",
        "Surendranagar",
        "Tapi",
        "Vadodara",
        "Valsad"
    ],


    "Rajasthan": [
        "Ajmer",
        "Alwar",
        "Banswara",
        "Baran",
        "Barmer",
        "Bharatpur",
        "Bhilwara",
        "Bikaner",
        "Bundi",
        "Chittorgarh",
        "Churu",
        "Dausa",
        "Dholpur",
        "Dungarpur",
        "Hanumangarh",
        "Jaipur",
        "Jaisalmer",
        "Jalore",
        "Jhalawar",
        "Jhunjhunu",
        "Jodhpur",
        "Karauli",
        "Kota",
        "Nagaur",
        "Pali",
        "Rajsamand",
        "Sawai Madhopur",
        "Sikar",
        "Sirohi",
        "Sri Ganganagar",
        "Tonk",
        "Udaipur"
    ],


    "Madhya Pradesh": [
        "Agar Malwa",
        "Alirajpur",
        "Anuppur",
        "Ashoknagar",
        "Balaghat",
        "Barwani",
        "Betul",
        "Bhind",
        "Bhopal",
        "Burhanpur",
        "Chhatarpur",
        "Chhindwara",
        "Damoh",
        "Datia",
        "Dewas",
        "Dhar",
        "Dindori",
        "Guna",
        "Gwalior",
        "Harda",
        "Indore",
        "Jabalpur",
        "Jhabua",
        "Katni",
        "Khandwa",
        "Khargone",
        "Mandla",
        "Mandsaur",
        "Morena",
        "Narmadapuram",
        "Neemuch",
        "Niwari",
        "Panna",
        "Raisen",
        "Rajgarh",
        "Ratlam",
        "Rewa",
        "Sagar",
        "Satna",
        "Sehore",
        "Seoni",
        "Shahdol",
        "Shajapur",
        "Sheopur",
        "Shivpuri",
        "Sidhi",
        "Singrauli",
        "Tikamgarh",
        "Ujjain",
        "Umaria",
        "Vidisha"
    ],


    "Karnataka": [
        "Bagalkot",
        "Ballari",
        "Belagavi",
        "Bengaluru Rural",
        "Bengaluru Urban",
        "Bidar",
        "Chamarajanagar",
        "Chikkaballapur",
        "Chikkamagaluru",
        "Chitradurga",
        "Dakshina Kannada",
        "Davanagere",
        "Dharwad",
        "Gadag",
        "Hassan",
        "Haveri",
        "Kalaburagi",
        "Kodagu",
        "Kolar",
        "Koppal",
        "Mandya",
        "Mysuru",
        "Raichur",
        "Ramanagara",
        "Shivamogga",
        "Tumakuru",
        "Udupi",
        "Uttara Kannada",
        "Vijayapura",
        "Yadgir"
    ],


    "Tamil Nadu": [
        "Ariyalur",
        "Chengalpattu",
        "Chennai",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Dindigul",
        "Erode",
        "Kallakurichi",
        "Kancheepuram",
        "Karur",
        "Krishnagiri",
        "Madurai",
        "Mayiladuthurai",
        "Nagapattinam",
        "Namakkal",
        "Nilgiris",
        "Perambalur",
        "Pudukkottai",
        "Ramanathapuram",
        "Ranipet",
        "Salem",
        "Sivaganga",
        "Tenkasi",
        "Thanjavur",
        "Theni",
        "Thoothukudi",
        "Tiruchirappalli",
        "Tirunelveli",
        "Tirupathur",
        "Tiruppur",
        "Tiruvallur",
        "Tiruvannamalai",
        "Tiruvarur",
        "Vellore",
        "Viluppuram",
        "Virudhunagar"
    ],


    "West Bengal": [
        "Alipurduar",
        "Bankura",
        "Birbhum",
        "Cooch Behar",
        "Dakshin Dinajpur",
        "Darjeeling",
        "Hooghly",
        "Howrah",
        "Jalpaiguri",
        "Jhargram",
        "Kalimpong",
        "Kolkata",
        "Malda",
        "Murshidabad",
        "Nadia",
        "North 24 Parganas",
        "Paschim Bardhaman",
        "Paschim Medinipur",
        "Purba Bardhaman",
        "Purba Medinipur",
        "Purulia",
        "South 24 Parganas",
        "Uttar Dinajpur"
    ],


    "Bihar": [
        "Araria",
        "Arwal",
        "Aurangabad",
        "Banka",
        "Begusarai",
        "Bhagalpur",
        "Bhojpur",
        "Buxar",
        "Darbhanga",
        "East Champaran",
        "Gaya",
        "Gopalganj",
        "Jamui",
        "Jehanabad",
        "Kaimur",
        "Katihar",
        "Khagaria",
        "Kishanganj",
        "Lakhisarai",
        "Madhepura",
        "Madhubani",
        "Munger",
        "Muzaffarpur",
        "Nalanda",
        "Nawada",
        "Patna",
        "Purnia",
        "Rohtas",
        "Saharsa",
        "Samastipur",
        "Saran",
        "Sheikhpura",
        "Sheohar",
        "Sitamarhi",
        "Siwan",
        "Supaul",
        "Vaishali",
        "West Champaran"
    ],


    "Odisha": [
        "Angul",
        "Balangir",
        "Balasore",
        "Bargarh",
        "Bhadrak",
        "Boudh",
        "Cuttack",
        "Deogarh",
        "Dhenkanal",
        "Gajapati",
        "Ganjam",
        "Jagatsinghpur",
        "Jajpur",
        "Jharsuguda",
        "Kalahandi",
        "Kandhamal",
        "Kendrapara",
        "Kendujhar",
        "Khordha",
        "Koraput",
        "Malkangiri",
        "Mayurbhanj",
        "Nabarangpur",
        "Nayagarh",
        "Nuapada",
        "Puri",
        "Rayagada",
        "Sambalpur",
        "Subarnapur",
        "Sundargarh"
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
        "Pathanamthitta",
        "Thiruvananthapuram",
        "Thrissur",
        "Wayanad"
    ],


    "Telangana": [
        "Adilabad",
        "Bhadradri Kothagudem",
        "Hyderabad",
        "Jagtial",
        "Jangaon",
        "Jayashankar Bhupalpally",
        "Jogulamba Gadwal",
        "Kamareddy",
        "Karimnagar",
        "Khammam",
        "Komaram Bheem",
        "Mahabubabad",
        "Mahbubnagar",
        "Mancherial",
        "Medak",
        "Medchal-Malkajgiri",
        "Mulugu",
        "Nagarkurnool",
        "Nalgonda",
        "Nirmal",
        "Nizamabad",
        "Peddapalli",
        "Rajanna Sircilla",
        "Rangareddy",
        "Sangareddy",
        "Siddipet",
        "Suryapet",
        "Vikarabad",
        "Wanaparthy",
        "Warangal",
        "Yadadri Bhuvanagiri"
    ],


    "Andhra Pradesh": [
        "Alluri Sitharama Raju",
        "Anakapalli",
        "Ananthapuramu",
        "Annamayya",
        "Bapatla",
        "Chittoor",
        "Dr. B. R. Ambedkar Konaseema",
        "East Godavari",
        "Eluru",
        "Guntur",
        "Kakinada",
        "Krishna",
        "Kurnool",
        "Nandyal",
        "NTR",
        "Palnadu",
        "Parvathipuram Manyam",
        "Prakasam",
        "SPSR Nellore",
        "Sri Sathya Sai",
        "Srikakulam",
        "Tirupati",
        "Visakhapatnam",
        "Vizianagaram",
        "West Godavari"
    ]

};


/* =========================================================
   UPDATE DISTRICTS
   ========================================================= */

function updateDistricts() {

    if (!stateSelect || !districtSelect) {
        return;
    }


    const selectedState =
        stateSelect.value;


    const stateDistricts =
        districts[selectedState] || [];


    /*
        Remove the old district options.
    */

    districtSelect.innerHTML = "";


    /*
        Create new options for the selected state.
    */

    stateDistricts.forEach(
        function (district) {

            const option =
                document.createElement("option");

            option.value =
                district;

            option.textContent =
                district;

            districtSelect.appendChild(option);

        }
    );


    /*
        Update the location shown on screen.
    */

    updateLocation();

}


/* =========================================================
   UPDATE DISPLAYED LOCATION
   ========================================================= */

function updateLocation() {

    if (
        !stateSelect ||
        !districtSelect ||
        !selectedLocation
    ) {
        return;
    }


    const state =
        stateSelect.value;


    const district =
        districtSelect.value;


    selectedLocation.textContent =
        district + ", " + state + ", India";


    /*
        BACKEND CONNECTION:

        These are the two important values:

        state
        district

        Later the backend can receive these values
        and return:

        - Local market prices
        - Nearby mandis
        - Verified buyers
        - Crop demand
        - Market opportunities
        - Regional alerts
    */

}


/* =========================================================
   STATE CHANGE
   ========================================================= */

if (stateSelect) {

    stateSelect.addEventListener(
        "change",
        function () {

            updateDistricts();

        }
    );

}


/* =========================================================
   DISTRICT CHANGE
   ========================================================= */

if (districtSelect) {

    districtSelect.addEventListener(
        "change",
        function () {

            updateLocation();

        }
    );

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

if (
    mobileMenuButton &&
    mainNavigation
) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            mainNavigation.classList.toggle(
                "mobile-open"
            );


            const menuIsOpen =
                mainNavigation.classList.contains(
                    "mobile-open"
                );


            mobileMenuButton.setAttribute(
                "aria-expanded",
                menuIsOpen
            );

        }
    );

}


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        function () {

            /*
                Temporary frontend behaviour.

                BACKEND CONNECTION:
                The backend can later provide actual
                farmer notifications here.
            */

            alert(
                "You have a new market update."
            );

        }
    );

}


/* =========================================================
   SELL PRODUCE
   ========================================================= */

if (sellProduceButton) {

    sellProduceButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            /*
                Temporary behaviour.

                BACKEND CONNECTION:
                This section will eventually send
                the farmer's produce listing to
                the backend.
            */

            alert(
                "The Sell Produce section will open here."
            );

        }
    );

}


/* =========================================================
   FIND BUYERS
   ========================================================= */

if (buyerButton) {

    buyerButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            /*
                BACKEND CONNECTION:
                The backend will eventually return
                verified buyers based on:

                - Crop
                - Location
                - Quantity
                - Demand
            */

            alert(
                "Verified buyers will be shown here."
            );

        }
    );

}


/* =========================================================
   ADD PRODUCE
   ========================================================= */

if (addProduceButton) {

    addProduceButton.addEventListener(
        "click",
        function () {

            /*
                BACKEND CONNECTION:

                Later this will collect:

                - Crop
                - Quantity
                - Quality
                - Expected price
                - Location

                and send that information
                to the backend.
            */

            alert(
                "The Add Produce form will open here."
            );

        }
    );

}


/* =========================================================
   INITIALIZE DASHBOARD
   ========================================================= */

/*
    This makes sure the correct districts are available
    immediately when the page first loads.
*/

if (stateSelect && districtSelect) {

    updateDistricts();

}


/* =========================================================
   BACKEND CONNECTION SUMMARY
   ========================================================= */

/*
    FRONTEND IS READY FOR BACKEND CONNECTION.

    The backend team can later connect APIs for:

    1. Farmer profile

    2. State and district

    3. Market prices

    4. Farmer produce listings

    5. Verified buyers

    6. Market opportunities

    7. Notifications

    8. Support


    IMPORTANT:

    The backend team does not need to redesign this page.

    They can replace the temporary/sample values with
    real API data.
*/


console.log(
    "KrishiSetu Farmer Dashboard loaded successfully."
);