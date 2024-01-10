document.addEventListener("DOMContentLoaded", function() {
    const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];
    let currentSlide = 0;

    function showSlide(index) {
        const slide = slides[index];
        document.getElementById('imageSlide').src = `./assets/images/slideshow/${slide.image}`;
        document.getElementById('tagLine').innerHTML = slide.tagLine;

        // Update dot indicators
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Initial display
    showSlide(currentSlide);

    // Event listeners for next and previous buttons
    document.getElementById('rightarrow').addEventListener('click', nextSlide);
    document.getElementById('leftarrow').addEventListener('click', prevSlide);

    // Event listener for dot navigation
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});
