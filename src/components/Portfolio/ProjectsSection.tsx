import { Code2, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Zen',
    description: 'Un portfolio interactif inspiré du navigateur Zen, avec une métaphore desktop immersive.',
    stack: ['React', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Task Manager',
    description: "Application de gestion de tâches avec drag & drop, filtres avancés et mode sombre.",
    stack: ['Next.js', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Chat Real-time',
    description: 'Application de messagerie instantanée avec WebSockets, authentification et notifications.',
    stack: ['Node.js', 'Socket.io', 'React'],
    github: 'https://github.com',
    live: '#',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <div
      style={{
        padding: '32px',
        height: '100%',
        overflowY: 'auto',
      }}
      className="scrollbar-thin"
    >
      <h2
        style={{
          fontSize: '28px',
          fontWeight: 700,
          color: 'var(--zen-text)',
          marginBottom: '24px',
        }}
      >
        Projets
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 'var(--zen-inner-radius)',
              padding: '20px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--zen-text)',
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--zen-text-muted)',
                lineHeight: 1.5,
                flex: 1,
              }}
            >
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '999px',
                    background: 'rgba(245, 166, 35, 0.15)',
                    color: 'var(--zen-accent)',
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
                style={{ color: 'var(--zen-text-muted)', cursor: 'pointer' }}
              >
                <Code2 size={16} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} Live`}
                style={{ color: 'var(--zen-text-muted)', cursor: 'pointer' }}
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
