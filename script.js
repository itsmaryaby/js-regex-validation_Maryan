document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        let isValid = true;

        // Validate Full Name
        const fullName = document.getElementById("fullName");
        const nameError = document.getElementById("nameError");
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(fullName.value.trim())) {
            nameError.textContent = "Only letters and spaces allowed.";
            fullName.classList.add("error");
            isValid = false;
        } else {
            nameError.textContent = "";
            fullName.classList.remove("error");
            fullName.classList.add("success");
        }

        // Validate Email
        const email = document.getElementById("email");
        const emailError = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            emailError.textContent = "Invalid email format.";
            email.classList.add("error");
            isValid = false;
        } else {
            emailError.textContent = "";
            email.classList.remove("error");
            email.classList.add("success");
        }

        // Validate Phone Number
        const phone = document.getElementById("phone");
        const phoneError = document.getElementById("phoneError");
        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(phone.value.trim())) {
            phoneError.textContent = "Enter a valid phone number (10-15 digits).";
            phone.classList.add("error");
            isValid = false;
        } else {
            phoneError.textContent = "";
            phone.classList.remove("error");
            phone.classList.add("success");
        }

        // Validate Password
        const password = document.getElementById("password");
        const passwordError = document.getElementById("passwordError");
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
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

