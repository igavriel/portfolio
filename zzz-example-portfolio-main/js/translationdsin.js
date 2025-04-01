const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        documentation: "Documentation",
        help: "Help",
        login: "Login",

        // Project page title
        project_title: "DSIN Internship - SAPIENS Migration",

        // Section titles
        project_context: "Context",
        project_progress: "Project Development",
        technical_challenges: "Technical Challenges",
        skills_acquired: "Acquired Skills",
        conclusion: "Conclusion",

        // Context section
        context_text: "My professional immersion took place within the Direction of Information Systems and Digital Technology (DSIN) at the University of Montpellier, specifically in the Environments & Production Service (SEP) under the coordination of Mr. Frederik Guitton. This internship was positioned within a critical digital transformation dynamic for the institution: the migration of the SAPIENS system (Educational Computing Classrooms for Teaching) from its obsolescent Drupal 7 version to the modern Drupal 10 architecture.",
        context_text_2: "SAPIENS represents much more than a simple administrative application—it stands as a cornerstone in the university's digital ecosystem, orchestrating the integrated management of digital educational resources. This platform coordinates the allocation of computer rooms, administers user services (MySQL, PostgreSQL, Oracle databases, Web services), and strategically plans digital examinations. In this institutional context, where service continuity represents an absolute imperative, the programmed obsolescence of Drupal 7 support made this migration not merely desirable but imperative for operational sustainability.",
        context_text_3: "The challenge transcended far beyond a simple technical update: it involved a profound architectural redesign, simultaneously aiming to improve systemic maintainability, strengthen security paradigms, and optimize the user experience, while meticulously preserving compatibility with pre-existing business processes.",

        // Progress section
        progress_text_1: "The methodology deployed for this project was articulated in structuring phases, beginning with an in-depth systemic analysis of the existing architecture. This initial stage was considerably enriched by a preliminary technical audit conducted by DropTeam, which enabled me to elaborate a detailed mental mapping of functional interdependencies and identify critical nodes requiring particular attention.",
        progress_text_2: "Establishing the development environment constituted a crucial foundational phase. I opted for the implementation of DDev, a tool specifically designed for the Drupal ecosystem, offering a containerized environment guaranteeing perfect reproducibility of development conditions, thus eliminating the traditional \"it works on my machine\" problems. This environmental standardization proved decisive for the quality of subsequent development.",
        progress_text_3: "The adoption of an agile methodology, inspired by Scrum but judiciously adapted to our specific system migration context, structured the entirety of the process. In my role as Product Owner, I orchestrated the transformation of functional requirements into structured Product Backlog elements, prioritized according to their criticality, constantly negotiating the subtle balance between conceptual fidelity and technical innovation. The bi-weekly periodicity of sprints proved particularly adapted, offering the necessary latitude to develop significant increments while preserving essential agility in the face of emerging project constraints.",
        progress_text_4: "The technical transposition began with the establishment of a hierarchical architecture faithfully representing the spatial organization of educational resources (Campus > Buildings > Rooms), notably implementing the Geofield module for cartographic visualization of resources. Modular development then deployed along several fundamental axes:",
        progress_list_1: "Designing a sophisticated user services management system, replacing obsolete Field Collections with Paragraphs while maintaining the integrity of business functionalities",
        progress_list_2: "Implementing an entirely redesigned web spaces directory, integrating synchronization mechanisms with the university LDAP and Apogée academic data",
        progress_list_3: "Modernizing the examination management module, transforming the old procedural implementation into a coherent modular architecture following contemporary standards",
        progress_list_4: "Developing an innovative hardware warranty tracking system, offering computer correspondents centralized visibility on the state of their equipment",
        progress_text_5: "Meticulous attention was given to exhaustive documentation of the system on WikiDSIN, elaborating detailed technical guides for each developed module and precisely documenting the architectural choices made. This dimension, often neglected in IT projects, proved fundamental to guarantee the transmissibility and sustainability of the system in the university context.",

        // Challenges section
        challenges_text_1: "The technical challenges encountered during this migration revealed the underlying complexity of a mature university information system, requiring innovative approaches to maintain functional coherence while substantially modernizing the architecture.",
        challenges_text_2: "The fundamental transformation of the service architecture constituted a major challenge. The obsolescence of the Field Collection module in Drupal 10 necessitated a profound structural redesign using the Paragraphs system, conceptually different but offering superior flexibility. This migration involved the complete redesign of the main service management module, the true backbone of the SAPIENS system. The challenge particularly resided in the meticulous preservation of critical functionalities such as sensitive data encryption and business process automation, previously implemented via the now incompatible Rules module.",
        challenges_text_3: "The paradigmatic evolution of Drupal 10 concerning PHP code execution in fields constituted another significant challenge. For legitimate security reasons, this possibility was removed, necessitating a complete reengineering of the dynamic calculation logic for rooms. This fundamental change led me to develop a sophisticated module implementing hooks intercepting each room save event to trigger a chain of complex operations: extraction and validation of the Ivanti query, asynchronous communication with the external API, analysis and processing of the JSON response, and automated updating of associated metadata.",
        challenges_text_4: "Optimizing interactions with the Ivanti system, critical infrastructure for IT equipment inventory, represented a major performance challenge. The implementation of a stratified cache system constituted a significant innovation, employing different persistence levels adapted to the nature of the data. This intelligent mechanism refreshes only data that has actually changed, drastically reducing the load on external services while maintaining satisfactory information currency. Developing this caching strategy required a deep understanding of usage patterns specific to the university context.",

        // Skills section
        skills_text_1: "This professional immersion allowed me to develop a substantially enriched portfolio of technical and methodological skills, transcending the traditional boundaries of web development to embrace a global systemic perspective.",
        skills_text_2: "The in-depth mastery of Drupal 10 technologies and the Symfony ecosystem constitutes a fundamental technical acquisition. Through the complete rewriting of custom modules and adaptation of hooks to the new framework, I developed an intimate understanding of Drupal's underlying data structures and architectural mechanisms. This expertise particularly manifested in the transformation of Field Collections into Paragraphs, requiring a fine comprehension of the nuances between these two data structuring paradigms.",
        skills_text_3: "The design and implementation of stratified cache systems represents a distinctive skill particularly valuable for optimizing contemporary web applications. This experience allowed me to apprehend the subtleties of different caching strategies (temporary, persistent, differentiated) and their determining impact on the overall performance of a complex system. The implementation of an intelligent refresh mechanism that precisely discriminates data requiring updating constituted a significant technical innovation.",
        skills_text_4: "Developing robust integration mechanisms with heterogeneous external services (Ivanti, LDAP, CAS) confronted me with the contemporary challenges of distributed architectures. This dimension of the project allowed me to acquire a systemic vision of complex informational ecosystems, particularly relevant in the university context where interoperability between historically compartmentalized systems represents a permanent challenge.",

        // Conclusion section
        conclusion_text_1: "This migration project culminated in the implementation of a modern, secure, and high-performance architecture, strategically preparing SAPIENS for future evolutions while guaranteeing the operational continuity indispensable for the university community. The initial objectives were not only achieved but often exceeded, with the implementation of improvement functionalities responding to emerging needs identified during the project.",
        conclusion_text_2: "The adoption of Drupal 10 standards and the rigorous implementation of development best practices guarantee the long-term maintainability of this critical application. The new modular architecture will considerably facilitate the integration of future functionalities, while the implemented optimization mechanisms will efficiently absorb the anticipated growth of needs.",
        conclusion_text_3: "Beyond technical achievements, this experience profoundly confirmed my affinity for complex projects requiring a holistic understanding of issues and a methodical resolution approach. The intellectual satisfaction of transforming a critical system, simultaneously making it more robust, more performant, and more evolutive, while meticulously preserving its compatibility with the existing ecosystem, constitutes a particularly enriching and formative professional experience.",
        conclusion_text_4: "The skills developed during this internship transcend the specific technical framework of Drupal to embrace universal dimensions of complex information system development: modular architecture, performance optimization, integration of heterogeneous systems, and exhaustive documentation. This experience thus constitutes a solid foundation for confidently approaching large-scale projects, equipping me with the essential technical and methodological skills to effectively contribute to the digital transformation of organizations.",

        // Project navigation
        previous_project: "← Previous Project",
        next_project: "Next Project →",

        // Original content from your first JS file
        system_title: "SAPIENS - Computer Science Teaching Rooms Management",
        system_description: "Educational IT Resources Management System",
        system_context: "Context",
        system_features: "Features",
        technical_architecture: "Technical Architecture",
        migration_details: "Migration Details",

        // Features
        features_title: "Main Features",
        features_1: "Complete management of computer rooms and buildings",
        features_2: "Geolocation of educational resources",
        features_3: "Advanced user service management (MySQL, PostgreSQL, Oracle, Web)",
        features_4: "Integration with university authentication (CAS)",
        features_5: "Software inventory and search system",
        features_6: "Equipment warranty tracking",
        features_7: "Web spaces directory for students",
        features_8: "Exam management system",

        // Technical Architecture
        architecture_title: "Technical Architecture",
        architecture_1: "Implementation of modular architecture with Drupal 10",
        architecture_2: "Integration of the Symfony framework",
        architecture_3: "Multi-level caching system for performance optimization",
        architecture_4: "Development of custom modules for specific features",
        architecture_5: "Secure communication with external services (Ivanti, LDAP)",
        architecture_6: "Implementation of Paragraphs system for service management",

        // Migration Details
        migration_title: "Migration Process",
        migration_1: "Complete analysis of legacy system and dependencies",
        migration_2: "Development of custom migration modules",
        migration_3: "Restructuring of data models and entities",
        migration_4: "Implementation of a robust geographic data migration system",
        migration_5: "Complete overhaul of the service management architecture",
        migration_6: "Security enhancement and performance optimization",

        // Skills Acquired (additional items from original file)
        skills_title: "Skills and Learning Outcomes",
        skills_1: "Advanced mastery of Drupal 10 and Symfony",
        skills_2: "Expertise in complex system migration",
        skills_3: "Advanced cache optimization techniques",
        skills_4: "Integration with external authentication systems",
        skills_5: "Project management with agile methodology",
        skills_6: "Inter-team collaboration and dependency management",
        skills_7: "Technical documentation and knowledge transfer",
        skills_8: "Implementation of critical competencies AC21.01, AC22.01, AC23.03",

        download_rapport: "Download internship report",
        // Footer
        university_name: "University of Montpellier",
        dsin_name: "Department of Information Systems and Digital Technology",
        copyright: "© 2025 All rights reserved"
    },
    fr: {
        // Navigation
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",
        documentation: "Documentation",
        help: "Aide",
        login: "Connexion",

        // Page title
        project_title: "Stage DSIN - Migration SA.P.I.E.N.S",

        // Section titles
        project_context: "Contexte",
        project_progress: "Déroulement du Projet",
        technical_challenges: "Défis Techniques",
        skills_acquired: "Compétences Acquises",
        conclusion: "Conclusion",

        // Context section
        context_text: "Mon immersion professionnelle s'est déroulée au sein de la Direction du Système d'Information et du Numérique (DSIN) de l'Université de Montpellier, plus précisément dans le Service Environnements & Production (SEP) sous la coordination de M. Frederik Guitton. Ce stage s'inscrivait dans une dynamique de transformation numérique critique pour l'établissement : la migration du système SAPIENS (SAlles Pédagogiques Informatiques d'ENSeignements) de sa version Drupal 7 obsolescente vers l'architecture moderne Drupal 10.",
        context_text_2: "SAPIENS représente bien plus qu'une simple application administrative — il constitue une pierre angulaire dans l'écosystème numérique de l'université, orchestrant la gestion intégrée des ressources pédagogiques numériques. Cette plateforme coordonne l'allocation des salles informatiques, administre les services utilisateurs (bases de données MySQL, PostgreSQL, Oracle, services Web) et planifie stratégiquement les examens numériques. Dans ce contexte institutionnel, où la continuité de service représente un impératif absolu, l'obsolescence programmée du support Drupal 7 rendait cette migration non seulement souhaitable mais impérative pour la pérennité opérationnelle.",
        context_text_3: "Le défi transcendait largement une simple mise à jour technique : il s'agissait d'une refonte architecturale profonde, visant simultanément à améliorer la maintenabilité systémique, renforcer les paradigmes de sécurité et optimiser l'expérience utilisateur, tout en préservant méticuleusement la compatibilité avec les processus métier préexistants.",

        // Progress section
        progress_text_1: "La méthodologie déployée pour ce projet s'est articulée en phases structurantes, débutant par une analyse systémique approfondie de l'architecture existante. Cette étape initiale a été considérablement enrichie par un audit technique préliminaire réalisé par DropTeam, qui m'a permis d'élaborer une cartographie mentale détaillée des interdépendances fonctionnelles et d'identifier les nœuds critiques nécessitant une attention particulière.",
        progress_text_2: "L'établissement de l'environnement de développement a constitué une phase fondatrice cruciale. J'ai opté pour l'implémentation de DDev, un outil spécifiquement conçu pour l'écosystème Drupal, offrant un environnement conteneurisé garantissant une parfaite reproductibilité des conditions de développement, éliminant ainsi les traditionnels problèmes de \"ça fonctionne sur ma machine\". Cette standardisation environnementale s'est avérée déterminante pour la qualité du développement ultérieur.",
        progress_text_3: "L'adoption d'une méthodologie agile, inspirée de Scrum mais judicieusement adaptée à notre contexte spécifique de migration système, a structuré l'ensemble du processus. Dans mon rôle de Product Owner, j'ai orchestré la transformation des exigences fonctionnelles en éléments de Product Backlog structurés et priorisés selon leur criticité, négociant constamment le subtil équilibre entre fidélité conceptuelle et innovation technique. La périodicité bihebdomadaire des sprints s'est révélée particulièrement adaptée, offrant la latitude nécessaire pour développer des incréments significatifs tout en préservant une agilité essentielle face aux contraintes émergentes du projet.",
        progress_text_4: "La transposition technique a débuté par l'établissement d'une architecture hiérarchique représentant fidèlement l'organisation spatiale des ressources pédagogiques (Campus > Bâtiments > Salles), implémentant notamment le module Geofield pour la visualisation cartographique des ressources. Le développement modulaire s'est ensuite déployé selon plusieurs axes fondamentaux :",
        progress_list_1: "Conception d'un système sophistiqué de gestion des services utilisateurs, remplaçant les Field Collections obsolètes par des Paragraphs tout en maintenant l'intégrité des fonctionnalités métier",
        progress_list_2: "Implémentation d'un annuaire des espaces web entièrement repensé, intégrant des mécanismes de synchronisation avec le LDAP universitaire et les données académiques d'Apogée",
        progress_list_3: "Modernisation du module de gestion des examens, transformant l'ancienne implémentation procédurale en une architecture modulaire cohérente suivant les standards contemporains",
        progress_list_4: "Développement d'un système innovant de suivi des garanties matérielles, offrant aux correspondants informatiques une visibilité centralisée sur l'état de leurs équipements",
        progress_text_5: "Une attention méticuleuse a été portée à la documentation exhaustive du système sur le WikiDSIN, élaborant des guides techniques détaillés pour chaque module développé et documentant précisément les choix architecturaux effectués. Cette dimension, souvent négligée dans les projets informatiques, s'est avérée fondamentale pour garantir la transmissibilité et la pérennité du système dans le contexte universitaire.",

        // Challenges section
        challenges_text_1: "Les défis techniques rencontrés lors de cette migration ont révélé la complexité sous-jacente d'un système d'information universitaire mature, nécessitant des approches innovantes pour maintenir la cohérence fonctionnelle tout en modernisant substantiellement l'architecture.",
        challenges_text_2: "La transformation fondamentale de l'architecture des services a constitué un défi majeur. L'obsolescence du module Field Collection dans Drupal 10 a nécessité une refonte structurelle profonde utilisant le système Paragraphs, conceptuellement différent mais offrant une flexibilité supérieure. Cette migration impliquait la reconception complète du module principal de gestion des services, véritable colonne vertébrale du système SAPIENS. Le défi résidait particulièrement dans la préservation méticuleuse des fonctionnalités critiques telles que le chiffrement des données sensibles et l'automatisation des processus métier, précédemment implémentées via le module Rules désormais incompatible.",
        challenges_text_3: "L'évolution paradigmatique de Drupal 10 concernant l'exécution de code PHP dans les champs constituait un autre défi significatif. Pour des raisons légitimes de sécurité, cette possibilité a été supprimée, nécessitant une réingénierie complète de la logique de calcul dynamique pour les salles. Ce changement fondamental m'a conduit à développer un module sophistiqué implémentant des hooks interceptant chaque événement de sauvegarde de salle pour déclencher une chaîne d'opérations complexes : extraction et validation de la requête Ivanti, communication asynchrone avec l'API externe, analyse et traitement de la réponse JSON, et mise à jour automatisée des métadonnées associées.",
        challenges_text_4: "L'optimisation des interactions avec le système Ivanti, infrastructure critique pour l'inventaire du matériel informatique, représentait un défi majeur de performance. L'implémentation d'un système de cache stratifié a constitué une innovation significative, employant différents niveaux de persistance adaptés à la nature des données. Ce mécanisme intelligent ne rafraîchit que les données ayant effectivement changé, réduisant drastiquement la charge sur les services externes tout en maintenant une fraîcheur satisfaisante des informations. Le développement de cette stratégie de mise en cache a nécessité une compréhension approfondie des schémas d'utilisation spécifiques au contexte universitaire.",

        // Skills section
        skills_text_1: "Cette immersion professionnelle m'a permis de développer un portefeuille substantiellement enrichi de compétences techniques et méthodologiques, transcendant les frontières traditionnelles du développement web pour embrasser une perspective systémique globale.",
        skills_text_2: "La maîtrise approfondie des technologies Drupal 10 et de l'écosystème Symfony constitue une acquisition technique fondamentale. À travers la réécriture complète des modules personnalisés et l'adaptation des hooks au nouveau framework, j'ai développé une compréhension intime des structures de données sous-jacentes et des mécanismes architecturaux de Drupal. Cette expertise s'est particulièrement manifestée dans la transformation des Field Collections en Paragraphs, nécessitant une compréhension fine des nuances entre ces deux paradigmes de structuration des données.",
        skills_text_3: "La conception et l'implémentation de systèmes de cache stratifiés représente une compétence distinctive particulièrement précieuse pour l'optimisation des applications web contemporaines. Cette expérience m'a permis d'appréhender les subtilités des différentes stratégies de mise en cache (temporaire, persistante, différenciée) et leur impact déterminant sur la performance globale d'un système complexe. L'implémentation d'un mécanisme de rafraîchissement intelligent discriminant précisément les données nécessitant une mise à jour a constitué une innovation technique significative.",
        skills_text_4: "Le développement de mécanismes d'intégration robustes avec des services externes hétérogènes (Ivanti, LDAP, CAS) m'a confronté aux défis contemporains des architectures distribuées. Cette dimension du projet m'a permis d'acquérir une vision systémique des écosystèmes informationnels complexes, particulièrement pertinente dans le contexte universitaire où l'interopérabilité entre systèmes historiquement cloisonnés représente un défi permanent.",

        // Conclusion section
        conclusion_text_1: "Ce projet de migration a abouti à la mise en place d'une architecture moderne, sécurisée et performante, préparant stratégiquement SAPIENS aux évolutions futures tout en garantissant la continuité opérationnelle indispensable pour la communauté universitaire. Les objectifs initiaux ont non seulement été atteints mais souvent dépassés, avec l'implémentation de fonctionnalités d'amélioration répondant à des besoins émergents identifiés durant le projet.",
        conclusion_text_2: "L'adoption des standards Drupal 10 et l'implémentation rigoureuse des bonnes pratiques de développement garantissent la maintenabilité à long terme de cette application critique. La nouvelle architecture modulaire facilitera considérablement l'intégration de fonctionnalités futures, tandis que les mécanismes d'optimisation implémentés absorberont efficacement la croissance anticipée des besoins.",
        conclusion_text_3: "Au-delà des réalisations techniques, cette expérience a profondément confirmé mon affinité pour les projets complexes nécessitant une compréhension holistique des problématiques et une approche méthodique de résolution. La satisfaction intellectuelle de transformer un système critique, le rendant simultanément plus robuste, plus performant et plus évolutif, tout en préservant méticuleusement sa compatibilité avec l'écosystème existant, constitue une expérience professionnelle particulièrement enrichissante et formatrice.",
        conclusion_text_4: "Les compétences développées durant ce stage transcendent le cadre technique spécifique de Drupal pour embrasser des dimensions universelles du développement de systèmes d'information complexes : architecture modulaire, optimisation des performances, intégration de systèmes hétérogènes et documentation exhaustive. Cette expérience constitue ainsi un socle solide pour aborder sereinement des projets d'envergure, m'équipant des compétences techniques et méthodologiques essentielles pour contribuer efficacement à la transformation numérique des organisations.",

        // Project navigation
        previous_project: "← Projet Précédent",
        next_project: "Projet Suivant →",

        // Original content from your first JS file
        system_title: "SAPIENS - Gestion des Salles Pédagogiques Informatiques",
        system_description: "Système de Gestion des Ressources Informatiques Pédagogiques",
        system_context: "Contexte",
        system_features: "Fonctionnalités",
        technical_architecture: "Architecture Technique",
        migration_details: "Détails de la Migration",

        // Fonctionnalités
        features_title: "Fonctionnalités Principales",
        features_1: "Gestion complète des salles informatiques et bâtiments",
        features_2: "Géolocalisation des ressources pédagogiques",
        features_3: "Gestion avancée des services utilisateurs (MySQL, PostgreSQL, Oracle, Web)",
        features_4: "Intégration avec l'authentification universitaire (CAS)",
        features_5: "Inventaire et système de recherche de logiciels",
        features_6: "Suivi des garanties des équipements",
        features_7: "Annuaire des espaces web pour les étudiants",
        features_8: "Système de gestion des examens",

        // Architecture Technique
        architecture_title: "Architecture Technique",
        architecture_1: "Mise en place d'une architecture modulaire avec Drupal 10",
        architecture_2: "Intégration du framework Symfony",
        architecture_3: "Système de cache multi-niveaux pour l'optimisation des performances",
        architecture_4: "Développement de modules personnalisés pour des fonctionnalités spécifiques",
        architecture_5: "Communication sécurisée avec des services externes (Ivanti, LDAP)",
        architecture_6: "Implémentation du système Paragraphs pour la gestion des services",

        // Détails de la Migration
        migration_title: "Processus de Migration",
        migration_1: "Analyse complète du système legacy et des dépendances",
        migration_2: "Développement de modules de migration personnalisés",
        migration_3: "Restructuration des modèles de données et des entités",
        migration_4: "Implémentation d'un système robuste de migration des données géographiques",
        migration_5: "Refonte complète de l'architecture de gestion des services",
        migration_6: "Renforcement de la sécurité et optimisation des performances",

        // Compétences Acquises (additional items from original file)
        skills_title: "Compétences et Apprentissages Critiques",
        skills_1: "Maîtrise approfondie de Drupal 10 et Symfony",
        skills_2: "Expertise en migration de systèmes complexes",
        skills_3: "Techniques avancées d'optimisation de cache",
        skills_4: "Intégration avec des systèmes d'authentification externes",
        skills_5: "Gestion de projet avec méthodologie agile",
        skills_6: "Collaboration inter-équipes et gestion des dépendances",
        skills_7: "Documentation technique et transfert de connaissances",
        skills_8: "Mise en œuvre des apprentissages critiques AC21.01, AC22.01, AC23.03",

        download_rapport: "Télécharger rapport",
        // Footer
        university_name: "Université de Montpellier",
        dsin_name: "Direction du Système d'Information et du Numérique",
        copyright: "© 2025 Tous droits réservés"
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
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}"`);
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