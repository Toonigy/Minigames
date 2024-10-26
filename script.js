// Draw the default profile picture on the canvas
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

// Display the custom profile picture if it exists
function showCustomProfilePic(imageSrc) {
  const imgElement = document.getElementById("profileImage");
  imgElement.src = imageSrc;
  imgElement.style.display = "block"; // Show the uploaded image
  document.getElementById("defaultProfilePic").style.display = "none"; // Hide the canvas
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

// Load the profile page with user data and profile picture
function loadProfile() {
  const username = localStorage.getItem("loggedInUser");
  if (username) {
    document.getElementById("usernameDisplay").innerText = username;
    drawDefaultProfilePic(); // Draw default profile picture or load custom one
  } else {
    window.location.href = "index.html"; // Redirect if user is not logged in
  }
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("profileImage");
  window.location.href = "index.html";
}

// Initialize the profile page
if (window.location.pathname.endsWith("profile.html")) {
  loadProfile();
}
