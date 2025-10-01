'use client'

import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container-max section-padding py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Open to new opportunities in AI infrastructure, DevOps, and security engineering. 
          Let's discuss how we can build the future of AI together.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a 
                    href="mailto:abdullahw888@gmail.com"
                    className="text-white hover:text-primary-400 transition-colors font-medium"
                  >
                    abdullahw888@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/abdullah-waheed0524/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-400 transition-colors font-medium"
                  >
                    abdullah-waheed0524
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Github className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">GitHub</p>
                  <a 
                    href="https://github.com/abdullahw888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-400 transition-colors font-medium"
                  >
                    abdullahw888
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white font-medium">Remote / US</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Quick Stats</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-primary-400 mb-2">5+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-primary-400 mb-2">10M+</div>
                <div className="text-gray-300 text-sm">LLM Requests/Day</div>
              </div>
              
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-primary-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime Achieved</div>
              </div>
              
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
                <div className="text-gray-300 text-sm">Open Source Repos</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Abdullah Waheed. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  )
}