export interface PinnedSite {
  id: string;
  label: string;
  url: string;
  iconUrl: string;
  bgColor: string;
}

const pinnedSites: PinnedSite[] = [
  {
    id: 'discord',
    label: 'Discord',
    url: 'https://discord.com',
    iconUrl: 'https://www.google.com/s2/favicons?domain=discord.com&sz=64',
    bgColor: '#5865F2',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com',
    iconUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=64',
    bgColor: '#24292e',
  },
  {
    id: 'camera',
    label: 'Photos',
    url: '#',
    iconUrl: 'https://www.google.com/s2/favicons?domain=photos.google.com&sz=64',
    bgColor: '#4285F4',
  },
  {
    id: 'gmail',
    label: 'Gmail',
    url: 'https://mail.google.com',
    iconUrl: 'https://www.google.com/s2/favicons?domain=mail.google.com&sz=64',
    bgColor: '#EA4335',
  },
  {
    id: 'settings',
    label: 'Settings',
    url: '#',
    iconUrl: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
    bgColor: '#3c3c3c',
  },
  {
    id: 'gmail2',
    label: 'Gmail 2',
    url: 'https://mail.google.com',
    iconUrl: 'https://www.google.com/s2/favicons?domain=mail.google.com&sz=64',
    bgColor: '#EA4335',
  },
];

export default pinnedSites;
