

  function toggleMobileNav() {
            const hamburger = document.querySelector('.hamburger');
            const mobileNav = document.getElementById('mobileNav');
            
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
        }

        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                const hamburger = document.querySelector('.hamburger');
                const mobileNav = document.getElementById('mobileNav');
                
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            const hamburger = document.querySelector('.hamburger');
            const mobileNav = document.getElementById('mobileNav');
            
            if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });


        