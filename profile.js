// profile.js

document.addEventListener("DOMContentLoaded", function() {
    const usernameDisplay = document.getElementById("usernameDisplay");
    const profilePicture = document.getElementById("profilePicture");
    
    // Get the username from local storage
    const username = localStorage.getItem("loggedInUser") || "Guest";
    usernameDisplay.textContent = username;

    // Set a default profile picture or user-uploaded picture
    const defaultProfilePicture = "data:image/svg+xml;base64,..."; // Base64 or URL for default picture
    profilePicture.src = defaultProfilePicture;

    // Logout button functionality
    document.getElementById("logoutButton").addEventListener("click", function() {
        localStorage.removeItem("loggedInUser"); // Clear user info
        window.location.href = "index.html"; // Redirect to the login page
    });

    // Chat button functionality
    document.getElementById("chatButton").addEventListener("click", function() {
        window.location.href = "chat.html"; // Redirect to chat room page
    });

    // Minigames button functionality
    document.getElementById("minigamesButton").addEventListener("click", function() {
        window.location.href = "minigames.html"; // Redirect to minigame list page
    });
});
