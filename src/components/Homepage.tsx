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
import { skills, getRecentActivities, getSuggestedSkills } from '../data';

// Get real data from our centralized data structure
const getMySkills = () => {
  // Return top 3 most active skills for homepage
  return [skills.surfing, skills.guitar, skills.cooking];
};

const getHomepageActivities = () => {
  // Get recent activities for homepage
  const recentActivities = getRecentActivities(3);
  return recentActivities.map(activity => {
    const skill = skills[activity.skillId];
    return {
      id: activity.id, // Include activity ID for navigation
      skill: skill?.name || activity.skillId,
      activity: activity.title,
      timeAgo: activity.timeAgo,
      source: activity.source,
      emoji: activity.emoji,
      color: skill?.color || '#f0f0f0',
      sourceIcon: activity.source === 'Health App' ? '❤️' : 
                  activity.source === 'Books App' ? '📚' : undefined,
    };
  });
};

const getHomepageSuggestions = () => {
  // Get suggested skills based on current skills
  const suggestedForSurfing = getSuggestedSkills('surfing');
  const suggestedForGuitar = getSuggestedSkills('guitar');
  
  const allSuggested = [...suggestedForSurfing, ...suggestedForGuitar];
  
  // Add some custom suggestions
  const customSuggestions = [
    {
      title: 'Punk Rock',
      description: 'Because you like guitar and music',
      emoji: '🤘',
      color: '#fbeaff',
    },
    {
      title: 'Gardening',
      description: 'Just something new for you to try, take a look',
      emoji: '🌿',
      color: '#e9ffde',
    },
  ];
  
  // Convert skills to suggestion format and combine
  const skillSuggestions = allSuggested.slice(0, 2).map(skill => ({
    title: skill.name,
    description: `Based on your interest in other ${skill.category.toLowerCase()} activities`,
    emoji: skill.emoji,
    color: skill.color,
  }));
  
  return [...skillSuggestions, ...customSuggestions];
};

interface HomepageProps {
  onNavigateToSkills?: () => void;
  onNavigateToRecent?: () => void;
  onNavigateToSkillDetail?: (skillId: string) => void;
  onNavigateToActivityDetail?: (activityId: string) => void;
}

export const Homepage: React.FC<HomepageProps> = ({ onNavigateToSkills, onNavigateToRecent, onNavigateToSkillDetail, onNavigateToActivityDetail }) => {
  const [searchValue, setSearchValue] = useState('');

  // Get real data
  const mySkills = getMySkills();
  const recentActivities = getHomepageActivities();
  const suggestions = getHomepageSuggestions();

  const handleSkillClick = (skillId: string) => {
    if (onNavigateToSkillDetail) {
      onNavigateToSkillDetail(skillId);
    }
  };

  const handleActivityClick = (activityId: string) => {
    if (onNavigateToActivityDetail) {
      onNavigateToActivityDetail(activityId);
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
              {mySkills.map((skill) => (
                <SkillCard 
                  key={skill.id} 
                  title={skill.name}
                  totalTime={skill.totalTime}
                  lastActivity={skill.lastActivity}
                  streak={skill.streak}
                  emoji={skill.emoji}
                  color={skill.color}
                  onClick={() => handleSkillClick(skill.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Section */}
        <div className="mb-lg">
          <SectionHeader title="Recent" showViewAll onViewAll={onNavigateToRecent} />
          <div className="px-md">
            {recentActivities.map((activity, index) => (
              <ActivityItem 
                key={index} 
                {...activity} 
                onClick={() => handleActivityClick(activity.id)}
              />
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
              {suggestions.map((suggestion, index) => (
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