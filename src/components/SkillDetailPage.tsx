import React from 'react'
import { PageHeader, SectionHeader, ActivityItem, BottomNavigation } from './ui'

interface SkillDetailPageProps {
  onNavigateToHome: () => void
  onNavigateToSkills: () => void
  onBack?: () => void
}

const SkillDetailPage: React.FC<SkillDetailPageProps> = ({
  onNavigateToHome,
  onNavigateToSkills,
  onBack
}) => {
  const progressStats = [
    { label: 'Est. total', value: '140h', bgColor: 'bg-green-100' },
    { label: 'Last entry', value: 'Today', bgColor: 'bg-yellow-100' },
    { label: 'Hours this week', value: '5h 30m', bgColor: 'bg-blue-100' },
    { label: 'Monthly trend', value: '+15%', bgColor: 'bg-purple-100' }
  ]

  const recentUpdates = [
    {
      title: '1:36 minutes of surfing',
      timeAgo: '5h ago',
      source: 'Health App' as const,
      emoji: '🏄‍♂️',
      color: '#d9f0ff'
    },
    {
      title: '1:12 minutes of surfing',
      timeAgo: '2 days ago',
      source: 'Health App' as const,
      emoji: '🏄‍♂️',
      color: '#d9f0ff'
    },
    {
      title: '2:15 minutes of surfing',
      timeAgo: '1 week ago',
      source: 'Transcript' as const,
      emoji: '🏄‍♂️',
      color: '#d9f0ff'
    }
  ]

  const learnNext = [
    {
      title: 'Transition to a shorter board',
      description: 'Unlocked after logging 10h total',
      emoji: '🏄‍♂️'
    },
    {
      title: 'Land a smooth cutback',
      description: 'Based on your recent practice in Turning',
      emoji: '🌊'
    },
    {
      title: 'Shift weight during bottom turn',
      description: 'Complements your progress on Pop-Up',
      emoji: '⚖️'
    }
  ]

  const inspiration = [
    {
      title: 'Cutback Tutorial by Kai',
      type: 'Video',
      source: 'YouTube',
      emoji: '🎥',
      thumbnail: 'bg-blue-200'
    },
    {
      title: 'Mastering the Cutback',
      type: 'Article',
      source: 'Medium',
      emoji: '📝',
      thumbnail: 'bg-green-200'
    },
    {
      title: 'Cutback Tips from Pros',
      type: 'Community',
      source: 'Reddit',
      emoji: '💬',
      thumbnail: 'bg-orange-200'
    }
  ]

  const suggested = [
    {
      title: 'Snowboarding',
      description: 'Based on your interest in skateboarding and surfing',
      emoji: '🏂',
      bgColor: 'bg-blue-100'
    }
  ]

  return (
    <div className="max-w-[393px] mx-auto bg-white min-h-screen">
      <PageHeader 
        title="Surfing" 
        onBack={onBack || onNavigateToSkills}
        showMenu={true}
        showAddButton={false}
        emoji="🏄‍♂️"
        emojiBackgroundColor="#d9f0ff"
      />
      
      <div className="pb-20">
        {/* Progress Section */}
        <div className="mb-6">
          <SectionHeader title="Progress" showViewAll={false} />
          <div className="grid grid-cols-2 gap-3 mt-4 px-4">
            {progressStats.map((stat, index) => (
              <div key={index} className={`${stat.bgColor} p-4 rounded-lg h-24 flex flex-col`}>
                <div className="text-descriptor text-gray-80 mb-0 text-left font-normal">{stat.label}</div>
                <div className="text-h2 text-black mb-0 text-left font-semibold mt-4">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Section */}
        <div className="mb-6">
          <SectionHeader title="Highlight" showViewAll={true} />
          <div className="bg-purple-100 p-4 rounded-lg mt-4 mx-4">
            <div className="text-body text-black mb-0 text-left font-normal">
              This is your main goal for now based on your time spent on this activity. Keep it going to achieve great results
            </div>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="mb-6">
          <SectionHeader title="Recent updates" showViewAll={true} />
          <div className="mt-4 space-y-4 px-4">
            {recentUpdates.map((update, index) => (
              <ActivityItem
                key={index}
                title={update.title}
                timeAgo={update.timeAgo}
                source={update.source}
                emoji={update.emoji}
                color={update.color}
                showIcon={true}
                showBorder={false}
              />
            ))}
          </div>
        </div>

        {/* Learn Next */}
        <div className="mb-6">
          <SectionHeader title="Learn next" showViewAll={true} />
          <div className="mt-4 space-y-4 px-4">
            {learnNext.map((item, index) => (
              <div key={index} className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="text-xl" style={{fontFamily: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'}}>
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="text-body text-black mb-0 text-left font-semibold">{item.title}</div>
                    <div className="text-body-small text-gray-80 mb-0 text-left font-normal">{item.description}</div>
                  </div>
                </div>
                <button className="text-gray-80">⋯</button>
              </div>
            ))}
          </div>
        </div>

        {/* Inspiration */}
        <div className="mb-6">
          <SectionHeader title="Inspiration" showViewAll={true} buttonText="Find more" />
          <div className="space-y-4 px-4">
            {inspiration.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className={`w-10 h-10 ${item.thumbnail} rounded-lg flex items-center justify-center`}>
                    <span className="text-sm">{item.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-body text-black mb-0 text-left font-semibold">{item.title}</div>
                    <div className="text-body-small text-gray-80 mb-0 text-left font-normal">
                      {item.type} • {item.source}
                    </div>
                  </div>
                </div>
                <button className="text-gray-80">⋯</button>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested for You */}
        <div className="mb-6">
          <SectionHeader title="Suggested for you" showViewAll={true} />
          <div className="mt-4 px-4">
            {suggested.map((item, index) => (
              <div key={index} className={`${item.bgColor} p-4 rounded-lg flex items-center gap-3`}>
                <div className="text-2xl" style={{fontFamily: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'}}>
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <div className="text-body text-black mb-0 text-left font-semibold">{item.title}</div>
                  <div className="text-body-small text-gray-80 mb-0 text-left font-normal">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10">
        <BottomNavigation 
          currentPage="skillDetail"
          onNavigateToHome={onNavigateToHome}
          onNavigateToSkills={onNavigateToSkills}
        />
      </div>
    </div>
  )
}

export default SkillDetailPage