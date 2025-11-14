function aktualizujZegar() {
            const teraz = new Date();

            const dzien = String(teraz.getDate()).padStart(2, '0');
            const miesiac = String(teraz.getMonth() + 1).padStart(2, '0');
            const rok = teraz.getFullYear();

            const godzina = String(teraz.getHours()).padStart(2, '0');
            const minuta = String(teraz.getMinutes()).padStart(2, '0');
            const sekunda = String(teraz.getSeconds()).padStart(2, '0');

            const tekst = `Dziś jest: ${dzien}.${miesiac}.${rok}, godzina: ${godzina}:${minuta}:${sekunda}`;
            document.getElementById('clock').textContent = tekst;
        }

        aktualizujZegar();
        setInterval(aktualizujZegar, 1000);


const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        function czyszczBledy() {
            document.getElementById('imieError').style.display = 'none';
            document.getElementById('emailError').style.display = 'none';
            document.getElementById('wiadomoscError').style.display = 'none';
        }

        function pokazBledEmail() {
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const email = emailInput.value.trim();

            if (!email) {
                emailError.textContent = 'Pole wymagane';
                emailError.style.display = 'block';
                return false;
            }

            if (!email.includes('@')) {
                emailError.textContent = 'Email musi zawierać @';
                emailError.style.display = 'block';
                return false;
            }

            return true;
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            czyszczBledy();

            const imie = document.getElementById('imie').value.trim();
            const email = document.getElementById('email').value.trim();
            const wiadomosc = document.getElementById('wiadomosc').value.trim();

            let jestBlad = false;

            if (!imie) {
                document.getElementById('imieError').style.display = 'block';
                jestBlad = true;
            }

            if (!email) {
                document.getElementById('emailError').style.display = 'block';
                jestBlad = true;
            } else if (!email.includes('@')) {
                document.getElementById('emailError').textContent = 'Email musi zawierać @';
                document.getElementById('emailError').style.display = 'block';
                jestBlad = true;
            }

            if (!wiadomosc) {
                document.getElementById('wiadomoscError').style.display = 'block';
                jestBlad = true;
            }

            if (!jestBlad) {
                alert(`Dziękuję ${imie}! Twoja wiadomość została wysłana.`);
                successMessage.style.display = 'block';
                form.reset();

                setTimeout(function() {
                    successMessage.style.display = 'none';
                }, 3000);
            }
        });

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        const buttons = document.querySelectorAll('.nav-button');
        const originalColor = '#550A68A6';
        const hoverColor = '#b92795ff';

        buttons.forEach(function(button) {
            button.addEventListener('mouseenter', function() {
                this.style.backgroundColor = hoverColor;
            });

            button.addEventListener('mouseleave', function() {
                this.style.backgroundColor = originalColor;
            });
        });