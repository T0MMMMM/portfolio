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
    id: 'ecar',
    label: 'Ecar',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=expo.dev&sz=32',
  },
  {
    id: 'bucketlist',
    label: 'Bucket-list',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=supabase.com&sz=32',
  },
  {
    id: 'ychess',
    label: 'Ychess',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=python.org&sz=32',
  },
  {
    id: 'youtubedl',
    label: 'YouTubeDL',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=32',
  },
  {
    id: 'piscine',
    label: 'Piscine-golang',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=go.dev&sz=32',
  },
  {
    id: 'contact',
    label: 'Viens me parler !',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=gmail.com&sz=32',
  },
];

export default portfolioSections;
