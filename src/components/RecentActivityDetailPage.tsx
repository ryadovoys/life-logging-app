import React from 'react';
import { PageHeader, PageHeaderActions, PageTitle, SectionHeader, BottomNavigation } from './ui';
import { getActivityById, getSkillById } from '../data';

interface RecentActivityDetailPageProps {
  onNavigateHome?: () => void;
  onNavigateToSkills?: () => void;
  onBack?: () => void;
  activityId?: string;
}

// Function to get activity data and skill info
const getActivityData = (activityId?: string) => {
  if (!activityId) {
    // Fallback to first activity if no ID provided
    const activity = getActivityById('guitar-practice-1');
    const skill = activity ? getSkillById(activity.skillId) : null;
    return {
      activity: activity || {
        id: 'guitar-practice-1',
        title: 'Playing over an hour',
        description: 'Focused on chord progressions and strumming patterns. Worked through some Beatles songs and practiced transitions between G, C, and D chords.',
        transcript: 'Spent most of the time on "Wonderwall" chord progression. My finger positioning is getting better but still struggling with quick changes to F chord. Need to practice barre chords more.',
        timeAgo: '5h ago',
        source: 'Transcript' as const,
        skillId: 'guitar',
        emoji: '🎸',
        timestamp: new Date()
      },
      skill: skill || { name: 'Guitar', id: 'guitar' }
    };
  }

  const activity = getActivityById(activityId);
  const skill = activity ? getSkillById(activity.skillId) : null;

  if (!activity) {
    // Fallback if activity not found
    return getActivityData();
  }

  return { activity, skill };
};

export const RecentActivityDetailPage: React.FC<RecentActivityDetailPageProps> = ({
  onNavigateHome,
  onNavigateToSkills,
  onBack,
  activityId
}) => {
  // Get real activity data
  const { activity, skill } = getActivityData(activityId);

  // Removed edit and ask coach handlers since buttons were removed

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
          title={activity.title}
          spacing="compact"
        />
          
        <div className="px-md">
          {/* Tags */}
          <div className="flex gap-sm mb-lg">
            <div className="px-md py-sm bg-gray-20 rounded-lg">
              <span className="font-instrument font-normal text-caption text-black">
                {skill?.name || 'Unknown Skill'}
              </span>
            </div>
            <div className="px-md py-sm bg-gray-20 rounded-lg">
              <span className="font-instrument font-normal text-caption text-gray-80">
                {activity.timeAgo}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-body text-black mb-lg text-left leading-relaxed !font-normal">
            {activity.description}
          </p>

        </div>

        {/* Transcript Section */}
        {activity.transcript && (
          <div className="mb-lg">
            <SectionHeader 
              title="Transcript" 
              showViewAll={true} 
              buttonText="View full transcript"
              onViewAll={handleViewFullTranscript}
            />
            
            <div className="mx-md mt-md p-md bg-gray-20 rounded-lg">
              <p className="text-body text-black text-left leading-relaxed !font-normal">
                {activity.transcript}
              </p>
            </div>
          </div>
        )}
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