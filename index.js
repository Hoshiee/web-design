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
// zadanie 3.4
const loading = document.getElementById('loading');
        const weatherWidget = document.getElementById('weatherWidget');
        const errorDiv = document.getElementById('error');
        const temperatureEl = document.getElementById('temperature');
        const descriptionEl = document.getElementById('weatherDescription');
        const emojiEl = document.getElementById('weatherEmoji');
        const detailsEl = document.getElementById('weatherDetails');

        function getWeatherEmoji(code) {
            if (code === 0) return '☀️';
            if (code === 1 || code === 2) return '🌤️';
            if (code === 3) return '☁️';
            if (code === 45 || code === 48) return '☁️';
            if (code === 51 || code === 53 || code === 55) return '🌧️';
            if (code === 61 || code === 63 || code === 65) return '🌧️';
            if (code === 71 || code === 73 || code === 75) return '❄️';
            if (code === 77) return '❄️';
            if (code === 80 || code === 81 || code === 82) return '🌧️';
            if (code === 85 || code === 86) return '❄️';
            if (code === 95 || code === 96 || code === 99) return '⛈️';
            return '🌤️';
        }

        function getWeatherDescription(code) {
            if (code === 0) return 'Słonecznie';
            if (code === 1 || code === 2) return 'Przeważnie słonecznie';
            if (code === 3) return 'Pochmurnie';
            if (code === 45 || code === 48) return 'Mgła';
            if (code === 51 || code === 53 || code === 55) return 'Mżawka';
            if (code === 61 || code === 63 || code === 65) return 'Deszcz';
            if (code === 71 || code === 73 || code === 75) return 'Śnieg';
            if (code === 77) return 'Śnieg';
            if (code === 80 || code === 81 || code === 82) return 'Przelotne opady';
            if (code === 85 || code === 86) return 'Przelotne opady śniegu';
            if (code === 95 || code === 96 || code === 99) return 'Burza';
            return 'Zmienna pogoda';
        }

        function fetchWeather() {
            const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&current_weather=true&timezone=auto';

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    loading.style.display = 'none';

                    const weather = data.current_weather;
                    const temp = Math.round(weather.temperature);
                    const code = weather.weather_code;
                    const windSpeed = Math.round(weather.windspeed);

                    temperatureEl.textContent = temp + '°C';
                    descriptionEl.textContent = getWeatherDescription(code);
                    emojiEl.textContent = getWeatherEmoji(code);
                    detailsEl.textContent = 'Wiatr: ' + windSpeed + ' km/h • Warszawa';

                    weatherWidget.style.display = 'block';
                })
                .catch(error => {
                    console.error('Błąd:', error);
                    loading.style.display = 'none';
                    errorDiv.style.display = 'block';
                });
        }

        fetchWeather();
// bonusowe
const projekty = [
            {
                emoji: '💻',
                nazwa: 'Portfolio Strona',
                opis: 'Profesjonalna strona portfolio z nowoczesnym designem. Zawiera sekcje o mnie, projekty i formularz kontaktowy.',
                info: 'Technologia: HTML, CSS, JavaScript | Status: Ukończony'
            },
            {
                emoji: '📱',
                nazwa: 'Todo App',
                opis: 'Aplikacja do zarządzania zadaniami z możliwością dodawania, edytowania i usuwania elementów. Dane przechowywane w localStorage.',
                info: 'Technologia: React Native | Status: Ukończony'
            },
            {
                emoji: '🎨',
                nazwa: 'UI Design Kit',
                opis: 'Kompletny zbiór komponentów UI gotowych do użytku w projektach. Zawiera buttony, karty, modele i wiele więcej.',
                info: 'Technologia: Figma, CSS | Status: W trakcie'
            },
            {
                emoji: '🌐',
                nazwa: 'E-Commerce Platform',
                opis: 'Pełnofunkcjonalny sklep internetowy z integracją płatności, koszykiem i systemem zarządzania produktami.',
                info: 'Technologia: React, Node.js, MongoDB | Status: Ukończony'
            },
            {
                emoji: '🎮',
                nazwa: 'Gra Mobilna',
                opis: 'Interaktywna gra mobilna z systemem punktów, poziomów i leaderboardu. Świetna zabawa dla wszystkich.',
                info: 'Technologia: Unity, C# | Status: Ukończony'
            },
            {
                emoji: '✨',
                nazwa: 'Branding Package',
                opis: 'Kompleksowa identyfikacja wizualna firmy obejmująca logo, paleta kolorów, typografię i materiały marketingowe.',
                info: 'Technologia: Adobe Creative Suite | Status: Ukończony'
            }
        ];

        function otworzykModal(index) {
            const projekt = projekty[index];
            document.getElementById('modalEmoji').textContent = projekt.emoji;
            document.getElementById('modalTitle').textContent = projekt.nazwa;
            document.getElementById('modalDescription').textContent = projekt.opis;
            document.getElementById('modalMeta').innerHTML = '<p><strong>Szczegóły:</strong> ' + projekt.info + '</p>';
            document.getElementById('projectModal').style.display = 'block';
        }

        function zamknijModal() {
            document.getElementById('projectModal').style.display = 'none';
        }

        function zamknijModalZKliku(event) {
            if (event.target === document.getElementById('projectModal')) {
                zamknijModal();
            }
        }

        function zapiszManifest() {
            const tekst = document.getElementById('manifestArea').value;
            if (tekst.trim()) {
                localStorage.setItem('moj_manifest', tekst);
                alert('✅ Manifest został zapisany!');
            } else {
                alert('⚠️ Wpisz coś, zanim zapiszesz!');
            }
        }

        window.addEventListener('load', function() {
            const zapisany = localStorage.getItem('moj_manifest');
            if (zapisany) {
                document.getElementById('manifestArea').value = zapisany;
            }
        });

        function animujStatystyki() {
            const stat1 = document.getElementById('stat1');
            const stat2 = document.getElementById('stat2');
            const stat3 = document.getElementById('stat3');
            const container = document.getElementById('statsContainer');

            const observer = new IntersectionObserver(function(entries) {
                if (entries[0].isIntersecting) {
                    let count1 = 0, count2 = 0, count3 = 0;

                    const interval = setInterval(function() {
                        if (count1 < 25) count1++;
                        if (count2 < 8) count2++;
                        if (count3 < 150) count3 += 5;

                        stat1.textContent = count1;
                        stat2.textContent = count2;
                        stat3.textContent = count3;

                        if (count1 === 25 && count2 === 8 && count3 === 150) {
                            clearInterval(interval);
                        }
                    }, 30);

                    observer.unobserve(container);
                }
            });

            observer.observe(container);
        }

        animujStatystyki();

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                zamknijModal();
            }
        });