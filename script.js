import { validateEmail } from './validation.js';

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if (validateEmail(email)) {
        message.innerHTML = "Valid Email!";
    } else {
        message.innerHTML = "Invalid Email!";
    }
});