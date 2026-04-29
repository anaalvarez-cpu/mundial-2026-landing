document.addEventListener('DOMContentLoaded', () => {
    
    // Sticky Nav Logic
    const nav = document.querySelector('.sticky-nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            // Scrolling down
            nav.classList.add('hidden');
        } else {
            // Scrolling up
            nav.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });

    // Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Form Submission Simulation
    const form = document.getElementById('strategy-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            
            // Simulate processing
            btn.textContent = 'Enviando...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            setTimeout(() => {
                form.style.display = 'none';
                if (thankYouMessage) {
                    thankYouMessage.style.display = 'block';
                }
            }, 1500);
        });
    }
});
