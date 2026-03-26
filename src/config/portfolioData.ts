/* ─── Personal info ─── */
export const PERSONAL = {
  name: 'Tom Fuster',
  title: 'Développeur Mobile / IA en devenir',
  bio: "Après deux ans à explorer divers domaines de l'informatique, je souhaite intégrer le monde professionnel et me spécialiser dans le développement logiciel et l'IA.",
  location: 'Montpellier 34000',
  status: 'Étudiant en 3ème année — recherche de stage pour compléter mon Bachelor en Développement Informatique',
  englishLevel: 'B2',
} as const;

/* ─── Contact links ─── */
export const CONTACTS = {
  email: 'tom.fuster34000@gmail.com',
  phone: '06 13 23 57 55',
  linkedin: 'https://linkedin.com/in/tom-fuster-a919a4310',
  github: 'https://github.com/T0MMMMM',
} as const;

/* ─── Skills ─── */
export interface Skill {
  category: string;
  items: string[];
}

export const SKILLS: Skill[] = [
  { category: 'AI & Data', items: ['Python', 'Numpy', 'Pandas', 'Prompt Engineering'] },
  { category: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'HTML/CSS'] },
  { category: 'Backend', items: ['Golang', 'PHP', 'JavaScript/TypeScript'] },
  { category: 'Software', items: ['C#', 'Java (OOP)'] },
  { category: 'System', items: ['C', 'Linux/Unix'] },
  { category: 'Database', items: ['SQL'] },
  { category: 'Tools', items: ['GitHub'] },
];

/* ─── Experience ─── */
export interface Experience {
  year: string;
  title: string;
  description: string;
}

export const EXPERIENCES: Experience[] = [
  {
    year: '2024-2025',
    title: 'Stage Mentor — Ynov Campus',
    description: "Accompagnement et mentorat d'étudiants en développement informatique.",
  },
  {
    year: '2022',
    title: 'Stage Technicien Informatique',
    description: "Maintenance et support technique en environnement professionnel.",
  },
];

/* ─── Projects ─── */
export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  stack: string[];
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'ecar',
    title: 'Ecar',
    year: '2025',
    description: "Application mobile de vente de voitures avec API complète. Interface utilisateur fluide pour parcourir, filtrer et publier des annonces automobiles.",
    stack: ['Expo', 'Supabase', 'Sequelize', 'Express'],
    github: 'https://github.com/T0MMMMM',
  },
  {
    id: 'bucketlist',
    title: 'Bucket-list',
    year: '2024',
    description: "Application mobile de gestion de todos et de souvenirs. Créez, organisez et suivez vos objectifs de vie et moments mémorables.",
    stack: ['Expo', 'Supabase'],
    github: 'https://github.com/T0MMMMM',
  },
  {
    id: 'ychess',
    title: 'Ychess',
    year: '2024',
    description: "Plateforme d'échecs multijoueur avec architecture serveur/client et système de matchmaking intégré.",
    stack: ['Python', 'PyQt6', 'Flask'],
    github: 'https://github.com/T0MMMMM',
  },
  {
    id: 'youtubedl',
    title: 'YouTubeDL',
    year: '2024',
    description: "Utilitaire CLI pour télécharger des vidéos YouTube. Simple, rapide et efficace en ligne de commande.",
    stack: ['Python'],
    github: 'https://github.com/T0MMMMM',
  },
  {
    id: 'piscine',
    title: 'Piscine-golang',
    year: '2022-2024',
    description: "Collection de challenges de code résolus dans plusieurs langages. Exercices algorithmiques et structures de données.",
    stack: ['Go', 'JavaScript', 'Java', 'Python'],
    github: 'https://github.com/T0MMMMM',
  },
];
