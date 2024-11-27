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

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

window.onload = () => {
    rotateSkills();
    showSection('about'); // Show 'About' section by default on page load
};
