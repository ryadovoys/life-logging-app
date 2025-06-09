import { useState } from 'react'
import { Homepage } from './components/Homepage'
import { SkillsPage } from './components/SkillsPage'
import { RecentPage } from './components/RecentPage'
import SkillDetailPage from './components/SkillDetailPage'
import './App.css'

type Page = 'home' | 'skills' | 'recent' | 'skillDetail'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  // const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null)
  const [previousPage, setPreviousPage] = useState<Page>('home')

  const navigateToSkills = () => {
    setPreviousPage(currentPage)
    setCurrentPage('skills')
  }
  
  const navigateToRecent = () => {
    setPreviousPage(currentPage)
    setCurrentPage('recent')
  }
  
  const navigateToHome = () => setCurrentPage('home')
  
  const navigateToSkillDetail = (skillId: string) => {
    setPreviousPage(currentPage)
    // setSelectedSkillId(skillId) - TODO: Use skillId when skill details are dynamic
    console.log('Navigating to skill:', skillId) // Temporary to satisfy linter
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

  if (currentPage === 'recent') {
    return (
      <RecentPage 
        onNavigateHome={navigateToHome}
        onNavigateToSkills={navigateToSkills}
        onNavigateToSkillDetail={navigateToSkillDetail}
      />
    )
  }

  return (
    <Homepage 
      onNavigateToSkills={navigateToSkills}
      onNavigateToRecent={navigateToRecent}
      onNavigateToSkillDetail={navigateToSkillDetail}
    />
  )
}

export default App
