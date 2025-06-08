// Legacy exports (backward compatibility - default usage)
export { LegacyButton as Button } from './Button';
export { SearchBar } from './SearchBar';
export { LegacySkillCard as SkillCard } from './SkillCard';
export { LegacyActivityItem as ActivityItem } from './ActivityItem';
export { LegacySectionHeader as SectionHeader } from './SectionHeader';
export { QuestionCard } from './QuestionCard';
export { SuggestionCard } from './SuggestionCard';
export { BottomNavigation } from './BottomNavigation';
export { PageHeader } from './PageHeader';
export { PageTitle } from './PageTitle';

// Enhanced exports (opt-in usage)
export { 
  Button as EnhancedButton
} from './Button';
export type { ButtonProps as EnhancedButtonProps } from './Button';

export { 
  SkillCard as EnhancedSkillCard
} from './SkillCard';
export type { SkillCardProps as EnhancedSkillCardProps } from './SkillCard';

export { 
  ActivityItem as EnhancedActivityItem
} from './ActivityItem';
export type { ActivityItemProps as EnhancedActivityItemProps } from './ActivityItem';

export { 
  SectionHeader as EnhancedSectionHeader
} from './SectionHeader';
export type { SectionHeaderProps as EnhancedSectionHeaderProps } from './SectionHeader';

export type { PageTitleProps } from './PageTitle';