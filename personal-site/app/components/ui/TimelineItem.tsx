'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Calendar, MapPin, Building } from 'lucide-react'

export interface TimelineEntry {
  id: string
  type: 'education' | 'experience' | 'skill'
  title: string
  subtitle: string
  period: string
  summary: string
  details: string[]
  technologies?: string[]
  location?: string
}

interface TimelineItemProps {
  entry: TimelineEntry
  isExpanded: boolean
  onToggle: (id: string) => void
}

export default function TimelineItem({ entry, isExpanded, onToggle }: TimelineItemProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'experience':
        return 'bg-primary-600 dark:bg-primary-500 border-primary-200 dark:border-primary-700'
      case 'education':
        return 'bg-green-600 dark:bg-green-500 border-green-200 dark:border-green-700'
      case 'skill':
        return 'bg-purple-600 dark:bg-purple-500 border-purple-200 dark:border-purple-700'
      default:
        return 'bg-gray-600 dark:bg-gray-500 border-gray-200 dark:border-gray-700'
    }
  }

  return (
    <div className="relative mb-8">
      {/* Timeline Dot */}
      <div className={`absolute left-2 w-4 h-4 rounded-full border-4 ${getTypeColor(entry.type)}`}></div>
      
      {/* Content */}
      <div className="ml-12">
        <div 
          className="card cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          onClick={() => onToggle(entry.id)}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Building size={16} className="text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {entry.subtitle}
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {entry.title}
              </h4>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {entry.period}
                </div>
                {entry.location && (
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {entry.location}
                  </div>
                )}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{entry.summary}</p>
            </div>
            
            <div className="ml-4 transition-transform duration-200">
              {isExpanded ? (
                <ChevronUp className="text-gray-400 dark:text-gray-500" size={20} />
              ) : (
                <ChevronDown className="text-gray-400 dark:text-gray-500" size={20} />
              )}
            </div>
          </div>
          
          {/* Expanded Content with smooth height transition */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {entry.type === 'experience' ? 'Key Achievements:' : 
                   entry.type === 'education' ? 'Highlights:' : 'Details:'}
                </h5>
                <ul className="space-y-2">
                  {entry.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {entry.technologies && entry.technologies.length > 0 && (
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}