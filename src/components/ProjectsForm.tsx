import React from 'react';
import { Project } from '../types/resume';
import { Plus, Trash2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

interface ProjectsFormProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

export function ProjectsForm({ projects, onChange }: ProjectsFormProps) {
  const handleAdd = () => {
    onChange([
      ...projects,
      {
        id: uuidv4(),
        name: '',
        description: '',
        technologies: [],
        link: '',
      },
    ]);
  };

  const handleChange = (id: string, field: keyof Project, value: string | string[]) => {
    onChange(
      projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    );
  };

  const handleTechnologiesChange = (id: string, value: string) => {
    onChange(
      projects.map((proj) =>
        proj.id === id ? { ...proj, technologies: value.split(',').map(t => t.trim()) } : proj
      )
    );
  };

  const handleRemove = (id: string) => {
    onChange(projects.filter((proj) => proj.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </button>
      </div>
      
      {projects.map((project) => (
        <div key={project.id} className="p-4 bg-white rounded-lg shadow space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => handleRemove(project.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Project Name</label>
              <input
                type="text"
                value={project.name}
                onChange={(e) => handleChange(project.id, 'name', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={project.description}
                onChange={(e) => handleChange(project.id, 'description', e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Technologies (comma-separated)</label>
              <input
                type="text"
                value={project.technologies.join(', ')}
                onChange={(e) => handleTechnologiesChange(project.id, e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="React, TypeScript, Node.js"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Project Link (Optional)</label>
              <input
                type="url"
                value={project.link}
                onChange={(e) => handleChange(project.id, 'link', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}