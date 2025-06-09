import { useState } from 'react'
import { Homepage } from './components/Homepage'
import { SkillsPage } from './components/SkillsPage'
import { RecentPage } from './components/RecentPage'
import { RecentActivityDetailPage } from './components/RecentActivityDetailPage'
import SkillDetailPage from './components/SkillDetailPage'
import './App.css'

type Page = 'home' | 'skills' | 'recent' | 'skillDetail' | 'activityDetail'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  // const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null)
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null)
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
  
  const navigateToActivityDetail = (activityId: string) => {
    setPreviousPage(currentPage)
    setSelectedActivityId(activityId)
    setCurrentPage('activityDetail')
  }
  
  const navigateBackFromSkillDetail = () => {
    setCurrentPage(previousPage)
  }
  
  const navigateBackFromActivityDetail = () => {
    setCurrentPage(previousPage)
  }

  if (currentPage === 'skillDetail') {
    return (
      <SkillDetailPage 
        onNavigateToHome={navigateToHome}
        onNavigateToSkills={navigateToSkills}
        onBack={navigateBackFromSkillDetail}
        onNavigateToActivityDetail={navigateToActivityDetail}
      />
    )
  }

  if (currentPage === 'activityDetail') {
    return (
      <RecentActivityDetailPage 
        onNavigateHome={navigateToHome}
        onNavigateToSkills={navigateToSkills}
        onBack={navigateBackFromActivityDetail}
        activityId={selectedActivityId || undefined}
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
        onNavigateToActivityDetail={navigateToActivityDetail}
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
