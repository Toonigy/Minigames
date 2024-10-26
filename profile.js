// profile.js

document.addEventListener("DOMContentLoaded", function() {
    const usernameDisplay = document.getElementById("usernameDisplay");
    const profilePicture = document.getElementById("profilePicture");

    // Get the username from local storage
    const username = localStorage.getItem("loggedInUser") || "Guest";
    usernameDisplay.textContent = username;

    // Set a default profile picture or user-uploaded picture
    const defaultProfilePicture = "data:image/svg+xml;base64,..."; // Your default picture here
    profilePicture.src = defaultProfilePicture;

    // Logout button functionality
    document.getElementById("logoutButton").addEventListener("click", function() {
        // Clear user info from local storage
        localStorage.removeItem("loggedInUser");
        
        // Redirect to the login page
        window.location.href = "index.html"; // Ensure the path is correct
    });

    // Chat button functionality
    document.getElementById("chatButton").addEventListener("click", function() {
        window.location.href = "chat.html"; // Ensure the path is correct
    });

    // Minigames button functionality
    document.getElementById("minigamesButton").addEventListener("click", function() {
        window.location.href = "minigames.html"; // Ensure the path is correct
    });
});
