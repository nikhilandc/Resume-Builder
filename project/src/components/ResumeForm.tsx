import React, { useState, useRef } from 'react';
import { Resume } from '../types/resume';
import { Theme, themes } from '../types/theme';
import { PersonalInfoForm } from './PersonalInfoForm';
import { EducationForm } from './EducationForm';
import { ExperienceForm } from './ExperienceForm';
import { ProjectsForm } from './ProjectsForm';
import { SkillsForm } from './SkillsForm';
import { ResumePreview } from './ResumePreview';
import { ThemeSelector } from './ThemeSelector';
import { useReactToPrint } from 'react-to-print';
import { FileDown, Eye } from 'lucide-react';

export function ResumeForm() {
  const [resume, setResume] = useState<Resume>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    },
    education: [],
    experience: [],
    projects: [],
    skills: [],
  });

  const [showPreview, setShowPreview] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);
  const previewRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <ThemeSelector 
          selectedTheme={selectedTheme} 
          onThemeChange={setSelectedTheme} 
        />
        <div className="flex gap-4">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            <Eye className="h-4 w-4" />
            {showPreview ? 'Edit Resume' : 'Preview'}
          </button>
          {showPreview && (
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <FileDown className="h-4 w-4" />
              Download PDF
            </button>
          )}
        </div>
      </div>

      {showPreview ? (
        <div ref={previewRef}>
          <ResumePreview resume={resume} theme={selectedTheme} />
        </div>
      ) : (
        <div className="space-y-8">
          <PersonalInfoForm
            data={resume.personalInfo}
            onChange={(personalInfo) => setResume({ ...resume, personalInfo })}
          />
          <EducationForm
            education={resume.education}
            onChange={(education) => setResume({ ...resume, education })}
          />
          <ExperienceForm
            experience={resume.experience}
            onChange={(experience) => setResume({ ...resume, experience })}
          />
          <ProjectsForm
            projects={resume.projects}
            onChange={(projects) => setResume({ ...resume, projects })}
          />
          <SkillsForm
            skills={resume.skills}
            onChange={(skills) => setResume({ ...resume, skills })}
          />
        </div>
      )}
    </div>
  );
}