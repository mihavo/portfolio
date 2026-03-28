import { Box, Flex, Heading, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import projects from '../../data/projects/projects.json';
import ProjectCard from '../sections/projects/ProjectCard';

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const SCROLL_AMOUNT = 320;

const ProjectRow = ({ label, items, labelColor, arrowBg, arrowBorder, arrowColor, arrowHoverBg }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: 'smooth' });
    }
  };

  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
      <Box>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <motion.div variants={fadeUp}>
            <Text
              fontSize="12px"
              fontWeight="500"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color={labelColor}
            >
              {label}
            </Text>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Flex gap={2}>
              <IconButton
                aria-label="Scroll left"
                icon={<FiChevronLeft size="16px" />}
                size="sm"
                bg={arrowBg}
                color={arrowColor}
                border={`1px solid ${arrowBorder}`}
                borderRadius="8px"
                onClick={() => scroll(-1)}
                _hover={{ bg: arrowHoverBg, borderColor: 'secondary', color: 'secondary' }}
                transition="all 0.2s ease"
              />
              <IconButton
                aria-label="Scroll right"
                icon={<FiChevronRight size="16px" />}
                size="sm"
                bg={arrowBg}
                color={arrowColor}
                border={`1px solid ${arrowBorder}`}
                borderRadius="8px"
                onClick={() => scroll(1)}
                _hover={{ bg: arrowHoverBg, borderColor: 'secondary', color: 'secondary' }}
                transition="all 0.2s ease"
              />
            </Flex>
          </motion.div>
        </Flex>

        <motion.div variants={fadeUp}>
          <Box
            ref={scrollRef}
            overflowX="auto"
            css={{ '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}
          >
            <Flex gap={4} pt={2} pb={3}>
              {items.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Flex>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

const ProjectsLayout = () => {
  const headingColor  = useColorModeValue('#0f172a',              'white');
  const labelColor    = useColorModeValue('rgba(0,0,0,0.55)',     'rgba(255,255,255,0.55)');
  const arrowBg       = useColorModeValue('rgba(0,0,0,0.03)',     'rgba(255,255,255,0.04)');
  const arrowBorder   = useColorModeValue('rgba(0,0,0,0.1)',      'rgba(255,255,255,0.1)');
  const arrowColor    = useColorModeValue('rgba(0,0,0,0.45)',     'rgba(255,255,255,0.45)');
  const arrowHoverBg  = useColorModeValue('rgba(28,78,216,0.06)', 'rgba(96,165,250,0.08)');

  const rowProps = { labelColor, arrowBg, arrowBorder, arrowColor, arrowHoverBg };

  return (
    <Flex
      flexDir="column"
      id="projects"
      px={['28px', '56px', '96px', '120px']}
      py={['80px', '96px', '112px']}
    >
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
        <Text className="section-eyebrow" mb={10}>03 — Projects</Text>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
        <Heading
          fontSize={['32px', '40px', '48px']}
          fontWeight="800"
          letterSpacing="-0.035em"
          color={headingColor}
          mb={12}
        >
          Things I&apos;ve Built
        </Heading>
      </motion.div>

      <Flex flexDir="column" gap={10}>
        <ProjectRow label="Personal"   items={projects.personal} {...rowProps} />
        <ProjectRow label="University" items={projects.uni}      {...rowProps} />
      </Flex>
    </Flex>
  );
};

export default ProjectsLayout;
