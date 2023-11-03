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
    });
});
