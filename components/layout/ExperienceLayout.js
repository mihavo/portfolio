import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import experience from '../../data/experience/experience.json';
import ExperienceCard from '../sections/experience/ExperienceCard';

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const ExperienceLayout = () => {
  const entries    = [...experience].reverse();
  const headingColor = useColorModeValue('#0f172a', 'white');
  const lineGradient = useColorModeValue(
    'linear-gradient(to bottom, rgba(28,78,216,0.55), rgba(28,78,216,0.12))',
    'linear-gradient(to bottom, rgba(96,165,250,0.6), rgba(96,165,250,0.15))'
  );
  const dotShadow = useColorModeValue(
    '0 0 0 3px rgba(28,78,216,0.15), 0 0 10px rgba(28,78,216,0.35)',
    '0 0 0 3px rgba(96,165,250,0.15), 0 0 10px rgba(96,165,250,0.4)'
  );

  return (
    <Flex
      flexDir="column"
      minH="100vh"
      id="experience"
      px={['28px', '56px', '96px', '120px']}
      py={['80px', '96px', '112px']}
      alignItems="center"
    >
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
        <Text className="section-eyebrow" mb={10} textAlign="center">02 — Experience</Text>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
        <Heading
          fontSize={['32px', '40px', '48px']}
          fontWeight="800"
          letterSpacing="-0.035em"
          color={headingColor}
          mb={14}
          textAlign="center"
        >
          Where I&apos;ve Worked
        </Heading>
      </motion.div>

      <Box position="relative" w="100%" maxW="680px">
        {/* Vertical line */}
        <Box
          position="absolute"
          left="15px"
          top="8px"
          bottom="8px"
          w="1px"
          background={lineGradient}
        />

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
        <Flex flexDir="column" gap={8} pl="48px">
          {entries.map(({ description, time_range, title, link }) => (
            <motion.div key={title} variants={fadeUp}>
            <Box position="relative">
              {/* Timeline dot */}
              <Box
                position="absolute"
                left="-39px"
                top="22px"
                w="9px"
                h="9px"
                borderRadius="full"
                bg="secondary"
                boxShadow={dotShadow}
                zIndex={1}
              />
              <ExperienceCard
                description={description}
                time_range={time_range.toUpperCase()}
                title={title}
                link={link}
              />
            </Box>
            </motion.div>
          ))}
        </Flex>
        </motion.div>
      </Box>
    </Flex>
  );
};

export default ExperienceLayout;
