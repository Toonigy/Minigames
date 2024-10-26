document.addEventListener("DOMContentLoaded", function() {
    const usernameDisplay = document.getElementById("usernameDisplay");
    const profilePicture = document.getElementById("profilePicture");

    // Get the username from local storage
    const username = localStorage.getItem("loggedInUser") || "Guest"; // Default to "Guest" if not found
    usernameDisplay.textContent = `Username: ${username}`; // Show username

    // Set a default profile picture or user-uploaded picture
    const defaultProfilePicture = "data:image/svg+xml;base64,..."; // Replace with your default picture
    profilePicture.src = defaultProfilePicture;

    // Logout button functionality
    document.getElementById("logoutButton").addEventListener("click", function() {
        localStorage.removeItem("loggedInUser"); // Clear user info
        window.location.href = "index.html"; // Redirect to login page
    });

    // Chat button functionality
    document.getElementById("chatButton").addEventListener("click", function() {
        window.location.href = "chat.html"; // Ensure this path is correct
    });

    // Minigames button functionality
    document.getElementById("minigamesButton").addEventListener("click", function() {
        window.location.href = "minigames.html"; // Ensure this path is correct
    });
});
