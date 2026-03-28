import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Script from 'next/script';
import '../styles/globals.css';
import Head from 'next/head';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'DM Sans', sans-serif`,
  },
  colors: {
    blue: {
      50:  '#e8f4ff',
      100: '#b8d8f5',
      300: '#6aaed4',
      500: '#3a9bb8',
      700: '#111e35',
      800: '#0c1524',
      900: '#050b14',
    },
    green: {
      100: '#8fe3d1',
      300: '#57e6c8',
      500: '#04E8B9',
      700: '#03c9a0',
    },
    purple: {
      300: '#c4d0f0',
    },
  },
  semanticTokens: {
    colors: {
      // background & surfaces
      primary: {
        default: '#f0f4f8',
        _dark: '#050b14',
      },
      surface: {
        default: '#ffffff',
        _dark: '#0c1524',
      },
      // accent — #1C4ED8 in light, lighter blue in dark
      secondary: {
        default: '#1C4ED8',
        _dark: '#60a5fa',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        letterSpacing: '-0.03em',
        fontFamily: `'Outfit', sans-serif`,
      },
      variants: {
        base: {
          fontSize: ['28px', '36px', '44px'],
          fontWeight: '800',
        },
      },
      defaultProps: { variant: 'base' },
    },
    Text: {
      variants: {
        base: {
          fontSize: ['15px', '16px', '17px'],
          lineHeight: '1.85',
          fontWeight: '300',
        },
      },
      defaultProps: { variant: 'base' },
    },
    Link: {
      variants: {
        base: {
          borderRadius: '4px',
          transition: 'color 0.2s ease',
          _hover: { textDecoration: 'none' },
        },
      },
      defaultProps: { variant: 'base' },
    },
    Button: {
      baseStyle: {
        fontFamily: `'DM Sans', sans-serif`,
        fontWeight: '500',
        borderRadius: 'full',
        letterSpacing: '0.01em',
        transition: 'all 0.25s ease',
        _focus: { boxShadow: 'none' },
      },
      variants: {
        base: {
          bg: 'secondary',
          color: 'white',
          _hover: {
            bg: '#3b82f6',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 32px rgba(28,78,216,0.3)',
          },
        },
      },
      defaultProps: { variant: 'base' },
    },
  },
});

const PortfolioApp = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <Head>
        <title>Michael Volakis</title>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3M45E1NNH5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3M45E1NNH5');
        `}
      </Script>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
};

export default PortfolioApp;
