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
- **Icons:** Material Symbols Outlined (self-hosted variable font with FILL axis for state changes)
- **App Icons:** PNG icons for Health App, Books App, YouTube, Reddit with automatic mapping
- **Code Quality:** ESLint with TypeScript, React Hooks, React Refresh plugins

## Architecture & Key Concepts

### Core Data Models
- **Skills:** Long-term competencies with progress tracking, mood correlation, and learning recommendations
- **Activities:** Individual practice sessions that contribute to skills, with timestamps and source attribution
- **AI Decision Framework:** Determines skill-worthiness of activities based on learning potential and user engagement

### Design System (Airbnb-Inspired Evolution)
Always refer to the latest Figma designs for UI patterns and implementation guidance. Our design system follows Airbnb's "living organism" philosophy where components have personality and evolve independently.

#### Component Philosophy
- **Living Components:** Components are treated as organisms with function, personality, and independent evolution
- **Required vs Optional Elements:** Each component defines required elements (title, emoji, progress) and optional elements (badges, dividers, etc.)
- **Behavioral Properties:** Components can adapt based on context and usage patterns
- **Single Source of Truth:** Figma designs + comprehensive component documentation

#### Typography Scale (Enhanced)
- **Display:** `text-display` (28px, font-weight: 700) - Hero text and major headlines
- **Headline:** `text-headline` (24px, font-weight: 600) - Page titles
- **Title:** `text-title` (21px, font-weight: 600) - Section headers (current H2)
- **Subtitle:** `text-subtitle` (18px, font-weight: 600) - Subsection headers
- **Body:** `text-body` (16px, font-weight: 600) - Main content text
- **Caption:** `text-caption` (14px, font-weight: 400) - Supporting text
- **Overline:** `text-overline` (12px, font-weight: 500) - Labels and descriptors

#### Color System (Semantic Foundation)
**Current Implementation:**
- Gray 20: #f7f7f7 (light backgrounds)
- Gray 40: #dadada (borders, dividers)  
- Gray 80: #707070 (secondary text)
- Black: #0d141c (primary text)
- White: #ffffff (backgrounds)

**Future Semantic Tokens (Template):**
```css
/* Primary Brand Colors - To be defined */
--color-primary: /* Brand primary color */
--color-primary-dark: /* Darker variant */
--color-primary-light: /* Lighter variant */

/* Semantic Status Colors - To be defined */
--color-success: /* Success/positive state */
--color-warning: /* Warning state */
--color-error: /* Error/negative state */
--color-info: /* Information state */

/* Surface Elevation - To be defined */
--color-surface-elevated: /* Elevated surfaces */
--color-surface-sunken: /* Sunken surfaces */
--color-surface-overlay: /* Modal/overlay backgrounds */
```

#### Spacing System (Systematic Scale)
- **XS:** `--space-xs: 4px` - Micro spacing
- **SM:** `--space-sm: 8px` - Small spacing (current border radius)
- **MD:** `--space-md: 16px` - Medium spacing
- **LG:** `--space-lg: 24px` - Large spacing  
- **XL:** `--space-xl: 32px` - Extra large spacing
- **XXL:** `--space-xxl: 48px` - Maximum spacing

#### Component Standards
- **Mobile-first:** All designs optimized for iPhone 16 Pro (393px viewport)
- **Border Radius:** Consistent 8px radius for all buttons and interactive elements
- **Component Library:** Fully implemented UI components in `/src/components/ui/`
- **Emoji System:** Apple emojis with SF Pro font family for skill icons (`font-family: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'`)
- **No Hover States:** Mobile-optimized - no hover effects on cards or buttons
- **Required/Optional Pattern:** All components define clear required vs optional element structure

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
- **Skill Detail Page** - Comprehensive skill detail view with Progress, Highlight, Recent Updates, Learn Next, Inspiration, and Suggested sections
- **Navigation System** - 3-page navigation (Homepage ↔ Skills ↔ Skill Detail) with smart back button functionality
- **Design System** - Complete UI component library with Apple emoji support and Material Symbols integration
- **Mobile Optimization** - iPhone 16 Pro (393px) viewport with proper carousel scrolling
- **Typography System** - Instrument Sans with proper H2 (21px) and body text sizing
- **Icon System** - Self-hosted Material Symbols with FILL axis for state changes
- **App Icons** - Support for PNG app icons (Health App, Books App, YouTube, Reddit)

**Components Architecture:**
- All pages support navigation props (`onNavigateToHome`, `onNavigateToSkills`, `onNavigateToSkillDetail`)
- Bottom navigation handles page switching with active states and Material Icons
- SectionHeader includes styled "View all" buttons (gray background, border, rounded)
- ActivityItem component supports flexible usage (with/without icons and borders)
- Smart navigation remembers previous page for proper back button functionality
- All text is left-aligned with dense spacing (mb-0 between text elements)

## Available Components (Living Organism Architecture)

The following UI components are ready to use in `/src/components/ui/`, each designed as "living organisms" with required/optional elements:

### Core Components
- **Button** - Primary/secondary variants with 8px border radius
  - *Required:* label, onClick
  - *Optional:* variant, disabled, loading state
- **SearchBar** - Search input with add button (used on homepage only)
  - *Required:* placeholder, onSearch
  - *Optional:* addButton, value, onChange
- **SkillCard** - Progress cards with Apple emojis, streaks, time tracking, and overlay badges
  - *Required:* title, emoji, progress
  - *Optional:* streak, badge, timeTracking, overlay, divider
- **ActivityItem** - Timeline entries with emojis, source attribution, app icons, and flexible styling
  - *Required:* title, emoji, timestamp
  - *Optional:* sourceApp, showIcon, showBorder, description, divider

### Navigation Components  
- **SectionHeader** - Section titles with styled "View all" buttons for navigation
  - *Required:* title
  - *Optional:* viewAllButton, onViewAll, divider
- **BottomNavigation** - Tab navigation with Material Symbols, FILL axis state changes, and navigation callbacks
  - *Required:* currentPage, navigation callbacks
  - *Optional:* customTabs, badge indicators
- **PageHeader** - Page headers with back buttons, titles, add buttons, and emoji box support
  - *Required:* title
  - *Optional:* backButton, addButton, emojiBox, onBack, onAdd

### Interactive Components
- **QuestionCard** - AI engagement prompts with action buttons and proper styling
  - *Required:* question, actions
  - *Optional:* avatar, context, dismissable
- **SuggestionCard** - Horizontal skill recommendation cards with Apple emojis
  - *Required:* title, emoji
  - *Optional:* description, category, difficulty, divider

### Component Documentation Standards
Each component includes:
- TypeScript interface defining required vs optional props
- Usage examples and guidelines
- Behavioral properties and context adaptation
- Evolution notes and version history

## Navigation Implementation

**App.tsx** manages page state with:
```typescript
type Page = 'home' | 'skills' | 'skillDetail'
const [currentPage, setCurrentPage] = useState<Page>('home')
const [previousPage, setPreviousPage] = useState<Page>('home')
const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null)
```

**Navigation Methods:**
- "View all" button in "My skills" section → Skills page
- Click any skill in Skills page → Skill Detail page
- Click surfing skill card on Homepage → Skill Detail page (direct navigation)
- Back button in Skills/Detail pages → Previous page (smart navigation)
- Bottom navigation tabs → Switch between main pages
- All navigation uses callback props passed down through components

## Design System Specifications

**Viewport & Layout:**
- iPhone 16 Pro: 393px max-width
- All containers: `max-width: 393px; margin: 0 auto`
- No side padding on mobile to prevent content cutoff

**Typography Scale (Enhanced System):**
- Display: `text-display` (28px, font-weight: 700) - Hero text and major headlines
- Headline: `text-headline` (24px, font-weight: 600) - Page titles
- Title: `text-title` (21px, font-weight: 600) - Section headers (current H2)
- Subtitle: `text-subtitle` (18px, font-weight: 600) - Subsection headers
- Body: `text-body` (16px, font-weight: 600) - Main content text
- Caption: `text-caption` (14px, font-weight: 400) - Supporting text
- Overline: `text-overline` (12px, font-weight: 500) - Labels and descriptors

**Apple Emoji Rendering:**
```css
font-family: '-apple-system, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
```

**Material Symbols Setup:**
```css
/* Self-hosted Material Symbols with variable font support */
@font-face {
  font-family: 'Material Symbols Outlined';
  src: url('/MaterialSymbolsOutlined.ttf') format('truetype');
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* FILL axis for state changes (0 = outline, 1 = filled) */
font-variation-settings: 'FILL' ${isActive ? 1 : 0}
```

**Color Palette:**
- Gray 20: #f7f7f7 (light backgrounds)
- Gray 40: #dadada (borders, dividers)
- Gray 80: #707070 (secondary text)
- Black: #0d141c (primary text)
- White: #ffffff (backgrounds)

**Spacing System (Systematic Scale):**
- XS: `--space-xs: 4px` - Micro spacing
- SM: `--space-sm: 8px` - Small spacing (current border radius)
- MD: `--space-md: 16px` - Medium spacing
- LG: `--space-lg: 24px` - Large spacing
- XL: `--space-xl: 32px` - Extra large spacing
- XXL: `--space-xxl: 48px` - Maximum spacing

**Layout Standards:**
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
- **Homepage** ↔ **Skills Page** ↔ **Skill Detail Page** (full 3-page navigation)

Skill Detail Page Features:
- **Progress Dashboard:** 4 color-coded stats (Est. total, Last entry, Hours this week, Monthly trend)
- **Highlight Section:** AI-generated main goal with gray card background
- **Recent Updates:** Timeline of surfing activities with Health App integration
- **Learn Next:** 3 unlockable techniques with progression requirements  
- **Inspiration:** Content recommendations from YouTube, Medium, Reddit with thumbnails
- **Suggested Skills:** Related skill recommendations (e.g., Snowboarding based on surfing interest)

Future planned flow:
- **Skill Detail Page** → **Technique/Goal Detail** → **Deep Learning Content**

## Component Reuse Guidelines (Living Organism Approach)

**IMPORTANT:** When creating new pages or features, follow the "living organism" philosophy:

### 1. Reuse Existing Components First
- Check `/src/components/ui/` for available components before creating new ones
- Use ActivityItem for any timeline/list entries (supports required/optional element pattern)
- Use SectionHeader for all section titles with optional "View all" buttons
- Use PageHeader for consistent page headers with back buttons
- Use BottomNavigation for tab switching between main pages

### 2. Follow Living Component Patterns
- **Required vs Optional Elements:** Define clear required and optional props for each component
- **Behavioral Properties:** Components should adapt based on context and usage patterns
- **Component Evolution:** Allow components to evolve independently with version tracking
- **Documentation:** Include comprehensive prop documentation with usage examples

### 3. Established Design Patterns
- All pages should accept navigation props (`onNavigateToHome`, `onNavigateToSkills`, etc.)
- Use smart navigation with previousPage tracking for back buttons
- Follow 393px viewport with `max-w-[393px] mx-auto` containers
- Apply systematic spacing using the spacing scale (`space-xs` through `space-xxl`)
- Use enhanced typography scale (`text-display` through `text-overline`)
- Use Apple emoji rendering with SF Pro font family

### 4. When to Create New Components
- Only create new components when Figma shows a completely new UI pattern
- If existing components can't be adapted with required/optional props, create new ones
- Always follow the established design system (8px border radius, Material Symbols, spacing scale)
- Document new components with required/optional element structure
- Add to `/src/components/ui/index.ts` and update this documentation

### 5. Design Token Integration
- Use design tokens for all spacing (`--space-xs` through `--space-xxl`)
- Apply enhanced typography scale (`text-display`, `text-headline`, etc.)
- Implement systematic color tokens when semantic colors are defined
- Maintain consistent component behavior across the design system

### 6. Material Symbols Usage
- Use self-hosted Material Symbols with FILL axis for state changes
- Icons: home, star, explore, settings for bottom navigation
- Apply `font-variation-settings: 'FILL' ${isActive ? 1 : 0}` for state changes

### 7. App Icon Integration
- Store PNG icons in `/public/` folder (e.g., `/health-app.png`)
- Use APP_ICONS mapping in ActivityItem component
- Support automatic icon detection by app name

## Claude Code Memories

- Don't run dev yourself, just tell me when it's ready to run and I'll do it
- Use Apple emojis with SF Pro font family for skill icons
- Always use 393px viewport for iPhone 16 Pro
- No hover states on mobile components
- Dense text spacing with mb-0 between elements
- All text should be left-aligned
- Use self-hosted Material Symbols with FILL axis for icon state changes
- Reuse existing components before creating new ones

## Collaboration Memory

- Working on design in Figma as a creative teammate
- Goal is to create amazing, user-friendly design
- Excited to ideate, review, enhance, and create together
- Focus on ease of use and great interaction