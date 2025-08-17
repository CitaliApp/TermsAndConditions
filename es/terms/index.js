// Terms and Conditions - Citali
// JavaScript for language selection and enhanced functionality

document.addEventListener('DOMContentLoaded', function() {
    // Language card hover effects
    const languageCards = document.querySelectorAll('.language-card');
    languageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Auto-redirect based on browser language (optional)
    const browserLang = navigator.language || navigator.userLanguage;
    const isSpanish = browserLang.startsWith('es');
    
    // Add a subtle indicator for the user's likely preferred language
    if (isSpanish) {
        const spanishCard = document.querySelector('a[href="es/terms/"]');
        if (spanishCard) {
            spanishCard.style.borderColor = '#10b981';
            spanishCard.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.15)';
        }
    } else {
        const englishCard = document.querySelector('a[href="en/terms/"]');
        if (englishCard) {
            englishCard.style.borderColor = '#10b981';
            englishCard.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.15)';
        }
    }

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade-in animation for sections
    const sections = document.querySelectorAll('.section, .language-selector');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
