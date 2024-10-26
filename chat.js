const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");

// Display message in chat room
function displayMessage(message, type = "user") {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", type === "user" ? "user-message" : "system-message");
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send a message
function sendMessage() {
  const message = chatInput.value.trim();
  if (message) {
    displayMessage(message, "user");
    chatInput.value = "";
    // Simulate a response from another user
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
