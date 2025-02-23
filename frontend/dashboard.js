document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Unauthorized! Please log in.");
        window.location.href = "login.html";
        return;
    }

    // Fetch hospitals (Protected Route)
    const response = await fetch("http://localhost:5000/api/hospitals", {
        method: "GET",
        headers: { "x-auth-token": token },
    });

    if (!response.ok) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        window.location.href = "login.html";
    }

    const data = await response.json();
    const hospitalList = document.getElementById("hospitalList");

    data.forEach(hospital => {
        const li = document.createElement("li");
        li.textContent = hospital.name;
        hospitalList.appendChild(li);
    });

    // Logout Function
    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.href = "login.html";
    });
});
