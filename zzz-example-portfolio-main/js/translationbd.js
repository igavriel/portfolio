const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        project_context: "Context",
        project_progress: "Project Progress",
        technical_challenges: "Technical Challenges",
        skills_acquired: "Skills Acquired",
        conclusion: "Conclusion",

        // Project specific
        project_title: "Development of a Database for Music Streaming Application",
        context_text_p1: "As part of SAE 2.04, I had the exciting opportunity to design and develop a comprehensive database for a music streaming application. This complex project required a methodical and reflective approach, combining theoretical design and practical implementation.",

        project_progress_p1: "The project was structured in two major phases, each presenting its own challenges and learning opportunities:",
        phase_1_title: "Phase 1: Database Design and Creation",
        phase_1_items: [
            "In-depth analysis of provided CSV files",
            "Careful development of the entity-relationship model",
            "Design of optimized relational schema",
            "Implementation on Oracle with integrity constraint management",
            "Development of data import and transformation strategies"
        ],

        phase_2_title: "Phase 2: Optimization and View Creation",
        phase_2_items: [
            "Refinement of initial model based on critical analysis",
            "Development of complex views for data analysis",
            "Implementation of advanced statistical queries",
            "Query performance optimization"
        ],

        technical_challenges_text: "The project presented several stimulating challenges:",
        challenges_list: [
            "Managing complexity of musical entity relationships",
            "Query optimization for statistical analysis",
            "Implementation of advanced statistical calculations (median, standard deviation)",
            "Management of playlist hierarchies",
            "Processing temporal data for listening habit analysis"
        ],

        skills_text: "This experience has significantly enriched my expertise:",
        skills_list: [
            "Advanced mastery of data modeling",
            "Expertise in advanced SQL (complex queries, views, aggregations)",
            "Data statistical analysis skills",
            "Database performance optimization capabilities",
            "Advanced use of tools like DBeaver",
            "Large-scale data integrity management"
        ],

        conclusion_text: "This project was an exceptionally enriching learning experience in the database field. The complexity of required queries and the need to efficiently manage large amounts of data allowed me to develop a deep understanding of relational database management systems. This experience particularly made me aware of the importance of rigorous modeling and performance optimization in developing robust and scalable database solutions. The analytical dimension of the project, particularly through the creation of complex statistical views, strengthened my ability to transform raw data into relevant and usable information, a crucial skill in the current context of Big Data and data analysis.",
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
        project_context: "Contexte",
        project_progress: "Déroulement du Projet",
        technical_challenges: "Défis Techniques",
        skills_acquired: "Compétences Acquises",
        conclusion: "Conclusion",
        // Project specific
        project_title: "Développement d'une Base de Données pour une Application de Streaming Musical",
        context_text_p1: "Dans le cadre de la SAE 2.04, j'ai eu l'opportunité passionnante de concevoir et développer une base de données complète pour une application de streaming musical. Ce projet complexe a nécessité une approche méthodique et réflexive, alliant conception théorique et implémentation pratique.",

        project_progress_p1: "Le projet s'est structuré en deux phases majeures, chacune présentant ses propres défis et opportunités d'apprentissage :",
        phase_1_title: "Phase 1 : Conception et Création de la Base de Données",
        phase_1_items: [
            "Analyse approfondie des fichiers CSV fournis",
            "Élaboration minutieuse du modèle entité-association",
            "Conception du schéma relationnel optimisé",
            "Implémentation sur Oracle avec gestion des contraintes d'intégrité",
            "Développement de stratégies d'importation et de transformation des données"
        ],

        phase_2_title: "Phase 2 : Optimisation et Création de Vues",
        phase_2_items: [
            "Raffinement du modèle initial basé sur l'analyse critique",
            "Développement de vues complexes pour l'analyse des données",
            "Implémentation de requêtes statistiques avancées",
            "Optimisation des performances des requêtes"
        ],

        technical_challenges_text: "Le projet a présenté plusieurs défis stimulants :",
        challenges_list: [
            "Gestion de la complexité des relations entre entités musicales",
            "Optimisation des requêtes pour les analyses statistiques",
            "Implémentation de calculs statistiques avancés (médiane, écart-type)",
            "Gestion des hiérarchies dans les playlists",
            "Traitement des données temporelles pour l'analyse des habitudes d'écoute"
        ],

        skills_text: "Cette expérience a considérablement enrichi mon expertise :",
        skills_list: [
            "Maîtrise approfondie de la modélisation de données",
            "Expertise en SQL avancé (requêtes complexes, vues, agrégations)",
            "Compétences en analyse statistique de données",
            "Capacité à optimiser les performances des bases de données",
            "Utilisation avancée d'outils comme DBeaver",
            "Gestion de l'intégrité des données à grande échelle"
        ],

        conclusion_text: "Ce projet a constitué une expérience d'apprentissage exceptionnellement enrichissante dans le domaine des bases de données. La complexité des requêtes demandées et la nécessité de gérer efficacement de grandes quantités de données m'ont permis de développer une compréhension approfondie des systèmes de gestion de bases de données relationnelles. Cette expérience m'a particulièrement sensibilisé à l'importance de la modélisation rigoureuse et de l'optimisation des performances dans le développement de solutions de bases de données robustes et évolutives. La dimension analytique du projet, notamment à travers la création de vues statistiques complexes, a renforcé ma capacité à transformer des données brutes en informations pertinentes et exploitables, une compétence cruciale dans le contexte actuel du Big Data et de l'analyse de données.",
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

            // Gestion des listes
            if (element.tagName === 'UL') {
                // Vérifier si la clé pointe vers un tableau
                const translationKey = translations[lang][key];
                if (Array.isArray(translationKey)) {
                    // Effacer le contenu existant
                    element.innerHTML = '';
                    // Créer un élément li pour chaque entrée du tableau
                    translationKey.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        element.appendChild(li);
                    });
                }
            }
            // Gestion des éléments de liste individuels
            else if (element.tagName === 'LI') {
                const keys = key.split('.');
                let translation = translations[lang];
                // Parcourir l'arborescence des clés (par exemple "phase_1_items.0")
                for (const k of keys) {
                    translation = translation[k];
                }
                if (translation) {
                    element.textContent = translation;
                }
            }
            // Gestion du texte normal
            else {
                const translation = translations[lang][key];
                if (translation) {
                    element.textContent = translation;
                }
            }
        });
    }

    languageSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Charge la langue sauvegardée ou par défaut
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    languageSelect.value = savedLanguage;
    updateContent(savedLanguage);
});