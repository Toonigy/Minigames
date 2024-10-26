const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");

// Get the username from local storage
const username = localStorage.getItem("loggedInUser");

// Display message in chat room with username
function displayMessage(message, type = "user") {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", type === "user" ? "user-message" : "system-message");
    
    // Set the inner HTML to include the username and the message
    messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the bottom
}

// Send a message
function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        displayMessage(message, "user");
        chatInput.value = ""; // Clear input field

        // Simulate a response from another user or system
        setTimeout(() => {
            displayMessage("Hello! How can I help you?", "system");
        }, 1000);
    }
}

// Enter key sends message
chatInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
