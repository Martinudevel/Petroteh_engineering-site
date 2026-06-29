const slider = document.querySelector('.slider');
        let isDown = false;
        let startX;
        let scrollLeft;

        // Când apeși click
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        // Când ieși cu mouse-ul de pe slider
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        // Când ridici click-ul
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        // Când miști mouse-ul
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return; // Se activează doar dacă ții click apăsat
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5; // Viteza de tragere (1.5 e un pic mai rapid)
            slider.scrollLeft = scrollLeft - walk;
        });
