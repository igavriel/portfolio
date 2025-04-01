const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        see_on_github: "See on GitHub",
        link_to_project: "Link to the project",
        previous_project: "← Previous Project",
        next_project: "Next Project →",

        // Project Title and Sections
        project_viesafe: "SAE - Controversy",
        project_context: "Context",
        project_progress: "Project Progress",
        technical_challenges: "Technical Challenges",
        skills_acquired: "Skills Acquired",
        conclusion: "Conclusion",

        // Context Section
        context_text_p1: "As part of a deep reflection on contemporary issues in digital society, our team was tasked with developing a web platform exploring the fundamental question: 'Should we limit our right to privacy to ensure national security?' This project aimed to create a space for discussion and information around this crucial issue.",
        context_text_p2: "The objective was to design a comprehensive website offering an in-depth analysis of this question from different angles, while maintaining an accessible and engaging approach for visitors.",

        // Project Progress
        project_progress_p1: "Development was structured around the creation of five main sections: a homepage presenting the issue, a detailed PESTEL analysis, a podcast section for a more dynamic approach, a comprehensive bibliography, and a contact space for visitor interaction.",
        project_progress_p2: "The adopted approach favored a progressive methodology, starting from a fundamental structure to gradually enrich the content and user experience. Each section was developed considering specific user needs and the importance of intuitive navigation.",

        // Challenges
        challenges_title: "Technical Challenges",
        challenges_intro: "The project presented several major technical challenges that needed to be overcome:",
        challenges_responsive_title: "Responsive Interface",
        challenges_responsive_1: "Adapting the interface to different viewing platforms",
        challenges_responsive_2: "Optimizing navigation for mobile devices",
        challenges_multimedia_title: "Multimedia Integration",
        challenges_multimedia: "Seamless integration of multimedia elements, particularly the podcast and visual resources",
        challenges_navigation_title: "Navigation",
        challenges_navigation: "Implementation of smooth navigation between different bibliographic sections and implementation of a burger menu for mobile ergonomics",

        // Skills
        skills_text_p1: "This project allowed me to develop and consolidate several essential web development skills: advanced mastery of HTML5 and CSS3, JavaScript implementation for dynamic interactions, and responsive interface design.",
        skills_text_p2: "I also gained valuable experience in organizing and structuring complex academic content, as well as managing information architecture for intuitive navigation.",

        // Conclusion
        conclusion_text: "This project represents a successful synthesis between academic rigor and digital accessibility. It demonstrates the ability to transform a complex societal issue into a coherent and engaging web experience. Beyond the technical aspects, it illustrates the importance of thorough reflection on information structuring and user experience in the context of major contemporary issues."
    },
    fr: {
        // Navigation
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",
        see_on_github: "Voir sur GitHub",
        link_to_project: "Lien vers le projet",
        previous_project: "← Projet Précédent",
        next_project: "Projet Suivant →",

        // Project Title and Sections
        project_viesafe: "SAE - Controverse",
        project_context: "Contexte",
        project_progress: "Déroulement du projet",
        technical_challenges: "Défis techniques",
        skills_acquired: "Compétences acquises",
        conclusion: "Conclusion",

        // Context Section
        context_text_p1: "Dans le cadre d'une réflexion approfondie sur les enjeux contemporains de la société numérique, notre équipe a été chargée de développer une plateforme web explorant la question fondamentale : 'Faut-il limiter notre droit à la vie privée pour garantir notre sécurité nationale ?' Ce projet visait à créer un espace de discussion et d'information autour de cette problématique cruciale.",
        context_text_p2: "L'objectif était de concevoir un site web complet offrant une analyse approfondie de cette question sous différents angles, tout en maintenant une approche accessible et engageante pour les visiteurs.",

        // Project Progress
        project_progress_p1: "Le développement s'est structuré autour de la création de cinq sections principales : une page d'accueil présentant la problématique, une analyse PESTEL détaillée, une section podcast pour une approche plus dynamique, une bibliographie exhaustive, et un espace contact pour l'interaction avec les visiteurs.",
        project_progress_p2: "L'approche adoptée a privilégié une méthodologie progressive, partant d'une structure fondamentale pour enrichir graduellement le contenu et l'expérience utilisateur. Chaque section a été développée en tenant compte des besoins spécifiques des utilisateurs et de l'importance d'une navigation intuitive.",

        // Challenges
        challenges_title: "Défis techniques",
        challenges_intro: "Le projet a présenté plusieurs défis techniques majeurs qu'il a fallu surmonter :",
        challenges_responsive_title: "Interface responsive",
        challenges_responsive_1: "Adaptation de l'interface aux différents supports de consultation",
        challenges_responsive_2: "Optimisation de la navigation pour les appareils mobiles",
        challenges_multimedia_title: "Intégration multimédia",
        challenges_multimedia: "Intégration harmonieuse des éléments multimédias, notamment le podcast et les ressources visuelles",
        challenges_navigation_title: "Navigation",
        challenges_navigation: "Mise en place d'une navigation fluide entre les différentes sections bibliographiques et implémentation d'un menu burger pour l'ergonomie mobile",

        // Skills
        skills_text_p1: "Ce projet m'a permis de développer et consolider plusieurs compétences essentielles en développement web : maîtrise approfondie du HTML5 et du CSS3, implémentation de JavaScript pour les interactions dynamiques, et conception d'interfaces responsives.",
        skills_text_p2: "J'ai également acquis une expérience précieuse dans l'organisation et la présentation structurée d'un contenu académique complexe, ainsi que dans la gestion de l'architecture de l'information pour une navigation intuitive.",

        // Conclusion
        conclusion_text: "Ce projet représente une synthèse réussie entre rigueur académique et accessibilité numérique. Il démontre la capacité à transformer une problématique sociétale complexe en une expérience web cohérente et engageante. Au-delà des aspects techniques, il illustre l'importance d'une réflexion approfondie sur la structuration de l'information et l'expérience utilisateur dans le contexte d'enjeux contemporains majeurs."
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