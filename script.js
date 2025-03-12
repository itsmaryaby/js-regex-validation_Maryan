document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");

    // Regular Expressions
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,15}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Real-time validation for Full Name
    fullName.addEventListener("input", function() {
        if (!nameRegex.test(fullName.value.trim())) {
            nameError.textContent = "Only letters and spaces allowed.";
            fullName.classList.add("error");
            fullName.classList.remove("success");
        } else {
            nameError.textContent = "";
            fullName.classList.remove("error");
            fullName.classList.add("success");
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        let isValid = true;

        // Full Name Validation (Only letters and spaces)
        if (!nameRegex.test(fullName.value.trim())) {
            nameError.textContent = "Only letters and spaces allowed.";
            fullName.classList.add("error");
            isValid = false;
        } else {
            nameError.textContent = "";
            fullName.classList.remove("error");
            fullName.classList.add("success");
        }

        // Email Validation (Valid Email Format)
        if (!emailRegex.test(email.value.trim())) {
            emailError.textContent = "Invalid email format.";
            email.classList.add("error");
            isValid = false;
        } else {
            emailError.textContent = "";
            email.classList.remove("error");
            email.classList.add("success");
        }

        // Phone Number Validation (10-15 digits only)
        if (!phoneRegex.test(phone.value.trim())) {
            phoneError.textContent = "Enter a valid phone number (10-15 digits).";
            phone.classList.add("error");
            isValid = false;
        } else {
            phoneError.textContent = "";
            phone.classList.remove("error");
            phone.classList.add("success");
        }

        // Password Validation (Min 8 chars, at least 1 uppercase, 1 lowercase, and 1 number)
        if (!passwordRegex.test(password.value.trim())) {
            passwordError.textContent = "Password must be at least 8 characters, include uppercase, lowercase, and a number.";
            password.classList.add("error");
            isValid = false;
        } else {
            passwordError.textContent = "";
            password.classList.remove("error");
            password.classList.add("success");
        }

        if (isValid) {
            alert("Form submitted successfully!");
        }
    }
});


