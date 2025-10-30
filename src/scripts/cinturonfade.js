 const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // NO remover la clase después
                observer.unobserve(entry.target); // Solo deja de observar
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    document.addEventListener('DOMContentLoaded', () => {
        const elementos = document.querySelectorAll('.push-up');
        elementos.forEach(el => observer.observe(el));
    });