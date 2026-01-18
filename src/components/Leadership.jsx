import { Award, Calendar, Trophy } from 'lucide-react';
import { config } from '../config';

export default function Leadership() {
  return (
    <section id="leadership" className="bg-gray-100 dark:bg-gray-800">
      <div className="section-container">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Leadership & Extracurriculars
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        Making an impact through leadership and community involvement
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {config.leadership.map((role) => (
          <div
            key={role.id}
            className="card overflow-hidden hover:scale-105 transition-transform duration-200"
          >
            <div className="h-48 overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600">
              <img
                src={role.image}
                alt={role.organization}
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200?text=Leadership';
                }}
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {role.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-2">
                    <Award size={16} />
                    <span className="font-medium">{role.organization}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar size={16} />
                <span>{role.period}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {role.description}
              </p>

              {role.achievements && role.achievements.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900 dark:text-white">
                    <Trophy size={16} className="text-primary-600" />
                    <span>Key Achievements</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {role.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
