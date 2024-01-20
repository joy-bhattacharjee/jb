// Add your JavaScript code here
// script.js

/* document.addEventListener("DOMContentLoaded", function () {
    // Array of image URLs
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        // Add more image URLs as needed
    ];

    // Reference to the gallery container
    const galleryContainer = document.getElementById("imageGallery");

    // Function to create image elements and append them to the gallery
    function createImageElement(imageUrl) {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = "Gallery Image";
        galleryContainer.appendChild(imgElement);
    }

    // Populate the gallery with images
    images.forEach((imageUrl) => {
        createImageElement(imageUrl);
    });
}); */
document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;

        appendMessage('You', userMessage);
        userInput.value = '';

        // Call your chatbot API or function here and get the response
        const botResponse = getBotResponse(userMessage);
        appendMessage('Bot', botResponse);
    }

    function appendMessage(sender, message) {
        chatBox.innerHTML += `<div><strong>${sender}:</strong> ${message}</div>`;
    }

    function getBotResponse(userMessage) {
        // Replace this with a call to your actual chatbot logic
        // You might need to make an API request or use a backend server
        // For simplicity, just echoing the user's message in this example
        return userMessage;
    }

    // Pressing Enter key also triggers the send button
    userInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});