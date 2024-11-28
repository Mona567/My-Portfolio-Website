// Rotating skills
const skills = ["Python", "Java", "SQL", "OOP", "HTML", "CSS", "DSA"];
let skillIndex = 0;

function rotateSkills() {
    document.getElementById("skills").textContent = skills[skillIndex];
    skillIndex = (skillIndex + 1) % skills.length;
    setTimeout(rotateSkills, 2000);
}

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => section.classList.add("hidden"));

    // Show selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove("hidden");
    }
}

// Initialize
window.onload = function () {
    rotateSkills();
    showSection("about"); // Default to "About"
};
