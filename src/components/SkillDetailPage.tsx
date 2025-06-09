import React from 'react'
import { PageHeader, PageHeaderActions, PageTitle, SectionHeader, ActivityItem, SuggestionCard, BottomNavigation } from './ui'

interface SkillDetailPageProps {
  onNavigateToHome: () => void
  onNavigateToSkills: () => void
  onBack?: () => void
  onNavigateToActivityDetail?: (activityId: string) => void
}

const SkillDetailPage: React.FC<SkillDetailPageProps> = ({
  onNavigateToHome,
  onNavigateToSkills,
  onBack,
  onNavigateToActivityDetail
}) => {
  const progressStats = [
    { label: 'Est. total', value: '140h', bgColor: 'bg-green-100' },
    { label: 'Last entry', value: 'Today', bgColor: 'bg-yellow-100' },
    { label: 'Hours this week', value: '5h 30m', bgColor: 'bg-blue-100' },
    { label: 'Monthly trend', value: '+15%', bgColor: 'bg-purple-100' }
  ]

  const recentUpdates = [
    {
      id: '1',
      title: '1:36 minutes of surfing',
      timestamp: '5h ago',
      sourceApp: 'Health App' as const,
      emoji: '🏄‍♂️',
      visual: { iconColor: '#d9f0ff' },
      interaction: { onMore: () => console.log('More actions for activity 1') }
    },
    {
      id: '2',
      title: '1:12 minutes of surfing',
      timestamp: '2 days ago',
      sourceApp: 'Health App' as const,
      emoji: '🏄‍♂️',
      visual: { iconColor: '#d9f0ff' },
      interaction: { onMore: () => console.log('More actions for activity 2') }
    },
    {
      id: '3',
      title: '2:15 minutes of surfing',
      timestamp: '1 week ago',
      sourceApp: 'Transcript' as const,
      emoji: '🏄‍♂️',
      visual: { iconColor: '#d9f0ff' },
      interaction: { onMore: () => console.log('More actions for activity 3') }
    }
  ]

  const learnNext = [
    {
      title: 'Transition to a shorter board',
      description: 'Unlocked after logging 10h total'
    },
    {
      title: 'Land a smooth cutback',
      description: 'Based on your recent practice in Turning'
    },
    {
      title: 'Shift weight during bottom turn',
      description: 'Complements your progress on Pop-Up'
    }
  ]

  const inspiration = [
    {
      title: 'Cutback Tutorial by Kai',
      type: 'Video',
      source: 'YouTube',
      thumbnailUrl: '/surfing-tutorial-1.jpg', // Will be fetched from YouTube
      color: '#E3F2FD'
    },
    {
      title: 'Mastering the Cutback',
      type: 'Article', 
      source: 'Medium',
      thumbnailUrl: '/surfing-article-1.jpg', // Will be fetched from Medium
      color: '#E8F5E8'
    },
    {
      title: 'Cutback Tips from Pros',
      type: 'Community',
      source: 'Reddit', 
      thumbnailUrl: '/surfing-reddit-1.jpg', // Will be fetched from Reddit
      color: '#FFF8E1'
    }
  ]

  const suggested = [
    {
      title: 'Snowboarding',
      description: 'Based on your interest in skateboarding and surfing',
      emoji: '🏂',
      color: '#d9f0ff'
    },
    {
      title: 'Rock Climbing',
      description: 'Physical challenge that complements your surfing',
      emoji: '🧗‍♂️',
      color: '#f7e8bb'
    }
  ]

  return (
    <div className="max-w-[393px] mx-auto bg-white min-h-screen">
      <PageHeader 
        onBack={onBack || onNavigateToSkills}
        rightElement={<PageHeaderActions.MenuButton />}
      />
      
      <div className="px-md pt-sm pb-md">
        <div className="flex items-center gap-md">
          <div 
            className="flex-shrink-0 w-[60px] h-[60px] rounded-lg flex items-center justify-center text-[40px]"
            style={{ 
              backgroundColor: '#d9f0ff',
              fontFamily: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}
          >
            🏄‍♂️
          </div>
          <h1 className="font-instrument font-semibold text-headline text-black mb-0 text-left">
            Surfing
          </h1>
        </div>
      </div>
      
      <div className="pb-20">
        {/* Progress Section */}
        <div className="mb-6">
          <SectionHeader title="Progress" showViewAll={false} />
          <div className="grid grid-cols-2 gap-md mt-md px-md">
            {progressStats.map((stat, index) => (
              <div key={index} className={`${stat.bgColor} p-4 rounded-lg h-24 flex flex-col`}>
                <div className="text-descriptor text-gray-80 mb-0 text-left font-normal">{stat.label}</div>
                <div className="text-h2 text-black mb-0 text-left font-semibold mt-4">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent */}
        <div className="mb-6">
          <SectionHeader title="Recent" showViewAll={true} />
          <div className="mt-md space-y-sm px-md">
            {recentUpdates.map((update, index) => (
              <div key={index}>
                <div 
                  className="flex items-center gap-md py-sm px-0 cursor-pointer"
                  onClick={() => onNavigateToActivityDetail && onNavigateToActivityDetail(update.id)}
                >
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="font-instrument font-semibold text-body text-black mb-0 text-left">
                      {update.title}
                    </h3>
                    <div className="flex items-center gap-sm text-left">
                      <span className="font-instrument font-normal text-caption text-gray-80 text-left">
                        {update.timestamp}
                      </span>
                      <div className="w-px h-sm bg-gray-40"></div>
                      <div className="flex items-center gap-1">
                        {update.sourceApp === 'Health App' && (
                          <img 
                            src="/health-app.png" 
                            alt="Health App"
                            className="w-4 h-4 rounded-sm"
                          />
                        )}
                        {update.sourceApp === 'Books App' && (
                          <img 
                            src="/books-app.png" 
                            alt="Books App"
                            className="w-4 h-4 rounded-sm"
                          />
                        )}
                        {update.sourceApp === 'YouTube' && (
                          <img 
                            src="/youtube-app.png" 
                            alt="YouTube"
                            className="w-4 h-4 rounded-sm"
                          />
                        )}
                        {update.sourceApp === 'Reddit' && (
                          <img 
                            src="/reddit-app.png" 
                            alt="Reddit"
                            className="w-4 h-4 rounded-sm"
                          />
                        )}
                        <span className="font-instrument font-normal text-caption text-gray-80 text-left">
                          {update.sourceApp}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center" 
                    onClick={(e) => {
                      e.stopPropagation();
                      update.interaction?.onMore();
                    }}
                  >
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 14c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 4 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 6 10c.55 0 1.02.196 1.413.587C7.804 10.98 8 11.45 8 12s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 6 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 10 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 12 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 12 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 16 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 18 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 18 14z"/>
                    </svg>
                  </button>
                </div>
                {index < recentUpdates.length - 1 && (
                  <div className="w-full h-px bg-gray-40 my-sm"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Learn Next */}
        <div className="mb-6">
          <SectionHeader title="Learn next" showViewAll={true} />
          <div className="mt-md space-y-md px-md">
            {learnNext.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-md py-sm px-0">
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="font-instrument font-semibold text-body text-black mb-0 text-left">
                      {item.title}
                    </h3>
                    <div className="text-caption text-gray-80 text-left">
                      {item.description}
                    </div>
                  </div>
                  
                  <button className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 14c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 4 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 6 10c.55 0 1.02.196 1.413.587C7.804 10.98 8 11.45 8 12s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 6 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 10 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 12 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 12 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 16 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 18 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 18 14z"/>
                    </svg>
                  </button>
                </div>
                {index < learnNext.length - 1 && (
                  <div className="w-full h-px bg-gray-40 my-sm"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Inspiration */}
        <div className="mb-6">
          <SectionHeader title="Inspiration" showViewAll={true} buttonText="Find more" />
          <div className="mt-md space-y-sm px-md">
            {inspiration.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-md py-sm px-0">
                  <div 
                    className="flex-shrink-0 w-[60px] h-[60px] rounded-lg bg-cover bg-center"
                    style={{ 
                      backgroundColor: item.color,
                      backgroundImage: `url(${item.thumbnailUrl})`
                    }}
                  />
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="font-instrument font-semibold text-body text-black mb-0 text-left">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-sm text-left">
                      <span className="font-instrument font-normal text-caption text-gray-80 text-left">
                        {item.type}
                      </span>
                      <div className="w-px h-sm bg-gray-40"></div>
                      <div className="flex items-center gap-1">
                        {item.source === 'YouTube' && (
                          <img 
                            src="/youtube-app.png" 
                            alt="YouTube"
                            className="w-4 h-4 rounded-sm"
                          />
                        )}
                        {item.source === 'Medium' && (
                          <img 
                            src="/medium-app.png" 
                            alt="Medium"
                            className="w-4 h-4 rounded-sm"
                          />
                        )}
                        {item.source === 'Reddit' && (
                          <img 
                            src="/reddit-app.png" 
                            alt="Reddit"
                            className="w-4 h-4 rounded-sm"
                          />
                        )}
                        <span className="font-instrument font-normal text-caption text-gray-80 text-left">
                          {item.source}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 14c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 4 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 6 10c.55 0 1.02.196 1.413.587C7.804 10.98 8 11.45 8 12s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 6 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 10 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 12 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 12 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 16 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 18 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 18 14z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested for You */}
        <div className="mb-6">
          <SectionHeader title="Suggested for you" showViewAll={true} />
          <div className="overflow-hidden">
            <div className="flex gap-sm overflow-x-auto px-md pb-md mt-md">
              {suggested.map((suggestion, index) => (
                <SuggestionCard key={index} {...suggestion} />
              ))}
            </div>
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