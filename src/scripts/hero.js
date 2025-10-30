      const heroImage = document.getElementById('heroImage');
        let lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Si hacemos scroll hacia abajo
            if (scrollTop > lastScrollTop) {
                heroImage.classList.add('zoomed');
            } 
            // Si hacemos scroll hacia arriba y estamos cerca del inicio
            else if (scrollTop < 50) {
                heroImage.classList.remove('zoomed');
            }
            
            lastScrollTop = scrollTop;
        });