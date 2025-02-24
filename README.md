Hospital/Department Data mangement System
Project Overview
The Hospitals/Departments Data Management System is a web-based platform for securely managing hospital data. Built with MERN stack, it enables real-time updates, role-based access, and efficient monitoring for healthcare administrators. Despite initial authentication issues, it streamlines data handling, policy implementation, and scalability for improved healthcare management. 

Key Features (MVP)
User Authentication – Secure registration & login with password hashing.
Role-Based Access Control – Different roles for admin, hospital staff, and super admin.
Real-Time Data Management – Hospitals & departments can update their data dynamically.
Centralized Dashboard – Efficient monitoring and tracking of hospital data.
Scalability – Supports multiple hospitals and future enhancements.
Security Measures – Basic data encryption & validation for sensitive information.

🚀 Current Development Progress
Backend (Node.js+Express+Mongo DB) ✅
 Node.js backend initialized.
API endpoints for authentication and user management.
Implemented JWT-based authentication (still needs refinement).
User registration and login functionality working.
Data stored in MongoDB (currently local, needs cloud migration).
Frontend (HTML,CSS,JavaScript) ✅
 Basic UI designed for authentication and dashboard.
Connected frontend with backend API using fetch requests.
Implemented local storage for session management.
Needs improvements in UI/UX (error handling, responsive design).

Getting Started
1. Clone the Repository
 git clone https://github.com/Jayxdeep/hospitals_data
cd hospitals_data
2. Install Dependencies
    cd backend
    npm install

 cd ../frontend
 npm install
3. Run project
    cd backend
    npm start

    cd frontend
    live-server  # Start the frontend (or use VS Code Live Server extension)

4. Acess the Web ui:
    Frontend (User Interface): http://localhost:5500
    Backend API: http://localhost:5000

Tech Stack
Frontend: HTML,CSS,JavaScript
Backend: Node.js,Express.js
Database: MongoDB
Authentication: JWT (JSON Web Token)

This is an open-source project in active development. Feel free to submit issues, suggestions, or contribute!
