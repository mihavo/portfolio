import { useState, useEffect } from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
  { id: 'contact',    label: 'Contact'    },
];

const SectionIndicator = () => {
  const [active, setActive]   = useState('');
  const [hovered, setHovered] = useState('');

  const dotActive   = useColorModeValue('#1C4ED8',                  '#60a5fa');
  const dotInactive = useColorModeValue('rgba(0,0,0,0.18)',         'rgba(255,255,255,0.18)');
  const dotGlow     = useColorModeValue('0 0 8px rgba(28,78,216,0.5)', '0 0 8px rgba(96,165,250,0.55)');
  const pillBg      = useColorModeValue('rgba(255,255,255,0.7)',    'rgba(10,18,35,0.7)');
  const pillBorder  = useColorModeValue('rgba(0,0,0,0.08)',         'rgba(255,255,255,0.08)');
  const labelColor  = useColorModeValue('rgba(0,0,0,0.65)',         'rgba(255,255,255,0.65)');

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <Flex
      position="fixed"
      right={['12px', '20px', '28px']}
      top="50%"
      transform="translateY(-50%)"
      flexDir="column"
      alignItems="flex-end"
      gap={3}
      zIndex={100}
      display={['none', 'none', 'flex']}
    >
      <Box
        bg={pillBg}
        border={`1px solid ${pillBorder}`}
        borderRadius="full"
        px="7px"
        py="10px"
        backdropFilter="blur(10px)"
        display="flex"
        flexDir="column"
        alignItems="center"
        gap={3}
      >
        {SECTIONS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <Box
              key={id}
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered('')}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              cursor="pointer"
            >
              {/* Label tooltip */}
              <AnimatePresence>
                {hovered === id && (
                  <motion.div
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    style={{ position: 'absolute', right: '20px', pointerEvents: 'none' }}
                  >
                    <Box
                      bg={pillBg}
                      border={`1px solid ${pillBorder}`}
                      borderRadius="6px"
                      px="9px"
                      py="4px"
                      backdropFilter="blur(10px)"
                      whiteSpace="nowrap"
                    >
                      <Text fontSize="11px" fontWeight="500" color={labelColor} letterSpacing="0.04em">
                        {label}
                      </Text>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dot */}
              <motion.div
                animate={{
                  width:     isActive ? '8px' : '6px',
                  height:    isActive ? '8px' : '6px',
                  backgroundColor: isActive ? dotActive : dotInactive,
                  boxShadow: isActive ? dotGlow : 'none',
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{ borderRadius: '50%' }}
              />
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
};

export default SectionIndicator;
