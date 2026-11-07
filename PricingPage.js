
const form = document.getElementById("signup-form");
const message = document.getElementById("form-message");

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");

function validateField(input) {
    const value = input.value.trim();
    let valid = value !== "";

    if (input.type === "email") {
        valid = valid && input.validity.valid;
    }

    if (valid) {
        input.style.border = "1px solid #111a36";
    } else {
        input.style.border = "2px solid red";
    }

    return valid;
}


firstNameInput.addEventListener("input", function() {
    validateField(firstNameInput);
});

lastNameInput.addEventListener("input", function() {
    validateField(lastNameInput);
});

emailInput.addEventListener("input", function() {
    validateField(emailInput);
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstNameValid = validateField(firstNameInput);
    const lastNameValid = validateField(lastNameInput);
    const emailValid = validateField(emailInput);

    if (!firstNameValid || !lastNameValid || !emailValid) {
        message.textContent = "Please fill in all fields correctly.";
        message.style.color = "red";
    } else {
        const firstName = firstNameInput.value.trim();

        message.textContent = "Thank you, " + firstName + "! Your information has been submitted successfully.";
        message.style.color = "green";

        form.reset();

        firstNameInput.style.border = "1px solid #111a36";
        lastNameInput.style.border = "1px solid #111a36";
        emailInput.style.border = "1px solid #111a36";
    }
});
