const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",

        // Projects - Trains Game
        project_trains: "Development of 'Trains' Board Game",
        project_context: "Context",
        project_progress: "Project Progress",
        project_phases: "Project Phases",
        phase_1_title: "Phase 1: Game Mechanics Development",
        phase_1_text: "Complete implementation of business logic in Java, creation of card management system and player actions, implementation of game rules and constraints, development of game engine and interactions.",
        phase_2_title: "Phase 2: Graph Algorithms",
        phase_2_text: "Implementation of complex algorithms for optimal path calculation, railway connection management, and construction cost analysis. Advanced use of appropriate data structures and algorithmic performance optimization.",
        phase_3_title: "Phase 3: JavaFX Graphical Interface",
        phase_3_text: "Design of an intuitive and responsive user interface, implementation of custom graphic components, event management and user interactions, seamless integration with business logic.",
        technical_challenges: "Technical Challenges",
        challenges_text: "The challenges encountered were numerous and stimulating: robust and scalable object-oriented design, complex management of game states and transitions, implementation of sophisticated graph algorithms, development of an ergonomic and reactive graphical interface, integration of different application layers, comprehensive unit testing and quality management.",
        skills_acquired: "Skills Acquired",
        skills_text: "This project allowed me to develop a wide range of skills: advanced mastery of Java and OOP principles, expertise in algorithms and data structures, advanced skills in JavaFX and GUI development, testing methodology and quality assurance, version control with Git, collaborative work and technical communication.",
        conclusion: "Conclusion",
        conclusion_text: "This project was an exceptionally rich learning experience, combining theoretical and practical aspects. The creation of a complete application, from business logic to user interface, including graph algorithms, allowed me to develop a holistic vision of software development. This experience significantly strengthened my ability to design and implement complex software solutions and provided excellent preparation for my future professional challenges.",
        context_trains_text: "As part of my BUT in Computer Science, I had the fascinating opportunity to participate in the development of a complete implementation of the Japanese board game 'Trains'. This ambitious project was carried out in three distinct phases, each mobilizing specific and complementary skills.",

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

        // Projects - Jeu de Trains
        project_trains: "Développement du Jeu 'Trains'",
        project_context: "Contexte",
        project_progress: "Déroulement du Projet",
        project_phases: "Phases du Projet",
        phase_1_title: "Phase 1 : Développement de la Mécanique du Jeu",
        phase_1_text: "Implémentation complète de la logique métier en Java, création du système de gestion des cartes et des actions joueur, mise en place des règles de jeu et des contraintes, développement du moteur de jeu et des interactions.",
        phase_2_title: "Phase 2 : Algorithmes de Graphes",
        phase_2_text: "Implémentation d'algorithmes complexes pour le calcul des chemins optimaux, la gestion des connexions ferroviaires, et l'analyse des coûts de construction. Utilisation approfondie des structures de données adaptées et optimisation des performances algorithmiques.",
        phase_3_title: "Phase 3 : Interface Graphique JavaFX",
        phase_3_text: "Conception d'une interface utilisateur intuitive et responsive, implémentation de composants graphiques personnalisés, gestion des événements et des interactions utilisateur, intégration harmonieuse avec la logique métier.",
        technical_challenges: "Défis Techniques",
        challenges_text: "Les challenges rencontrés ont été nombreux et stimulants : conception orientée objet robuste et évolutive, gestion complexe des états de jeu et des transitions, implémentation d'algorithmes de graphes sophistiqués, développement d'une interface graphique ergonomique et réactive, intégration des différentes couches applicatives, tests unitaires exhaustifs et gestion de qualité.",
        skills_acquired: "Compétences Acquises",
        skills_text: "Ce projet m'a permis de développer un large éventail de compétences : maîtrise approfondie de Java et des principes POO, expertise en algorithmique et structures de données, compétences avancées en JavaFX et développement GUI, méthodologie de tests et assurance qualité, gestion de version avec Git, travail collaboratif et communication technique.",
        conclusion: "Conclusion",
        conclusion_text: "Ce projet a constitué une expérience d'apprentissage exceptionnellement riche, combinant aspects théoriques et pratiques. La réalisation d'une application complète, de la logique métier à l'interface utilisateur, en passant par les algorithmes de graphes, m'a permis de développer une vision holistique du développement logiciel. Cette expérience a significativement renforcé ma capacité à concevoir et implémenter des solutions logicielles complexes et m'a donné une excellente préparation pour mes futurs défis professionnels.",
        context_trains_text: "Dans le cadre de mon BUT Informatique, j'ai eu l'opportunité fascinante de participer au développement d'une implémentation complète du jeu de société japonais 'Trains'. Ce projet ambitieux s'est déroulé en trois phases distinctes, chacune mobilisant des compétences spécifiques et complémentaires.",

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