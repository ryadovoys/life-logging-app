import React from 'react';
import { BottomNavigation, PageHeader } from './ui';

interface Skill {
  id: string;
  name: string;
  totalTime: string;
  lastActivity: string;
  emoji: string;
  color: string;
}

const mockSkills: Skill[] = [
  {
    id: '1',
    name: 'Surfing',
    totalTime: '140h',
    lastActivity: 'Today',
    emoji: '🏄‍♂️',
    color: '#d9f0ff',
  },
  {
    id: '2',
    name: 'Guitar',
    totalTime: '20h',
    lastActivity: 'Yesterday',
    emoji: '🎸',
    color: '#ffdfd9',
  },
  {
    id: '3',
    name: 'Painting',
    totalTime: '60h',
    lastActivity: 'Last Week',
    emoji: '🎨',
    color: '#E1F5FE',
  },
  {
    id: '4',
    name: 'Reading',
    totalTime: '35h',
    lastActivity: 'Recently',
    emoji: '📙',
    color: '#f5e8e2',
  },
  {
    id: '5',
    name: 'Weightlifting',
    totalTime: '80h',
    lastActivity: 'A Few Days Ago',
    emoji: '🏋️‍♂️',
    color: '#F3E5F5',
  },
  {
    id: '6',
    name: 'Singing',
    totalTime: '50h',
    lastActivity: 'This Month',
    emoji: '🎤',
    color: '#FCE4EC',
  },
  {
    id: '7',
    name: 'Yoga',
    totalTime: '45h',
    lastActivity: 'Yesterday',
    emoji: '🧘‍♀️',
    color: '#E8F5E8',
  },
  {
    id: '8',
    name: 'Cooking',
    totalTime: '30h',
    lastActivity: 'Today',
    emoji: '🍳',
    color: '#FFF8E1',
  },
  {
    id: '9',
    name: 'Cycling',
    totalTime: '25h',
    lastActivity: 'Last Weekend',
    emoji: '🚴‍♂️',
    color: '#E3F2FD',
  },
];

interface SkillItemProps {
  skill: Skill;
  onClick?: () => void;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, onClick }) => (
  <div 
    className="flex items-center gap-md py-sm px-0 border-b border-gray-40 last:border-b-0 cursor-pointer"
    onClick={onClick}
  >
    <div 
      className="flex-shrink-0 w-[60px] h-[60px] rounded-lg flex items-center justify-center text-[40px]"
      style={{ 
        backgroundColor: skill.color,
        fontFamily: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
      }}
    >
      {skill.emoji}
    </div>
    
    <div className="flex-1 min-w-0 text-left">
      <h3 className="font-instrument font-semibold text-body text-black mb-0 text-left">
        {skill.name}
      </h3>
      <div className="flex items-center gap-sm text-left">
        <span className="font-instrument font-normal text-caption text-gray-80 text-left">
          {skill.totalTime} total
        </span>
        <div className="w-px h-sm bg-gray-40"></div>
        <span className="font-instrument font-normal text-caption text-gray-80 text-left">
          Last: {skill.lastActivity}
        </span>
      </div>
    </div>
    
    <button className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 14c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 4 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 6 10c.55 0 1.02.196 1.413.587C7.804 10.98 8 11.45 8 12s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 6 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 10 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 12 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 12 14zm6 0c-.55 0-1.02-.196-1.413-.587A1.93 1.93 0 0 1 16 12c0-.55.196-1.02.587-1.413A1.93 1.93 0 0 1 18 10c.55 0 1.02.196 1.413.587.391.393.587.863.587 1.413s-.196 1.02-.587 1.413A1.93 1.93 0 0 1 18 14z"/>
      </svg>
    </button>
  </div>
);

interface SkillsPageProps {
  onNavigateHome?: () => void;
  onNavigateToSkillDetail?: (skillId: string) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigateHome, onNavigateToSkillDetail }) => {

  const handleSkillClick = (skill: Skill) => {
    if (onNavigateToSkillDetail) {
      onNavigateToSkillDetail(skill.id);
    }
  };

  const handleAddSkill = () => {
    console.log('Add new skill');
  };

  return (
    <div className="min-h-screen bg-white font-instrument">
      {/* Main Content */}
      <div className="pb-20">
        {/* Header */}
        <PageHeader
          title="Skills"
          onBack={onNavigateHome}
          onAdd={handleAddSkill}
        />

        {/* All Skills Section */}
        <div className="px-md pt-md">
          <div className="flex items-center justify-between mb-md">
            <h2 className="font-instrument font-semibold text-h2 text-black">
              All skills
            </h2>
            
            <button className="flex items-center gap-xs px-sm py-xs bg-gray-20 border border-gray-40 rounded-ios text-caption text-gray-80">
              <span>Recent</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Skills List */}
          <div className="bg-white">
            {mockSkills.map((skill) => (
              <SkillItem
                key={skill.id}
                skill={skill}
                onClick={() => handleSkillClick(skill)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation 
          currentPage="skills"
          onNavigateToHome={onNavigateHome}
          onNavigateToSkills={() => {}}
        />
      </div>
    </div>
  );
};