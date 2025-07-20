document.addEventListener('DOMContentLoaded', () => {
    // Sanftes Scrollen für alle Anker-Links auf der Seite
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Formular-Handling vorbereiten
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In der Zukunft: Hier Logik für Formularversand einfügen
            const name = this.querySelector('input[name="name"]').value;
            const lang = document.documentElement.lang;
            const message = lang === 'de' 
                ? `Vielen Dank, ${name}! Ihre Anfrage wurde (simuliert) versendet.`
                : `Thank you, ${name}! Your request has been (simulated) sent.`;
            
            alert(message);
            this.reset();
        });
    }
});
