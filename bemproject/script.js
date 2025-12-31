document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Logika Scroll Navbar (Mengubah transparansi saat scroll)
    const header = document.querySelector('.navbar-container');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = "10px 0";
            header.style.background = "rgba(6, 78, 59, 0.98)";
        } else {
            header.style.padding = "15px 0";
            header.style.background = "#064e3b";
        }
    });

    // 2. Smooth Scrolling untuk Navigasi
    const navItems = document.querySelectorAll('.nav-item, .btn-aspirasi, .btn-secondary');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. Intersection Observer (Trigger Animasi Saat Scroll)
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in, .fade-in-left, .fade-in-right');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => animationObserver.observe(el));

    // 4. Highlight Nav Menu Saat Berada di Section Tertentu
    window.addEventListener('scroll', () => {
        let current = "";
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});