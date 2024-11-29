// Rotating skills
const skills = [
    "Python", "Java", "SQL", "MySQL", "database management",
    "Flask", "HTML", "CSS", "Git", "GitHub", "DSA", "DBMS", "OOP"
];
let skillIndex = 0;

function rotateSkills() {
    document.getElementById('skills').textContent = skills[skillIndex];
    skillIndex = (skillIndex + 1) % skills.length;
    setTimeout(rotateSkills, 2000);
}

// Show specific sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach((section) => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Initialize on page load
window.onload = function() {
    rotateSkills();
    showSection('about'); // Default section to show
};
