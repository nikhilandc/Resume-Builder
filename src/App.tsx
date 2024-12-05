import React from 'react';
import { FileText } from 'lucide-react';
import { ResumeForm } from './components/ResumeForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
          </div>
        </div>
      </header>

      <main className="py-10">
        <ResumeForm />
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            Build your professional resume with ease
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;