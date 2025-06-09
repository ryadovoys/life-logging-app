// Enhanced Design Tokens System (Airbnb-Inspired)
// Living organism approach with systematic scales

// Systematic Spacing Scale
export const spacing = {
  xs: '4px',    // Micro spacing
  sm: '8px',    // Small spacing (current border radius)
  md: '16px',   // Medium spacing
  lg: '24px',   // Large spacing
  xl: '32px',   // Extra large spacing
  xxl: '48px',  // Maximum spacing
} as const;

// Enhanced Typography Scale (7 levels)
export const typography = {
  display: {
    fontSize: '28px',
    fontFamily: 'Instrument Sans',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  headline: {
    fontSize: '24px',
    fontFamily: 'Instrument Sans',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  title: {
    fontSize: '21px',
    fontFamily: 'Instrument Sans',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  subtitle: {
    fontSize: '18px',
    fontFamily: 'Instrument Sans',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  body: {
    fontSize: '16px',
    fontFamily: 'Instrument Sans', 
    fontWeight: 600,
    lineHeight: 1.5,
  },
  caption: {
    fontSize: '14px',
    fontFamily: 'Instrument Sans',
    fontWeight: 400,
    lineHeight: 1.43,
  },
  overline: {
    fontSize: '12px',
    fontFamily: 'Instrument Sans',
    fontWeight: 500,
    lineHeight: 1.5,
  },
} as const;

// Current Color Implementation
export const colors = {
  gray20: '#f7f7f7',  // Light backgrounds
  gray40: '#dadada',  // Borders, dividers
  gray80: '#707070',  // Secondary text
  black: '#0d141c',   // Primary text
  white: '#ffffff',   // Backgrounds
} as const;

// Semantic Color Tokens (Templates for future implementation)
export const semanticColors = {
  // Primary Brand Colors - To be defined
  primary: {
    main: undefined,     // Brand primary color
    dark: undefined,     // Darker variant
    light: undefined,    // Lighter variant
  },
  
  // Semantic Status Colors - To be defined  
  success: undefined,    // Success/positive state
  warning: undefined,    // Warning state
  error: undefined,      // Error/negative state
  info: undefined,       // Information state
  
  // Surface Elevation - To be defined
  surface: {
    elevated: undefined, // Elevated surfaces
    sunken: undefined,   // Sunken surfaces
    overlay: undefined,  // Modal/overlay backgrounds
  },
} as const;

// CSS Custom Properties Generator
export const cssVariables = {
  spacing: Object.entries(spacing).reduce((acc, [key, value]) => {
    acc[`--space-${key}`] = value;
    return acc;
  }, {} as Record<string, string>),
  
  colors: Object.entries(colors).reduce((acc, [key, value]) => {
    acc[`--color-${key}`] = value;
    return acc;
  }, {} as Record<string, string>),
} as const;

// Design Token Exports for JS/TS consumption
export const designTokens = {
  spacing,
  typography,
  colors,
  semanticColors,
  cssVariables,
} as const;

// Type definitions for better TypeScript support
export type SpacingKey = keyof typeof spacing;
export type TypographyKey = keyof typeof typography;
export type ColorKey = keyof typeof colors;
export type DesignTokens = typeof designTokens;