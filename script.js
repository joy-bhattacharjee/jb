// Add your JavaScript code here
// script.js

document.addEventListener("DOMContentLoaded", function () {
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
});