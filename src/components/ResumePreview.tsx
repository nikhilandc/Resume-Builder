import React from 'react';
import { Resume } from '../types/resume';
import { Theme } from '../types/theme';

interface ResumePreviewProps {
  resume: Resume;
  theme: Theme;
}

export function ResumePreview({ resume, theme }: ResumePreviewProps) {
  const getLayoutStyles = () => {
    switch (theme.layout) {
      case 'modern':
        return 'grid grid-cols-3 gap-8';
      case 'creative':
        return 'relative';
      case 'minimal':
        return 'max-w-3xl mx-auto';
      default:
        return '';
    }
  };

  return (
    <div 
      className="p-8 shadow-lg"
      style={{ 
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fontFamily
      }}
    >
      {/* Header */}
      <div className={`mb-8 ${theme.layout === 'creative' ? 'bg-opacity-90 p-6' : ''}`}>
        <h1 
          className="text-3xl font-bold"
          style={{ color: theme.layout === 'minimal' ? theme.colors.text : theme.colors.primary }}
        >
          {resume.personalInfo.firstName} {resume.personalInfo.lastName}
        </h1>
        <div className="mt-2" style={{ color: theme.colors.secondary }}>
          <p>{resume.personalInfo.email} | {resume.personalInfo.phone}</p>
          <p>{resume.personalInfo.location}</p>
        </div>
      </div>

      <div className={getLayoutStyles()}>
        <div className={theme.layout === 'modern' ? 'col-span-2' : ''}>
          {/* Summary */}
          {resume.personalInfo.summary && (
            <div className="mb-8">
              <h2 
                className="text-xl font-bold mb-3"
                style={{ 
                  borderBottom: `2px solid ${theme.colors.accent}`,
                  color: theme.colors.primary 
                }}
              >
                Professional Summary
              </h2>
              <p style={{ color: theme.colors.text }}>{resume.personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {resume.experience.length > 0 && (
            <div className="mb-8">
              <h2 
                className="text-xl font-bold mb-3"
                style={{ 
                  borderBottom: `2px solid ${theme.colors.accent}`,
                  color: theme.colors.primary 
                }}
              >
                Experience
              </h2>
              {resume.experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold">{exp.position}</h3>
                    <span style={{ color: theme.colors.secondary }}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p style={{ color: theme.colors.secondary }}>
                    {exp.company} | {exp.location}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.description.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {resume.projects.length > 0 && (
            <div className="mb-8">
              <h2 
                className="text-xl font-bold mb-3"
                style={{ 
                  borderBottom: `2px solid ${theme.colors.accent}`,
                  color: theme.colors.primary 
                }}
              >
                Projects
              </h2>
              {resume.projects.map((project) => (
                <div key={project.id} className="mb-4">
                  <h3 className="font-semibold">
                    {project.name}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-sm"
                        style={{ color: theme.colors.accent }}
                      >
                        [Link]
                      </a>
                    )}
                  </h3>
                  <p>{project.description}</p>
                  <p className="text-sm mt-1" style={{ color: theme.colors.secondary }}>
                    Technologies: {project.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {/* Education */}
          {resume.education.length > 0 && (
            <div className="mb-8">
              <h2 
                className="text-xl font-bold mb-3"
                style={{ 
                  borderBottom: `2px solid ${theme.colors.accent}`,
                  color: theme.colors.primary 
                }}
              >
                Education
              </h2>
              {resume.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold">{edu.institution}</h3>
                    <span style={{ color: theme.colors.secondary }}>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <p>{edu.degree} in {edu.field}</p>
                  {edu.gpa && (
                    <p style={{ color: theme.colors.secondary }}>
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {resume.skills.length > 0 && (
            <div>
              <h2 
                className="text-xl font-bold mb-3"
                style={{ 
                  borderBottom: `2px solid ${theme.colors.accent}`,
                  color: theme.colors.primary 
                }}
              >
                Skills
              </h2>
              <div className="space-y-2">
                {resume.skills.map((skill) => (
                  <div key={skill.id} className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span style={{ color: theme.colors.secondary }}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}