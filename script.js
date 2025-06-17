

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


const buttons = {
    'experiences-btn': {
        title: 'My Experiences',
        content: `
            <h2>My <span>Experiences</span></h2>
            <br>
            <p>
                I'm an aspiring Architectural Drafter with hands-on experience in 2D drafting and 3D modeling.
                I've worked on concept design projects using tools like AutoCAD, SketchUp, and Photoshop to create visual layouts and floor plans.
                I also contribute to team projects where I combine creativity with technical thinking to bring designs to life.
                Every project helps me grow, and I approach each one with curiosity and a desire to master the craft.
            </p>
        `
    },
    'skills-btn': {
        title: 'My Skills',
        content: `
            <h2>My <span>Skills</span></h2>
            <br>
            <p>I work with tools and technologies across both design and development:</p>
            <div class="skills-container">
                <div class="skill"><img src="AutoCad_new_logo.svg.png" alt="Autocad"></div>
                <div class="skill"><img src="revit-text-black.png" alt="Photoshop"></div>
                <div class="skill"><img src="adobe-illustrator-icon-free-png.png" alt="Illustrator"></div>
                <div class="skill"><img src="1691829322canva-app-logo-png.png" alt="Canva"></div>
                <div class="skill"><img src="lumion-3d-logo-png_seeklogo-268292-removebg-preview.png" alt="Architecture Board Tools"></div>
            </div>
        `
    },
    'education-btn': {
        title: 'My Education',
        content: `
            <h2>My <span>Education</span></h2>
            <br>
            <p>Currently training in architectural drafting and design, with a focus on technical accuracy, spatial thinking, and visual storytelling. I'm using this time to build solid skills, gain real project experience, and prepare for a future in design and architecture.</p>
            
        `
    },
};


const contentPanel = document.getElementById('content-panel');


function loadDefaultTab() {
    contentPanel.innerHTML = buttons['experiences-btn'].content;
}
loadDefaultTab();

Object.keys(buttons).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', () => {
          
            contentPanel.innerHTML = buttons[buttonId].content;

       
            document.querySelectorAll('.skills-buttons button').forEach(btn => {
                btn.setAttribute('aria-selected', 'false');
                btn.classList.remove('active');
            });

            button.setAttribute('aria-selected', 'true');
            button.classList.add('active');
        });
    }
});
