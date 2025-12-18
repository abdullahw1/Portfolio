'use client'

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToResume = () => {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-max section-padding text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            AW
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Abdullah Waheed
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Software Engineer | DevOps & AI Infrastructure
          </h2>
          
          {/* Tagline */}
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Architecting secure AI infrastructure that scales. Built DefendAI's core security platform processing <span className="font-semibold text-primary-600 dark:text-primary-400">10M+ daily LLM requests</span> for Fortune 500 companies. 
            Specializing in real-time AI threat detection, autonomous agent orchestration, and enterprise-scale security gateways.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">10M+</div>
              <div className="text-gray-600 dark:text-gray-400">Daily LLM Requests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">85%</div>
              <div className="text-gray-600 dark:text-gray-400">Security Incidents Reduced</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToResume}
              className="btn-primary flex items-center gap-2"
            >
              View Resume
              <ArrowDown size={20} />
            </button>
            
            <a 
              href="#projects" 
              className="btn-secondary"
            >
              See Projects
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:abdullahw888@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/abdullah-waheed0524/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/abdullahw888" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400 dark:text-gray-500" size={24} />
      </div>
    </div>
  )
}