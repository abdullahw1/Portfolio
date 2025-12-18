'use client'

import { useState, useEffect } from 'react'
import { X, ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
  demoType: 'wozway' | 'defendai' | 'grafana'
  title: string
}

export default function DemoModal({ isOpen, onClose, demoType, title }: DemoModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Mock search functionality for DefendAI demo
  const handleSearch = async () => {
    if (!searchQuery.trim()) return
    
    setIsSearching(true)
    setSearchResults([])
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const mockResults = [
      `Found 3 similar vulnerabilities for "${searchQuery}"`,
      `CVE-2023-1234: Buffer overflow in ${searchQuery} component`,
      `Security advisory: ${searchQuery} authentication bypass`,
      `Patch available for ${searchQuery} vulnerability`,
      `Risk assessment: Medium severity for ${searchQuery}`,
    ]
    
    setSearchResults(mockResults)
    setIsSearching(false)
  }

  // Grafana dashboard screenshots (mock data)
  const grafanaSlides = [
    { title: 'System Overview', description: 'Main dashboard showing system health metrics' },
    { title: 'API Gateway Metrics', description: 'Request rates, latency, and error rates' },
    { title: 'Infrastructure Monitoring', description: 'CPU, memory, and disk usage across clusters' },
    { title: 'Security Alerts', description: 'Real-time security events and threat detection' },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % grafanaSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + grafanaSlides.length) % grafanaSlides.length)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      // Reset state when modal closes
      setSearchQuery('')
      setSearchResults([])
      setIsSearching(false)
      setCurrentSlide(0)
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const renderWozwayDemo = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Gateway Architecture</h4>
        <p className="text-gray-600 dark:text-gray-300">Interactive flow diagram showing request routing through Wozway</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8">
        <svg viewBox="0 0 800 300" className="w-full h-auto">
          {/* User */}
          <g>
            <rect x="50" y="120" width="80" height="60" rx="8" fill="#3b82f6" className="animate-pulse" />
            <text x="90" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">User</text>
          </g>
          
          {/* Arrow 1 */}
          <g>
            <line x1="130" y1="150" x2="200" y2="150" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="165" y="140" textAnchor="middle" fill="#6b7280" fontSize="12">Request</text>
          </g>
          
          {/* Wozway Gateway */}
          <g>
            <rect x="220" y="100" width="120" height="100" rx="8" fill="#10b981" className="animate-pulse" style={{animationDelay: '0.5s'}} />
            <text x="280" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Wozway</text>
            <text x="280" y="150" textAnchor="middle" fill="white" fontSize="12">Gateway</text>
            <text x="280" y="170" textAnchor="middle" fill="white" fontSize="10">• Auth</text>
            <text x="280" y="185" textAnchor="middle" fill="white" fontSize="10">• Rate Limit</text>
          </g>
          
          {/* Arrow 2 */}
          <g>
            <line x1="340" y1="150" x2="410" y2="150" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="375" y="140" textAnchor="middle" fill="#6b7280" fontSize="12">Filtered</text>
          </g>
          
          {/* LLM */}
          <g>
            <rect x="430" y="120" width="80" height="60" rx="8" fill="#8b5cf6" className="animate-pulse" style={{animationDelay: '1s'}} />
            <text x="470" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">LLM</text>
          </g>
          
          {/* Return arrows */}
          <g>
            <line x1="410" y1="170" x2="340" y2="170" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead2)" />
            <text x="375" y="185" textAnchor="middle" fill="#6b7280" fontSize="12">Response</text>
          </g>
          
          <g>
            <line x1="200" y1="170" x2="130" y2="170" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead2)" />
            <text x="165" y="185" textAnchor="middle" fill="#6b7280" fontSize="12">Secured</text>
          </g>
          
          {/* Arrow markers */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
            </marker>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto">
              <polygon points="10 0, 0 3.5, 10 7" fill="#6b7280" />
            </marker>
          </defs>
        </svg>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h5 className="font-semibold text-blue-900 mb-2">User Layer</h5>
          <p className="text-blue-700">Applications and users send requests to the gateway</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h5 className="font-semibold text-green-900 mb-2">Gateway Layer</h5>
          <p className="text-green-700">Authentication, rate limiting, and security filtering</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h5 className="font-semibold text-purple-900 mb-2">LLM Layer</h5>
          <p className="text-purple-700">AI models process filtered and validated requests</p>
        </div>
      </div>
    </div>
  )

  const renderDefendAIDemo = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">DefendAI Security Query</h4>
        <p className="text-gray-600 dark:text-gray-300">Search for vulnerabilities and security insights</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex gap-3 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Enter vulnerability, CVE, or security term..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={isSearching || !searchQuery.trim()}
            className="px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </div>
        
        {isSearching && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            <span className="ml-3 text-gray-600 dark:text-gray-300">Analyzing security database...</span>
          </div>
        )}
        
        {searchResults.length > 0 && (
          <div className="space-y-3">
            <h5 className="font-semibold text-gray-900 dark:text-white">Search Results:</h5>
            {searchResults.map((result, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-500 transition-colors duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">{result}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  const renderGrafanaDemo = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Grafana Dashboard Screenshots</h4>
        <p className="text-gray-600 dark:text-gray-300">Infrastructure monitoring and observability dashboards</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="relative">
          {/* Mock dashboard screenshot */}
          <div className="bg-gray-800 rounded-lg p-6 text-white min-h-[300px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h5 className="text-lg font-semibold">{grafanaSlides[currentSlide].title}</h5>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded p-4">
                <div className="text-sm text-gray-300 mb-2">CPU Usage</div>
                <div className="text-2xl font-bold text-green-400">67.3%</div>
                <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{width: '67%'}}></div>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded p-4">
                <div className="text-sm text-gray-300 mb-2">Memory Usage</div>
                <div className="text-2xl font-bold text-blue-400">45.8%</div>
                <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{width: '46%'}}></div>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded p-4">
                <div className="text-sm text-gray-300 mb-2">Request Rate</div>
                <div className="text-2xl font-bold text-purple-400">1.2k/s</div>
                <div className="text-xs text-gray-400 mt-1">↑ 12% from last hour</div>
              </div>
              
              <div className="bg-gray-700 rounded p-4">
                <div className="text-sm text-gray-300 mb-2">Error Rate</div>
                <div className="text-2xl font-bold text-red-400">0.03%</div>
                <div className="text-xs text-gray-400 mt-1">↓ 45% from last hour</div>
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-3">{grafanaSlides[currentSlide].description}</p>
          <div className="flex justify-center gap-2">
            {grafanaSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderDemoContent = () => {
    switch (demoType) {
      case 'wozway':
        return renderWozwayDemo()
      case 'defendai':
        return renderDefendAIDemo()
      case 'grafana':
        return renderGrafanaDemo()
      default:
        return <div>Demo not available</div>
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="p-6">
          {renderDemoContent()}
        </div>
      </div>
    </div>
  )
}