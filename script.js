// Show Signup and Login Forms
function showSignup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

function showLogin() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

// Signup Function
function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  if (username && password) {
    localStorage.setItem(username, password);
    alert("Signup successful!");
    showLogin();
  } else {
    alert("Please fill in all fields.");
  }
}

// Login Function
function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const storedPassword = localStorage.getItem(username);

  if (password === storedPassword) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "profile.html";
  } else {
    alert("Invalid username or password.");
  }
}

// Display Username on Profile Page
function loadProfile() {
  const username = localStorage.getItem("loggedInUser");
  if (username) {
    document.getElementById("usernameDisplay").innerText = username;
  } else {
    window.location.href = "index.html";
  }
}

// Logout Function
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

// Check if User is Logged In on Profile Page
if (window.location.pathname.endsWith("profile.html")) {
  loadProfile();
}
