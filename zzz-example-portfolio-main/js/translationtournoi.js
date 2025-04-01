const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",

        // Project Title
        project_charlies: "Charlie's Festival Adventure",

        // Section Titles
        project_context: "Context",
        project_progress: "Project Progress",
        technical_challenges: "Technical Challenges",
        skills_acquired: "Skills Acquired",
        conclusion: "Conclusion",

        // Context Section
        context_text_p1: "As part of the SAE 2.05 module, our team developed an ambitious project: designing and planning an international fighting game festival at the Montpellier Arena. This initiative aimed to create a unifying event for the fighting game community, particularly in southern France, a region rich in talent but often underrepresented in major events.",
        context_text_p2: "As a member of the organizing team, I participated in designing an immersive experience integrating three major tournaments: Super Smash Bros Ultimate, Tekken 8, and Street Fighter 6. Our goal was to create an event that would go beyond competition to foster community exchange and development.",

        // Project Progress
        project_progress_p1: "Our approach was structured around rigorous planning using Gantt and PERT diagrams. We developed an innovative economic model incorporating an 'Early Bird' ticketing strategy and established equitable cash prize distribution. Logistics management was optimized to accommodate a large number of participants while maintaining quality experience.",
        project_progress_p2: "The technical organization relied on robust infrastructure, combining an Oracle database for registration management, an NGINX server for web performance, and secure messaging solutions. Consultation with community experts, notably Ragyan for Super Smash Bros Ultimate, helped refine our technical choices.",

        // Technical Challenges
        challenges_title: "Technical Challenges",
        challenges_intro: "The main technical challenges encountered and resolved include:",
        challenges_infra_title: "Technical Infrastructure",
        challenges_infra_1: "Implementation of a robust Oracle database for registration and results management",
        challenges_infra_2: "Configuration of an NGINX server optimized for web performance",
        challenges_logistics_title: "Event Logistics",
        challenges_logistics_1: "Organization of three simultaneous major tournaments",
        challenges_logistics_2: "Management of participant and spectator flows",

        // Skills
        skills_text_p1: "This project allowed me to develop expertise in event project management, strategic planning, and complex technical infrastructure implementation. I particularly enhanced my skills in database management, server configuration, and large-scale logistics organization.",
        skills_text_p2: "The experience also strengthened my capabilities in financial management, teamwork, and stakeholder communication. The environmental and social dimensions of the project raised my awareness of the importance of a responsible approach in event organization.",

        // Conclusion
        conclusion_text: "Charlie's Festival Adventure represents more than just an academic exercise: it demonstrates our ability to design a large-scale event integrating technical, logistical, and community aspects. The methodology developed and skills acquired constitute a valuable foundation for future professional projects in event management or IT project management.",
        download_rapport:"Report Link",
        // Navigation
        see_on_gitlab: "See on GitHub",
        link_to_project: "Link to the project",
        previous_project: "← Previous Project",
        next_project: "Next Project →"
    },
    fr: {
        // Navigation
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",

        // Project Title
        project_charlies: "Charlie's Festival Adventure",

        // Section Titles
        project_context: "Contexte",
        project_progress: "Déroulement du Projet",
        technical_challenges: "Défis Techniques",
        skills_acquired: "Compétences Acquises",
        conclusion: "Conclusion",

        // Context Section
        context_text_p1: "Dans le cadre du module SAE 2.05, notre équipe a développé un projet ambitieux : concevoir et planifier un festival de jeux de combat d'envergure internationale à l'Arena de Montpellier. Cette initiative visait à créer un événement fédérateur pour la communauté des jeux de combat, particulièrement dans le sud de la France, une région riche en talents mais souvent sous-représentée dans les grands événements du genre.",
        context_text_p2: "En tant que membre de l'équipe organisatrice, j'ai participé à la conception d'une expérience immersive intégrant trois tournois majeurs : Super Smash Bros Ultimate, Tekken 8 et Street Fighter 6. Notre objectif était de créer un événement qui ne se limiterait pas à la compétition, mais qui favoriserait aussi les échanges et le développement de la communauté.",

        // Project Progress
        project_progress_p1: "Notre approche s'est structurée autour d'une planification rigoureuse utilisant les diagrammes de Gantt et PERT. Nous avons développé un modèle économique innovant intégrant une stratégie de billetterie 'Early Bird' et établi une distribution équitable des cashprizes. La gestion logistique a été optimisée pour accueillir un grand nombre de participants tout en maintenant une expérience de qualité.",
        project_progress_p2: "L'organisation technique s'est appuyée sur une infrastructure solide, combinant une base de données Oracle pour la gestion des inscriptions, un serveur NGINX pour les performances web, et des solutions de messagerie sécurisées. La consultation d'experts de la communauté, notamment Ragyan pour Super Smash Bros Ultimate, a permis d'affiner nos choix techniques.",

        // Technical Challenges
        challenges_title: "Défis Techniques",
        challenges_intro: "Les principaux défis techniques rencontrés et résolus incluent :",
        challenges_infra_title: "Infrastructure Technique",
        challenges_infra_1: "Mise en place d'une base de données Oracle robuste pour la gestion des inscriptions et résultats",
        challenges_infra_2: "Configuration d'un serveur NGINX optimisé pour les performances web",
        challenges_logistics_title: "Logistique Événementielle",
        challenges_logistics_1: "Organisation de trois tournois majeurs simultanés",
        challenges_logistics_2: "Gestion des flux de participants et spectateurs",

        // Skills
        skills_text_p1: "Ce projet m'a permis de développer une expertise dans la gestion de projet événementiel, la planification stratégique, et la mise en place d'infrastructures techniques complexes. J'ai notamment perfectionné mes compétences en gestion de bases de données, configuration de serveurs, et organisation logistique à grande échelle.",
        skills_text_p2: "L'expérience a également renforcé mes capacités en matière de gestion financière, de travail en équipe, et de communication avec les parties prenantes. La dimension environnementale et sociale du projet m'a sensibilisé à l'importance d'une approche responsable dans l'organisation d'événements.",

        // Conclusion
        conclusion_text: "Charlie's Festival Adventure représente plus qu'un simple exercice académique : c'est une démonstration de notre capacité à concevoir un événement d'envergure intégrant des aspects techniques, logistiques et communautaires. La méthodologie développée et les compétences acquises constituent un socle précieux pour de futurs projets professionnels dans l'événementiel ou la gestion de projet informatique.",
        download_rapport:"Lien du Rapport",
        // Navigation
        see_on_gitlab: "Voir sur GitHub",
        link_to_project: "Lien vers le projet",
        previous_project: "← Projet Précédent",
        next_project: "Projet Suivant →"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');

    function setLanguage(lang) {
        localStorage.setItem('selectedLanguage', lang);
        updateContent(lang);
    }

    function updateContent(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[lang][key];
        });
    }

    languageSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Charge la langue sauvegardée ou par défaut
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;
    updateContent(savedLanguage);
});