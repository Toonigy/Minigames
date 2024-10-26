// Function to log the user in
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple check for username and password (you can enhance this later)
    if (username && password) {
        // Save the username in local storage to simulate a logged-in state
        localStorage.setItem("loggedInUser", username);

        // Redirect to profile page
        window.location.href = "profile.html";
    } else {
        alert("Please enter both username and password.");
    }
}

// Load profile data when the profile page is accessed
function loadProfile() {
    const username = localStorage.getItem("loggedInUser");
    if (!username) {
        // Redirect to login page if not logged in
        window.location.href = "index.html";
        return;
    }

    document.getElementById("usernameDisplay").innerText = username;
    drawDefaultProfilePic(); // Draw default profile picture or load custom one
}

// Draw default profile picture
function drawDefaultProfilePic() {
    const canvas = document.getElementById("defaultProfilePic");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#5C6BC0"; // Background color
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF"; // Text color
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("U", 50, 50); // Default initial for "User"

    const profileImageSrc = localStorage.getItem("profileImage");
    if (profileImageSrc) {
        showCustomProfilePic(profileImageSrc);
    } else {
        canvas.style.display = "block";
    }
}

// Show custom profile picture if it exists
function showCustomProfilePic(imageSrc) {
    const imgElement = document.getElementById("profileImage");
    imgElement.src = imageSrc;
    imgElement.style.display = "block"; // Show uploaded image
    document.getElementById("defaultProfilePic").style.display = "none"; // Hide default canvas
}

// Handle profile picture upload
function uploadPicture(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgSrc = e.target.result;
            localStorage.setItem("profileImage", imgSrc); // Save image to localStorage
            showCustomProfilePic(imgSrc); // Show the custom profile picture
        };
        reader.readAsDataURL(file);
    }
}

// Logout function
function logout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("profileImage");
    window.location.href = "index.html";
}

// Redirect to chat room page
function goToChatRoom() {
    window.location.href = "chat.html";
}

// Initialize profile only if on the profile page
if (window.location.pathname.endsWith("profile.html")) {
    loadProfile();
}
