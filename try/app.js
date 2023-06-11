// Get the modal element
var modal = document.getElementById("modal");

// Get the modal image element
var modalImage = document.getElementById("modal-image");

// Get all the gallery images
var galleryImages = document.getElementsByClassName("gallery-image");

// Get the close button element
var closeButton = document.getElementsByClassName("close")[0];

// Attach click event listeners to each gallery image
for (var i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener("click", function (event) {
    // Display the modal
    modal.style.display = "block";

    // Set the source of the modal image to the clicked image
    modalImage.src = event.target.src;
  });
}

// Attach click event listener to the close button
closeButton.addEventListener("click", function () {
  // Hide the modal
  modal.style.display = "none";
});
