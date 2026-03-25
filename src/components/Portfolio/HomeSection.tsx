import { Code2, Briefcase, Mail } from 'lucide-react';

const HomeSection: React.FC = () => {
  return (
    <div
      style={{
        padding: '32px',
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '16px',
      }}
      className="scrollbar-thin"
    >
      <h1
        style={{
          fontSize: '42px',
          fontWeight: 700,
          color: 'var(--zen-text)',
          lineHeight: 1.1,
        }}
      >
        Salut, je suis{' '}
        <span style={{ color: 'var(--zen-accent)' }}>Tom</span>
      </h1>
      <p
        style={{
          fontSize: '18px',
          fontWeight: 500,
          color: 'var(--zen-text-muted)',
        }}
      >
        Développeur Web Full-Stack
      </p>
      <p
        style={{
          fontSize: '15px',
          color: 'var(--zen-text)',
          maxWidth: '480px',
          lineHeight: 1.7,
          opacity: 0.85,
        }}
      >
        Passionné par la création d'expériences web uniques et performantes.
        J'aime explorer les intersections entre design et technologie pour
        donner vie à des projets qui sortent de l'ordinaire.
      </p>
      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={linkIconStyle}
        >
          <Code2 size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={linkIconStyle}
        >
          <Briefcase size={20} />
        </a>
        <a
          href="mailto:hello@example.com"
          aria-label="Email"
          style={linkIconStyle}
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
};

const linkIconStyle: React.CSSProperties = {
  color: 'var(--zen-text-muted)',
  transition: 'color 150ms',
  cursor: 'pointer',
};

export default HomeSection;
