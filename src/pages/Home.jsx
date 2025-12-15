import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import TechStack from '../components/TechStack'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Appointment from '../components/Appointment'
import Contact from '../components/Contact'
import ParticleBackground from '../components/ParticleBackground'

const Home = () => {
  return (
    <div className="home-page">
      <ParticleBackground />
      <Hero />
      <About />
      <TechStack />
      <Skills />
      <Projects />
      <Achievements />
      <Appointment />
      <Contact />
    </div>
  )
}

export default Home