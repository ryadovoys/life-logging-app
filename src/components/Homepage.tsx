import React, { useState } from 'react';
import {
  SearchBar,
  SkillCard,
  ActivityItem,
  SectionHeader,
  QuestionCard,
  SuggestionCard,
  BottomNavigation,
} from './ui';
import type { AppType } from './ui/ActivityItem';

const mockSkills = [
  {
    title: 'Surfing',
    totalTime: '100h',
    lastActivity: 'Today',
    streak: 5,
    emoji: '🏄‍♂️',
    color: '#d9f0ff',
  },
  {
    title: 'Guitar',
    totalTime: '100h',
    lastActivity: 'Today',
    emoji: '🎸',
    color: '#ffdfd9',
  },
  {
    title: 'Skateboarding',
    totalTime: '100h',
    lastActivity: 'Today',
    emoji: '🛹',
    color: '#f7e8bb',
  },
];

const mockActivities: Array<{
  skill: string;
  activity: string;
  timeAgo: string;
  source: AppType;
  emoji: string;
  color: string;
  sourceIcon?: string;
}> = [
  {
    skill: 'Guitar',
    activity: 'Playing over an hour',
    timeAgo: '5h ago',
    source: 'Transcript',
    emoji: '🎸',
    color: '#ffdfd9',
  },
  {
    skill: 'Surfing',
    activity: '1:36 minutes of surfing',
    timeAgo: '5h ago',
    source: 'Health App',
    emoji: '🏄‍♂️',
    color: '#d9f0ff',
    sourceIcon: '❤️',
  },
  {
    skill: 'Reading',
    activity: '43 minutes of reading',
    timeAgo: '5h ago',
    source: 'Books App',
    emoji: '📙',
    color: '#f5e8e2',
    sourceIcon: '📚',
  },
];

const mockUpNext: Array<{
  skill: string;
  activity: string;
  timeAgo: string;
  source: AppType;
  emoji: string;
  color: string;
}> = [
  {
    skill: 'Surfing',
    activity: 'Land a smooth cutback',
    timeAgo: 'Medium',
    source: 'Transcript', // Fixed: was empty string
    emoji: '🏄‍♂️',
    color: '#d9f0ff',
  },
];

const mockSuggestions = [
  {
    title: 'Punk Rock',
    description: 'Because you like guitar and skateboarding',
    emoji: '🤘',
    color: '#fbeaff',
  },
  {
    title: 'Gardening',
    description: 'Just something new for you to try, take a look',
    emoji: '🌿',
    color: '#e9ffde',
  },
  {
    title: 'Snowboarding',
    description: 'Based on your interest in skateboarding and surfing',
    emoji: '🏂',
    color: '#d9f0ff',
  },
];

interface HomepageProps {
  onNavigateToSkills?: () => void;
  onNavigateToRecent?: () => void;
  onNavigateToSkillDetail?: (skillId: string) => void;
}

export const Homepage: React.FC<HomepageProps> = ({ onNavigateToSkills, onNavigateToRecent, onNavigateToSkillDetail }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSkillClick = (skillTitle: string) => {
    if (onNavigateToSkillDetail && skillTitle === 'Surfing') {
      onNavigateToSkillDetail('surfing');
    }
  };

  return (
    <div className="min-h-screen bg-white font-instrument">
      {/* Main Content */}
      <div className="pb-20">
        {/* Header with Search */}
        <div className="px-md pt-lg pb-sm">
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onAdd={() => console.log('Add clicked')}
          />
        </div>

        {/* My Skills Section */}
        <div className="mb-lg">
          <SectionHeader title="My skills" showViewAll onViewAll={onNavigateToSkills} />
          <div className="overflow-hidden">
            <div className="flex gap-md overflow-x-auto px-md pb-md">
              {mockSkills.map((skill, index) => (
                <SkillCard 
                  key={index} 
                  {...skill} 
                  onClick={() => handleSkillClick(skill.title)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Section */}
        <div className="mb-lg">
          <SectionHeader title="Recent" showViewAll onViewAll={onNavigateToRecent} />
          <div className="px-md">
            {mockActivities.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </div>
        </div>

        {/* Quiz Section */}
        <div className="mb-lg">
          <SectionHeader title="Quiz" showViewAll />
          <QuestionCard
            question="Let's update your musical journey — have you played piano recently?"
            onYes={() => console.log('Yes clicked')}
            onNo={() => console.log('No clicked')}
            onSkip={() => console.log('Skip clicked')}
          />
        </div>

        {/* Learn New Section */}
        <div className="mb-lg">
          <SectionHeader title="Learn new" showViewAll />
          <div className="overflow-hidden">
            <div className="flex gap-sm overflow-x-auto px-md pb-md">
              {mockSuggestions.map((suggestion, index) => (
                <SuggestionCard key={index} {...suggestion} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation 
          currentPage="home"
          onNavigateToHome={() => {}} 
          onNavigateToSkills={onNavigateToSkills}
        />
      </div>
    </div>
  );
};