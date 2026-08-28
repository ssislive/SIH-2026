# SIH-2026
Strengthening market linkages and price discovery for farmers
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>KrishiSetu - Login</title>

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f4f1e8;
            color: #26352b;
            min-height: 100vh;
        }

        .page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px;
        }

        .login-box {
            width: 100%;
            max-width: 1000px;
            min-height: 600px;
            background: white;
            display: flex;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 12px 35px rgba(40, 50, 40, 0.12);
        }

        /* LEFT SIDE */

        .left-side {
            width: 48%;
            background: #315b3a;
            color: white;
            padding: 55px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 0.5px;
        }

        .logo span {
            color: #d7c36a;
        }

        .left-content {
            max-width: 390px;
        }

        .left-content .small-text {
            color: #cbd8c8;
            font-size: 14px;
            margin-bottom: 18px;
        }

        .left-content h1 {
            font-size: 43px;
            line-height: 1.12;
            margin-bottom: 22px;
        }

        .left-content p {
            color: #dce5db;
            font-size: 16px;
            line-height: 1.7;
        }

        .market-note {
            border-top: 1px solid rgba(255,255,255,0.25);
            padding-top: 18px;
            font-size: 13px;
            color: #cbd8c8;
        }

        /* RIGHT SIDE */

        .right-side {
            width: 52%;
            padding: 55px 65px;
            display: flex;
            align-items: center;
        }

        .form-area {
            width: 100%;
            max-width: 390px;
            margin: auto;
        }

        .form-area h2 {
            font-size: 30px;
            margin-bottom: 8px;
        }

        .subtitle {
            color: #727a73;
            font-size: 14px;
            margin-bottom: 32px;
        }

        /* ROLE */

        .role-title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .roles {
            display: flex;
            gap: 10px;
            margin-bottom: 25px;
        }

        .role {
            flex: 1;
            padding: 13px;
            border: 1px solid #d9ddd6;
            background: white;
            border-radius: 7px;
            cursor: pointer;
            font-size: 14px;
        }

        .role.active {
            background: #eef4ed;
            border-color: #315b3a;
            color: #315b3a;
            font-weight: bold;
        }

        /* INPUT */

        .input-group {
            margin-bottom: 20px;
        }

        .input-group label {
            display: block;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 8px;
        }

        .input-group input {
            width: 100%;
            padding: 14px;
            border: 1px solid #d9ddd6;
            border-radius: 7px;
            font-size: 15px;
            outline: none;
        }

        .input-group input:focus {
            border-color: #315b3a;
        }

        .password-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .password-row a {
            color: #315b3a;
            text-decoration: none;
            font-size: 13px;
        }

        /* LOGIN BUTTON */

        .login-button {
            width: 100%;
            padding: 15px;
            margin-top: 5px;
            background: #315b3a;
            color: white;
            border: none;
            border-radius: 7px;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
        }

        .login-button:hover {
            background: #264b2e;
        }

        .signup {
            text-align: center;
            margin-top: 24px;
            font-size: 14px;
            color: #777;
        }

        .signup a {
            color: #315b3a;
            font-weight: bold;
            text-decoration: none;
        }

        /* MOBILE */

        @media (max-width: 750px) {

            .page {
                padding: 15px;
            }

            .login-box {
                flex-direction: column;
            }

            .left-side,
            .right-side {
                width: 100%;
            }

            .left-side {
                min-height: 300px;
                padding: 35px;
            }

            .left-content h1 {
                font-size: 32px;
            }

            .right-side {
                padding: 40px 30px;
            }
        }

    </style>
</head>

<body>

    <div class="page">

        <div class="login-box">

            <!-- LEFT SECTION -->

            <div class="left-side">

                <div class="logo">
                    Krishi<span>Setu</span>
                </div>

                <div class="left-content">

                    <div class="small-text">
                        AGRICULTURAL MARKET PLATFORM
                    </div>

                    <h1>
                        Sell with better information.
                    </h1>

                    <p>
                        Discover market prices, compare buyers and
                        make informed decisions about when and where
                        to sell your produce.
                    </p>

                </div>

                <div class="market-note">
                    Connecting farmers, FPOs and verified buyers.
                </div>

            </div>


            <!-- RIGHT SECTION -->

            <div class="right-side">

                <div class="form-area">

                    <h2>Welcome back</h2>

                    <p class="subtitle">
                        Sign in to continue to your account.
                    </p>


                    <!-- ROLE -->

                    <div class="role-title">
                        Continue as
                    </div>

                    <div class="roles">

                        <button class="role active" data-role="farmer">
                            Farmer
                        </button>

                        <button class="role" data-role="buyer">
                            Buyer
                        </button>

                    </div>


                    <!-- PHONE -->

                    <div class="input-group">

                        <label for="phone">
                            Mobile number
                        </label>

                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter 10-digit mobile number"
                            maxlength="10"
                        >

                    </div>


                    <!-- PASSWORD -->

                    <div class="input-group">

                        <div class="password-row">

                            <label for="password">
                                Password
                            </label>

                            <a href="#">
                                Forgot password?
                            </a>

                        </div>

                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                        >

                    </div>


                    <button class="login-button" id="loginButton">
                        Sign in
                    </button>


                    <div class="signup">
                        New to KrishiSetu?
                        <a href="#">Create an account</a>
                    </div>

                </div>

            </div>

        </div>

    </div>


    <script>

        const roleButtons = document.querySelectorAll(".role");

        let selectedRole = "farmer";

        roleButtons.forEach(function(button) {

            button.addEventListener("click", function() {

                roleButtons.forEach(function(role) {
                    role.classList.remove("active");
                });

                button.classList.add("active");

                selectedRole = button.getAttribute("data-role");

            });

        });


        const loginButton = document.getElementById("loginButton");

        loginButton.addEventListener("click", function() {

            const phone = document.getElementById("phone").value;
            const password = document.getElementById("password").value;

            if (phone === "" || password === "") {

                alert("Please enter your mobile number and password.");

                return;
            }

            console.log("Role:", selectedRole);
            console.log("Phone:", phone);

            alert("Login request ready for " + selectedRole);

        });

    </script>

</body>
</html>