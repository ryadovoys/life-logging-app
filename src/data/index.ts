// Centralized data structure for Life Logging App
// This file contains all skills, activities, and their relationships

export type AppType = 'Health App' | 'Books App' | 'YouTube' | 'Reddit' | 'Transcript';

export interface Activity {
  id: string;
  skillId: string;
  title: string;
  description: string;
  transcript?: string;
  timestamp: Date;
  timeAgo: string;
  source: AppType;
  emoji: string;
  duration?: string;
}

export interface LearnNextItem {
  id: string;
  title: string;
  description: string;
  unlockRequirement?: string;
}

export interface InspirationItem {
  id: string;
  title: string;
  type: 'Video' | 'Article' | 'Community';
  source: AppType;
  thumbnailUrl: string;
  url?: string;
}

export interface Skill {
  id: string;
  name: string;
  emoji: string;
  color: string;
  category: 'Physical' | 'Creative' | 'Professional' | 'Lifestyle';
  
  // Progress stats
  totalTime: string;
  totalHours: number;
  lastActivity: string;
  hoursThisWeek: string;
  monthlyTrend: string;
  
  // Streak info
  streak?: number;
  badge?: string;
  
  // Learning content
  learnNext: LearnNextItem[];
  inspiration: InspirationItem[];
  suggestedSkills: string[]; // Array of skill IDs
}

// All skills data
export const skills: Record<string, Skill> = {
  surfing: {
    id: 'surfing',
    name: 'Surfing',
    emoji: '🏄‍♂️',
    color: '#d9f0ff',
    category: 'Physical',
    totalTime: '140h',
    totalHours: 140,
    lastActivity: 'Today',
    hoursThisWeek: '5h 30m',
    monthlyTrend: '+15%',
    streak: 7,
    badge: 'Consistent',
    learnNext: [
      {
        id: 'shorter-board',
        title: 'Transition to a shorter board',
        description: 'Unlocked after logging 10h total'
      },
      {
        id: 'cutback',
        title: 'Land a smooth cutback',
        description: 'Based on your recent practice in Turning'
      },
      {
        id: 'bottom-turn',
        title: 'Shift weight during bottom turn',
        description: 'Complements your progress on Pop-Up'
      }
    ],
    inspiration: [
      {
        id: 'cutback-tutorial',
        title: 'Cutback Tutorial by Kai',
        type: 'Video',
        source: 'YouTube',
        thumbnailUrl: '/surfing-aerial-maneuver.png'
      },
      {
        id: 'mastering-cutback',
        title: 'Mastering the Cutback',
        type: 'Article',
        source: 'Reddit',
        thumbnailUrl: '/surfing-wave-carving.png'
      },
      {
        id: 'cutback-tips',
        title: 'Cutback Tips from Pros',
        type: 'Community',
        source: 'Reddit',
        thumbnailUrl: '/surfing-learning-basics.png'
      },
      {
        id: 'equipment-guide',
        title: 'Surfboard Selection Guide',
        type: 'Article',
        source: 'YouTube',
        thumbnailUrl: '/surfing-equipment-beach.png'
      }
    ],
    suggestedSkills: ['snowboarding', 'rock-climbing']
  },
  
  guitar: {
    id: 'guitar',
    name: 'Guitar',
    emoji: '🎸',
    color: '#ffdfd9',
    category: 'Creative',
    totalTime: '45h',
    totalHours: 45,
    lastActivity: 'Today',
    hoursThisWeek: '3h 15m',
    monthlyTrend: '+25%',
    streak: 3,
    learnNext: [
      {
        id: 'barre-chords',
        title: 'Master barre chords',
        description: 'Build finger strength for F and B chords'
      },
      {
        id: 'fingerpicking',
        title: 'Learn fingerpicking patterns',
        description: 'Essential for folk and classical styles'
      },
      {
        id: 'chord-progressions',
        title: 'Advanced chord progressions',
        description: 'Jazz and blues progressions'
      }
    ],
    inspiration: [
      {
        id: 'guitar-tutorial-1',
        title: 'Beginner Guitar Techniques',
        type: 'Video',
        source: 'YouTube',
        thumbnailUrl: '/guitar-tutorial-1.jpg'
      },
      {
        id: 'guitar-theory',
        title: 'Music Theory for Guitarists',
        type: 'Article',
        source: 'Reddit',
        thumbnailUrl: '/guitar-theory-1.jpg'
      }
    ],
    suggestedSkills: ['piano', 'songwriting']
  },

  painting: {
    id: 'painting',
    name: 'Painting',
    emoji: '🎨',
    color: '#E1F5FE',
    category: 'Creative',
    totalTime: '60h',
    totalHours: 60,
    lastActivity: 'Last Week',
    hoursThisWeek: '2h',
    monthlyTrend: '+5%',
    learnNext: [
      {
        id: 'color-theory',
        title: 'Advanced color theory',
        description: 'Master color mixing and harmony'
      },
      {
        id: 'portrait-painting',
        title: 'Portrait painting techniques',
        description: 'Focus on facial proportions and skin tones'
      }
    ],
    inspiration: [
      {
        id: 'watercolor-techniques',
        title: 'Watercolor Landscape Techniques',
        type: 'Video',
        source: 'YouTube',
        thumbnailUrl: '/painting-tutorial-1.jpg'
      }
    ],
    suggestedSkills: ['drawing', 'digital-art']
  },

  yoga: {
    id: 'yoga',
    name: 'Yoga',
    emoji: '🧘‍♀️',
    color: '#E8F5E8',
    category: 'Physical',
    totalTime: '35h',
    totalHours: 35,
    lastActivity: 'Yesterday',
    hoursThisWeek: '2h 30m',
    monthlyTrend: '+10%',
    learnNext: [
      {
        id: 'advanced-poses',
        title: 'Advanced balance poses',
        description: 'Work on crow pose and handstands'
      },
      {
        id: 'meditation',
        title: 'Meditation practices',
        description: 'Combine mindfulness with physical practice'
      }
    ],
    inspiration: [
      {
        id: 'yoga-flow',
        title: 'Morning Yoga Flow',
        type: 'Video',
        source: 'YouTube',
        thumbnailUrl: '/yoga-tutorial-1.jpg'
      }
    ],
    suggestedSkills: ['meditation', 'pilates']
  },

  cooking: {
    id: 'cooking',
    name: 'Cooking',
    emoji: '🍳',
    color: '#FFF8E1',
    category: 'Lifestyle',
    totalTime: '30h',
    totalHours: 30,
    lastActivity: 'Today',
    hoursThisWeek: '4h',
    monthlyTrend: '+20%',
    learnNext: [
      {
        id: 'knife-skills',
        title: 'Advanced knife techniques',
        description: 'Master julienne and brunoise cuts'
      },
      {
        id: 'sauce-making',
        title: 'Classic sauce techniques',
        description: 'Mother sauces and variations'
      }
    ],
    inspiration: [
      {
        id: 'cooking-techniques',
        title: 'Essential Cooking Techniques',
        type: 'Video',
        source: 'YouTube',
        thumbnailUrl: '/cooking-tutorial-1.jpg'
      }
    ],
    suggestedSkills: ['baking', 'nutrition']
  },

  // Add more skills...
  snowboarding: {
    id: 'snowboarding',
    name: 'Snowboarding',
    emoji: '🏂',
    color: '#d9f0ff',
    category: 'Physical',
    totalTime: '20h',
    totalHours: 20,
    lastActivity: 'Last Month',
    hoursThisWeek: '0h',
    monthlyTrend: '0%',
    learnNext: [],
    inspiration: [],
    suggestedSkills: ['skiing', 'surfing']
  },

  'rock-climbing': {
    id: 'rock-climbing',
    name: 'Rock Climbing',
    emoji: '🧗‍♂️',
    color: '#f7e8bb',
    category: 'Physical',
    totalTime: '25h',
    totalHours: 25,
    lastActivity: 'This Week',
    hoursThisWeek: '1h 30m',
    monthlyTrend: '+8%',
    learnNext: [],
    inspiration: [],
    suggestedSkills: ['bouldering', 'fitness']
  }
};

// All activities data
export const activities: Activity[] = [
  {
    id: 'surf-session-1',
    skillId: 'surfing',
    title: '1:36 minutes of surfing',
    description: 'Great session at Malibu. Worked on bottom turns and caught some nice waves. The conditions were perfect with 3-4 foot waves and offshore winds.',
    transcript: 'Started with a good warm-up on smaller waves. Focused on weight distribution during bottom turns. Need to work on maintaining speed through the turn. Caught about 8 waves total.',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    timeAgo: '5h ago',
    source: 'Health App',
    emoji: '🏄‍♂️',
    duration: '1h 36m'
  },
  {
    id: 'guitar-practice-1',
    skillId: 'guitar',
    title: 'Playing over an hour',
    description: 'Focused on chord progressions and strumming patterns. Worked through some Beatles songs and practiced transitions between G, C, and D chords.',
    transcript: 'Spent most of the time on "Wonderwall" chord progression. My finger positioning is getting better but still struggling with quick changes to F chord. Need to practice barre chords more.',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    timeAgo: '5h ago',
    source: 'Transcript',
    emoji: '🎸',
    duration: '1h 15m'
  },
  {
    id: 'surf-session-2',
    skillId: 'surfing',
    title: '1:12 minutes of surfing',
    description: 'Morning session at Venice Beach. Smaller waves but good for practicing pop-ups and basic maneuvers.',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    timeAgo: '2 days ago',
    source: 'Health App',
    emoji: '🏄‍♂️',
    duration: '1h 12m'
  },
  {
    id: 'reading-session-1',
    skillId: 'reading',
    title: '43 minutes of reading',
    description: 'Read chapters 3-5 of "Atomic Habits". Taking notes on habit stacking and implementation intentions.',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    timeAgo: '5h ago',
    source: 'Books App',
    emoji: '📙',
    duration: '43m'
  },
  {
    id: 'yoga-session-1',
    skillId: 'yoga',
    title: 'Morning yoga session',
    description: 'Completed a 30-minute vinyasa flow focusing on hip openers and backbends.',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    timeAgo: '1d ago',
    source: 'Health App',
    emoji: '🧘‍♀️',
    duration: '30m'
  },
  {
    id: 'cooking-session-1',
    skillId: 'cooking',
    title: 'Made pasta from scratch',
    description: 'Learned to make fresh fettuccine from scratch with a simple tomato sauce. Great technique practice.',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    timeAgo: '1d ago',
    source: 'Transcript',
    emoji: '🍳',
    duration: '45m'
  },
  {
    id: 'guitar-practice-2',
    skillId: 'guitar',
    title: 'Practice session - chord progressions',
    description: 'Worked on barre chords and practiced smooth transitions. Focused on F major and B minor.',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    timeAgo: '2d ago',
    source: 'Transcript',
    emoji: '🎸',
    duration: '25m'
  },
  {
    id: 'painting-session-1',
    skillId: 'painting',
    title: 'Watercolor landscape study',
    description: 'Painted a mountain landscape using wet-on-wet technique. Focused on color blending and atmospheric perspective.',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    timeAgo: '4d ago',
    source: 'Transcript',
    emoji: '🎨',
    duration: '2h 10m'
  }
];

// Helper functions
export const getSkillById = (id: string): Skill | undefined => {
  return skills[id];
};

export const getActivitiesBySkillId = (skillId: string): Activity[] => {
  return activities.filter(activity => activity.skillId === skillId);
};

export const getActivityById = (id: string): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};

export const getRecentActivities = (limit?: number): Activity[] => {
  const sortedActivities = [...activities].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  return limit ? sortedActivities.slice(0, limit) : sortedActivities;
};

export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return Object.values(skills).filter(skill => skill.category === category);
};

export const getAllSkills = (): Skill[] => {
  return Object.values(skills);
};

export const getSuggestedSkills = (currentSkillId: string): Skill[] => {
  const currentSkill = skills[currentSkillId];
  if (!currentSkill) return [];
  
  return currentSkill.suggestedSkills
    .map(id => skills[id])
    .filter(Boolean);
};