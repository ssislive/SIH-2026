const marketData = [
    {
        market: "Pune",
        crop: "Tomato",
        minPrice: 2850,
        maxPrice: 3350,
        modalPrice: 3200,
        arrival: "184 Tonnes",
        updated: "2 min ago"
    },
    {
        market: "Nashik",
        crop: "Tomato",
        minPrice: 2750,
        maxPrice: 3200,
        modalPrice: 3050,
        arrival: "142 Tonnes",
        updated: "4 min ago"
    },
    {
        market: "Mumbai",
        crop: "Tomato",
        minPrice: 2900,
        maxPrice: 3400,
        modalPrice: 3250,
        arrival: "216 Tonnes",
        updated: "5 min ago"
    },
    {
        market: "Nagpur",
        crop: "Tomato",
        minPrice: 2700,
        maxPrice: 3150,
        modalPrice: 3000,
        arrival: "128 Tonnes",
        updated: "7 min ago"
    }
];


let priceChart;
let comparisonChart;


function loadMarketData() {

    showPriceSummary();

    showMarketTable();

    createPriceChart();

    createComparisonChart();

}


function showPriceSummary() {

    const prices = marketData.map(function (item) {
        return item.modalPrice;
    });

    const highestPrice = Math.max(...prices);
    const lowestPrice = Math.min(...prices);

    const total = prices.reduce(function (sum, price) {
        return sum + price;
    }, 0);

    const averagePrice = Math.round(total / prices.length);


    document.getElementById("best-current-price").textContent =
        "₹" + highestPrice.toLocaleString("en-IN");

    document.getElementById("average-price").textContent =
        "₹" + averagePrice.toLocaleString("en-IN");

    document.getElementById("lowest-price").textContent =
        "₹" + lowestPrice.toLocaleString("en-IN");

    document.getElementById("highest-price").textContent =
        "₹" + highestPrice.toLocaleString("en-IN");
}


function showMarketTable() {

    const tableBody =
        document.getElementById("market-table-body");

    tableBody.innerHTML = "";


    marketData.forEach(function (item) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.market}</td>
            <td>${item.crop}</td>
            <td>₹${item.minPrice.toLocaleString("en-IN")}</td>
            <td>₹${item.maxPrice.toLocaleString("en-IN")}</td>
            <td>₹${item.modalPrice.toLocaleString("en-IN")}</td>
            <td>${item.arrival}</td>
            <td>${item.updated}</td>
        `;

        tableBody.appendChild(row);

    });
}


function createPriceChart() {

    const canvas =
        document.getElementById("market-price-chart");

    const context = canvas.getContext("2d");


    priceChart = new Chart(context, {

        type: "line",

        data: {

            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],

            datasets: [

                {
                    label: "Market Price",

                    data: [
                        2700,
                        2780,
                        2850,
                        2920,
                        3010,
                        3120,
                        3200
                    ],

                    borderWidth: 2,

                    tension: 0.3
                },

                {
                    label: "Expected Price",

                    data: [
                        null,
                        null,
                        null,
                        2920,
                        3050,
                        3250,
                        3350
                    ],

                    borderWidth: 2,

                    borderDash: [6, 6],

                    tension: 0.3
                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: true
                }

            },

            scales: {

                y: {
                    beginAtZero: false
                }

            }

        }

    });
}


function createComparisonChart() {

    const canvas =
        document.getElementById("market-comparison-chart");

    const context = canvas.getContext("2d");


    comparisonChart = new Chart(context, {

        type: "bar",

        data: {

            labels: [
                "Pune",
                "Nashik",
                "Mumbai",
                "Nagpur"
            ],

            datasets: [

                {
                    label: "Modal Price",

                    data: [
                        3200,
                        3050,
                        3250,
                        3000
                    ],

                    borderWidth: 1
                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            scales: {

                y: {
                    beginAtZero: false
                }

            }

        }

    });
}


document
    .getElementById("apply-filters")
    .addEventListener("click", function () {

        const selectedCrop =
            document.getElementById("crop").value;

        console.log("Selected crop:", selectedCrop);

        loadMarketData();

    });


const logoutButton =
    document.getElementById("logout-button");

logoutButton.addEventListener("click", function () {

    localStorage.removeItem("token");

    window.location.href = "login.html";

});


loadMarketData();