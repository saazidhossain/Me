import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  titleBn?: string;
  subtitle: string;
  subtitleBn?: string;
  category: string;
  categoryBn?: string;
  tags: string[];
  year: number;
  status: string;
  featured: boolean;
  emoji: string;
  description: string;
  descriptionBn?: string;
  link?: string;
  githubLink?: string;
  image?: string;
  impact?: string;
  duration?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const STATUS_CONFIG: Record<string, { color: string; label: string }> = {
  live: { color: '#22c55e', label: 'Live' },
  wip: { color: '#f59e0b', label: 'In Progress' },
  archived: { color: '#64748b', label: 'Archived' },
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const { color: statusColor, label: statusLabel } =
    STATUS_CONFIG[project.status] ?? STATUS_CONFIG['archived'];

  const href = project.link || '#';
  const isExternal = href !== '#' && (href.startsWith('http') || href.startsWith('//'));

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="project-card-link"
      aria-label={`${project.title} — ${project.subtitle}`}
      style={{
        animation: `slideIn 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s both`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div
        className="card project-card"
        style={{
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform var(--transition-base)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '20px',
          }}
        >
          <div
            className="project-card-emoji"
            style={{
              transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0deg)',
              transition: 'transform var(--transition-base)',
            }}
            aria-hidden="true"
          >
            {project.emoji}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '6px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: 'var(--text-xs)',
                color: 'var(--muted2)',
                fontFamily: 'var(--font-mono)',
              }}
              aria-label={`Status: ${statusLabel}`}
            >
              <span
                aria-hidden="true"
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: statusColor,
                  display: 'inline-block',
                  boxShadow: project.status === 'live' ? `0 0 6px ${statusColor}` : 'none',
                }}
              />
              {statusLabel}
            </div>
            <span
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {project.year}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="project-card-title"
          style={{
            color: hovered ? 'var(--accent)' : 'var(--text)',
            transition: 'color var(--transition-fast)',
          }}
        >
          {project.title}
        </h3>

        {project.titleBn && (
          <p
            style={{
              fontFamily: 'var(--font-bn)',
              fontSize: 'var(--text-sm)',
              color: 'var(--muted2)',
              marginBottom: '8px',
            }}
          >
            {project.titleBn}
          </p>
        )}

        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--accent)',
            marginBottom: '12px',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {project.subtitle}
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--text2)',
            lineHeight: 1.7,
            marginBottom: '20px',
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '20px',
          }}
        >
          {project.tags.map(tag => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--border)',
            paddingTop: '16px',
            marginTop: 'auto',
          }}
        >
          <div style={{ display: 'flex', gap: '16px' }}>
            {project.impact && (
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--muted2)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                📈 {project.impact}
              </span>
            )}
            {project.duration && (
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--muted2)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                ⏱ {project.duration}
              </span>
            )}
          </div>
          <span
            style={{
              fontSize: 'var(--text-xs)',
              color: hovered ? 'var(--text)' : 'var(--accent)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.1em',
              transform: hovered ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform var(--transition-base), color var(--transition-fast)',
              display: 'inline-block',
            }}
            aria-hidden="true"
          >
            View →
          </span>
        </div>
      </div>
    </a>
  );
}
