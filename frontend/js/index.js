const getStartedButtons = document.querySelectorAll(
    'a[href="login.html"]'
);

getStartedButtons.forEach(function (button) {

    button.addEventListener("click", function () {
        window.location.href = "login.html";
    });

});


if ("serviceWorker" in navigator) {

    window.addEventListener("load", function () {

        navigator.serviceWorker.register("service-worker.js")
            .then(function () {
                console.log("Service worker registered.");
            })
            .catch(function (error) {
                console.log("Service worker registration failed:", error);
            });

    });

}