document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!email.includes("@") || password.length < 6) {
        alert("Invalid email or password (min 6 chars).");
        return;
    }

    // Simulated login (Replace this with backend API later)
    if (email === "admin@example.com" && password === "password123") {
        alert("Login successful!");
    } else {
        alert("Invalid credentials. Try again.");
    }
});
