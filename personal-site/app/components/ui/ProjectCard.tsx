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
      'React': 'bg-blue-50 text-blue-700 border-blue-200',
      'TypeScript': 'bg-blue-50 text-blue-700 border-blue-200',
      'Next.js': 'bg-gray-50 text-gray-700 border-gray-200',
      'Python': 'bg-green-50 text-green-700 border-green-200',
      'FastAPI': 'bg-green-50 text-green-700 border-green-200',
      'AI/ML': 'bg-purple-50 text-purple-700 border-purple-200',
      'SVG': 'bg-orange-50 text-orange-700 border-orange-200',
      'Grafana': 'bg-orange-50 text-orange-700 border-orange-200',
      'Prometheus': 'bg-red-50 text-red-700 border-red-200',
      'Kubernetes': 'bg-blue-50 text-blue-700 border-blue-200',
      'Docker': 'bg-blue-50 text-blue-700 border-blue-200',
      'APISIX': 'bg-indigo-50 text-indigo-700 border-indigo-200',
      'Gateway': 'bg-indigo-50 text-indigo-700 border-indigo-200',
      'PostgreSQL': 'bg-blue-50 text-blue-700 border-blue-200',
      'Monitoring': 'bg-yellow-50 text-yellow-700 border-yellow-200',
    }
    return techColors[tech] || 'bg-gray-50 text-gray-700 border-gray-200'
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
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
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
          
          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg group-hover:scale-105">
            {getDemoButtonText()}
          </button>
        </div>
      </div>
    </div>
  )
}