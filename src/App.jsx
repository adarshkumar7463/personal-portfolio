import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import NotFound from './pages/NotFound'
import AppContextProvider from './contexts/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App