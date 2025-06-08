# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Life Logging App** - an AI-powered skill tracking and learning progression system designed to solve the "Rabbit Hole" syndrome where users abandon valuable pursuits and lose track of personal growth. The app differentiates between **Skills** (long-term competencies worth developing) and **Activities** (individual practice sessions), using AI to auto-categorize activities, suggest new skills, and help users rediscover forgotten interests.

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production (TypeScript compilation + Vite build)
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Technology Stack

- **Frontend:** React 19 + TypeScript + Vite 6.3.5
- **Styling:** Tailwind CSS 3.4.1 (fully configured with design tokens)
- **Typography:** Instrument Sans from Google Fonts
- **Code Quality:** ESLint with TypeScript, React Hooks, React Refresh plugins

## Architecture & Key Concepts

### Core Data Models
- **Skills:** Long-term competencies with progress tracking, mood correlation, and learning recommendations
- **Activities:** Individual practice sessions that contribute to skills, with timestamps and source attribution
- **AI Decision Framework:** Determines skill-worthiness of activities based on learning potential and user engagement

### Design System
Always refer to the latest Figma designs for UI patterns and implementation guidance:

- **Typography:** Instrument Sans font family (400, 500, 600, 700 weights) for all text elements
- **Mobile-first:** All designs optimized for iPhone 16 Pro (393px viewport)
- **Border Radius:** Consistent 8px radius for all buttons and interactive elements
- **Colors:** Custom gray scale (#f7f7f7, #dadada, #707070) + black (#0d141c) + white (#ffffff)
- **Component Library:** Fully implemented UI components in `/src/components/ui/`
- **Design Source:** Use Figma as the single source of truth for visual design and implementation
- **Emoji System:** Apple emojis with SF Pro font family for skill icons (`font-family: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'`)
- **No Hover States:** Mobile-optimized - no hover effects on cards or buttons

### Key Features Implemented
1. **Skill Portfolio:** Visual progress cards with streaks, time investment, and Apple emojis
2. **Activity Timeline:** Recent sessions with source attribution and emoji icons
3. **AI Recommendations:** Horizontal scrollable suggestion cards
4. **Learning Queue:** "Learn next" section for skill progression
5. **Share Updates:** Interactive question cards with Yes/No/Skip actions

## Current State

**✅ Completed:**
- **Homepage** - Complete implementation with all sections (My skills, Recent activities, Learn next, Share updates, Suggested for you)
- **Skills Page** - Full skills list with stats bar, search-free design, and proper navigation
- **Navigation System** - Working navigation between Homepage and Skills page via "View all" buttons, back button, and bottom tabs
- **Design System** - Complete UI component library with Apple emoji support
- **Mobile Optimization** - iPhone 16 Pro (393px) viewport with proper carousel scrolling
- **Typography System** - Instrument Sans with proper H2 (21px) and body text sizing

**Components Architecture:**
- All pages support navigation props (`onNavigateToHome`, `onNavigateToSkills`)
- Bottom navigation handles page switching with active states
- SectionHeader includes styled "View all" buttons (gray background, border, rounded)
- All text is left-aligned with dense spacing (mb-0 between text elements)

## Available Components

The following UI components are ready to use in `/src/components/ui/`:

- **Button** - Primary/secondary variants with 8px border radius
- **SearchBar** - Search input with add button (used on homepage only)
- **SkillCard** - Progress cards with Apple emojis, streaks, time tracking, and overlay badges
- **ActivityItem** - Timeline entries with emojis, source attribution, and clean layout
- **SectionHeader** - Section titles with styled "View all" buttons for navigation
- **QuestionCard** - AI engagement prompts with action buttons and proper styling
- **SuggestionCard** - Horizontal skill recommendation cards with Apple emojis
- **BottomNavigation** - Tab navigation with proper active states and navigation callbacks

## Navigation Implementation

**App.tsx** manages page state with:
```typescript
type Page = 'home' | 'skills'
const [currentPage, setCurrentPage] = useState<Page>('home')
```

**Navigation Methods:**
- "View all" button in "My skills" section → Skills page
- Back button in Skills page header → Homepage  
- Bottom navigation tabs → Switch between pages
- All navigation uses callback props passed down through components

## Design System Specifications

**Viewport & Layout:**
- iPhone 16 Pro: 393px max-width
- All containers: `max-width: 393px; margin: 0 auto`
- No side padding on mobile to prevent content cutoff

**Typography:**
- H2 headers: `text-h2` (21px, font-weight: 600)
- Body text: `text-body` (16px, font-weight: 600) 
- Small text: `text-body-small` (14px, font-weight: 400)
- Descriptors: `text-descriptor` (12px, font-weight: 500)

**Apple Emoji Rendering:**
```css
font-family: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
```

**Color Palette:**
- Gray 20: #f7f7f7 (light backgrounds)
- Gray 40: #dadada (borders, dividers)
- Gray 80: #707070 (secondary text)
- Black: #0d141c (primary text)
- White: #ffffff (backgrounds)

**Spacing & Layout:**
- Dense text spacing: `mb-0` between text elements
- All text left-aligned: `text-left`
- Consistent 8px border radius on all interactive elements
- No hover states (mobile-first)

## Development Notes

- **Mobile-first approach:** Primary target is iPhone 16 Pro (393px viewport)
- **Apple Ecosystem:** Use Apple emojis with SF Pro font for proper rendering
- **Component Reusability:** All components accept navigation props for flexibility
- **Dense Information:** Minimize spacing between text elements for mobile optimization
- **Touch-first Interaction:** No hover states, optimized for touch interaction

## Navigation Flow

Current implemented flow:
- **Homepage** ↔ **Skills Page** (bidirectional via multiple navigation methods)

Future planned flow:
- **Skills Page** → **Individual Skill Detail** → **Technique/Goal Detail**

## Claude Code Memories

- Don't run dev yourself, just tell me when it's ready to run and I'll do it
- Use Apple emojis with SF Pro font family for skill icons
- Always use 393px viewport for iPhone 16 Pro
- No hover states on mobile components
- Dense text spacing with mb-0 between elements
- All text should be left-aligned