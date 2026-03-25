import { Code2, Briefcase, Mail, MessageCircle } from 'lucide-react';

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: <Mail size={18} />,
    label: 'hello@example.com',
    href: 'mailto:hello@example.com',
  },
  {
    icon: <Code2 size={18} />,
    label: 'github.com/username',
    href: 'https://github.com',
  },
  {
    icon: <Briefcase size={18} />,
    label: 'linkedin.com/in/username',
    href: 'https://linkedin.com',
  },
  {
    icon: <MessageCircle size={18} />,
    label: '@username',
    href: 'https://x.com',
  },
];

const ContactSection: React.FC = () => {
  return (
    <div
      style={{
        padding: '32px',
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '24px',
      }}
      className="scrollbar-thin"
    >
      <h2
        style={{
          fontSize: '28px',
          fontWeight: 700,
          color: 'var(--zen-text)',
        }}
      >
        Contact
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: 'var(--zen-text-muted)',
          maxWidth: '400px',
          lineHeight: 1.6,
        }}
      >
        Envie de collaborer ou simplement discuter ? N'hésitez pas à me
        contacter via l'un de ces canaux.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: 'var(--zen-text)',
              textDecoration: 'none',
              fontSize: '14px',
              padding: '10px 14px',
              borderRadius: 'var(--zen-inner-radius)',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              transition: 'background 150ms',
              cursor: 'pointer',
              maxWidth: '320px',
            }}
          >
            <span style={{ color: 'var(--zen-accent)' }}>{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
