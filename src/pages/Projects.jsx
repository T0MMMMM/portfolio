const Projects = () => {
  const projects = [
    {
      title: "Projet 1",
      description: "Description du projet 1",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/path/to/image1.jpg",
      github: "https://github.com/...",
      demo: "https://..."
    },
    // Ajoutez d'autres projets...
  ];

  return (
    <div>
      <h1 className="page-title">Mes Projets</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 