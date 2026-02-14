function createHearts() {
            const container = document.getElementById('heart-container');
            const icons = ['❤️', '💖', '💕', '✨', '🌸'];
            setInterval(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart text-2xl';
                heart.innerText = icons[Math.floor(Math.random() * icons.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
                heart.style.opacity = Math.random() * 0.5 + 0.5;
                container.appendChild(heart);
                setTimeout(() => heart.remove(), 4000);
            }, 500);
        }

        // Dodge button
        function dodge() {
            const btn = document.getElementById('no-btn');
            btn.style.position = 'fixed';
            btn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
            btn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
            btn.style.zIndex = '1000';
        }

        // Celebrate
        function celebrate() {
            document.getElementById('success-modal').style.display = 'flex';
            // Confetti
            for(let i=0; i<30; i++) {
                setTimeout(() => {
                    const h = document.createElement('div');
                    h.innerText = '❤️';
                    h.className = 'fixed z-[110] text-3xl';
                    h.style.left = Math.random() * 100 + 'vw';
                    h.style.top = '-50px';
                    h.style.transition = 'all 3s ease-in';
                    document.body.appendChild(h);
                    setTimeout(() => h.style.top = '110vh', 50);
                    setTimeout(() => h.remove(), 3500);
                }, i * 100);
            }
        }

        function closeModal() {
            document.getElementById('success-modal').style.display = 'none';
        }

        // Scroll reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        
        createHearts();