function toggleMenu() {
    const navList = document.getElementById("navList");
    navList.classList.toggle("show");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
        
        const navList = document.getElementById("navList");
        if (navList.classList.contains("show")) {
            navList.classList.remove("show");
        }
    });
});


function bukaBuku(url) {
    window.location.href = url;
}

function openLightbox(src) {

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    lightbox.style.display = "flex";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = "1000";

    const img = document.createElement("img");
    img.src = src;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.borderRadius = "8px";

    
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", function() {
        document.body.removeChild(lightbox);
    });
}


document.querySelectorAll(".photo-gallery img").forEach(image => {
    image.addEventListener("click", function() {
        openLightbox(image.src);
    });
});


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const button = document.getElementById("darkModeToggle");
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Mode Terang";
    } else {
        button.textContent = "Mode Gelap";
    }
}
