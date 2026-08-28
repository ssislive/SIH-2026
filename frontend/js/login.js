const roleButtons = document.querySelectorAll(".role-button");

let selectedRole = "farmer";

roleButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        roleButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        selectedRole = button.getAttribute("data-role");
    });
});


const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function () {

    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    if (phone === "") {
        alert("Please enter your mobile number.");
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    const loginData = {
        phone: phone,
        password: password,
        role: selectedRole
    };

    console.log("Login data:", loginData);

    window.location.href = "dashboard.html";
});


const otpButton = document.getElementById("otp-button");

otpButton.addEventListener("click", function () {

    const phone = document.getElementById("phone").value.trim();

    if (phone === "") {
        alert("Please enter your mobile number first.");
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    console.log("OTP requested for:", phone);

    alert("OTP request is ready.");
});