document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const popupMenu = document.getElementById("popup-menu");

    menuButton.addEventListener("click", function() {
        if (popupMenu.style.display === "none" || popupMenu.style.display === "") {
            popupMenu.style.display = "block";
        } else {
            popupMenu.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const backButton = document.getElementById("back-button");
    const popupMenu = document.getElementById("popup-menu");

    menuButton.addEventListener("click", function() {
        menuButton.classList.add("hidden");
        backButton.classList.remove("hidden");
        popupMenu.style.display = "block";
    });

    backButton.addEventListener("click", function() {
        menuButton.classList.remove("hidden");
        backButton.classList.add("hidden");
        popupMenu.style.display = "none";
        
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const popupMenu = document.getElementById("popup-menu");
    const closeMenuButton = document.getElementById("close-menu");

    menuButton.addEventListener("click", function() {
        menuButton.classList.add("hidden");
        popupMenu.classList.remove("hidden");
    });

    closeMenuButton.addEventListener("click", function() {
        popupMenu.classList.add("hidden");
    });

    // Handle "Back to Home" button click
    const backToHomeButton = document.getElementById("back-to-home");
    backToHomeButton.addEventListener("click", function() {
        window.location.href = "index.html"; // Replace with your home page URL
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const popupMenu = document.getElementById("popup-menu");
    const closeMenuButton = document.getElementById("close-menu");

    menuButton.addEventListener("click", function() {
        popupMenu.style.display = "block";
    });

    closeMenuButton.addEventListener("click", function() {
        popupMenu.style.display = "none";
    });

    // Handle "Back to Home" button click
    const backToHomeButton = document.getElementById("back-to-home");
    backToHomeButton.addEventListener("click", function() {
        window.location.href = "index.html"; // Replace with your home page URL
    });
});
// JavaScript to control video and page visibility

document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.getElementById("video-background");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    videoElement.addEventListener("ended", function() {
        // When the video ends, hide page 1 and display page 2
        page1.style.display = "none";
        page2.style.display = "block";
        })
    });
        const logo = document.getElementById("logo-container");
            // Define the scroll event listener
    window.addEventListener("scroll", function() {
        // Calculate the opacity based on the scroll position
        const scrollY = window.scrollY;
        const maxScroll = 10; // Adjust this value to control the scroll range for opacity change
        const opacity = 1 - Math.min(1, scrollY / maxScroll);

        // Update the logo's opacity
        logo.style.opacity = opacity;

    logo.addEventListener("mouseenter", function() {
        // Add a hover effect (e.g., scaling the logo)
        logo.style.transform = "scale(1.1)";
        // You can also add other hover effects like changing opacity or background color
    });

    logo.addEventListener("mouseleave", function() {
        // Remove the hover effect (e.g., scale back to the original size)
        logo.style.transform = "scale(1)";
    });
        const logoLink = document.getElementById("logo-link");

    logoLink.addEventListener("click", function(event) {
        // Prevent the default behavior of the anchor element (e.g., navigating to a URL)
        event.preventDefault();

        // Define the URL you want to navigate to when the logo is clicked
        const targetURL = "index.html"; // Replace with your desired URL

        // Use JavaScript to navigate to the target URL
        window.location.href = targetURL;

    });


});
