document.addEventListener('DOMContentLoaded', () => {

    // --- Bestehender Code für sanftes Scrollen ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Bestehender Code für das Formular ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[name="name"]').value;
            const lang = document.documentElement.lang;
            const message = lang === 'de' 
                ? `Vielen Dank, ${name}! Ihre Anfrage wurde (simuliert) versendet.`
                : `Thank you, ${name}! Your request has been (simulated) sent.`;
            
            alert(message);
            this.reset();
        });
    }

    // --- NEU: Code für Fade-In Animationen beim Scrollen ---
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