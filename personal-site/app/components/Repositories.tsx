'use client'

import { Github, Star, GitFork } from 'lucide-react'

export default function Repositories() {
  // Placeholder repository data
  const repositories = [
    {
      name: 'aigateway',
      description: 'AI Gateway for secure LLM request routing and monitoring',
      stars: 15,
      language: 'Python',
      url: 'https://github.com/abdullahw888/aigateway',
      isHighlighted: true
    },
    {
      name: 'wozway',
      description: 'Multi-tenant AI infrastructure platform',
      stars: 8,
      language: 'Python',
      url: 'https://github.com/abdullahw888/wozway',
      isHighlighted: true
    },
    {
      name: 'defendai',
      description: 'AI security and threat detection platform',
      stars: 12,
      language: 'TypeScript',
      url: 'https://github.com/abdullahw888/defendai',
      isHighlighted: false
    }
  ]

  return (
    <div className="container-max section-padding py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          GitHub Repositories
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Open source projects and contributions showcasing AI infrastructure, security platforms, and DevOps tools.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repositories.map((repo) => (
          <div 
            key={repo.name}
            className={`card ${repo.isHighlighted ? 'ring-2 ring-primary-200 dark:ring-primary-700 bg-primary-50/30 dark:bg-primary-900/20' : ''}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Github size={20} className="text-gray-600 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{repo.name}</h3>
                {repo.isHighlighted && (
                  <span className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full">
                    Featured
                  </span>
                )}
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              {repo.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star size={14} />
                  <span>{repo.stars}</span>
                </div>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-primary-500 dark:bg-primary-400"></div>
                  {repo.language}
                </span>
              </div>
              
              <a 
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                View →
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="https://github.com/abdullahw888"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <Github size={20} />
          View All Repositories
        </a>
      </div>
    </div>
  )
}