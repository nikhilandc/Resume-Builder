import React from 'react';
import { Skill } from '../types/resume';
import { Plus, Trash2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

interface SkillsFormProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

export function SkillsForm({ skills, onChange }: SkillsFormProps) {
  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const;

  const handleAdd = () => {
    onChange([
      ...skills,
      {
        id: uuidv4(),
        name: '',
        level: 'Intermediate',
      },
    ]);
  };

  const handleChange = (id: string, field: keyof Skill, value: string) => {
    onChange(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
  };

  const handleRemove = (id: string) => {
    onChange(skills.filter((skill) => skill.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Skill
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="p-4 bg-white rounded-lg shadow">
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => handleChange(skill.id, 'name', e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Skill name"
                />
              </div>
              <div className="w-40">
                <select
                  value={skill.level}
                  onChange={(e) => handleChange(skill.id, 'level', e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {skillLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => handleRemove(skill.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}