document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get form values
        const role = document.getElementById("role").value;
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validate email and password
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Show a simple loading message
        const loginButton = loginForm.querySelector("button");
        loginButton.textContent = "Logging in...";
        loginButton.disabled = true;

        try {
            // Simulated backend request (Replace with actual API call later)
            await fakeBackendLogin(role, email, password);
            alert("Login successful!");  // You can redirect to another page here
        } catch (error) {
            alert("Invalid credentials. Please try again.");
        }

        // Reset button state
        loginButton.textContent = "Login";
        loginButton.disabled = false;
    });
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Simulated backend API request (Replace with actual fetch request later)
function fakeBackendLogin(role, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "admin@example.com" && password === "password123") {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}
