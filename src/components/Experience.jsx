import { Briefcase, MapPin, Calendar, FileText, ExternalLink } from 'lucide-react';
import { config } from '../config';

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-100 dark:bg-gray-800">
      <div className="section-container">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Experience
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        My professional journey and accomplishments
      </p>

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-800"></div>

          {config.experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="card p-6 hover:scale-105 transition-transform duration-200">
                  <div className="flex items-start space-x-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-16 h-16 rounded-lg object-contain bg-gray-100 dark:bg-gray-700 p-2"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/64?text=Logo';
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-2">
                        <Briefcase size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Optional Files Section */}
                      {exp.files && exp.files.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex flex-wrap gap-3">
                            {exp.files.map((file, idx) => (
                              <a
                                key={idx}
                                href={file.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors text-sm"
                              >
                                <FileText size={16} className="text-primary-600 dark:text-primary-400" />
                                <span className="text-gray-700 dark:text-gray-300">{file.name}</span>
                                <ExternalLink size={14} className="text-gray-500" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
