// Array of images to cycle through
const images = [
    "./Images/buddha-Tour.jpg",  // Image 1
    "./Images/result.jpg", // Image 2
    "./Images/staff.jpg", // Image 3
    "./Images/whole.jpg"  // Image 4
];

// Get the image element and buttons
const imageElement = document.getElementById("buddha-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentIndex = 0; // Keep track of the current image index

// Function to update the image
function updateImage(index) {
    // Ensure the index stays within bounds of the images array
    if (index < 0) {
        currentIndex = images.length - 1; // Loop back to the last image
    } else if (index >= images.length) {
        currentIndex = 0; // Loop back to the first image
    } else {
        currentIndex = index;
    }

    // Change the image src to the current image
    imageElement.src = images[currentIndex];
}

// Event listeners for the buttons
prevButton.addEventListener("click", () => {
    updateImage(currentIndex - 1); // Move to the previous image
});

nextButton.addEventListener("click", () => {
    updateImage(currentIndex + 1); // Move to the next image
});

// Optional: You can call updateImage to set an initial image when the page loads
updateImage(currentIndex); // Start at the first image

