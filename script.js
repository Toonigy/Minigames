// Function to draw a default profile picture on the canvas
function drawDefaultProfilePic() {
  const canvas = document.getElementById("defaultProfilePic");
  const ctx = canvas.getContext("2d");

  // Set a circular shape with a background color
  ctx.fillStyle = "#5C6BC0"; // Light blue background color
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, Math.PI * 2, true); // Circle in center
  ctx.fill();

  // Draw initials (default "U")
  ctx.fillStyle = "#FFFFFF"; // White color for text
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("U", 50, 50); // Example initial for "User"

  // Check if a custom profile picture is available
  const storedImage = localStorage.getItem("profileImage");
  if (storedImage) {
    showCustomProfilePic(storedImage);
  } else {
    canvas.style.display = "block";
  }
}

// Display a custom profile picture
function showCustomProfilePic(imageSrc) {
  const imgElement = document.getElementById("profileImage");
  imgElement.src = imageSrc;
  imgElement.style.display = "block";
  document.getElementById("defaultProfilePic").style.display = "none";
}

// Upload a custom profile picture
function uploadPicture(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageSrc = e.target.result;
      localStorage.setItem("profileImage", imageSrc); // Save image in localStorage
      showCustomProfilePic(imageSrc); // Show the custom profile picture
    };
    reader.readAsDataURL(file);
  }
}

// Load the profile page with the user's data
function loadProfile() {
  const username = localStorage.getItem("loggedInUser");
  if (username) {
    document.getElementById("usernameDisplay").innerText = username;
    drawDefaultProfilePic(); // Draw the default profile picture if no custom one exists
  } else {
    window.location.href = "index.html"; // Redirect if not logged in
  }
}

// Logout function to clear user data and redirect to the login page
function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("profileImage");
  window.location.href = "index.html";
}

// If on profile page, load the profile data
if (window.location.pathname.endsWith("profile.html")) {
  loadProfile();
}
