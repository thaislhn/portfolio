// Project data
const projects = [
    {
        id: 1,
        title: "Court Métrage Pop Culture",
        shortDescription: "Court métrage sur la pop culture",
        description: "Création d'un système de design complet pour une marque de mode éthique, mettant l'accent sur la durabilité et l'élégance intemporelle. Une approche holistique qui unifie l'identité visuelle à travers tous les points de contact.",
        image: "https://i.pinimg.com/736x/f8/c5/5a/f8c55ae0bd8c62dd381306c580ab1fd4.jpg",
        videoId: "dQw4w9WgXcQ",
        type: "video"
    },
    {
        id: 2,
        title: "Salle d'Arcade Memphis - Blender",
        shortDescription: "Modélisation 3D d'une salle d'arcade",
        description: "Conception d'une application mobile pour un service de livraison local, privilégiant une expérience utilisateur fluide et intuitive. Un projet qui allie fonctionnalité et esthétique pour servir la communauté locale.",
        image: "",
        videoId: "dQw4w9WgXcQ",
        type: "video"
    },
    {
        id: 3,
        title: "Le Fablab des Gobelins",
        shortDescription: "Découvrez le Fablab des Gobelins",
        description: "Développement de l'identité visuelle pour un festival d'art contemporain, créant une expérience immersive qui transcende les médias traditionnels. Une fusion entre art classique et design moderne.",
        image: "https://i.pinimg.com/736x/c9/fb/f7/c9fbf7ae24aa4d4aacc69b1e7fe9f734.jpg",
        videoId: "EhgghqJtQA8",
        type: "video"
    },
    {
        id: 4,
        title: "Photographie",
        shortDescription: "Découvrez mes photos",
        description: "Exploration artistique à travers la photographie, capturant des moments uniques et des perspectives inattendues. Une collection d'images qui racontent des histoires et évoquent des émotions.",
        image: "https://i.pinimg.com/564x/79/4b/0f/794b0fff82b5959d1cdc64c29fd88b57.jpg",
        type: "photo-gallery"
    },
    {
        id: 5,
        title: "Pochette CD",
        shortDescription: "Conception d'une pochette de C",
        description: "Conception et mise en page d'un magazine digital interactif dédié à l'art contemporain. Integration d'éléments multimédias et d'une navigation intuitive pour une expérience de lecture immersive.",
        image: "https://i.pinimg.com/736x/44/d7/ef/44d7ef24279af92d74609d6885f6ffee.jpg",
        type: "image"
    },
    {
        id: 6,
        title: "Lecteur Mp4",
        shortDescription: "Boutique en ligne artisanale",
        description: "Développement de l'interface utilisateur pour une plateforme e-commerce dédiée aux artisans locaux. Focus sur l'expérience utilisateur et la mise en valeur des produits artisanaux avec une esthétique moderne et épurée.",
        image: "https://i.pinimg.com/564x/b9/3d/30/b93d30f18f3c7e570fca394bd86cdb3f.jpg",
        type: "image"
    }
];

// Create project cards
function createProjectCards() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-aos', 'fade-up');
        card.onclick = () => showProjectDetail(project.id);

        // Utiliser toujours l'image pour la carte, même pour les projets de type vidéo
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.shortDescription}</p>
            </div>
        `;

        projectsGrid.appendChild(card);
    });
}

// Create project detail pages
function createProjectDetailPages() {
    const container = document.getElementById('project-details');
    container.innerHTML = '';

    projects.forEach(project => {
        const detailPage = document.createElement('div');
        detailPage.className = 'project-detail';
        detailPage.id = `project-${project.id}`;

        let mediaContent = '';
        if (project.type === 'video' && project.videoId) {
            mediaContent = `
                <div class="project-detail-video">
                    <div class="project-detail-video-container">
                        <iframe 
                            src="https://www.youtube.com/embed/${project.videoId}"
                            title="${project.title}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            `;
        } else if (project.type === 'photo-gallery') {
            mediaContent = `
                <div id="photo-grid">
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/87/e5/ce/87e5ce65acde203b14024090af10d015.jpg" alt="">
                        <p class="photo-caption"> </p>
                    </div>
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/89/8e/8b/898e8b2fab7726fd3d363bf4da05d0b2.jpg">
                        <p class="photo-caption"> </p>
                    </div>
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/38/9e/ee/389eee4f1d0006132a69325dc767a5bc.jpg" alt="">
                        <p class="photo-caption"> </p>
                    </div>
                </div>
                <div id="photo-grid">
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/eb/c7/54/ebc75472fd5db45d314b9b7930b8c9a7.jpg" alt="">
                        <p class="photo-caption"> </p>
                    </div>
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/ef/db/b0/efdbb0a9663caf99bd4dbab607ddb76a.jpg" alt="Ocean waves crashing on rocks">
                        <p class="photo-caption"> </p>
                    </div>
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/53/b9/a6/53b9a67e07bda74411dff4cc28e3a1eb.jpg" alt="Ocean waves crashing on rocks">
                        <p class="photo-caption"> </p>
                    </div>
                </div>
                <div id="photo-grid">
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/be/d3/98/bed39853fb29a584366cf0f3c9cff735.jpg" alt="">
                        <p class="photo-caption"> </p>
                    </div>
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/5c/d9/6a/5cd96aca13f3c1d5b16401272d3c1f95.jpg">
                        <p class="photo-caption"> </p>
                    </div>
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/37/a8/ba/37a8ba1aceed2f170305d2ced22da4f8.jpg" alt="https://i.pinimg.com/736x/bf/17/2d/bf172d76f3c9259386e41d5b25f969f6.jpg">
                        <p class="photo-caption"> </p>
                    </div>
                </div>
                <div id="photo-grid">
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/8c/a5/de/8ca5de623a30ee56eeb95f7911eadc16.jpg" alt="">
                        <p class="photo-caption"> </p>
                    </div>
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/bf/17/2d/bf172d76f3c9259386e41d5b25f969f6.jpg" alt="Ocean waves crashing on rocks">
                        <p class="photo-caption"> </p>
                    </div>
                    <div class="photo-item">
                        <img src="https://i.pinimg.com/736x/2f/c8/db/2fc8dbfbc502ae04291b59d613898c20.jpg" alt="Ocean waves crashing on rocks">
                        <p class="photo-caption"> </p>
                    </div>
                </div>
            `;
        } else {
            mediaContent = `<img src="${project.image}" alt="${project.title}" class="project-detail-image">`;
        }

        detailPage.innerHTML = `
            <button class="back-button" onclick="hideProjectDetail(${project.id})">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Retour
            </button>
            <div class="project-detail-header">
                ${mediaContent}
                <div class="project-detail-content">
                    <h1 class="project-detail-title">${project.title}</h1>
                    <p class="project-detail-description">${project.description}</p>
                </div>
            </div>
        `;

        container.appendChild(detailPage);
    });
}

// Show project detail
function showProjectDetail(projectId) {
    const detailPage = document.getElementById(`project-${projectId}`);
    detailPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hide project detail
function hideProjectDetail(projectId) {
    const detailPage = document.getElementById(`project-${projectId}`);
    detailPage.classList.remove('active');
    document.body.style.overflow = '';
}

// Add scroll animation
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    createProjectDetailPages();
    setupSmoothScroll();
    animateOnScroll();
    
    // Make functions available globally
    window.showProjectDetail = showProjectDetail;
    window.hideProjectDetail = hideProjectDetail;
});
