// Menu Hamburguer Functionality
const menuBtn = document.querySelector('.navbar .menu-btn');
const closeBtn = document.querySelector('.close-btn');
const sideMenu = document.querySelector('.side-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    sideMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    sideMenu.classList.remove('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
        menuBtn.classList.remove('active');
        sideMenu.classList.remove('active');
    }
});

// Smooth scrolling for menu links
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });
        
        // Close menu after clicking
        menuBtn.classList.remove('active');
        sideMenu.classList.remove('active');
    });
});

// Translation System
const translations = {
    pt: {
        sobreMim: "Sobre Mim",
        percurso: "Percurso Profissional",
        habilidades: "Habilidades",
        contactos: "Contactos",
        downloads: "Downloads",
        titulo: "GRAPHIC DESIGNER",
        sobreTexto1: "Sou o Diogo, licenciado em Engenharia Multimédia, apaixonado por oferecer experiências visuais ao nível de branding, edição de video e publicidade. Apesar de estar no início da minha carreira, tenho um forte sentido de criatividade sempre com entusiasmo e vontade de aprender.",
        interesses: "Principais Interesses:",
        interesse1: "Design de Identidade Visual",
        interesse2: "UI/UX Design",
        interesse3: "Edição de Vídeo Profissional",
        interesse4: "Desenvolvimento de Marca",
        exp1Titulo: "Graphic Designer - Restart",
        exp1Item1: "Criação de layouts e materiais digitais",
        exp1Item2: "Desenvolvimento de identidades visuais",
        exp1Item3: "Integração em equipa responsável por criação de conteúdo digital para marketing da empresa",
        exp2Titulo: "Técnico de Informática - Knowledge Academy",
        exp2Item1: "Suporte e gestão de produtos TI",
        exp2Item2: "Formação em aplicações Microsoft",
        exp2Item3: "Atendimento ao cliente",
        formacao: "FORMAÇÃO ACADÊMICA",
        formacaoTitulo: "ISTEC - Engenharia Multimédia",
        formacaoItem1: "Edição de vídeo avançada",
        formacaoItem2: "Criação de componentes UI/UX",
        formacaoItem3: "Modelação 3D",
        habilidadesTecnicas: "HABILIDADES TÉCNICAS",
        premiere: "PREMIERE PRO",
        premierePercent: "80%",
        illustrator: "ILLUSTRATOR",
        illustratorPercent: "80%",
        afterEffects: "AFTER EFFECTS",
        afterEffectsPercent: "80%",
        photoshop: "PHOTOSHOP",
        photoshopPercent: "85%",
        uiux: "UI/UX DESIGN",
        uiuxPercent: "75%",
        competencias: "COMPETÊNCIAS",
        trabalhoEquipa: "Trabalho em Equipa",
        trabalhoEquipaPercent: "90%",
        comunicacao: "Comunicação",
        comunicacaoPercent: "85%",
        aprendizado: "Aprendizagem Contínua",
        aprendizadoPercent: "95%",
        idiomas: "IDIOMAS",
        ingles: "Inglês",
        inglesNivel: "Avançado",
        portugues: "Português",
        portuguesNivel: "Nativo",
        telefone: "+351 933 402 201",
        email: "diogo.silvanoduarte@gmail.com",
        downloadCV: "Download CV",
        downloadPortfolio: "Download Portfólio"
    },
    en: {
        sobreMim: "About Me",
        percurso: "Professional Experience",
        habilidades: "Skills",
        contactos: "Contacts",
        downloads: "Downloads",
        titulo: "GRAPHIC DESIGNER",
        sobreTexto1: "I'm Diogo, with a degree in Multimedia Engineering, passionate about delivering visual experiences in branding, video editing and advertising. Although at the beginning of my career, I have a strong creative sense always with enthusiasm and willingness to learn.",
        interesses: "Main Interests:",
        interesse1: "Visual Identity Design",
        interesse2: "UI/UX Design",
        interesse3: "Professional Video Editing",
        interesse4: "Brand Development",
        exp1Titulo: "Graphic Designer - Restart",
        exp1Item1: "Creation of layouts and digital materials",
        exp1Item2: "Development of visual identities",
        exp1Item3: "Integration in team responsible for creating digital content for company marketing",
        exp2Titulo: "IT Technician - Knowledge Academy",
        exp2Item1: "IT product support and management",
        exp2Item2: "Training in Microsoft applications",
        exp2Item3: "Customer service",
        formacao: "EDUCATION",
        formacaoTitulo: "ISTEC - Multimedia Engineering",
        formacaoItem1: "Advanced video editing",
        formacaoItem2: "UI/UX component creation",
        formacaoItem3: "3D Modeling",
        habilidadesTecnicas: "TECHNICAL SKILLS",
        premiere: "PREMIERE PRO",
        premierePercent: "80%",
        illustrator: "ILLUSTRATOR",
        illustratorPercent: "80%",
        afterEffects: "AFTER EFFECTS",
        afterEffectsPercent: "80%",
        photoshop: "PHOTOSHOP",
        photoshopPercent: "85%",
        uiux: "UI/UX DESIGN",
        uiuxPercent: "75%",
        competencias: "SKILLS",
        trabalhoEquipa: "Teamwork",
        trabalhoEquipaPercent: "90%",
        comunicacao: "Communication",
        comunicacaoPercent: "85%",
        aprendizado: "Continuous Learning",
        aprendizadoPercent: "95%",
        idiomas: "LANGUAGES",
        ingles: "English",
        inglesNivel: "Advanced",
        portugues: "Portuguese",
        portuguesNivel: "Native",
        telefone: "+351 933 402 201",
        email: "diogo.silvanoduarte@gmail.com",
        downloadCV: "Download CV",
        downloadPortfolio: "Download Portfolio"
    }
};

let currentLang = 'pt';
const translateBtn = document.querySelector('.translate-btn');

function applyTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

translateBtn.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    translateBtn.textContent = currentLang === 'pt' ? 'EN/PT' : 'PT/EN';
    applyTranslations(currentLang);
});

// Sistema de Galeria Dinâmico
const projects = [
    {
        id: 1,
        title: "Projeto Branding XYZ",
        images: [
            "img/projeto1-1.jpg",
            "img/projeto1-2.jpg",
            "img/projeto1-3.jpg"
        ],
        description: "Desenvolvimento completo da identidade visual para a marca XYZ. Processo incluiu pesquisa de mercado, criação de moodboard, desenvolvimento de logotipo, paleta de cores e aplicação em diversos materiais. O desafio principal foi transmitir a essência moderna e sustentável da marca."
    },
    {
        id: 2,
        title: "Campanha Publicitária ABC",
        images: [
            "img/projeto2-1.jpg",
            "img/projeto2-2.jpg"
        ],
        description: "Criação de campanha digital para lançamento do novo produto ABC. Desenvolvi o conceito visual, direção de arte e materiais para redes sociais. A campanha resultou em um aumento de 35% no engajamento da marca."
    },
    {
        id: 3,
        title: "Redesign App Mobile",
        images: [
            "img/projeto3-1.jpg",
            "img/projeto3-2.jpg",
            "img/projeto3-3.jpg"
        ],
        description: "Redesign completo da interface do aplicativo mobile, focando em melhorar a experiência do usuário e aumentar a taxa de conversão. Trabalhei em estreita colaboração com a equipe de desenvolvimento para implementar as melhorias."
    },
    {
        id: 4,
        title: "Editorial Design Revista",
        images: [
            "img/projeto4-1.jpg",
            "img/projeto4-2.jpg"
        ],
        description: "Design editorial para revista especializada. Desenvolvi o layout, tipografia e hierarquia visual para 12 edições, garantindo consistência de marca enquanto oferecia designs únicos para cada tema."
    }
];

const galleryContainer = document.getElementById('gallery-container');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-project-title');
const modalImages = document.getElementById('modal-project-images');
const modalDescription = document.getElementById('modal-project-description');
const closeModal = document.querySelector('.close-modal');

// Carrega os projetos na galeria
function loadProjects() {
    galleryContainer.innerHTML = '';
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'gallery-item';
        projectElement.innerHTML = `
            <img src="${project.images[0]}" alt="${project.title}">
        `;
        projectElement.addEventListener('click', () => openProjectModal(project));
        galleryContainer.appendChild(projectElement);
    });
}

// Abre o modal com os detalhes do projeto
function openProjectModal(project) {
    modalTitle.textContent = project.title;
    modalImages.innerHTML = '';
    modalDescription.textContent = project.description;
    
    project.images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = project.title;
        modalImages.appendChild(imgElement);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fecha o modal
function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners para o modal
closeModal.addEventListener('click', closeProjectModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            if (entry.target.id === 'habilidades') {
                const skills = entry.target.querySelectorAll('.skill');
                
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        const circle = skill.querySelector('.progress');
                        const percentage = skill.getAttribute('data-percentage');
                        const radius = circle.r.baseVal.value;
                        const circumference = 2 * Math.PI * radius;
                        
                        circle.style.strokeDasharray = circumference;
                        circle.style.strokeDashoffset = circumference;
                        
                        setTimeout(() => {
                            circle.style.strokeDashoffset = circumference - (percentage / 100) * circumference;
                        }, 100);
                        
                        const percentElement = skill.querySelector('.percentage');
                        let current = 0;
                        const target = parseInt(percentage);
                        const increment = target / 30;
                        
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            percentElement.textContent = Math.round(current) + '%';
                        }, 50);
                        
                    }, index * 200);
                });
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('section, .video-container').forEach(element => {
    observer.observe(element);
});

// Função para adicionar um novo projeto
function addNewProject(title, images, description) {
    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    const newProject = {
        id: newId,
        title: title,
        images: images,
        description: description
    };
    projects.push(newProject);
    loadProjects();
}

// Função para remover um projeto
function removeProject(projectId) {
    const index = projects.findIndex(p => p.id === projectId);
    if (index !== -1) {
        projects.splice(index, 1);
        loadProjects();
    }
}

// Animate progress bars on load
window.addEventListener('load', () => {
    document.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = bar.style.width;
    });
    
    applyTranslations(currentLang);
    
    // Update year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Load projects
    loadProjects();
});

/* 
   COMO ADICIONAR NOVOS PROJETOS:
   
   1. Chamar a função addNewProject():
   
   addNewProject(
       "Título do Projeto", 
       ["img/imagem1.jpg", "img/imagem2.jpg"], 
       "Descrição detalhada do projeto..."
   );
   
   2. Ou adicionar manualmente ao array 'projects':
   
   projects.push({
       id: 5, // Número único
       title: "Título do Projeto",
       images: ["img/imagem1.jpg", "img/imagem2.jpg"],
       description: "Descrição detalhada do projeto..."
   });
   loadProjects(); // Atualiza a galeria
*/