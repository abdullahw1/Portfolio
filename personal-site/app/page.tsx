'use client'

import { useState } from 'react'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Repositories from './components/Repositories'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <main className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>
      
      <section id="resume" className="min-h-screen bg-white">
        <Resume />
      </section>
      
      <section id="projects" className="min-h-screen bg-gray-50">
        <Projects />
      </section>
      
      <section id="repositories" className="min-h-screen bg-white">
        <Repositories />
      </section>
      
      <section id="contact" className="bg-gray-900 text-white">
        <Contact />
      </section>
    </main>
  )
}