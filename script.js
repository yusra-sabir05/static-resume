var _a, _b, _c;
var educationData = [
    {
        diploma: "Cloud Applied Generative AI Engineer",
        institution: "Governor Initiative For Artificial Intelligence and Computing",
        year: "2024",
    },
    {
        diploma: "Cloud Applied Generative AI Engineer",
        institution: "Presidential Initiative For Artificial Intelligence and Computing",
        year: "2024",
    },
];
var skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
];
var workExperienceData = [
    {
        position: "Frontend Developer",
        company: "Tech Solutions Inc.",
        years: "2022 - Present",
        description: "Developing user-friendly web applications using React and TypeScript.",
    },
];
// Function to render education cards
function renderEducation() {
    var cardGrid = document.querySelector('#education-content .card-grid');
    educationData.forEach(function (edu) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = "\n          <h3 class=\"card-title\">".concat(edu.diploma, "</h3>\n          <h4 class=\"card-subtitle\">").concat(edu.institution, "</h4>\n          <p class=\"card-details\">").concat(edu.year, "</p>\n      ");
        cardGrid.appendChild(card);
    });
}
// Function to render skills
function renderSkills() {
    var skillList = document.querySelector('.skill-list');
    skillsData.forEach(function (skill) {
        var listItem = document.createElement('li');
        listItem.textContent = skill;
        skillList.appendChild(listItem);
    });
}
// Function to render work experience cards
function renderWorkExperience() {
    var cardGrid = document.querySelector('#work-experience-content .card-grid');
    workExperienceData.forEach(function (exp) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = "\n          <h3 class=\"card-title\">".concat(exp.position, "</h3>\n          <h4 class=\"card-subtitle\">").concat(exp.company, "</h4>\n          <p class=\"card-details\">").concat(exp.years, "</p>\n          <p class=\"card-details\">").concat(exp.description, "</p>\n      ");
        cardGrid.appendChild(card);
    });
}
// Event listeners for tab switching
(_a = document.getElementById('education-tab')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a;
    document.querySelectorAll('.content-section').forEach(function (section) { return section.classList.remove('active'); });
    (_a = document.getElementById('education-content')) === null || _a === void 0 ? void 0 : _a.classList.add('active');
});
(_b = document.getElementById('skills-tab')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a;
    document.querySelectorAll('.content-section').forEach(function (section) { return section.classList.remove('active'); });
    (_a = document.getElementById('skills-content')) === null || _a === void 0 ? void 0 : _a.classList.add('active');
});
(_c = document.getElementById('experience-tab')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var _a;
    document.querySelectorAll('.content-section').forEach(function (section) { return section.classList.remove('active'); });
    (_a = document.getElementById('work-experience-content')) === null || _a === void 0 ? void 0 : _a.classList.add('active');
});
// Initial rendering
renderEducation();
renderSkills();
renderWorkExperience();
