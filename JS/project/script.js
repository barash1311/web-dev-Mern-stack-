const chatHistory = document.getElementById("chat-history");
const userInput = document.getElementById("user-message");

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    appendMessage(userMessage, "user-message");
    userInput.value = ""; // Clear input field after sending

    const botResponse = getBotResponse(userMessage);
    appendMessage(botResponse, "bot-message");
  }
}

function getBotResponse(message) {
  const greetings = ["hi", "hello", "hey"];
  const questions = ["what can you do?", "how can you help me?"];

  if (greetings.includes(message.toLowerCase())) {
    return "Hi there! How can I assist you today?";
  } else if (questions.includes(message.toLowerCase())) {
    return "I can provide information on disaster preparedness, find resources during emergencies, and connect you with helpful links.";
  } else {
    // Default fallback message (can be improved later)
    return "Thanks for your message! I am still under development and learning to respond to various inquiries. How can I be more helpful?";
  }
}

function appendMessage(message, messageClass) {
  const li = document.createElement("li");
  li.classList.add(messageClass);
  li.innerText = message;
  chatHistory.appendChild(li);
  chatHistory.scrollTop = chatHistory.scrollHeight; // Auto-scroll to the bottom
}
