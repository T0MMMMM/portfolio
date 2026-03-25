export interface PortfolioSection {
  id: string;
  label: string;
  faviconUrl: string;
}

const portfolioSections: PortfolioSection[] = [
  {
    id: 'home',
    label: "C'est moi :)",
    faviconUrl: 'https://www.google.com/s2/favicons?domain=google.com&sz=32',
  },
  {
    id: 'project1',
    label: 'Projet 1',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=32',
  },
  {
    id: 'project2',
    label: 'Projet 2',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=32',
  },
  {
    id: 'project3',
    label: 'Projet 3',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=32',
  },
  {
    id: 'contact',
    label: 'Viens me parler !',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=gmail.com&sz=32',
  },
];

export default portfolioSections;
