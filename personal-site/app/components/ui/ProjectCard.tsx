'use client'

import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  demoType: 'visualizer' | 'interactive' | 'carousel'
  onDemoClick: () => void
}

export default function ProjectCard({ 
  title, 
  description, 
  techStack, 
  demoType, 
  onDemoClick 
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getDemoButtonText = () => {
    switch (demoType) {
      case 'visualizer':
        return 'View Diagram'
      case 'interactive':
        return 'Try Demo'
      case 'carousel':
        return 'View Screenshots'
      default:
        return 'View Demo'
    }
  }

  const getTechBadgeColor = (tech: string) => {
    const techColors: { [key: string]: string } = {
      'React': 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
      'TypeScript': 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
      'Next.js': 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600',
      'Python': 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700',
      'FastAPI': 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700',
      'AI/ML': 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700',
      'SVG': 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700',
      'Grafana': 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700',
      'Prometheus': 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700',
      'Kubernetes': 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
      'Docker': 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
      'APISIX': 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700',
      'Gateway': 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700',
      'PostgreSQL': 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
      'Monitoring': 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700',
    }
    return techColors[tech] || 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600'
  }

  return (
    <div 
      className={`card group cursor-pointer transition-all duration-300 ${
        isHovered ? 'shadow-xl -translate-y-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onDemoClick}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border transition-colors duration-200 ${getTechBadgeColor(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <button className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg group-hover:scale-105">
            {getDemoButtonText()}
          </button>
        </div>
      </div>
    </div>
  )
}