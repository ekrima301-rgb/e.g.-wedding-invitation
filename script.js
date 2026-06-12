document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const openBtn = document.getElementById('open-btn');
    const envelope = document.querySelector('.envelope');
    const mainContent = document.getElementById('main-content');
    const envelopeSection = document.getElementById('envelope-section');
    const musicBtn = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    
    // Hide loading screen
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => loadingScreen.style.display = 'none', 500);
        }, 1000);
    });

    // Envelope opening logic
    openBtn.addEventListener('click', () => {
        envelope.classList.add('open');
        
        setTimeout(() => {
            envelopeSection.style.opacity = '0';
            envelopeSection.style.transition = 'opacity 1s ease';
            
            setTimeout(() => {
                envelopeSection.classList.add('hidden');
                mainContent.classList.remove('hidden');
                window.scrollTo(0, 0);
                initMainContent();
            }, 1000);
        }, 1500);
    });

    // Music Toggle
    let isMusicPlaying = false;
    musicBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicBtn.querySelector('.icon').textContent = '🔇';
        } else {
            bgMusic.play().catch(e => console.log("Audio play blocked"));
            musicBtn.querySelector('.icon').textContent = '🎵';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    function initMainContent() {
        createParticles();
        startCountdown();
        initScrollAnimations();
        generateQRCode();
        setupShare();
        setupCalendar();
    }

    // Particles effect
    function createParticles() {
        const container = document.getElementById('particles');
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            container.appendChild(particle);
        }
    }

    // Countdown Timer
    function startCountdown() {
        const weddingDate = new Date('June 21, 2026 20:00:00').getTime();
        
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            
            if (distance < 0) {
                clearInterval(timer);
                document.getElementById('countdown').innerHTML = "لقد بدأت الفرحة!";
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').innerText = days.toString().padStart(2, '0');
            document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
            document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
        }, 1000);
    }

    // Scroll Animations
    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }

    // QR Code Generation (Using a simple API for pure JS implementation)
    function generateQRCode() {
        const currentUrl = window.location.href;
        const qrContainer = document.getElementById('qr-code');
        const qrImg = document.createElement('img');
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`;
        qrImg.alt = "QR Code";
        qrContainer.appendChild(qrImg);
    }

    // WhatsApp Share
    function setupShare() {
        const shareBtn = document.getElementById('whatsapp-share');
        shareBtn.addEventListener('click', () => {
            const text = `نتشرف بدعوتكم لحضور حفل زفاف أحمد وشهد يوم الأحد 21 يونيو 2026. لمشاهدة الدعوة كاملة: ${window.location.href}`;
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
        });
    }

    // Calendar logic
    function setupCalendar() {
        const calBtn = document.getElementById('add-to-calendar');
        calBtn.addEventListener('click', () => {
            const title = "حفل زفاف أحمد وشهد";
            const details = "نتشرف بحضوركم ومشاركتنا فرحتنا في دار ضباط النقل أمام قصر محمد علي";
            const location = "دار ضباط النقل، القاهرة";
            const startDate = "20260621T200000";
            const endDate = "20260621T235900";
            
            const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
            window.open(googleUrl, '_blank');
        });
    }
});
