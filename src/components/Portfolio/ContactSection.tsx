import { Mail, ExternalLink, Globe, Phone } from 'lucide-react';
import { CONTACTS } from '../../config/portfolioData';
import './ContactSection.css';

const links = [
  { icon: <Mail size={18} />, label: CONTACTS.email, href: `mailto:${CONTACTS.email}` },
  { icon: <Phone size={18} />, label: CONTACTS.phone, href: `tel:${CONTACTS.phone.replace(/\s/g, '')}` },
  { icon: <ExternalLink size={18} />, label: 'github.com/T0MMMMM', href: CONTACTS.github },
  { icon: <Globe size={18} />, label: 'LinkedIn', href: CONTACTS.linkedin },
];

const ContactSection: React.FC = () => {
  return (
    <div className="contact">
      <h2 className="contactTitle">Viens me parler !</h2>
      <p className="contactText">
        Envie de collaborer, discuter d'un projet ou simplement échanger ?
        N'hésite pas à me contacter.
      </p>
      <div className="contactList">
        {links.map((link) => (
          <a
            key={link.label}
            className="contactItem"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <span className="contactItemIcon">{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
