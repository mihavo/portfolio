import { useScroll, useSpring, motion } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const color = useColorModeValue(
    'linear-gradient(to right, #1C4ED8, #3b82f6)',
    'linear-gradient(to right, #60a5fa, #93c5fd)'
  );

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: color,
        scaleX,
        transformOrigin: 'left',
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollProgress;
