document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) { // Check if it's an internal link
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('.main-header').offsetHeight, // Adjust for fixed header
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const mainNav = document.querySelector('.main-nav');
                    const menuToggle = document.querySelector('.menu-toggle');
                    if (mainNav.classList.contains('nav-open')) {
                        mainNav.classList.remove('nav-open');
                        menuToggle.classList.remove('open');
                    }
                }
            } else {
                // For external links like "inventory.html"
                window.location.href = targetId;
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
        menuToggle.classList.toggle('open'); // Add a class for animating the toggle icon
    });

    // Intersection Observer for Animations (Example: Fade-in sections)
    const sections = document.querySelectorAll('.section-padding');

    const observerOptions = {
        root: null, // relative to the viewport
        threshold: 0.2, // trigger when 20% of the section is visible
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0; // Start invisible
        section.style.transform = 'translateY(50px)'; // Start below
        section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        sectionObserver.observe(section);
    });

    // Header Shrink on Scroll (Optional, adds a nice touch)
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // Darker on scroll
            header.style.padding = '15px 0';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            header.style.padding = '20px 0';
        }
    });

    // Simple Image Carousel for Inventory Preview (basic example)
    const gallerySlider = document.querySelector('.inventory-preview .gallery-slider');
    if (gallerySlider) {
        let scrollInterval;
        const scrollAmount = 370; // Width of image + gap

        const startScrolling = () => {
            scrollInterval = setInterval(() => {
                if (gallerySlider.scrollLeft + gallerySlider.clientWidth >= gallerySlider.scrollWidth) {
                    gallerySlider.scrollLeft = 0; // Loop back to start
                } else {
                    gallerySlider.scrollLeft += scrollAmount;
                }
            }, 3000); // Scroll every 3 seconds
        };

        const stopScrolling = () => {
            clearInterval(scrollInterval);
        };

        gallerySlider.addEventListener('mouseenter', stopScrolling);
        gallerySlider.addEventListener('mouseleave', startScrolling);

        startScrolling(); // Start auto-scrolling on load
    }
});