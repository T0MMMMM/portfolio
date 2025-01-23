import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="profile-section">
        <div className="profile-image">
          {/* Ajoutez votre photo de profil ici */}
        </div>
        <h2>Votre Nom</h2>
        <p>Développeur Web</p>
      </div>
      
      <div className="nav-links">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/projets">Projets</NavLink>
        <NavLink to="/competences">Compétences</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      
      <div className="social-links">
        <a href="https://github.com/votre-compte" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </nav>
  );
};

export default Sidebar; 