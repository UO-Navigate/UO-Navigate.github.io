
const form = document.getElementById("signup-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (firstName === "" || lastName === "" || email === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
    }
    else if (!emailInput.validity.valid) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
    }
    else {
        message.textContent = "Thank you for signing up!";
        message.style.color = "green";

        form.reset();
    }
});
