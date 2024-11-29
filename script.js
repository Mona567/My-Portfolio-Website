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
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Show the About section by default
window.onload = () => {
    showSection('about');
    rotateSkills();
};
