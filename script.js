// Fade-in Animation
const boxes = document.querySelectorAll('.property-card, .why-box');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

boxes.forEach(box => observer.observe(box));

