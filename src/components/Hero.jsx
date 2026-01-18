import { Mail, Github, Linkedin } from 'lucide-react';
import { config } from '../config';
import ParticleBackground from './ParticleBackground';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
    
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Cosmic/Sky Shift Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7DD3FC] via-[#5EEAD4] via-[#A78BFA] to-[#FDA4AF] dark:from-[#082f49] dark:via-[#064e3b] dark:via-[#0e7490] dark:via-[#312e81] dark:via-[#4c1d95] dark:via-[#6b21a8] dark:to-[#3b0764] animate-gradient-spectrum" style={{ zIndex: 0 }}></div>
      
      {/* Particle Effect */}
      <ParticleBackground darkMode={darkMode} />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <img
              src={config.personal.photo}
              alt={config.personal.name}
              className="w-80 h-80 rounded-full object-cover border-8 border-white dark:border-gray-700 shadow-2xl hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/320?text=Photo';
              }}
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            {config.personal.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            {config.personal.summary}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <a href={`mailto:${config.personal.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {config.personal.email}
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            {Object.entries(config.social).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return url && Icon ? (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
                  aria-label={platform}
                >
                  <Icon size={24} className="text-gray-700 dark:text-gray-300" />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
