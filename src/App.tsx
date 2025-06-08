import React, { useState } from 'react'
import { Homepage } from './components/Homepage'
import { SkillsPage } from './components/SkillsPage'
import './App.css'

type Page = 'home' | 'skills'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const navigateToSkills = () => setCurrentPage('skills')
  const navigateToHome = () => setCurrentPage('home')

  if (currentPage === 'skills') {
    return <SkillsPage onNavigateHome={navigateToHome} />
  }

  return <Homepage onNavigateToSkills={navigateToSkills} />
}

export default App
