const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");

loginForm.classList.add("hide-form");

loginForm.addEventListener("submit", login);
registerForm.addEventListener("submit", register);
loginLink.addEventListener("click", toggleForm);
registerLink.addEventListener("click", toggleForm);


function toggleForm() {
    loginForm.classList.toggle("hide-form");
    registerForm.classList.toggle("hide-form");
}

function login(event) {
    event.preventDefault();

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    const inputEmail = document.getElementById("login-email").value;
    const inputPassword = document.getElementById("login-password").value;

    if (email === inputEmail && password === inputPassword) {
        alert("Logged in Successfully!");
        document.getElementById("loginForm").reset();


    } else {
        alert("Invalid Credentials!");
    }
}

function register(event) {
    event.preventDefault();
    console.log("register called");
    const inputEmail = document.getElementById("register-email").value;
    const inputPassword = document.getElementById("register-password").value;
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("password", inputPassword);
    alert("Your have been registered Successfully! Please login now.");
    document.getElementById("registerForm").reset();
    toggleForm();
}