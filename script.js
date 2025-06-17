

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


const texts = ["Architectural drafter", "Graphic Designer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typed-text').textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
            type();
        }, 2000);
    } else {
        setTimeout(type, 100);
    }
})();

let currentIndex = 0;
let isAnimating = false;

const serviceTitle = document.getElementById('serviceTitle');
const serviceDescription = document.getElementById('serviceDescription');
const serviceFeatures = document.getElementById('serviceFeatures');
const serviceImage = document.getElementById('serviceImage');
const serviceInfo = document.getElementById('serviceInfo');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator-dot');

function updateService(newIndex, direction = 'right') {
    if (isAnimating) return;
    isAnimating = true;


    serviceInfo.classList.add('fade-out');

    if (direction === 'right') {
        serviceImage.classList.add('slide-out-right');
    } else {
        serviceImage.classList.add('slide-out-left');
    }

    setTimeout(() => {

        currentIndex = newIndex;
        const service = services[currentIndex];

        serviceTitle.textContent = service.title;
        serviceDescription.textContent = service.description;

        serviceFeatures.innerHTML = service.features
            .map(feature => `<li>${feature}</li>`)
            .join('');

        serviceImage.src = service.image;
        serviceImage.alt = service.title;

        indicators.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });


        serviceInfo.classList.remove('fade-out');
        serviceImage.classList.remove('slide-out-right', 'slide-out-left');

        setTimeout(() => {
            isAnimating = false;
        }, 100);
    }, 400);
}

function nextService() {
    const newIndex = (currentIndex + 1) % services.length;
    updateService(newIndex, 'right');
}

function prevService() {
    const newIndex = (currentIndex - 1 + services.length) % services.length;
    updateService(newIndex, 'left');
}

nextBtn.addEventListener('click', nextService);
prevBtn.addEventListener('click', prevService);

indicators.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (index !== currentIndex) {
            const direction = index > currentIndex ? 'right' : 'left';
            updateService(index, direction);
        }
    });
});

setInterval(nextService, 7000);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextService();
    if (e.key === 'ArrowLeft') prevService();
});


const skills = document.querySelectorAll('.skills-container div');

const skillsObserverCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.style.opacity = 1; // Ensure it's visible
            entry.target.style.transform = 'translateY(0)'; // Reset transform
        }
    });
};

const skillsObserver = new IntersectionObserver(skillsObserverCallback, {
    threshold: 0.1
});

skills.forEach(skill => {
    skillsObserver.observe(skill);
});
