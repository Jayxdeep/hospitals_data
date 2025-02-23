document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent page reload

    let role = document.getElementById("role")?.value;
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!email.includes("@") || password.length < 6) {
        alert("Invalid email or password (min 6 chars).");
        return;
    }

    try {
        let response = await fetch("http://localhost:5000/api/auth/login", { // Change URL after deployment
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ role, email, password }),
        });

        let data = await response.json();

        if (response.ok) {
            alert("Login successful!");
            localStorage.setItem("token", data.token); // Store token
            localStorage.setItem("role", role); // Store role
            window.location.href = "dashboard.html"; // Redirect after login
        } else {
            alert(data.message || "Invalid credentials. Try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Try again later.");
    }
});
