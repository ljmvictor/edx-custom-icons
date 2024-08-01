document.addEventListener("DOMContentLoaded", function() {
    // Include FontAwesome CSS
    var fontAwesomeLink = document.createElement("link");
    fontAwesomeLink.rel = "stylesheet";
    fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(fontAwesomeLink);

    // Function to change the book icon to video icon
    function changeIcons() {
        // Select all iframe tool elements with book icons
        var iconElements = document.querySelectorAll(".icon-book");

        // Change the class to video icon for each element
        iconElements.forEach(function(icon) {
            icon.classList.remove("icon-book");
            icon.classList.add("fa", "fa-video"); // FontAwesome video icon class
        });
    }

    // Wait for FontAwesome to load before changing icons
    fontAwesomeLink.onload = function() {
        changeIcons();
    };
});
