import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import HeroLayout from '../components/layout/HeroLayout';
import AboutLayout from '../components/layout/AboutLayout';
import ProjectsLayout from '../components/layout/ProjectsLayout';
import ContactLayout from '../components/layout/ContactLayout';
import Separator from '../components/ui/Separator';
import ExperienceLayout from '../components/layout/ExperienceLayout';
import SectionIndicator from '../components/ui/SectionIndicator';

export default function Portfolio() {
  const dotPattern = useColorModeValue(
    'radial-gradient(circle, rgba(0,0,0,0.12) 1.5px, transparent 1.5px)',
    'radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px)'
  );

  return (
    <>
    <SectionIndicator />
    <Flex
      bgColor="primary"
      backgroundImage={dotPattern}
      backgroundSize="28px 28px"
      h="100%"
      flexDir="column"
    >
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
    </>
  );
}
