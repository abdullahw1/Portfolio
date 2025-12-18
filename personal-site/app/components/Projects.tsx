'use client'

import { useState } from 'react'
import ProjectCard from './ui/ProjectCard'
import DemoModal from './ui/DemoModal'

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  demoType: 'visualizer' | 'interactive' | 'carousel'
  modalType: 'wozway' | 'defendai' | 'grafana'
}

const projects: Project[] = [
  {
    id: 'wozway',
    title: 'Wozway AI Gateway',
    description: 'Multi-tenant AI gateway platform with advanced security, rate limiting, and request routing. Built with APISIX and custom plugins for enterprise AI workloads.',
    techStack: ['APISIX', 'Python', 'Docker', 'Kubernetes', 'Gateway'],
    demoType: 'visualizer',
    modalType: 'wozway'
  },
  {
    id: 'defendai',
    title: 'DefendAI Security Platform',
    description: 'AI-powered security analysis platform with intelligent agents for vulnerability detection, threat assessment, and automated security recommendations.',
    techStack: ['Python', 'FastAPI', 'AI/ML', 'PostgreSQL', 'Docker'],
    demoType: 'interactive',
    modalType: 'defendai'
  },
  {
    id: 'grafana',
    title: 'Infrastructure Monitoring',
    description: 'Comprehensive monitoring solution with custom Grafana dashboards, Prometheus metrics, and real-time alerting for cloud-native applications.',
    techStack: ['Grafana', 'Prometheus', 'Kubernetes', 'Docker', 'Monitoring'],
    demoType: 'carousel',
    modalType: 'grafana'
  }
]

export default function Projects() {
  const [selectedDemo, setSelectedDemo] = useState<{
    isOpen: boolean
    demoType: 'wozway' | 'defendai' | 'grafana' | null
    title: string
  }>({
    isOpen: false,
    demoType: null,
    title: ''
  })

  const handleDemoClick = (project: Project) => {
    setSelectedDemo({
      isOpen: true,
      demoType: project.modalType,
      title: project.title
    })
  }

  const closeDemoModal = () => {
    setSelectedDemo({
      isOpen: false,
      demoType: null,
      title: ''
    })
  }

  return (
    <section id="projects" className="container-max section-padding py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Interactive demos and key projects showcasing AI infrastructure, security platforms, and DevOps solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            demoType={project.demoType}
            onDemoClick={() => handleDemoClick(project)}
          />
        ))}
      </div>

      {selectedDemo.demoType && (
        <DemoModal
          isOpen={selectedDemo.isOpen}
          onClose={closeDemoModal}
          demoType={selectedDemo.demoType}
          title={selectedDemo.title}
        />
      )}
    </section>
  )
}