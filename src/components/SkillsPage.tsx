import React, { useState } from 'react';
import { BottomNavigation, PageHeader, PageHeaderActions, PageTitle } from './ui';
import { getAllSkills, getSkillsByCategory, type Skill } from '../data';

// Remove local interface since we're importing from data

type SortOption = 'Categorized' | 'By name' | 'Recent';

// Get real skills data
const allSkills = getAllSkills();

interface SkillItemProps {
  skill: Skill;
  onClick?: () => void;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, onClick }) => (
  <div 
    className="flex items-center gap-md py-sm px-0 cursor-pointer"
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
  const [sortOption, setSortOption] = useState<SortOption>('Categorized');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSkillClick = (skill: Skill) => {
    if (onNavigateToSkillDetail) {
      onNavigateToSkillDetail(skill.id);
    }
  };

  const handleAddSkill = () => {
    console.log('Add new skill');
  };

  const handleSortOptionSelect = (option: SortOption) => {
    setSortOption(option);
    setIsDropdownOpen(false);
  };

  const sortedSkills = () => {
    switch (sortOption) {
      case 'By name':
        return [...allSkills].sort((a, b) => a.name.localeCompare(b.name));
      case 'Recent':
        const recencyOrder: { [key: string]: number } = {
          'Today': 1,
          'Yesterday': 2,
          'A Few Days Ago': 3,
          'Last Week': 4,
          'Last Weekend': 5,
          'This Month': 6,
          'Recently': 7,
        };
        return [...allSkills].sort((a, b) => 
          (recencyOrder[a.lastActivity] || 999) - (recencyOrder[b.lastActivity] || 999)
        );
      case 'Categorized':
      default:
        return allSkills;
    }
  };

  const groupedSkills = () => {
    if (sortOption !== 'Categorized') {
      return { 'All Skills': sortedSkills() };
    }
    
    const categories: { [key: string]: Skill[] } = {
      'Physical': getSkillsByCategory('Physical'),
      'Creative': getSkillsByCategory('Creative'),
      'Professional': getSkillsByCategory('Professional'),
      'Lifestyle': getSkillsByCategory('Lifestyle'),
    };
    
    // Filter out empty categories
    Object.keys(categories).forEach(key => {
      if (categories[key].length === 0) {
        delete categories[key];
      }
    });
    
    return categories;
  };

  return (
    <div className="min-h-screen bg-white font-instrument">
      {/* Main Content */}
      <div className="pb-20">
        {/* Header */}
        <PageHeader
          onBack={onNavigateHome}
          rightElement={<PageHeaderActions.PlusButton onClick={handleAddSkill} />}
        />

        {/* Page Title Section */}
        <PageTitle 
          title="All skills" 
          rightElement={
            <div className="relative">
              <button 
                className="flex items-center gap-xs px-sm py-xs bg-gray-20 border border-gray-40 rounded-lg text-caption text-gray-80"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{sortOption}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-xs bg-white border border-gray-40 rounded-lg shadow-lg z-10 min-w-[120px]">
                  {(['Categorized', 'By name', 'Recent'] as SortOption[]).map((option) => (
                    <button
                      key={option}
                      className={`w-full text-left px-sm py-xs text-caption hover:bg-gray-20 first:rounded-t-lg last:rounded-b-lg ${
                        sortOption === option ? 'text-black font-semibold' : 'text-gray-80'
                      }`}
                      onClick={() => handleSortOptionSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          }
        />
        
        {/* Skills List */}
        <div className="px-md bg-white">
          {Object.entries(groupedSkills()).map(([categoryName, skills]) => (
            <div key={categoryName}>
              {sortOption === 'Categorized' && (
                <h2 className="font-instrument font-semibold text-title text-black mb-md mt-lg first:mt-0 text-left">
                  {categoryName}
                </h2>
              )}
              {skills.map((skill) => (
                <SkillItem
                  key={skill.id}
                  skill={skill}
                  onClick={() => handleSkillClick(skill)}
                />
              ))}
            </div>
          ))}
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