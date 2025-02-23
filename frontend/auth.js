document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent form from refreshing

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Registration Successful!");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            alert("Error: " + data.msg);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
});
