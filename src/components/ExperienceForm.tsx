import React from 'react';
import { Experience } from '../types/resume';
import { Plus, Trash2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

interface ExperienceFormProps {
  experience: Experience[];
  onChange: (experience: Experience[]) => void;
}

export function ExperienceForm({ experience, onChange }: ExperienceFormProps) {
  const handleAdd = () => {
    onChange([
      ...experience,
      {
        id: uuidv4(),
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: [''],
      },
    ]);
  };

  const handleChange = (id: string, field: keyof Experience, value: string | string[]) => {
    onChange(
      experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const handleDescriptionChange = (id: string, index: number, value: string) => {
    onChange(
      experience.map((exp) => {
        if (exp.id === id) {
          const newDescription = [...exp.description];
          newDescription[index] = value;
          return { ...exp, description: newDescription };
        }
        return exp;
      })
    );
  };

  const handleAddBullet = (id: string) => {
    onChange(
      experience.map((exp) =>
        exp.id === id
          ? { ...exp, description: [...exp.description, ''] }
          : exp
      )
    );
  };

  const handleRemoveBullet = (id: string, index: number) => {
    onChange(
      experience.map((exp) => {
        if (exp.id === id) {
          const newDescription = exp.description.filter((_, i) => i !== index);
          return { ...exp, description: newDescription };
        }
        return exp;
      })
    );
  };

  const handleRemove = (id: string) => {
    onChange(experience.filter((exp) => exp.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Experience
        </button>
      </div>
      
      {experience.map((exp) => (
        <div key={exp.id} className="p-4 bg-white rounded-lg shadow space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => handleRemove(exp.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleChange(exp.id, 'position', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => handleChange(exp.id, 'location', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                value={exp.startDate}
                onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                value={exp.endDate}
                onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <button
                onClick={() => handleAddBullet(exp.id)}
                className="text-blue-600 hover:text-blue-700"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            {exp.description.map((bullet, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={bullet}
                  onChange={(e) => handleDescriptionChange(exp.id, index, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Add bullet point"
                />
                {exp.description.length > 1 && (
                  <button
                    onClick={() => handleRemoveBullet(exp.id, index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}