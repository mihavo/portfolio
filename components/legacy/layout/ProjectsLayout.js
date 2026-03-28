import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import projects from '../../../data/projects/projects.json';
import ProjectCard from '../sections/projects/ProjectCard';

const cardWrapperProperties = {
  flexDir: 'column',
  h: '100%',
  gap: 2,
  bgColor: 'blue.900',
  p: '2vh',
  borderRadius: '10px',
};
const categoryHeadingProperties = {
  mb: '15px',
  fontSize: '28px',
  fontWeight: '500',
  color: 'secondary',
};

const ProjectsLayout = () => {
  return (
    <Flex
      flexDir={'column'}
      id={'projects'}
      textAlign={['center', 'start']}
      mt={['20vh', '10vh', '0vh']}
      ml={['25px', '50px', '75px', '100px']}
      p={['0px 0px 0px 20px', '20px', '75px', '100px']}
    >
      <Flex flexDir={'column'} h={'100%'}>
        <Heading mb={'1vw'}>Projects</Heading>
        <Flex gap={'4vh'} flexDir={'column'}>
          <Flex {...cardWrapperProperties} mt={'1.5vh'}>
            <Text {...categoryHeadingProperties}>Personal Projects</Text>
            <ScrollContainer className="scroll-container">
              <Flex gap={6} overflow={'scroll'} css={{ '&::-webkit-scrollbar': { width: '0px' } }}>
                {projects.personal.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </Flex>
            </ScrollContainer>
          </Flex>
          <Flex {...cardWrapperProperties}>
            <Text {...categoryHeadingProperties}>University Projects</Text>
            <Flex gap={6} overflow={'scroll'} css={{ '&::-webkit-scrollbar': { width: '0px' } }}>
              {projects.uni.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ProjectsLayout;
