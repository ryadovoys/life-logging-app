import React, { useState } from 'react';
import { BottomNavigation, PageHeader, PageHeaderActions, PageTitle, ActivityItem, SectionHeader } from './ui';
import type { AppType } from './ui/ActivityItem';

interface Activity {
  id: string;
  skill: string;
  activity: string;
  timeAgo: string;
  timestamp: Date;
  source: AppType;
  emoji: string;
  color: string;
  sourceIcon?: string;
  duration?: string;
}

type FilterOption = 'All' | 'Today' | 'This Week' | 'This Month';
type GroupOption = 'By Time' | 'By Skill' | 'By Source';

const mockActivities: Activity[] = [
  {
    id: '1',
    skill: 'Guitar',
    activity: 'Playing over an hour',
    timeAgo: '5h ago',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    source: 'Transcript',
    emoji: '🎸',
    color: '#ffdfd9',
    duration: '1h 15m',
  },
  {
    id: '2',
    skill: 'Surfing',
    activity: '1:36 minutes of surfing',
    timeAgo: '5h ago',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    source: 'Health App',
    emoji: '🏄‍♂️',
    color: '#d9f0ff',
    sourceIcon: '❤️',
    duration: '1h 36m',
  },
  {
    id: '3',
    skill: 'Reading',
    activity: '43 minutes of reading',
    timeAgo: '5h ago',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    source: 'Books App',
    emoji: '📙',
    color: '#f5e8e2',
    sourceIcon: '📚',
    duration: '43m',
  },
  {
    id: '4',
    skill: 'Yoga',
    activity: 'Morning yoga session',
    timeAgo: '1d ago',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    source: 'Health App',
    emoji: '🧘‍♀️',
    color: '#E8F5E8',
    sourceIcon: '❤️',
    duration: '30m',
  },
  {
    id: '5',
    skill: 'Cooking',
    activity: 'Made pasta from scratch',
    timeAgo: '1d ago',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    source: 'Transcript',
    emoji: '🍳',
    color: '#FFF8E1',
    duration: '45m',
  },
  {
    id: '6',
    skill: 'Guitar',
    activity: 'Practice session - chord progressions',
    timeAgo: '2d ago',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    source: 'Transcript',
    emoji: '🎸',
    color: '#ffdfd9',
    duration: '25m',
  },
  {
    id: '7',
    skill: 'Cycling',
    activity: 'Evening ride around the park',
    timeAgo: '3d ago',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    source: 'Health App',
    emoji: '🚴‍♂️',
    color: '#E3F2FD',
    sourceIcon: '❤️',
    duration: '1h 20m',
  },
  {
    id: '8',
    skill: 'Painting',
    activity: 'Watercolor landscape study',
    timeAgo: '4d ago',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    source: 'Transcript',
    emoji: '🎨',
    color: '#E1F5FE',
    duration: '2h 10m',
  },
];

interface RecentPageProps {
  onNavigateHome?: () => void;
  onNavigateToSkills?: () => void;
  onNavigateToSkillDetail?: (skillId: string) => void;
  onNavigateToActivityDetail?: (activityId: string) => void;
}

export const RecentPage: React.FC<RecentPageProps> = ({ 
  onNavigateHome, 
  onNavigateToSkills,
  onNavigateToSkillDetail,
  onNavigateToActivityDetail 
}) => {
  const [filterOption, setFilterOption] = useState<FilterOption>('All');
  const [groupOption, setGroupOption] = useState<GroupOption>('By Time');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isGroupDropdownOpen, setIsGroupDropdownOpen] = useState(false);

  const handleAddActivity = () => {
    console.log('Add new activity');
  };

  const handleActivityClick = (activity: Activity) => {
    if (onNavigateToActivityDetail) {
      // Navigate to activity detail
      onNavigateToActivityDetail(activity.id);
    }
  };

  const filterActivities = (activities: Activity[]): Activity[] => {
    const now = new Date();
    
    switch (filterOption) {
      case 'Today':
        return activities.filter(activity => {
          const activityDate = activity.timestamp;
          return activityDate.toDateString() === now.toDateString();
        });
      case 'This Week':
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        return activities.filter(activity => activity.timestamp >= weekAgo);
      case 'This Month':
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        return activities.filter(activity => activity.timestamp >= monthAgo);
      case 'All':
      default:
        return activities;
    }
  };

  const groupActivities = (activities: Activity[]) => {
    const filtered = filterActivities(activities);
    
    switch (groupOption) {
      case 'By Skill':
        const bySkill: { [key: string]: Activity[] } = {};
        filtered.forEach(activity => {
          if (!bySkill[activity.skill]) {
            bySkill[activity.skill] = [];
          }
          bySkill[activity.skill].push(activity);
        });
        return bySkill;
        
      case 'By Source':
        const bySource: { [key: string]: Activity[] } = {};
        filtered.forEach(activity => {
          if (!bySource[activity.source]) {
            bySource[activity.source] = [];
          }
          bySource[activity.source].push(activity);
        });
        return bySource;
        
      case 'By Time':
      default:
        const byTime: { [key: string]: Activity[] } = {
          'Today': [],
          'Yesterday': [],
          'This Week': [],
          'Earlier': [],
        };
        
        const now = new Date();
        const today = now.toDateString();
        const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000).toDateString();
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        
        filtered.forEach(activity => {
          const activityDate = activity.timestamp.toDateString();
          
          if (activityDate === today) {
            byTime['Today'].push(activity);
          } else if (activityDate === yesterday) {
            byTime['Yesterday'].push(activity);
          } else if (activity.timestamp >= weekAgo) {
            byTime['This Week'].push(activity);
          } else {
            byTime['Earlier'].push(activity);
          }
        });
        
        // Remove empty groups
        Object.keys(byTime).forEach(key => {
          if (byTime[key].length === 0) {
            delete byTime[key];
          }
        });
        
        return byTime;
    }
  };

  const groupedActivities = groupActivities(mockActivities);

  return (
    <div className="min-h-screen bg-white font-instrument">
      {/* Main Content */}
      <div className="pb-20">
        {/* Header */}
        <PageHeader
          onBack={onNavigateHome}
          rightElement={<PageHeaderActions.PlusButton onClick={handleAddActivity} />}
        />

        {/* Page Title with Filter and Group Options */}
        <PageTitle 
          title="Recent" 
          rightElement={
            <div className="flex items-center gap-xs">
              {/* Filter Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center gap-xs px-sm py-xs bg-gray-20 border border-gray-40 rounded-lg text-caption text-gray-80"
                  onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                >
                  <span>{filterOption}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isFilterDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {isFilterDropdownOpen && (
                  <div className="absolute right-0 top-full mt-xs bg-white border border-gray-40 rounded-lg shadow-lg z-10 min-w-[100px]">
                    {(['All', 'Today', 'This Week', 'This Month'] as FilterOption[]).map((option) => (
                      <button
                        key={option}
                        className={`w-full text-left px-sm py-xs text-caption hover:bg-gray-20 first:rounded-t-lg last:rounded-b-lg ${
                          filterOption === option ? 'text-black font-semibold' : 'text-gray-80'
                        }`}
                        onClick={() => {
                          setFilterOption(option);
                          setIsFilterDropdownOpen(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Group Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center gap-xs px-sm py-xs bg-gray-20 border border-gray-40 rounded-lg text-caption text-gray-80"
                  onClick={() => setIsGroupDropdownOpen(!isGroupDropdownOpen)}
                >
                  <span>{groupOption}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isGroupDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {isGroupDropdownOpen && (
                  <div className="absolute right-0 top-full mt-xs bg-white border border-gray-40 rounded-lg shadow-lg z-10 min-w-[100px]">
                    {(['By Time', 'By Skill', 'By Source'] as GroupOption[]).map((option) => (
                      <button
                        key={option}
                        className={`w-full text-left px-sm py-xs text-caption hover:bg-gray-20 first:rounded-t-lg last:rounded-b-lg ${
                          groupOption === option ? 'text-black font-semibold' : 'text-gray-80'
                        }`}
                        onClick={() => {
                          setGroupOption(option);
                          setIsGroupDropdownOpen(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          }
        />
        
        {/* Activities List */}
        <div className="px-md bg-white">
          {Object.entries(groupedActivities).map(([groupName, activities]) => (
            <div key={groupName}>
              <h2 className="font-instrument font-semibold text-title text-black mb-md mt-lg first:mt-0 text-left">
                {groupName}
              </h2>
              {activities.map((activity) => (
                <ActivityItem
                  key={activity.id}
                  skill={activity.skill}
                  activity={activity.activity}
                  timeAgo={activity.timeAgo}
                  source={activity.source}
                  emoji={activity.emoji}
                  color={activity.color}
                  sourceIcon={activity.sourceIcon}
                  onClick={() => handleActivityClick(activity)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation 
          currentPage="home"
          onNavigateToHome={onNavigateHome}
          onNavigateToSkills={onNavigateToSkills}
        />
      </div>
    </div>
  );
};