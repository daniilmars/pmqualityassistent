document.addEventListener('DOMContentLoaded', () => {

    // --- Code für sanftes Scrollen ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Code für Fade-In Animationen beim Scrollen ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Animation startet, wenn 10% des Elements sichtbar sind
    });

    // Weisen Sie den Observer allen Sektionen und Karten zu
    document.querySelectorAll('section, .card').forEach(element => {
        element.classList.add('fade-in-section'); // Fügt die initiale Animationsklasse hinzu
        observer.observe(element);
    });

});