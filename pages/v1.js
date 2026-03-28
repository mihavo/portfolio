import React from 'react';
import Head from 'next/head';
import { ChakraProvider, extendTheme, theme as base, Flex } from '@chakra-ui/react';
import HeroLayout from '../components/legacy/layout/HeroLayout';
import AboutLayout from '../components/legacy/layout/AboutLayout';
import ExperienceLayout from '../components/legacy/layout/ExperienceLayout';
import ProjectsLayout from '../components/legacy/layout/ProjectsLayout';
import ContactLayout from '../components/legacy/layout/ContactLayout';
import Separator from '../components/legacy/ui/Separator';

const legacyTheme = extendTheme({
  fonts: {
    body:    `Manrope, ${base.fonts.body}`,
    heading: `Manrope, ${base.fonts.body}`,
  },
  colors: {
    purple: { 300: '#CCD6F6' },
    blue: {
      50:  '#c2efff',
      100: '#a6e7ff',
      300: '#73D9FF',
      500: '#33CDD7',
      700: '#202752',
      800: '#11152B',
      900: '#0c0f1f',
    },
    green: {
      100: '#8fe3d1',
      300: '#57e6c8',
      500: '#04E8B9',
      700: '#04d1a7',
    },
    primary:   '#11152B',
    secondary: '#04bfb3',
  },
  components: {
    Heading: {
      baseStyle: { color: 'secondary' },
      variants:  { base: { fontSize: ['36px', '38px', '48px'] } },
      defaultProps: { variant: 'base' },
    },
    Link: {
      variants: {
        base: {
          color: 'white',
          borderRadius: '6px',
          fontSize: '18px',
          transition: 'all 0.2s ease-in-out',
          _hover: { textDecor: 'none', color: 'secondary' },
        },
      },
      defaultProps: { variant: 'base' },
    },
    Button: {
      baseStyle: { color: 'white' },
      variants: {
        base: {
          outline: 'none',
          border: '0',
          bgColor: 'secondary',
          color: 'white',
          fontSize: ['16px', '18px', '20px'],
        },
      },
      defaultProps: { variant: 'base' },
    },
  },
});

export default function V1Portfolio() {
  return (
    <ChakraProvider theme={legacyTheme}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500&family=Inter:wght@100;200;300;400;500&display=swap"
        />
      </Head>
      <Flex bgColor="primary" h="100%" flexDir="column">
        <HeroLayout />
        <Separator />
        <AboutLayout />
        <Separator />
        <ExperienceLayout />
        <Separator />
        <ProjectsLayout />
        <Separator />
        <ContactLayout />
      </Flex>
    </ChakraProvider>
  );
}
