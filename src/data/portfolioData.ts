import { Project, Skill, Experience, EducationItem, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'SABTI YOUSIF',
  title: 'Développeur Full-Stack (Licence Bac+3)',
  location: 'Thann, 68800, France',
  phone: '0766010211',
  email: 'yfalih47@gmail.com',
  github: 'https://github.com/yfalih47',
  linkedin: 'https://linkedin.com/in/sabti-yousif',
  avatar: '/images/sabti_yousif_avatar_1786575175909.jpg',
  bio: "Développeur Full-Stack diplômé d'une Licence (Bac+3) en Informatique de l'Université de Haute-Alsace. Passionné par le développement d'applications web et mobiles modernes, je maîtrise React, Node.js, Java, Spring Boot, TypeScript et React Native. Je recherche un premier poste de Développeur Full-Stack afin de mettre en pratique mes compétences techniques et continuer à progresser au sein d'une équipe.",
  stats: [
    { label: 'Projets UHA 4.0', value: '6+' },
    { label: 'Diplôme', value: 'Bac+3 Web' },
    { label: 'Stack Technique', value: 'React / Node / Java' },
    { label: 'Langues Parlées', value: '3 (FR/EN/AR)' },
  ],
  languages: [
    'Arabe : Langue maternelle',
    'Français : Avancé',
    'Anglais : Courant',
  ],
  interests: ['Sports', 'Voyages', 'Photographie', 'Programmation'],
  quote: 'Concevoir des applications web et mobiles modernes, robustes et intuitives pour répondre aux besoins réels.',
};

export const SKILLS_DATA: Skill[] = [
  // Backend & Langages
  {
    name: 'Node.js',
    iconName: 'Server',
    category: 'Backend',
    proficiency: 90,
    level: 'Expert',
    experienceYears: 3,
    description: 'Développement d\'APIs RESTful avec Express.js, architecture asynchrone et microservices.',
  },
  {
    name: 'Java & Spring Boot',
    iconName: 'Code2',
    category: 'Backend',
    proficiency: 85,
    level: 'Advanced',
    experienceYears: 2,
    description: 'Services backend structurés, injection de dépendances, Spring Data JPA et sécurité.',
  },
  {
    name: 'TypeScript & JS',
    iconName: 'FileCode',
    category: 'Frontend',
    proficiency: 92,
    level: 'Expert',
    experienceYears: 3,
    description: 'Typage strict, programmation orientée objet et fonctionnelle pour le Web et le Mobile.',
  },
  {
    name: 'PHP',
    iconName: 'Binary',
    category: 'Backend',
    proficiency: 80,
    level: 'Advanced',
    experienceYears: 2,
    description: 'Développement web dynamique, scripts backend et intégration de bases de données MySQL.',
  },
  {
    name: 'C#',
    iconName: 'Terminal',
    category: 'Backend',
    proficiency: 78,
    level: 'Intermediate',
    experienceYears: 2,
    description: 'Programmation orientée objet, applications desktop et fondamentaux .NET.',
  },

  // Frontend & Mobile
  {
    name: 'React & Next.js',
    iconName: 'Layout',
    category: 'Frontend',
    proficiency: 92,
    level: 'Expert',
    experienceYears: 3,
    description: 'Création d\'interfaces réactives, hooks, Context API, Next.js App Router et Tailwind CSS.',
  },
  {
    name: 'React Native',
    iconName: 'Smartphone',
    category: 'Frontend',
    proficiency: 88,
    level: 'Advanced',
    experienceYears: 2,
    description: 'Développement d\'applications mobiles iOS et Android natives avec navigation et stockage local.',
  },
  {
    name: 'Angular',
    iconName: 'Layers',
    category: 'Frontend',
    proficiency: 75,
    level: 'Intermediate',
    experienceYears: 1,
    description: 'Composants TypeScript, services RxJS, directives et routage d\'applications SPAs.',
  },
  {
    name: 'HTML5 & CSS3',
    iconName: 'Palette',
    category: 'Frontend',
    proficiency: 95,
    level: 'Expert',
    experienceYears: 4,
    description: 'Intégration responsive, Flexbox, CSS Grid, animations fluides et normes W3C.',
  },

  // Bases de données
  {
    name: 'PostgreSQL',
    iconName: 'Database',
    category: 'Database',
    proficiency: 88,
    level: 'Advanced',
    experienceYears: 3,
    description: 'Modelisation relationnelle, requêtes complexes SQL, indexation et intégration ORM.',
  },
  {
    name: 'MySQL',
    iconName: 'HardDrive',
    category: 'Database',
    proficiency: 85,
    level: 'Advanced',
    experienceYears: 3,
    description: 'Gestion de bases de données relationnelles, procédures stockées et optimisation de requêtes.',
  },
  {
    name: 'MongoDB',
    iconName: 'Boxes',
    category: 'Database',
    proficiency: 82,
    level: 'Advanced',
    experienceYears: 2,
    description: 'Base de données NoSQL orientée documents, schémas Mongoose et agrégations.',
  },
  {
    name: 'SQLite',
    iconName: 'Workflow',
    category: 'Database',
    proficiency: 85,
    level: 'Advanced',
    experienceYears: 2,
    description: 'Stockage local embarqué pour applications mobiles React Native et systèmes légers.',
  },

  // DevOps & Outils
  {
    name: 'Git & GitHub',
    iconName: 'GitBranch',
    category: 'DevOps & Tools',
    proficiency: 92,
    level: 'Expert',
    experienceYears: 3,
    description: 'Gestion de versions, workflows GitFlow, pull requests et intégration continue.',
  },
  {
    name: 'Docker',
    iconName: 'Container',
    category: 'DevOps & Tools',
    proficiency: 82,
    level: 'Advanced',
    experienceYears: 2,
    description: 'Containerisation d\'applications full-stack, Dockerfile et orchestration Docker Compose.',
  },
  {
    name: 'IDE & Outils (VS Code, IntelliJ)',
    iconName: 'Wrench',
    category: 'DevOps & Tools',
    proficiency: 95,
    level: 'Expert',
    experienceYears: 4,
    description: 'Environnements de développement IntelliJ IDEA, VS Code, débogage et extensions.',
  },
  {
    name: 'Agile (Jira, Confluence)',
    iconName: 'CheckSquare',
    category: 'DevOps & Tools',
    proficiency: 88,
    level: 'Advanced',
    experienceYears: 2,
    description: 'Méthodes Scrum / Kanban, gestion des tickets Jira et documentation collaborative Confluence.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'voyage-en-groupe',
    title: 'Voyageen Groupe – UHA 4.0',
    category: 'Web & Réseau Social',
    shortDescription: 'Réseau social collaboratif pour planifier et organiser des voyages en groupe avec budget partagé.',
    fullDescription: 'Une plateforme web intuitive permettant aux voyageurs de créer des voyages de groupe, partager des étapes d\'itinéraires, attribuer des activités et suivre les dépenses communes en temps réel avec des graphiques interactifs.',
    problemStatement: 'Organiser des voyages à plusieurs génère souvent des désaccords sur les itinéraires et des difficultés de suivi de budget.',
    architectureHighlights: [
      'Backend Node.js & Express articulé autour d\'une base relationnelle PostgreSQL.',
      'Interface utilisateur dynamique sous React avec Tailwind CSS.',
      'Gestion des autorisations d\'accès par groupe et calcul automatique des soldes de remboursement.',
      'Containerisation complète de l\'environnement avec Docker Compose.',
    ],
    image: '/images/voyage_en_groupe_1786575192695.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS', 'Docker'],
    githubUrl: 'https://github.com/yfalih47/voyage-en-groupe-uha',
    liveDemoUrl: 'https://voyage-uha.example.com',
    featured: true,
    metrics: [
      { label: 'Temps de réponse', value: '<18ms' },
      { label: 'Calculs de Budget', value: 'Temps Réel' },
      { label: 'Méthodologie', value: 'Agile Scrum' },
    ],
    apiEndpoints: [
      {
        method: 'GET',
        path: '/api/v1/voyages/search?destination=Alsace',
        description: 'Recherche de voyages de groupe par destination et dates.',
        responseExample: {
          status: 'success',
          data: [
            { id: 'v-101', title: 'Weekend Randonnée Vosges', participants: 6, budgetMax: 150, location: 'Mulhouse' }
          ]
        },
        latencyMs: 12,
      },
      {
        method: 'POST',
        path: '/api/v1/voyages/101/depenses',
        description: 'Ajout d\'une dépense partagée et calcul automatique des répartitions.',
        responseExample: {
          status: 'created',
          expenseId: 'exp-992',
          amount: 45.50,
          splitPerUser: 7.58
        },
        latencyMs: 16,
      }
    ]
  },
  {
    id: 'hoplacup-waterpolo',
    title: 'HoplaCup – Mulhouse Water-polo',
    category: 'Gestion de Compétitions',
    shortDescription: 'Application de gestion des matchs, équipes et classements pour la compétition de Water-polo de Mulhouse.',
    fullDescription: 'Plateforme dédiée aux organisateurs et spectateurs de la HoplaCup. Permet le suivi en direct des scores, l\'encadrement des équipes, la génération des plannings de matchs et l\'archivage des statistiques de joueurs.',
    problemStatement: 'La saisie manuelle des scores de tournois de water-polo ralentissait la diffusion des résultats aux équipes et au public.',
    architectureHighlights: [
      'Architecture réactive Node.js alimentant des vues temps réel.',
      'Modélisation des poules et phases finales sur PostgreSQL.',
      'Interface épurée optimisée pour les tablettes et smartphones sur le bord du bassin.',
    ],
    image: '/images/hoplacup_app_1786575220856.jpg',
    tags: ['JavaScript', 'Node.js', 'PostgreSQL', 'Express', 'HTML/CSS'],
    githubUrl: 'https://github.com/yfalih47/hoplacup-waterpolo',
    liveDemoUrl: 'https://hoplacup.example.com',
    featured: true,
    metrics: [
      { label: 'Mise à jour Scores', value: 'En direct' },
      { label: 'Gestion Équipes', value: 'Automatisée' },
      { label: 'Usage', value: 'Compétition Officielle' },
    ],
    apiEndpoints: [
      {
        method: 'GET',
        path: '/api/v1/tournois/hoplacup2026/classement',
        description: 'Récupération du classement général en direct.',
        responseExample: {
          tournoi: 'HoplaCup 2026',
          equipes: [
            { rang: 1, nom: 'Mulhouse Water-polo A', points: 12, butsMarques: 34 }
          ]
        },
        latencyMs: 10,
      }
    ]
  },
  {
    id: 'eventease-mobile',
    title: 'EventEase – Gestion d\'Événements',
    category: 'Mobile Application',
    shortDescription: 'Application mobile cross-platform (iOS/Android) de découverte et réservation d\'événements.',
    fullDescription: 'Application mobile moderne développée sous React Native et TypeScript. Intègre un système de billets électroniques, un calendrier interactif, la possibilité de fonctionner hors-ligne via SQLite et la synchronisation avec un backend MongoDB.',
    problemStatement: 'Les utilisateurs perdaient accès à leurs billets en cas de mauvaise connexion réseau sur les lieux d\'événements.',
    architectureHighlights: [
      'Stockage local SQLite pour la persistance des billets électroniques sans réseau.',
      'Synchronisation bidirectionnelle avec la base NoSQL MongoDB en arrière-plan.',
      'Composants React Native personnalisés pour une expérience utilisateur fluide.',
    ],
    image: '/images/eventease_app_1786575205750.jpg',
    tags: ['React Native', 'TypeScript', 'SQLite', 'MongoDB', 'Node.js'],
    githubUrl: 'https://github.com/yfalih47/eventease-mobile-app',
    liveDemoUrl: 'https://eventease.example.com',
    featured: true,
    metrics: [
      { label: 'Compatibilité', value: 'iOS & Android' },
      { label: 'Stockage Local', value: 'SQLite Off-line' },
      { label: 'Synchro Data', value: 'MongoDB Cloud' },
    ],
    apiEndpoints: [
      {
        method: 'GET',
        path: '/api/v1/evenements/proches?lat=47.75&lng=7.33',
        description: 'Liste des événements géolocalisés autour de Mulhouse.',
        responseExample: {
          count: 5,
          events: [
            { id: 'ev-301', title: 'Festival Tech UHA 4.0', distanceKm: 1.2, date: '2026-09-15' }
          ]
        },
        latencyMs: 14,
      }
    ]
  },
  {
    id: 'hehewatt-covoiturage',
    title: 'HEHEWATT – Covoiturage Collaboratif',
    category: 'Full-Stack Web',
    shortDescription: 'Application web de covoiturage écologique et collaborative containerisée sous Docker.',
    fullDescription: 'Plateforme web facilitant la mise en relation de conducteurs et passagers pour les trajets quotidiens et universitaires. Inclut le calcul d\'empreinte carbone économisée et l\'intégration Docker.',
    problemStatement: 'Incitations insuffisantes au covoiturage pour les trajets de courte distance domicile-études.',
    architectureHighlights: [
      'Backend PHP robuste articulé avec une base de données relationnelle MySQL.',
      'Moteur de recherche de trajets dynamique en JavaScript vanilla.',
      'Déploiement containerisé réutilisable avec Docker.',
    ],
    image: '/images/hehewatt_app_1786575237492.jpg',
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Docker'],
    githubUrl: 'https://github.com/yfalih47/hehewatt-covoiturage',
    liveDemoUrl: 'https://hehewatt.example.com',
    featured: true,
    metrics: [
      { label: 'Environnement', value: 'Dockerized' },
      { label: 'Impact Éco', value: 'Eco-score Trajet' },
      { label: 'Fiabilité', value: '99.9%' },
    ],
  },
  {
    id: 'taxi-brousse',
    title: 'Taxi-Brousse – Réservation de Transport',
    category: 'Gestion de Réservations',
    shortDescription: 'Système de gestion et réservation de transports collectifs à la demande.',
    fullDescription: 'Application web permettant la réservation de places dans des navettes de transport partagées, la gestion des chauffeurs et l\'optimisation des itinéraires de ramassage.',
    problemStatement: 'Les réservations téléphoniques traditionnelles manquaient de visibilité sur les disponibilités de sièges.',
    architectureHighlights: [
      'Architecture Full-Stack React & Node.js.',
      'Tables PostgreSQL associant réservations, véhicules et plages horaires.',
    ],
    image: '/images/voyage_en_groupe_1786575192695.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    githubUrl: 'https://github.com/yfalih47/taxi-brousse-reservation',
    liveDemoUrl: 'https://taxibrousse.example.com',
    featured: false,
    metrics: [
      { label: 'Réservation', value: '<30s' },
      { label: 'Interface', value: 'Responsive React' },
    ],
  },
  {
    id: 'pacman-game',
    title: 'Pacman Game Interactif',
    category: 'Jeu Web & Java',
    shortDescription: 'Réécriture moderne du jeu classique Pacman en Java avec interface Web React.',
    fullDescription: 'Projet de programmation orientée objet implémentant la logique de jeu de Pacman, la gestion des fantômes, le score et le rendu graphique intégrant Java et React.',
    problemStatement: 'Démonstration de la maîtrise de la logique algorithmique complexe et du rendu graphique en temps réel.',
    architectureHighlights: [
      'Moteur de jeu orienté objet Java.',
      'Rendu HTML5 Canvas réactif avec React.',
    ],
    image: '/images/hoplacup_app_1786575220856.jpg',
    tags: ['Java', 'React', 'JavaScript', 'HTML5 Canvas'],
    githubUrl: 'https://github.com/yfalih47/pacman-java-react',
    liveDemoUrl: 'https://pacman-game.example.com',
    featured: false,
    metrics: [
      { label: 'Performance', value: '60 FPS' },
      { label: 'Logique Jeu', value: 'Pure Java OO' },
    ],
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp-1',
    role: 'Stagiaire Développeur Full-Stack',
    company: 'La Galerie du Flair',
    location: 'Mulhouse, France',
    period: '01/2026 – 07/2026',
    type: 'Stage Temps Plein',
    description: [
      'Conception et développement d\'applications web et mobiles full-stack adaptées aux besoins stratégiques de l\'entreprise.',
      'Développement et intégration d\'APIs RESTful performantes avec Node.js, Express et Spring Boot.',
      'Modélisation et administration de bases de données relationnelles (PostgreSQL, MySQL) et NoSQL (MongoDB).',
      'Optimisation de l\'ergonomie et de l\'expérience utilisateur UI/UX avec React et Tailwind CSS.',
      'Collaboration agile, revue de code, tests d\'intégration et maintenance évolutive.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'WooCommerce'],
    achievements: [
      'Stage de fin d\'études de Licence UHA 4.0 concluant avec intégration de fonctionnalités clés.',
      'Amélioration de la fluidité d\'utilisation des outils digitaux internes et clients.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Étudiant Développeur',
    company: 'Cursus UHA 4.0 — Université de Haute-Alsace',
    location: 'Mulhouse, France',
    period: '2024 – 07/2026',
    type: 'Projets Agiles d\'Entreprise',
    description: [
      'Réalisation en équipe autonome de 6+ projets logiciels complets pour des clients et associations partenaires (Voyage en Groupe, HoplaCup, EventEase, HEHEWATT...).',
      'Pratique quotidienne des méthodologies agiles Scrum & Kanban avec sprints de 2 à 3 semaines.',
      'Développement d\'applications Web réactives (React, Next.js, Node.js, PHP) et Mobiles (React Native, SQLite).',
      'Maîtrise de l\'écosystème collaboratif et DevOps : Git, GitHub, Jira, Confluence et Docker.',
    ],
    technologies: ['React', 'React Native', 'Next.js', 'Node.js', 'Java', 'PHP', 'PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Docker', 'Git'],
    achievements: [
      'Conception et livraison de 6 projets réels répondant aux exigences des cahiers des charges clients.',
    ],
  },
];

export const OTHER_EXPERIENCE_DATA = [
  {
    id: 'oexp-1',
    role: 'Employé Polyvalent',
    company: 'McDonald\'s',
    location: 'France',
    period: '2024',
    details: 'Travail en équipe sous forte affluence, rapidité d\'exécution, gestion du stress et sens du service client.',
    skills: ['Travail d\'équipe', 'Gestion du stress', 'Service Client'],
  },
  {
    id: 'oexp-2',
    role: 'Menuisier',
    company: 'Altempo',
    location: 'Bennwihr, France',
    period: '2023',
    details: 'Rigueur, précision technique, lecture de plans et assemblage d\'ouvrages en bois.',
    skills: ['Rigueur', 'Précision technique', 'Assemblage'],
  },
  {
    id: 'oexp-3',
    role: 'Poseur Installateur',
    company: 'Visioferm',
    location: 'Wittelsheim, France',
    period: '2023',
    details: 'Analyse des contraintes sur le terrain, installation sur mesure et respect des normes de sécurité.',
    skills: ['Analyse terrain', 'Installation sur mesure', 'Satisfaction client'],
  },
  {
    id: 'oexp-4',
    role: 'Jardinier',
    company: 'EPICEA',
    location: 'Thann (68), France',
    period: '2022',
    details: 'Organisation autonome du travail, entretien d\'espaces verts et gestion des équipements.',
    skills: ['Autonomie', 'Organisation', 'Travail en extérieur'],
  },
  {
    id: 'oexp-5',
    role: 'Service Civique – Animateur',
    company: 'Organisme d\'Animation',
    location: 'France',
    period: '2021 – 2022',
    details: 'Sens de l\'écoute, animation de groupes, communication et engagement citoyen.',
    skills: ['Communication', 'Animation', 'Esprit d\'initiative'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Programme UHA 4.0 (Niveau Bac+3) en Développement Web',
    institution: 'Université de Haute-Alsace',
    location: 'Mulhouse, France',
    period: '2024 – 2026',
    grade: 'Diplôme Bac+3 Validé',
    highlights: [
      'Pédagogie innovante par projets réels d\'entreprise en autonomie et travail d\'équipe.',
      'Compétences approfondies en développement Web Full-Stack, Mobile React Native, API REST et DevOps.',
      'Pratique intensive d\'Agile Scrum, Jira, Docker, Git et des architectures logicielles modernes.',
    ],
  },
  {
    id: 'edu-2',
    degree: 'Formation MPI (Métiers de la Production Informatique)',
    institution: 'AFPA Colmar',
    location: 'Colmar, France',
    period: '2022 – 2023',
    highlights: [
      'Acquisition des bases solides en logique informatique, algorithmique et maintenance de systèmes.',
    ],
  },
  {
    id: 'edu-3',
    degree: 'Découverte des métiers du bâtiment',
    institution: 'AFPA Mulhouse',
    location: 'Mulhouse, France',
    period: '2021 – 2022',
    highlights: [
      'Développement de la méthode, de la précision et du travail d\'équipe sur le terrain.',
    ],
  },
  {
    id: 'edu-4',
    degree: 'Baccalauréat en Informatique',
    institution: 'Institute Technology of Management',
    location: 'Baghdad',
    period: '2017',
    highlights: [
      'Diplôme de fin d\'études secondaires spécialisé en informatique et gestion technologique.',
    ],
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-1',
    title: 'Licence Informatique & Développement Web (Bac+3)',
    issuer: 'Université de Haute-Alsace (UHA 4.0)',
    issueDate: '2026',
    credentialId: 'UHA-WEB-2026-SY',
    verifyUrl: 'https://www.uha.fr',
    icon: 'GraduationCap',
    skillsVerified: ['React', 'Node.js', 'Java Spring Boot', 'PostgreSQL', 'Agile Scrum', 'Docker'],
  },
  {
    id: 'cert-2',
    title: 'Formation MPI - Métiers de l\'Informatique',
    issuer: 'AFPA Colmar',
    issueDate: '2023',
    credentialId: 'AFPA-MPI-2023',
    verifyUrl: 'https://www.afpa.fr',
    icon: 'Award',
    skillsVerified: ['Algorithmique', 'Bases de données', 'Systèmes & Réseaux'],
  },
];
