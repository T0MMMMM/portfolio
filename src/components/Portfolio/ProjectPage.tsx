import { ExternalLink } from 'lucide-react';
import type { Project } from '../../config/portfolioData';
import './ProjectPage.css';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <div className="project">
      <div className="projectHeader">
        <h1 className="projectTitle">{project.title}</h1>
        <span className="projectYear">{project.year}</span>
      </div>

      <p className="projectDesc">{project.description}</p>

      <div className="projectStack">
        {project.stack.map((tech) => (
          <span className="stackBadge" key={tech}>{tech}</span>
        ))}
      </div>

      {project.github && (
        <a className="projectLink" href={project.github} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={16} />
          Voir sur GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectPage;
