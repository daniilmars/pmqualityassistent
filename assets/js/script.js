document.addEventListener('DOMContentLoaded', () => {
    console.log('script.js loaded and DOMContentLoaded fired');

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
    }, 
    {
        threshold: 0.1
    });

    // Weisen Sie den Observer allen Sektionen und Karten zu
    document.querySelectorAll('section, .card, .pilot-box').forEach(element => {
        element.classList.add('fade-in-section');
        observer.observe(element);
    });

    // --- (Corrected) Code für Timeline ---
    const processSection = document.querySelector('.process-section');
    if (processSection) {
        
    }

    // --- Scroll-driven timeline animation ---
    const path1 = document.getElementById('path1');
    const path2 = document.getElementById('path2');
    const path3 = document.getElementById('path3');

    const updateTimelineAnimation = () => {
        if (!processSection || !path1 || !path2 || !path3) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const sectionTop = processSection.offsetTop;
        const sectionHeight = processSection.offsetHeight;
        const windowHeight = window.innerHeight;

        const scrollIntoSection = scrollTop - sectionTop;

        let progress = scrollIntoSection / (sectionHeight - windowHeight);
        progress = Math.max(0, Math.min(1, progress));

        const length1 = path1.getTotalLength();
        const length2 = path2.getTotalLength();
        const length3 = path3.getTotalLength();

        path1.style.strokeDasharray = length1;
        path2.style.strokeDasharray = length2;
        path3.style.strokeDasharray = length3;

        if (progress < 0.5) {
            // Phase 1: Animate paths 1 and 2
            const phase1Progress = progress * 2;
            path1.style.strokeDashoffset = length1 * (1 - phase1Progress);
            path2.style.strokeDashoffset = length2 * (1 - phase1Progress);
            path3.style.strokeDashoffset = length3;
        } else {
            // Phase 2: Animate path 3
            const phase2Progress = (progress - 0.5) * 2;
            path1.style.strokeDashoffset = 0;
            path2.style.strokeDashoffset = 0;
            path3.style.strokeDashoffset = length3 * (1 - phase2Progress);
        }
    };

    window.addEventListener('scroll', updateTimelineAnimation);
    window.addEventListener('load', updateTimelineAnimation);

    // --- (NEW) Code für Tooltip ---
    const milestoneGroups = document.querySelectorAll('.milestone-group');
    const tooltip = document.getElementById('timeline-tooltip');

    if (tooltip) {
        milestoneGroups.forEach(group => {
            group.addEventListener('mouseenter', (event) => {
                console.log("Mouse enter on milestone");
                const tooltipText = group.getAttribute('data-tooltip');
                if (tooltipText) {
                    tooltip.textContent = tooltipText;
                    tooltip.style.display = 'block';
                    tooltip.style.opacity = '1'; // Make it visible
                }
            });

            group.addEventListener('mousemove', (event) => {
                // Position the tooltip near the cursor
                // The offset (e.g., +15) prevents the tooltip from flickering
                tooltip.style.left = `${event.pageX + 15}px`;
                tooltip.style.top = `${event.pageY + 15}px`;
            });

            group.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0'; // Fade out
                // Use a timeout to allow the fade-out animation to complete
                setTimeout(() => {
                    tooltip.style.display = 'none';
                }, 200); // Must match the transition duration in CSS
            });
        });
    }
});