   // Animación de entrada para elementos
        document.addEventListener('DOMContentLoaded', function() {
            const contactItems = document.querySelectorAll('.contact-item');
            const socialLinks = document.querySelectorAll('.social-link');
            
            // Animar items de contacto con retraso escalonado
            contactItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 200 + (index * 100));
            });

            // Animar links sociales
            socialLinks.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'scale(0)';
                setTimeout(() => {
                    link.style.transition = 'all 0.4s ease';
                    link.style.opacity = '1';
                    link.style.transform = 'scale(1)';
                }, 600 + (index * 100));
            });

       
        });

        // Función para actualizar la imagen de perfil
        // Puedes reemplazar la URL con tu propia foto
        function updateProfileImage(imageUrl) {
            document.getElementById('profileImg').src = imageUrl;
        }

        // Ejemplo: updateProfileImage('tu-foto.jpg');