document.addEventListener("DOMContentLoaded", function() {
    // Select all iframe tool elements with icons
    var iconElements = document.querySelectorAll("iframe .icon-book");

    // Change the class to video icon for each element
    iconElements.forEach(function(icon) {
        icon.classList.remove("icon-book");
        icon.classList.add("icon-video"); // Ensure you have appropriate styling for .icon-video in your CSS
    });
});