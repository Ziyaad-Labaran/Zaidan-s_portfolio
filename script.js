

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



const buttons = {
    'experiences-btn': {
        title: 'My Experiences',
        content: `
        <h2>My <span>Experiences</span></h2>
        <br>
        <br>
        <p>Aspiring Architectural Drafter building a strong foundation in 2D drafting, 3D modeling, and concept design. I'm learning through hands-on projects that combine structure, creativity, and clear communication — from floor plans to design layouts. Always curious, always improving, and ready to contribute meaningfully in any creative or technical space.</p>
        `
    },
    'skills-btn': {
        title: 'My Skills',
        content: `
         <h1>My <span>Skills</span></h1>
                <br>
                <p>I have strong skills in a variety of technologies and tools including:</p>
                <div class="skills-container">
                    <div class="skill"><img src="https://cdn-icons-png.flaticon.com/128/732/732212.png" alt="HTML5">
                    </div>
                    <div class="skill"><img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="CSS3">
                    </div>
                    <div class="skill"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                            alt="JavaScript"></div>
                    <div class="skill"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968705.png" alt="Figma">
                    </div>
                    <div class="skill"><img src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" alt="React">
                    </div>
                    <div class="skill"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968520.png"
                            alt="Photoshop"></div>
                             <div class="skill"><img src="adobe-illustrator-icon-free-png.png"
                            alt="illustrator"></div>
                               <div class="skill"><img src="1691829322canva-app-logo-png.png"
                            alt="canva"></div>
                            <div class="skill"><img src="174881.png"
                            alt="canva"></div>
                </div> 
            </div>`
    },
    'education-btn': {
        title: 'My Education',
        content: `
        <h2>My <span>Education</span></h2>
        <br>
        <p>I hold the following academic qualifications:</p>
        <br>
        <ul>
          <li>West African Senior School Certificate (2021-2024)</li>
          <li>Pearson BTEC Level 2 Certificate in Creative Media Skills (2024 - 2025)</li>
        </ul>`
    },
};