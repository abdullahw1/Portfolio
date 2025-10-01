'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'
import TimelineItem, { TimelineEntry } from './ui/TimelineItem'

const timelineData: TimelineEntry[] = [
  {
    id: 'defendai-senior',
    type: 'experience',
    title: 'Senior AI Infrastructure Engineer',
    subtitle: 'DefendAI',
    location: 'San Jose, CA',
    period: 'June 2024 - Present',
    summary: 'Leading AI security infrastructure for Fortune 500 enterprise clients',
    details: [
      'Architected enterprise LLM security gateway processing 10M+ daily requests',
      'Built autonomous threat detection engine identifying 100+ zero-day vulnerabilities',
      'Reduced security incidents by 85% through real-time monitoring',
      'Achieved 99.9% uptime with sub-50ms latency at enterprise scale',
      'Deployed 50+ production AI agents boosting team productivity by 40%'
    ],
    technologies: ['Apache APISIX', 'LangChain', 'Kubernetes', 'Python', 'Lua', 'PostgreSQL', 'AWS', 'Azure']
  },
  {
    id: 'wortise',
    type: 'experience',
    title: 'DevOps Engineer (Contract)',
    subtitle: 'Wortise',
    location: 'Remote',
    period: 'Sep 2023 - Dec 2023',
    summary: 'Optimized ELK stack performance and monitoring infrastructure',
    details: [
      'Optimized ELK stack handling 1M+ daily log insertions',
      'Reduced query latency by 25% through performance tuning',
      'Enhanced Elasticsearch Watchers for real-time alerting',
      'Built production Kibana dashboards for incident response'
    ],
    technologies: ['Elasticsearch', 'Kibana', 'Logstash', 'Docker', 'AWS']
  },
  {
    id: 'cloudvista',
    type: 'experience',
    title: 'Software Engineering Intern',
    subtitle: 'Cloudvista',
    location: 'San Jose, CA',
    period: 'May 2022 - Aug 2022',
    summary: 'Built scalable log ingestion platform and cloud integrations',
    details: [
      'Built Django-based log ingestion platform on Vercel',
      'Integrated AWS S3 for scalable log storage',
      'Created automated data processing scripts',
      'Developed cloud service integration tooling'
    ],
    technologies: ['Django', 'Python', 'AWS S3', 'Vercel', 'PostgreSQL']
  },
  {
    id: 'sjsu',
    type: 'education',
    title: 'Bachelor of Science, Software Engineering',
    subtitle: 'San Jose State University',
    location: 'San Jose, CA',
    period: 'Aug 2021 - May 2024',
    summary: 'Focused on software engineering principles, AI/ML, and distributed systems',
    details: [
      'Relevant Coursework: Data Structures, Algorithms, Database Systems',
      'Machine Learning, Computer Networks, Software Architecture',
      'Capstone Project: Real-time Facial Recognition System',
      'Dean\'s List: Fall 2022, Spring 2023'
    ],
    technologies: ['Java', 'Python', 'C++', 'SQL', 'React', 'Node.js']
  },
  {
    id: 'ai-ml-skills',
    type: 'skill',
    title: 'AI/ML & Security Expertise',
    subtitle: 'Core Technical Skills',
    period: '2022 - Present',
    summary: 'Advanced proficiency in AI/ML technologies and security frameworks',
    details: [
      'Expert in LLM security architectures and threat detection',
      'Proficient in building RAG pipelines and vector databases',
      'Experience with autonomous agent development and deployment',
      'Deep knowledge of Apache APISIX gateway configurations',
      'Advanced PyTorch and TensorFlow model development'
    ],
    technologies: ['LLM Security', 'Apache APISIX', 'LangChain', 'PyTorch', 'TensorFlow', 'Vector Databases', 'RAG Pipelines', 'Autonomous Agents']
  },
  {
    id: 'devops-skills',
    type: 'skill',
    title: 'Cloud & DevOps Mastery',
    subtitle: 'Infrastructure & Deployment',
    period: '2021 - Present',
    summary: 'Comprehensive cloud infrastructure and DevOps automation expertise',
    details: [
      'Kubernetes orchestration for enterprise-scale deployments',
      'Multi-cloud architecture design (AWS, Azure, GCP)',
      'Infrastructure as Code with Terraform and Helm',
      'CI/CD pipeline optimization and automation',
      'Container security and performance optimization'
    ],
    technologies: ['Kubernetes', 'Docker', 'AWS', 'Azure', 'Terraform', 'GitHub Actions', 'Jenkins', 'Helm Charts']
  },
  {
    id: 'backend-skills',
    type: 'skill',
    title: 'Backend & Database Systems',
    subtitle: 'Full-Stack Development',
    period: '2020 - Present',
    summary: 'Full-stack development with focus on scalable backend architectures',
    details: [
      'Microservices architecture design and implementation',
      'High-performance API development with FastAPI and GraphQL',
      'Database optimization for PostgreSQL and MongoDB',
      'Event-driven architecture and message queuing',
      'Real-time data processing and streaming'
    ],
    technologies: ['Python', 'Java', 'JavaScript', 'PostgreSQL', 'MongoDB', 'FastAPI', 'REST APIs', 'GraphQL']
  },
  {
    id: 'monitoring-skills',
    type: 'skill',
    title: 'Monitoring & Observability',
    subtitle: 'System Reliability',
    period: '2022 - Present',
    summary: 'Advanced monitoring, alerting, and observability implementations',
    details: [
      'Custom Grafana dashboard development for business metrics',
      'Prometheus metrics collection and alerting rules',
      'ELK Stack optimization for log analysis and search',
      'Distributed tracing implementation with OpenTelemetry',
      'SRE practices and incident response automation'
    ],
    technologies: ['Grafana', 'Prometheus', 'ELK Stack', 'OpenTelemetry', 'Custom Dashboards', 'Distributed Tracing']
  }
]

export default function Resume() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  const downloadResume = () => {
    // In a real implementation, this would download the actual PDF
    alert('Resume download would be implemented here with a real PDF file')
  }

  return (
    <div className="py-20 relative" id="resume">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Resume
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click on any section to expand and see detailed information about my experience, education, and skills.
          </p>
        </div>

        {/* Main Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-green-200 to-purple-200"></div>
            
            {timelineData.map((entry) => (
              <TimelineItem
                key={entry.id}
                entry={entry}
                isExpanded={expandedItems.has(entry.id)}
                onToggle={toggleExpanded}
              />
            ))}
          </div>
        </div>

        {/* Key Metrics Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Impact Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">10M+</div>
                <div className="text-sm text-gray-600">Daily LLM Requests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">Security Incidents Reduced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Production AI Agents</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating PDF Download Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={downloadResume}
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
          title="Download PDF Resume"
        >
          <Download size={20} className="group-hover:animate-bounce" />
          <span className="hidden sm:inline">Download PDF</span>
        </button>
      </div>
    </div>
  )
}