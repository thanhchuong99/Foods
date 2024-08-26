'use client';
import { createTheme } from '@mui/material/';
import { dark, primary } from '../theme/colors';
import { paytoneOneFont, nunitoFont } from '@/util/fonts';
import { customShadows } from '@/theme/customShadows';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    '2md': true;
    md: true;
    lg: true;
    xl: true;
    mobile: false;
    tablet: false;
    laptop: false;
    desktop: false;
  }
}

const theme = createTheme({
  components: {
    MuiInputBase: {
      defaultProps: {
        disableInjectingGlobalStyles: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          border: `2px solid ${primary.base}`,
          borderRadius: '18px',
          color: primary.base,
          textTransform: 'capitalize',
          fontWeight: 700,
          fontSize: '0.875rem',

          '&:hover': {
            border: `2px solid ${primary.base}`,
          },
        },
        containedPrimary: {
          borderRadius: '18px',
          color: '#ffffff',
          textTransform: 'capitalize',
          fontWeight: 700,
          fontSize: '0.875rem',
          backgroundImage: `linear-gradient(to bottom, #57D194 0%, ${primary.base} 50%)`,
          boxShadow: '0 4px 10px 0px rgba(45, 197, 121, 0.3)',

          ':disabled': {
            cursor: 'not-allowed',
            color: dark[10],
            backgroundImage: `linear-gradient(to bottom, #8492A9 0%, #5C6E8D 50%)`,
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        maxWidthLg: {
          '@media (max-width: 1199px)': {
            paddingLeft: '40px',
            paddingRight: '40px',
            maxWidth: '100%',
          },

          '@media (max-width: 767px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
            maxWidth: '100%',
          },

          '@media (min-width: 1200px)': {
            maxWidth: 1160,
            paddingLeft: '0',
            paddingRight: '0',
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            ...paytoneOneFont.style,
            fontSize: '3rem',
            lineHeight: '75px',
            color: dark.base,
            fontWeight: 400,
            textTransform: 'uppercase',

            '@media (min-width: 480px)': {
              fontSize: '3rem',
            },

            '@media (min-width: 1200px)': {
              fontSize: '3.375rem',
            },
          },
        },
        {
          props: { variant: 'h2' },
          style: {
            ...paytoneOneFont.style,
            fontSize: '1.8rem',
            color: dark.base,
            fontWeight: 400,

            '@media (min-width: 480px)': {
              fontSize: '2.5rem',
            },

            '@media (min-width: 1200px)': {
              fontSize: '2.5rem',
            },
          },
        },
        {
          props: { variant: 'h3' },
          style: {
            ...nunitoFont.style,
            color: dark.base,
            fontWeight: 700,
            fontSize: '1.7rem',

            '@media (min-width: 1200px)': {
              fontSize: '2rem',
              lineHeight: '51px',
            },
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '18px',

          '.MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
            borderColor: dark[10],
            borderRadius: '18px',
          },

          '&::focus .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
            borderColor: primary.base,
            borderRadius: '18px',
          },

          'input:-webkit-autofill': {
            borderTopRightRadius: '18px',
            borderBottomRightRadius: '18px',
            background: 'none',
          },

          input: {
            paddingTop: '15.5px',
            paddingBottom: '15.5px',
            fontSize: '1rem',
            borderTopRightRadius: '18px',
            borderBottomRightRadius: '18px',
            color: dark[60],
            fontWeight: 500,
          },

          textArea: {
            paddingTop: '10px',
            paddingBottom: '10px',
            fontSize: '1rem',
            color: dark[60],
            fontWeight: 500,
          },

          'input::placeholder, textarea::placeholder': {
            color: dark[40],
            fontSize: '1rem',
            opacaity: 1,
          },

          'input::-webkit-input-placeholder, textarea::-webkit-input-placeholder': { color: dark[40], opacity: 1 },

          '&.Mui-focused': {
            caretColor: primary.base,
            boxShadow: customShadows.input,

            // Note: Change prefix icon's color when input is focused
            '.MuiInputAdornment-root': {
              svg: {
                path: {
                  fill: dark[60],
                },
              },
            },
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-nunito)',
  },
  palette: {
    primary: {
      main: primary.base,
      ...primary,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      '2md': 992,
      lg: 1200,
      xl: 1920,
    },
  },
});

export default theme;
