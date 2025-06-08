import React, { useState } from 'react'
import { Homepage } from './components/Homepage'
import { SkillsPage } from './components/SkillsPage'
import SkillDetailPage from './components/SkillDetailPage'
import './App.css'

type Page = 'home' | 'skills' | 'skillDetail'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null)

  const navigateToSkills = () => setCurrentPage('skills')
  const navigateToHome = () => setCurrentPage('home')
  const navigateToSkillDetail = (skillId: string) => {
    setSelectedSkillId(skillId)
    setCurrentPage('skillDetail')
  }

  if (currentPage === 'skillDetail') {
    return (
      <SkillDetailPage 
        onNavigateToHome={navigateToHome}
        onNavigateToSkills={navigateToSkills}
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

  return <Homepage onNavigateToSkills={navigateToSkills} />
}

export default App
