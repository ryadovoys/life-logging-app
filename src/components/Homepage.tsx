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

const mockActivities = [
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

const mockUpNext = [
  {
    skill: 'Surfing',
    activity: 'Land a smooth cutback',
    timeAgo: 'Medium',
    source: '',
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
}

export const Homepage: React.FC<HomepageProps> = ({ onNavigateToSkills }) => {
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-white font-instrument">
      {/* Main Content */}
      <div className="pb-20">
        {/* Header with Search */}
        <div className="px-4 pt-6 pb-3">
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onAdd={() => console.log('Add clicked')}
          />
        </div>

        {/* My Skills Section */}
        <div className="mb-6">
          <SectionHeader title="My skills" showViewAll onViewAll={onNavigateToSkills} />
          <div className="overflow-hidden">
            <div className="flex gap-4 overflow-x-auto px-4 pb-4">
              {mockSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="mb-6">
          <SectionHeader title="Recent activities" showViewAll />
          <div className="px-4">
            {mockActivities.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </div>
        </div>

        {/* Learn Next Section */}
        <div className="mb-6">
          <SectionHeader title="Learn next" showViewAll />
          <div className="px-4">
            {mockUpNext.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </div>
        </div>

        {/* Share Updates Section */}
        <div className="mb-6">
          <SectionHeader title="Share updates" showViewAll />
          <QuestionCard
            question="Let's update your musical journey — have you played piano recently?"
            onYes={() => console.log('Yes clicked')}
            onNo={() => console.log('No clicked')}
            onSkip={() => console.log('Skip clicked')}
          />
        </div>

        {/* Suggested for You Section */}
        <div className="mb-6">
          <SectionHeader title="Suggested for you" showViewAll />
          <div className="overflow-hidden">
            <div className="flex gap-3 overflow-x-auto px-4 pb-4">
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
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          onNavigateToSkills={onNavigateToSkills}
        />
      </div>
    </div>
  );
};