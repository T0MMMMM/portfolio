interface Skill {
  name: string;
  level: number; // 0-100
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'React / Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'CSS / Tailwind', level: 88 },
  { name: 'Python', level: 70 },
  { name: 'Git / DevOps', level: 75 },
];

const timeline: TimelineItem[] = [
  {
    year: '2025',
    title: 'Développeur Full-Stack',
    description: 'Création de solutions web complètes pour divers clients et projets personnels.',
  },
  {
    year: '2023',
    title: 'Formation Développement Web',
    description: "Apprentissage intensif des technologies front-end et back-end modernes.",
  },
];

const AboutSection: React.FC = () => {
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
        À propos
      </h2>

      {/* Skills */}
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 600,
          color: 'var(--zen-text)',
          marginBottom: '16px',
        }}
      >
        Compétences
      </h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '32px',
        }}
      >
        {skills.map((skill) => (
          <div key={skill.name}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '4px',
              }}
            >
              <span style={{ fontSize: '13px', color: 'var(--zen-text)' }}>
                {skill.name}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--zen-text-muted)' }}>
                {skill.level}%
              </span>
            </div>
            <div
              style={{
                height: '4px',
                borderRadius: '2px',
                background: 'rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${skill.level}%`,
                  height: '100%',
                  borderRadius: '2px',
                  background: 'var(--zen-accent)',
                  transition: 'width 0.6s ease',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 600,
          color: 'var(--zen-text)',
          marginBottom: '16px',
        }}
      >
        Parcours
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {timeline.map((item) => (
          <div
            key={item.year}
            style={{
              paddingLeft: '20px',
              borderLeft: '2px solid var(--zen-accent)',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '-5px',
                top: '4px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--zen-accent)',
              }}
            />
            <span
              style={{
                fontSize: '12px',
                color: 'var(--zen-accent)',
                fontWeight: 600,
              }}
            >
              {item.year}
            </span>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--zen-text)',
                marginTop: '4px',
              }}
            >
              {item.title}
            </h4>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--zen-text-muted)',
                lineHeight: 1.5,
                marginTop: '4px',
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
