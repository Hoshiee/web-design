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

const textElement = document.getElementById('text');
        const texts = ['Web Developer', 'UI Designer', 'JavaScript Enthusiast', 'Tech Support', 'Napisz do mnie!'];

        let currentTextIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isWaiting = false;

        function typeWrite() {
            const currentText = texts[currentTextIndex];

            if (isWaiting) {
                return;
            }

            if (!isDeleting) {
                if (charIndex < currentText.length) {
                    textElement.textContent += currentText[charIndex];
                    charIndex++;
                    setTimeout(typeWrite, 100);
                } else {
                    isWaiting = true;
                    setTimeout(function() {
                        isWaiting = false;
                        isDeleting = true;
                        typeWrite();
                    }, 2000);
                }
            } else {
                if (charIndex > 0) {
                    textElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(typeWrite, 50);
                } else {
                    isDeleting = false;
                    currentTextIndex = (currentTextIndex + 1) % texts.length;
                    setTimeout(typeWrite, 500);
                }
            }
        }

        function zatrzymajAli() {
            alert('Efekt pisania został zatrzymany. Przeładuj stronę aby wznowić.');
        }

        typeWrite();