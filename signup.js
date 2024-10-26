// Import the necessary Firebase modules
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQmKesrD32r3-tesiYbR9s4PapU00v4R4",
    authDomain: "minigames-e5e0f.firebaseapp.com",
    projectId: "minigames-e5e0f",
    storageBucket: "minigames-e5e0f.appspot.com",
    messagingSenderId: "1046640658799",
    appId: "1:1046640658799:web:7436743a5b40059196c09a",
    measurementId: "G-LJKGWQXDJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle signup form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User signed up:", user);
            // Redirect to profile page or perform other actions
            window.location.href = "profile.html"; // Redirect to profile after sign up
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing up:", errorCode, errorMessage);
            alert(errorMessage); // Show error message to user
        });
});

// Handle Google sign-in
document.getElementById("googleSignInButton").addEventListener("click", function() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log("User signed in with Google:", user);
            // Redirect to profile page or perform other actions
            window.location.href = "profile.html"; // Redirect to profile after sign in
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing in with Google:", errorCode, errorMessage);
            alert(errorMessage); // Show error message to user
        });
});
