import { Box, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Separator = () => {
  const gradient = useColorModeValue(
    'linear-gradient(to right, transparent, rgba(28,78,216,0.08) 25%, rgba(28,78,216,0.28) 50%, rgba(28,78,216,0.08) 75%, transparent)',
    'linear-gradient(to right, transparent, rgba(96,165,250,0.1) 25%, rgba(96,165,250,0.35) 50%, rgba(96,165,250,0.1) 75%, transparent)'
  );

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ originX: 0.5 }}
    >
      <Box
        className="separator"
        h="2px"
        background={gradient}
        filter={useColorModeValue(
          'drop-shadow(0 0 6px rgba(28,78,216,0.35))',
          'drop-shadow(0 0 8px rgba(96,165,250,0.4))'
        )}
      />
    </motion.div>
  );
};

export default Separator;
