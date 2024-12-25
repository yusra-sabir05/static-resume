type Education = {
  diploma: string;
  institution: string;
  year: string;
};

type Skill = string;

type WorkExperience = {
  position: string;
  company: string;
  years: string;
  description: string;
};

const educationData: Education[] = [
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

const skillsData: Skill[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
];

const workExperienceData: WorkExperience[] = [
  {
      position: "Frontend Developer",
      company: "Tech Solutions Inc.",
      years: "2022 - Present",
      description: "Developing user-friendly web applications using React and TypeScript.",
  },
];

// Function to render education cards
function renderEducation() {
  const cardGrid = document.querySelector('#education-content .card-grid') as HTMLElement;
  educationData.forEach(edu => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <h3 class="card-title">${edu.diploma}</h3>
          <h4 class="card-subtitle">${edu.institution}</h4>
          <p class="card-details">${edu.year}</p>
      `;
      cardGrid.appendChild(card);
  });
}

// Function to render skills
function renderSkills() {
  const skillList = document.querySelector('.skill-list') as HTMLElement;
  skillsData.forEach(skill => {
      const listItem = document.createElement('li');
      listItem.textContent = skill;
      skillList.appendChild(listItem);
  });
}

// Function to render work experience cards
function renderWorkExperience() {
  const cardGrid = document.querySelector('#work-experience-content .card-grid') as HTMLElement;
  workExperienceData.forEach(exp => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <h3 class="card-title">${exp.position}</h3>
          <h4 class="card-subtitle">${exp.company}</h4>
          <p class="card-details">${exp.years}</p>
          <p class="card-details">${exp.description}</p>
      `;
      cardGrid.appendChild(card);
  });
}

// Event listeners for tab switching
document.getElementById('education-tab')?.addEventListener('click', () => {
  document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
  document.getElementById('education-content')?.classList.add('active');
});

document.getElementById('skills-tab')?.addEventListener('click', () => {
  document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
  document.getElementById('skills-content')?.classList.add('active');
});

document.getElementById('experience-tab')?.addEventListener('click', () => {
  document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
  document.getElementById('work-experience-content')?.classList.add('active');
});

// Initial rendering
renderEducation();
renderSkills();
renderWorkExperience();