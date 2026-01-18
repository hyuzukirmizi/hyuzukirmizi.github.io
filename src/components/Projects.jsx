import { useState, useEffect } from 'react';
import { Star, GitFork, ExternalLink, Pin } from 'lucide-react';
import { config } from '../config';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  const fetchGitHubProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${config.github.username}/repos?sort=updated&per_page=100`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await response.json();
      
      // Filter out forks, excluded repos, and sort by pinned first, then by updated date
      const repos = data
        .filter(repo => !repo.fork && !config.github.excludedRepos.includes(repo.name))
        .map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: repo.homepage,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          updated_at: repo.updated_at,
          topics: repo.topics || [],
          isPinned: config.github.pinnedRepos.includes(repo.name),
        }))
        .sort((a, b) => {
          // Pinned repos first
          if (a.isPinned && !b.isPinned) return -1;
          if (!a.isPinned && b.isPinned) return 1;
          // Then by update date
          return new Date(b.updated_at) - new Date(a.updated_at);
        })
        .slice(0, 4); // Show top 4 projects (pinned first, then latest)

      setProjects(repos);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error('Error fetching GitHub projects:', err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 7) return `Updated ${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    if (diffDays < 30) return `Updated ${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) !== 1 ? 's' : ''} ago`;
    if (diffDays < 365) return `Updated ${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) !== 1 ? 's' : ''} ago`;
    return `Updated ${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) !== 1 ? 's' : ''} ago`;
  };

  if (loading) {
    return (
      <section id="projects" className="section-container">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card p-6 animate-pulse">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="section-container">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Projects
        </h2>
        <div className="text-center text-red-600 dark:text-red-400">
          <p>Error loading projects: {error}</p>
          <p className="text-sm mt-2">Please check the GitHub username in config.js</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="bg-gray-200 dark:bg-gray-700">
      <div className="section-container">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Projects
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Showcasing my latest work from GitHub
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card p-6 hover:scale-105 transition-transform duration-200 relative"
          >
            {project.isPinned && (
              <div className="absolute top-4 right-4">
                <Pin size={20} className="text-primary-600 dark:text-primary-400 fill-current" />
              </div>
            )}
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {project.description || 'No description available'}
              </p>
              
              {project.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.topics.slice(0, 5).map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center space-x-4">
                {project.language && (
                  <span className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-primary-500 mr-1"></span>
                    {project.language}
                  </span>
                )}
                <span className="flex items-center space-x-1">
                  <Star size={16} />
                  <span>{project.stars}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <GitFork size={16} />
                  <span>{project.forks}</span>
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              {formatDate(project.updated_at)}
            </div>

            <div className="flex space-x-3">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:underline"
              >
                <span>View Code</span>
                <ExternalLink size={16} />
              </a>
              {project.homepage && (
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:underline"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
