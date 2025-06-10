import React, { useState } from 'react';
import { BottomNavigation, PageHeader, PageHeaderActions, PageTitle, ActivityItem } from './ui';
import { getRecentActivities, getSkillById } from '../data';
import type { AppType } from './ui/ActivityItem';

// Use the Activity interface from our data structure
interface DisplayActivity {
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

// Convert real activities to display format
const convertToDisplayActivities = (): DisplayActivity[] => {
  const realActivities = getRecentActivities();
  
  return realActivities.map(activity => {
    const skill = getSkillById(activity.skillId);
    return {
      id: activity.id,
      skill: skill?.name || activity.skillId,
      activity: activity.title,
      timeAgo: activity.timeAgo,
      timestamp: activity.timestamp,
      source: activity.source,
      emoji: activity.emoji,
      color: skill?.color || '#f0f0f0',
      sourceIcon: activity.source === 'Health App' ? '❤️' : 
                  activity.source === 'Books App' ? '📚' : undefined,
      duration: activity.duration,
    };
  });
};

interface RecentPageProps {
  onNavigateHome?: () => void;
  onNavigateToSkills?: () => void;
  onNavigateToSkillDetail?: (skillId: string) => void;
  onNavigateToActivityDetail?: (activityId: string) => void;
}

export const RecentPage: React.FC<RecentPageProps> = ({ 
  onNavigateHome, 
  onNavigateToSkills,
  onNavigateToActivityDetail
}) => {
  const [filterOption, setFilterOption] = useState<FilterOption>('All');
  const [groupOption, setGroupOption] = useState<GroupOption>('By Time');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isGroupDropdownOpen, setIsGroupDropdownOpen] = useState(false);

  // Get real activities data
  const allActivities = convertToDisplayActivities();

  const handleAddActivity = () => {
    console.log('Add new activity');
  };

  const handleActivityClick = (activity: DisplayActivity) => {
    if (onNavigateToActivityDetail) {
      onNavigateToActivityDetail(activity.id);
    }
  };

  const filterActivities = (activities: DisplayActivity[]): DisplayActivity[] => {
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

  const groupActivities = (activities: DisplayActivity[]) => {
    const filtered = filterActivities(activities);
    
    switch (groupOption) {
      case 'By Skill':
        const bySkill: { [key: string]: DisplayActivity[] } = {};
        filtered.forEach(activity => {
          if (!bySkill[activity.skill]) {
            bySkill[activity.skill] = [];
          }
          bySkill[activity.skill].push(activity);
        });
        return bySkill;
        
      case 'By Source':
        const bySource: { [key: string]: DisplayActivity[] } = {};
        filtered.forEach(activity => {
          if (!bySource[activity.source]) {
            bySource[activity.source] = [];
          }
          bySource[activity.source].push(activity);
        });
        return bySource;
        
      case 'By Time':
      default:
        const byTime: { [key: string]: DisplayActivity[] } = {
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

  const groupedActivities = groupActivities(allActivities);

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