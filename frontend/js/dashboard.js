let priceChart;


async function loadDashboard() {

    try {

        const response = await getDashboardData();

        if (response.success) {

            const data = response.data;

            updateDashboard(data);

        }

    } catch (error) {

        console.error("Dashboard error:", error);

    }

    loadExtraDashboardData();
}


function updateDashboard(data) {

    document.getElementById("user-name").textContent =
        data.user.name;

    document.getElementById("best-price").textContent =
        data.summary.bestPrice;

    document.getElementById("active-lots").textContent =
        data.summary.activeLots;

    document.getElementById("active-bids").textContent =
        data.summary.activeBids;

    document.getElementById("pending-transactions").textContent =
        data.summary.pendingTransactions;
}


async function loadExtraDashboardData() {

    try {

        const marketResponse = await getMarketPrices();

        if (marketResponse.success &&
            marketResponse.data.length > 0) {

            showMarketPrice(marketResponse.data);

        } else {

            showMockMarketPrice();

        }

    } catch (error) {

        console.error("Market data error:", error);

        showMockMarketPrice();
    }


    showRecommendation();

    showBuyerDemand();

    showActiveBids();

    createPriceChart();
}


function showMarketPrice(marketData) {

    const market = marketData[0];

    document.getElementById("crop-name").textContent =
        market.crop;

    document.getElementById("crop-price").textContent =
        "₹" + market.price;

    document.getElementById("price-change").textContent =
        market.change + "%";

    document.querySelector(".data-time").textContent =
        "Updated recently";
}


function showMockMarketPrice() {

    document.getElementById("crop-name").textContent =
        "Tomato";

    document.getElementById("crop-price").textContent =
        "₹3,200";

    document.getElementById("price-change").textContent =
        "+8%";

    document.querySelector(".data-time").textContent =
        "Updated 5 minutes ago";
}


function showRecommendation() {

    const recommendation = {
        type: "WAIT",
        message: "Prices are expected to increase over the next few days.",
        confidence: 82
    };

    document.getElementById("recommendation").textContent =
        recommendation.type;

    document.getElementById("recommendation-text").textContent =
        recommendation.message;

    document.getElementById("confidence-value").textContent =
        recommendation.confidence + "%";

    document.getElementById("confidence-progress").style.width =
        recommendation.confidence + "%";
}


function showBuyerDemand() {

    const buyers = [
        {
            buyer: "FreshMart Foods",
            crop: "Tomato",
            quantity: "2,000 kg",
            price: "₹3,250 / quintal",
            location: "Pune"
        },
        {
            buyer: "Maharashtra Agro",
            crop: "Tomato",
            quantity: "1,500 kg",
            price: "₹3,150 / quintal",
            location: "Nashik"
        }
    ];

    const container =
        document.getElementById("buyer-demand-list");

    container.innerHTML = "";

    buyers.forEach(function (buyer) {

        const item = document.createElement("div");

        item.className = "dashboard-list-item";

        item.innerHTML = `
            <div>
                <strong>${buyer.buyer}</strong>
                <p>${buyer.crop} • ${buyer.quantity}</p>
            </div>

            <div>
                <strong>${buyer.price}</strong>
                <p>${buyer.location}</p>
            </div>
        `;

        container.appendChild(item);
    });
}


function showActiveBids() {

    const bids = [
        {
            crop: "Tomato",
            lot: "LOT-1024",
            currentBid: "₹3,400 / quintal",
            bids: 12,
            time: "14 min"
        },
        {
            crop: "Onion",
            lot: "LOT-1018",
            currentBid: "₹2,850 / quintal",
            bids: 8,
            time: "27 min"
        }
    ];

    const container =
        document.getElementById("active-bids-list");

    container.innerHTML = "";

    bids.forEach(function (bid) {

        const item = document.createElement("div");

        item.className = "dashboard-list-item";

        item.innerHTML = `
            <div>
                <strong>${bid.crop}</strong>
                <p>${bid.lot} • ${bid.bids} bids</p>
            </div>

            <div>
                <strong>${bid.currentBid}</strong>
                <p>${bid.time} remaining</p>
            </div>
        `;

        container.appendChild(item);
    });
}


function createPriceChart() {

    const canvas =
        document.getElementById("price-chart");

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
                        2800,
                        2750,
                        2900,
                        3000,
                        3100,
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
                        2900,
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


const logoutButton =
    document.getElementById("logout-button");

logoutButton.addEventListener("click", function () {

    localStorage.removeItem("token");

    window.location.href = "login.html";

});


loadDashboard();