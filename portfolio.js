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


        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');

                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                this.classList.add('active');

                projectCards.forEach(function(card) {
                    if (filter === 'wszystkie') {
                        card.classList.remove('hidden');
                    } else {
                        if (card.getAttribute('data-category') === filter) {
                            card.classList.remove('hidden');
                        } else {
                            card.classList.add('hidden');
                        }
                    }
                });
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
