import React from 'react';
import { PageHeader, PageHeaderActions, PageTitle, SectionHeader, BottomNavigation, EnhancedButton } from './ui';

interface RecentActivityDetailPageProps {
  onNavigateHome?: () => void;
  onNavigateToSkills?: () => void;
  onBack?: () => void;
  activityId?: string;
}

// Mock activity data - would come from props/API in real app
const mockActivity = {
  id: '1',
  title: 'Playing over an hour',
  skill: 'Guitar',
  timestamp: '5h ago',
  description: 'This skill is suggested to improve your wave riding fluidity and control, allowing you to transition smoothly between directions while maintaining speed and momentum.',
  transcript: 'Focus on using your body weight and looking where you want to go. Keep your knees bent and your core engaged for stability and control.',
  sourceApp: 'Transcript'
};

export const RecentActivityDetailPage: React.FC<RecentActivityDetailPageProps> = ({
  onNavigateHome,
  onNavigateToSkills,
  onBack
}) => {
  const handleEdit = () => {
    console.log('Edit activity');
  };

  const handleAskCoach = () => {
    console.log('Ask coach about activity');
  };

  const handleViewFullTranscript = () => {
    console.log('View full transcript');
  };

  return (
    <div className="min-h-screen bg-white font-instrument">
      {/* Main Content */}
      <div className="pb-20">
        {/* Header */}
        <PageHeader
          onBack={onBack}
          rightElement={<PageHeaderActions.MenuButton />}
        />

        {/* Activity Title */}
        <PageTitle 
          title={mockActivity.title}
          spacing="compact"
        />
          
        <div className="px-md">
          {/* Tags */}
          <div className="flex gap-sm mb-lg">
            <div className="px-md py-sm bg-gray-20 rounded-lg">
              <span className="font-instrument font-normal text-caption text-black">
                {mockActivity.skill}
              </span>
            </div>
            <div className="px-md py-sm bg-gray-20 rounded-lg">
              <span className="font-instrument font-normal text-caption text-gray-80">
                {mockActivity.timestamp}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-body text-black mb-lg text-left leading-relaxed !font-normal">
            {mockActivity.description}
          </p>

        </div>

        {/* Transcript Section */}
        <div className="mb-lg">
          <SectionHeader 
            title="Transcript" 
            showViewAll={true} 
            buttonText="View full transcript"
            onViewAll={handleViewFullTranscript}
          />
          
          <div className="mx-md mt-md p-md bg-gray-20 rounded-lg">
            <p className="text-body text-black text-left leading-relaxed !font-normal">
              {mockActivity.transcript}
            </p>
          </div>
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