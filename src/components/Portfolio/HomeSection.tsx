import { ExternalLink, Globe, Mail } from 'lucide-react';
import { PERSONAL, CONTACTS, SKILLS } from '../../config/portfolioData';
import './HomeSection.css';

const HomeSection: React.FC = () => {
  return (
    <div className="home">
      <h1 className="greeting">
        Salut, je suis <span className="accent">{PERSONAL.name.split(' ')[0]}</span>
      </h1>
      <p className="role">{PERSONAL.title}</p>
      <p className="bio">{PERSONAL.bio}</p>
      <span className="status">{PERSONAL.status}</span>

      <div className="skillsWrap">
        {SKILLS.map((s) => (
          <span className="skillCategory" key={s.category}>
            {s.category}: {s.items.join(', ')}
          </span>
        ))}
      </div>

      <div className="links">
        <a className="linkIcon" href={CONTACTS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <ExternalLink size={20} />
        </a>
        <a className="linkIcon" href={CONTACTS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Globe size={20} />
        </a>
        <a className="linkIcon" href={`mailto:${CONTACTS.email}`} aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
};

export default HomeSection;
