
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


window.addEventListener("load", function () {
    document.querySelector(".loading-screen").style.display = "none";
});


document.addEventListener("scroll", function () {
    document.querySelectorAll(".animate-text").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});


document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function () {
        button.style.transform = "scale(0.9)";
        setTimeout(() => button.style.transform = "scale(1)", 200);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".filter-search");
    const categoryFilter = document.querySelector(".filter-category");
    const productCards = document.querySelectorAll(".product-card");

    function filterProducts() {
        const searchText = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value.toLowerCase();

        productCards.forEach(card => {
            const productName = card.querySelector(".product-name").textContent.toLowerCase();
            const productCategory = card.dataset.category.toLowerCase();

            if (productName.includes(searchText) && (selectedCategory === "all categories" || productCategory.includes(selectedCategory))) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);
});


document.addEventListener("DOMContentLoaded", function () {
    let categoryDropdown = document.querySelector(".dropdown > a");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    categoryDropdown.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!categoryDropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("active");
        }
    });
});


let bannerIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");

    bannerIndex++;
    if (bannerIndex > slides.length) bannerIndex = 1;

    slides[bannerIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
function changeSlide(n) {
    let slides = document.querySelectorAll(".slide");
    bannerIndex += n;

    if (bannerIndex > slides.length) bannerIndex = 1;
    if (bannerIndex < 1) bannerIndex = slides.length;

    slides.forEach(slide => slide.style.display = "none");
    slides[bannerIndex - 1].style.display = "block";
}
document.addEventListener("DOMContentLoaded", showSlides);


document.addEventListener("DOMContentLoaded", function () {
    let productContainer = document.querySelector(".product-container");
    let prevBtn = document.querySelector(".carousel-btn.prev");
    let nextBtn = document.querySelector(".carousel-btn.next");

    
    if (productContainer && prevBtn && nextBtn) {
        prevBtn.addEventListener("click", function () {
            productContainer.scrollBy({
                left: -300, 
                behavior: "smooth"
            });
        });

        nextBtn.addEventListener("click", function () {
            productContainer.scrollBy({
                left: 300, 
                behavior: "smooth"
            });
        });
    }
});

document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    document.querySelectorAll(".scroll-move").forEach((row, index) => {
        let speed = index % 2 === 0 ? 1.5 : -1.5; 
        let moveAmount = (scrollPosition * speed) / 20; 

        row.style.transform = `translateX(${moveAmount}px)`;
    });
});



function startCountdown(id, duration) {
    let display = document.getElementById(id);
    let countdown = duration;
    
    function updateTimer() {
        let hours = Math.floor(countdown / 3600);
        let minutes = Math.floor((countdown % 3600) / 60);
        let seconds = countdown % 60;
        display.textContent = `⏳ Time Left: ${hours}:${minutes}:${seconds}`;

        if (countdown > 0) {
            countdown--;
            setTimeout(updateTimer, 1000);
        } else {
            display.textContent = "⏳ Deal Expired";
        }
    }
    updateTimer();
}


document.addEventListener("DOMContentLoaded", function () {
    startCountdown("timer1", 3600);  
    startCountdown("timer2", 7200);  
});
