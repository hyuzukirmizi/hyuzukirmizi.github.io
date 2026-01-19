import { Moon, Sun, FileText } from 'lucide-react';
import { config } from '../config';

export default function Header({ darkMode, toggleDarkMode }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-200">
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              &lt;{config.personal.name.split(' ')[0]} /&gt;
            </button>
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('leadership')} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Leadership</button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={config.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
            >
              <FileText size={18} />
              <span className="hidden sm:inline">Resume</span>
            </a>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
