//zadanie 1.1
document.addEventListener('DOMContentLoaded', function() {
            alert('Witaj na mojej stronie portfolio!');
        });

        function pokazAlert() {
            alert('Witaj na mojej stronie portfolio!');
        }
// zadanie 1.2
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
// zadanie 1.3
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
// zadanie 2.1
function zaladujLicznik() {
            let visits = localStorage.getItem('visitCount');

            if (visits === null) {
                visits = 1;
                document.getElementById('visitBox').textContent = 'Witaj po raz pierwszy!';
            } else {
                visits = parseInt(visits) + 1;
            }

            localStorage.setItem('visitCount', visits);
            document.getElementById('visitCount').textContent = visits;

            if (visits === '1' || visits === 1) {
                document.getElementById('visitBox').innerHTML = '<div>Witaj po raz pierwszy!</div>';
            } else {
                document.getElementById('visitBox').innerHTML = `
                    <div>Liczba wizyt:</div>
                    <div class="counter-number">${visits}</div>
                    <div>To jest Twoja ${visits} wizyta na tej stronie!</div>
                `;
            }
        }

        function resetLicznik() {
            if (confirm('Na pewno chcesz zresetować licznik?')) {
                localStorage.removeItem('visitCount');
                zaladujLicznik();
            }
        }

        zaladujLicznik();

// zadanie 3.2
const slides = document.getElementById('slides');
        const slidesArray = document.querySelectorAll('.slide');
        const dotsContainer = document.getElementById('dots');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const slideCounter = document.getElementById('slideCounter');
        const sliderContainer = document.getElementById('sliderContainer');

        let currentSlide = 0;
        let autoplayInterval;

        for (let i = 0; i < slidesArray.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', function() {
                currentSlide = i;
                updateSlider();
                resetAutoplay();
            });
            dotsContainer.appendChild(dot);
        }

        function updateSlider() {
            const offset = -currentSlide * 100;
            slides.style.transform = `translateX(${offset}%)`;

            const dots = document.querySelectorAll('.dot');
            dots.forEach(function(dot, index) {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });

            slideCounter.textContent = (currentSlide + 1) + ' / ' + slidesArray.length;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slidesArray.length;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slidesArray.length) % slidesArray.length;
            updateSlider();
        }

        function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, 5000);
        }

        function resetAutoplay() {
            clearInterval(autoplayInterval);
            startAutoplay();
        }

        prevBtn.addEventListener('click', function() {
            prevSlide();
            resetAutoplay();
        });

        nextBtn.addEventListener('click', function() {
            nextSlide();
            resetAutoplay();
        });

        sliderContainer.addEventListener('mouseenter', function() {
            clearInterval(autoplayInterval);
        });

        sliderContainer.addEventListener('mouseleave', function() {
            startAutoplay();
        });

        startAutoplay();
// zadanie 3.3
const textElement = document.getElementById('text');
        const texts = ['Web Developer', 'UI Designer', 'JavaScript Ninja'];

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