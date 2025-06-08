import React, { useState } from 'react'
import { Homepage } from './components/Homepage'
import { SkillsPage } from './components/SkillsPage'
import SkillDetailPage from './components/SkillDetailPage'
import './App.css'

type Page = 'home' | 'skills' | 'skillDetail'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null)
  const [previousPage, setPreviousPage] = useState<Page>('home')

  const navigateToSkills = () => {
    setPreviousPage('home')
    setCurrentPage('skills')
  }
  
  const navigateToHome = () => setCurrentPage('home')
  
  const navigateToSkillDetail = (skillId: string) => {
    setPreviousPage(currentPage)
    setSelectedSkillId(skillId)
    setCurrentPage('skillDetail')
  }
  
  const navigateBackFromSkillDetail = () => {
    setCurrentPage(previousPage)
  }

  if (currentPage === 'skillDetail') {
    return (
      <SkillDetailPage 
        onNavigateToHome={navigateToHome}
        onNavigateToSkills={navigateToSkills}
        onBack={navigateBackFromSkillDetail}
      />
    )
  }

  if (currentPage === 'skills') {
    return (
      <SkillsPage 
        onNavigateHome={navigateToHome}
        onNavigateToSkillDetail={navigateToSkillDetail}
      />
    )
  }

  return (
    <Homepage 
      onNavigateToSkills={navigateToSkills}
      onNavigateToSkillDetail={navigateToSkillDetail}
    />
  )
}

export default App
