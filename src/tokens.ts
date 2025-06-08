// Design tokens from Figma
export const colors = {
  gray20: '#f7f7f7',
  gray40: '#dadada', 
  gray80: '#707070',
  black: '#0d141c',
  white: '#ffffff',
} as const;

export const typography = {
  h2: {
    fontSize: '21px',
    fontFamily: 'Instrument Sans',
    fontWeight: 600,
    lineHeight: 1,
  },
  body: {
    fontSize: '16px',
    fontFamily: 'Instrument Sans', 
    fontWeight: 600,
    lineHeight: 1.5,
  },
  bodySmall: {
    fontSize: '14px',
    fontFamily: 'Instrument Sans',
    fontWeight: 400,
    lineHeight: 1.43,
  },
  bodyLarge: {
    fontSize: '18px',
    fontFamily: 'Instrument Sans',
    fontWeight: 400,
    lineHeight: 1.8,
  },
  descriptor: {
    fontSize: '12px',
    fontFamily: 'Instrument Sans',
    fontWeight: 500,
    lineHeight: 1.5,
  },
} as const;