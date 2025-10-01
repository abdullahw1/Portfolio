'use client'

export default function Projects() {
  return (
    <div className="container-max section-padding py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Interactive demos and key projects showcasing AI infrastructure, security platforms, and DevOps solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder project cards */}
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Wozway Visualizer</h3>
          <p className="text-gray-600 mb-4">Interactive demo coming soon...</p>
          <div className="flex flex-wrap gap-2">
            <span className="tech-badge">React</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">SVG</span>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">DefendAI Agents</h3>
          <p className="text-gray-600 mb-4">Interactive demo coming soon...</p>
          <div className="flex flex-wrap gap-2">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">FastAPI</span>
            <span className="tech-badge">AI/ML</span>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Grafana Dashboard</h3>
          <p className="text-gray-600 mb-4">Interactive demo coming soon...</p>
          <div className="flex flex-wrap gap-2">
            <span className="tech-badge">Grafana</span>
            <span className="tech-badge">Prometheus</span>
            <span className="tech-badge">Kubernetes</span>
          </div>
        </div>
      </div>
    </div>
  )
}