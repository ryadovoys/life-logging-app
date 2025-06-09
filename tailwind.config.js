import { spacing, colors, typography } from './src/tokens.ts';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '393px',
      },
      
      // Enhanced spacing system from design tokens
      spacing: {
        xs: spacing.xs,
        sm: spacing.sm, 
        md: spacing.md,
        lg: spacing.lg,
        xl: spacing.xl,
        xxl: spacing.xxl,
      },
      
      // Enhanced color system from design tokens
      colors: {
        gray: {
          20: colors.gray20,
          40: colors.gray40, 
          80: colors.gray80,
        },
        black: colors.black,
        white: colors.white,
      },
      
      fontFamily: {
        'instrument': ['Instrument Sans', 'sans-serif'],
      },
      
      // Enhanced typography system from design tokens
      fontSize: {
        'display': typography.display.fontSize,
        'headline': typography.headline.fontSize,
        'title': typography.title.fontSize,
        'subtitle': typography.subtitle.fontSize,
        'body': typography.body.fontSize,
        'caption': typography.caption.fontSize,
        'overline': typography.overline.fontSize,
        // Legacy aliases for backward compatibility
        'h2': typography.title.fontSize,
        'body-large': typography.headline.fontSize,
        'body-small': typography.caption.fontSize,
        'descriptor': typography.overline.fontSize,
      },
      
      fontWeight: {
        'extra-bold': 700,
        'semibold': 600,
        'medium': 500,
        'regular': 400,
      },
      
      lineHeight: {
        'display': typography.display.lineHeight,
        'headline': typography.headline.lineHeight,
        'title': typography.title.lineHeight,
        'subtitle': typography.subtitle.lineHeight,
        'body': typography.body.lineHeight,
        'caption': typography.caption.lineHeight,
        'overline': typography.overline.lineHeight,
        // Legacy aliases for backward compatibility
        'tight': 1,
        'normal': 1.43,
        'relaxed': 1.5,
      },
      
      borderRadius: {
        'ios': spacing.sm, // Uses systematic spacing (8px)
      },
    },
  },
  plugins: [],
}

