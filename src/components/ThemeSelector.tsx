import React from 'react';
import { Theme, themes } from '../types/theme';

interface ThemeSelectorProps {
  selectedTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function ThemeSelector({ selectedTheme, onThemeChange }: ThemeSelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-700">Theme:</span>
      <div className="flex gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme)}
            className={`
              w-8 h-8 rounded-full border-2 transition-all
              ${selectedTheme.id === theme.id 
                ? 'border-blue-500 scale-110' 
                : 'border-transparent hover:scale-105'
              }
            `}
            style={{ backgroundColor: theme.colors.primary }}
            title={theme.name}
          />
        ))}
      </div>
    </div>
  );
}