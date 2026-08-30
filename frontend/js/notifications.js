/* =========================================================
   KRISHISETU — NOTIFICATIONS

   BACKEND READY STRUCTURE

   GET:
       /api/notifications

   PATCH:
       /api/notifications/:id/read

   PATCH:
       /api/notifications/read-all

   The backend should associate notifications with the
   authenticated farmer.
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {

    menuButton.addEventListener("click", function () {

        const currentlyOpen =
            mainNav.classList.contains("open");

        if (currentlyOpen) {

            mainNav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        } else {

            mainNav.classList.add("open");

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });


    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   TEMPORARY DATA
   ========================================================= */

let notificationData = [

    {
        id: "N001",
        type: "market",
        title: "Wheat prices increased",
        message:
            "The latest market information shows an increase in wheat prices. Check Market Prices for current details.",
        category: "Market",
        createdAt: "Today, 10:30 AM",
        read: false
    },

    {
        id: "N002",
        type: "selling",
        title: "Your produce listing is active",
        message:
            "Your wheat produce listing has been successfully created and is available for potential buyers.",
        category: "Selling",
        createdAt: "Today, 09:15 AM",
        read: false
    },

    {
        id: "N003",
        type: "selling",
        title: "New buyer interest",
        message:
            "A buyer has shown interest in produce matching your listed crop.",
        category: "Selling",
        createdAt: "Yesterday",
        read: false
    },

    {
        id: "N004",
        type: "market",
        title: "Market prices updated",
        message:
            "Market information for several crops has been updated.",
        category: "Market",
        createdAt: "Yesterday",
        read: true
    },

    {
        id: "N005",
        type: "account",
        title: "Profile information saved",
        message:
            "Your profile information was successfully updated.",
        category: "Account",
        createdAt: "28 Aug 2026",
        read: true
    }

];


/* =========================================================
   ELEMENTS
   ========================================================= */

const notificationList =
    document.getElementById("notificationList");

const emptyState =
    document.getElementById("emptyState");

const notificationCount =
    document.getElementById("notificationCount");

const markAllButton =
    document.getElementById("markAllButton");

const filterButtons =
    document.querySelectorAll(
        ".notification-filter"
    );


/*
 * THIS is the only variable controlling filtering.
 */

let currentFilter = "all";


/* =========================================================
   ICONS
   ========================================================= */

function getNotificationIcon(type) {

    if (type === "market") {
        return "₹";
    }

    if (type === "selling") {
        return "↗";
    }

    if (type === "account") {
        return "✓";
    }

    if (type === "support") {
        return "?";
    }

    return "•";
}


/* =========================================================
   GET FILTERED DATA
   ========================================================= */

function getFilteredNotifications() {

    if (currentFilter === "all") {

        return notificationData;

    }


    if (currentFilter === "unread") {

        return notificationData.filter(
            function (notification) {

                return notification.read === false;

            }
        );

    }


    if (currentFilter === "market") {

        return notificationData.filter(
            function (notification) {

                return notification.type === "market";

            }
        );

    }


    if (currentFilter === "selling") {

        return notificationData.filter(
            function (notification) {

                return notification.type === "selling";

            }
        );

    }


    return [];

}


/* =========================================================
   RENDER
   ========================================================= */

function renderNotifications() {

    const filtered =
        getFilteredNotifications();


    notificationList.innerHTML = "";


    if (filtered.length === 0) {

        emptyState.hidden = false;

        return;

    }


    emptyState.hidden = true;


    filtered.forEach(
        function (notification) {

            const card =
                document.createElement("article");


            card.classList.add(
                "notification-item"
            );


            if (!notification.read) {

                card.classList.add("unread");

            }


            card.dataset.id =
                notification.id;


            card.innerHTML = `

                <div class="notification-icon">
                    ${getNotificationIcon(
                        notification.type
                    )}
                </div>


                <div class="notification-content">

                    <h2 class="notification-title">
                        ${escapeHTML(
                            notification.title
                        )}
                    </h2>


                    <p class="notification-message">
                        ${escapeHTML(
                            notification.message
                        )}
                    </p>


                    <div class="notification-meta">

                        <span class="notification-category">
                            ${escapeHTML(
                                notification.category
                            )}
                        </span>

                        <span class="read-indicator">
                            ${
                                notification.read
                                    ? "Read"
                                    : "Unread"
                            }
                        </span>

                    </div>

                </div>


                <time class="notification-time">
                    ${escapeHTML(
                        notification.createdAt
                    )}
                </time>

            `;


            card.addEventListener(
                "click",
                function () {

                    markAsRead(
                        notification.id
                    );

                }
            );


            notificationList.appendChild(card);

        }
    );

}


/* =========================================================
   COUNT
   ========================================================= */

function updateUnreadCount() {

    const count =
        notificationData.filter(
            function (notification) {

                return notification.read === false;

            }
        ).length;


    notificationCount.textContent =
        `${count} unread`;

}


/* =========================================================
   MARK ONE READ
   ========================================================= */

function markAsRead(id) {

    const notification =
        notificationData.find(
            function (item) {

                return item.id === id;

            }
        );


    if (!notification) {
        return;
    }


    notification.read = true;


    /*
     * BACKEND:
     *
     * PATCH /api/notifications/:id/read
     *
     * The backend should persist this state.
     */


    updateUnreadCount();

    renderNotifications();

}


/* =========================================================
   MARK ALL READ
   ========================================================= */

if (markAllButton) {

    markAllButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            notificationData =
                notificationData.map(
                    function (notification) {

                        return {
                            ...notification,
                            read: true
                        };

                    }
                );


            /*
             * BACKEND:
             *
             * PATCH /api/notifications/read-all
             */


            updateUnreadCount();

            renderNotifications();

        }
    );

}


/* =========================================================
   FILTER BUTTONS
   =========================================================

   IMPORTANT:

   These are buttons, NOT links.

   Clicking them:
       1. prevents default behavior
       2. changes currentFilter
       3. changes active button
       4. rerenders notifications

   They NEVER change window.location.
   ========================================================= */

filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                const filter =
                    button.getAttribute(
                        "data-filter"
                    );


                if (
                    filter !== "all" &&
                    filter !== "unread" &&
                    filter !== "market" &&
                    filter !== "selling"
                ) {

                    return;

                }


                currentFilter = filter;


                filterButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                renderNotifications();

            }
        );

    }
);


/* =========================================================
   SAFE HTML
   ========================================================= */

function escapeHTML(value) {

    const element =
        document.createElement("div");

    element.textContent =
        String(value ?? "");

    return element.innerHTML;

}


/* =========================================================
   INITIAL LOAD
   ========================================================= */

updateUnreadCount();

renderNotifications();


/* =========================================================
   FUTURE BACKEND FETCH
   =========================================================

   async function loadNotifications() {

       try {

           const response =
               await fetch(
                   "/api/notifications"
               );

           if (!response.ok) {

               throw new Error(
                   "Failed to load notifications"
               );

           }

           const data =
               await response.json();

           notificationData = data;

           updateUnreadCount();

           renderNotifications();

       } catch (error) {

           console.error(error);

       }

   }

   loadNotifications();

   ========================================================= */