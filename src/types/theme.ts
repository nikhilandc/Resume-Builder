export type ThemeColor = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export type ThemeLayout = 'classic' | 'modern' | 'minimal' | 'creative';

export type Theme = {
  id: string;
  name: string;
  colors: ThemeColor;
  layout: ThemeLayout;
  fontFamily: string;
};

export const themes: Theme[] = [
  {
    id: 'classic',
    name: 'Classic Professional',
    colors: {
      primary: 'rgb(59, 130, 246)',
      secondary: 'rgb(107, 114, 128)',
      accent: 'rgb(37, 99, 235)',
      background: 'rgb(255, 255, 255)',
      text: 'rgb(17, 24, 39)'
    },
    layout: 'classic',
    fontFamily: 'Georgia, serif'
  },
  {
    id: 'modern',
    name: 'Modern Minimal',
    colors: {
      primary: 'rgb(79, 70, 229)',
      secondary: 'rgb(107, 114, 128)',
      accent: 'rgb(67, 56, 202)',
      background: 'rgb(250, 250, 250)',
      text: 'rgb(31, 41, 55)'
    },
    layout: 'modern',
    fontFamily: 'Inter, sans-serif'
  },
  {
    id: 'creative',
    name: 'Creative Bold',
    colors: {
      primary: 'rgb(236, 72, 153)',
      secondary: 'rgb(107, 114, 128)',
      accent: 'rgb(219, 39, 119)',
      background: 'rgb(255, 255, 255)',
      text: 'rgb(31, 41, 55)'
    },
    layout: 'creative',
    fontFamily: 'Poppins, sans-serif'
  },
  {
    id: 'minimal',
    name: 'Minimal Clean',
    colors: {
      primary: 'rgb(0, 0, 0)',
      secondary: 'rgb(75, 85, 99)',
      accent: 'rgb(55, 65, 81)',
      background: 'rgb(255, 255, 255)',
      text: 'rgb(17, 24, 39)'
    },
    layout: 'minimal',
    fontFamily: 'system-ui, sans-serif'
  }
];