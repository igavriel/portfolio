const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",

        // E-commerce Project Page
        project_ecommerce: "E-commerce Platform Development",
        project_context: "Context",
        project_progress: "Project Progress",
        technical_challenges: "Technical Challenges",
        skills_acquired: "Skills Acquired",
        conclusion: "Conclusion",
        see_on_gitlab: "See on GitHub",
        link_to_project: "Link to the project",

        // Context
        context_text_p1: "As part of my web development journey, I participated in the complete creation of an e-commerce platform in PHP. This ambitious project required a methodical approach and close collaboration between team members, putting into practice the fundamental concepts of modern web development.",

        // Project Progress
        architecture_title: "Architecture and Structure",
        architecture_1: "Rigorous implementation of MVC pattern",
        architecture_2: "Implementation of an optimized relational database",
        architecture_3: "Development of a modular and scalable architecture",
        architecture_4: "Deployment on IUT's webinfo infrastructure",

        features_title: "Main Features",
        features_1: "Complete product and category management",
        features_2: "Robust authentication system",
        features_3: "Advanced shopping cart management",
        features_4: "Complete admin interface",
        features_5: "Product filtering and sorting system",
        features_6: "Order history",

        // Technical Challenges
        challenges_intro: "As the lead developer for several critical features, I tackled numerous technical challenges:",
        challenges_1: "Implementation of a sophisticated cart management system with dynamic quantity handling",
        challenges_2: "Development of a flash message system for better user experience",
        challenges_3: "Creation of a secure login system with brute force attack protection",
        challenges_4: "Implementation of supplier management with complex city-supplier relationships",
        challenges_5: "Design of a responsive and ergonomic interface",
        challenges_6: "Development of a user registration system with email validation",

        // Skills
        skills_1: "Advanced mastery of PHP and MySQL",
        skills_2: "Expertise in MVC development",
        skills_3: "Advanced web security skills",
        skills_4: "Project management with Git",
        skills_5: "Responsive design and UX/UI",
        skills_6: "Collaborative work and version control",

        // Conclusion
        conclusion_text: "This e-commerce project has been an exceptionally enriching learning experience in the field of web development. The complexity of the implemented features and the need to maintain a clean and scalable architecture have allowed for developing a deep understanding of modern web development challenges. The collaborative dimension of the project, particularly through version control with Git and coordination between different parts of the system, has strengthened my ability to work effectively in a team and maintain quality code.",

        previous_project: "← Previous Project",
        next_project: "Next Project →"
    },
    fr: {
        // Navigation
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",

        // Page Projet E-commerce
        project_ecommerce: "Développement d'une Plateforme E-commerce",
        project_context: "Contexte",
        project_progress: "Déroulement du Projet",
        technical_challenges: "Défis Techniques",
        skills_acquired: "Compétences Acquises",
        conclusion: "Conclusion",
        see_on_gitlab: "Voir sur GitHub",
        link_to_project: "Lien vers le projet",

        // Contexte
        context_text_p1: "Dans le cadre de mon parcours en développement web, j'ai participé à la création complète d'une plateforme e-commerce en PHP. Ce projet ambitieux a nécessité une approche méthodique et une collaboration étroite entre les membres de l'équipe, mettant en pratique les concepts fondamentaux du développement web moderne.",

        // Déroulement du Projet
        architecture_title: "Architecture et Structure",
        architecture_1: "Implémentation rigoureuse du pattern MVC",
        architecture_2: "Mise en place d'une base de données relationnelle optimisée",
        architecture_3: "Développement d'une architecture modulaire et évolutive",
        architecture_4: "Déploiement sur l'infrastructure webinfo de l'IUT",

        features_title: "Fonctionnalités Principales",
        features_1: "Gestion complète des produits et catégories",
        features_2: "Système d'authentification robuste",
        features_3: "Gestion avancée du panier d'achat",
        features_4: "Interface administrateur complète",
        features_5: "Système de filtrage et de tri des produits",
        features_6: "Historique des commandes",

        // Défis Techniques
        challenges_intro: "En tant que développeur principal de plusieurs fonctionnalités critiques, j'ai relevé de nombreux défis techniques :",
        challenges_1: "Implémentation d'un système de gestion de panier sophistiqué avec gestion dynamique des quantités",
        challenges_2: "Développement d'un système de messages flash pour une meilleure expérience utilisateur",
        challenges_3: "Création d'un système de connexion sécurisé avec protection contre les attaques par force brute",
        challenges_4: "Mise en place d'une gestion des fournisseurs avec relation complexe ville-fournisseur",
        challenges_5: "Conception d'une interface responsive et ergonomique",
        challenges_6: "Développement d'un système d'inscription utilisateur avec validation d'email",

        // Compétences
        skills_1: "Maîtrise approfondie de PHP et MySQL",
        skills_2: "Expertise en développement MVC",
        skills_3: "Compétences avancées en sécurité web",
        skills_4: "Gestion de projet avec Git",
        skills_5: "Design responsive et UX/UI",
        skills_6: "Travail collaboratif et gestion de versions",

        // Conclusion
        conclusion_text: "Ce projet e-commerce a constitué une expérience d'apprentissage exceptionnellement enrichissante dans le domaine du développement web. La complexité des fonctionnalités implémentées et la nécessité de maintenir une architecture propre et évolutive ont permis de développer une compréhension approfondie des enjeux du développement web moderne. La dimension collaborative du projet, notamment à travers la gestion de versions avec Git et la coordination entre les différentes parties du système, a renforcé ma capacité à travailler efficacement en équipe et à maintenir un code de qualité.",

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