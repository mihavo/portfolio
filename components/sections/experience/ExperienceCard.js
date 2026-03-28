import { Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

const ExperienceCard = ({ description, time_range, title, link }) => {
  const cardBg       = useColorModeValue('#ffffff',                        'rgba(255,255,255,0.025)');
  const cardBorder   = useColorModeValue('rgba(0,0,0,0.07)',               'rgba(255,255,255,0.07)');
  const accentShadow = useColorModeValue('rgba(28,78,216,0.35)',           'rgba(96,165,250,0.3)');
  const accentHover  = useColorModeValue('rgba(28,78,216,0.7)',            'rgba(96,165,250,0.65)');
  const cardShadow   = useColorModeValue('0 1px 4px rgba(0,0,0,0.08)',     '0 4px 24px rgba(0,0,0,0.25)');
  const hoverShadow  = useColorModeValue('0 4px 16px rgba(0,0,0,0.1)',     '0 8px 32px rgba(0,0,0,0.35)');
  const hoverBorder  = useColorModeValue('rgba(0,0,0,0.1)',                'rgba(255,255,255,0.11)');
  const titleColor   = useColorModeValue('#0f172a',                        'rgba(255,255,255,0.95)');
  const descColor    = useColorModeValue('rgba(0,0,0,0.68)',               'rgba(255,255,255,0.65)');
  const linkColor    = useColorModeValue('rgba(0,0,0,0.4)',                'rgba(255,255,255,0.45)');

  return (
    <Flex
      flexDir="column"
      p={['18px 20px', '22px 28px']}
      borderRadius="12px"
      bg={cardBg}
      border={`1px solid ${cardBorder}`}
      backdropFilter="blur(12px)"
      boxShadow={`inset 3px 0 0 ${accentShadow}, ${cardShadow}`}
      transition="all 0.25s ease"
      w="100%"
      _hover={{
        bg: cardBg,
        border: `1px solid ${hoverBorder}`,
        boxShadow: `inset 3px 0 0 ${accentHover}, ${hoverShadow}`,
        transform: 'translateX(4px)',
      }}
    >
      <Text
        fontSize="11px"
        fontWeight="500"
        letterSpacing="0.16em"
        textTransform="uppercase"
        color="secondary"
        opacity={1}
        mb={3}
      >
        {time_range}
      </Text>

      <Flex alignItems="center" gap={2} mb={3}>
        <Text
          fontSize={['16px', '17px', '18px']}
          fontWeight="600"
          color={titleColor}
          fontFamily="'Outfit', sans-serif"
          letterSpacing="-0.01em"
        >
          {title}
        </Text>
        <Link
          href={link}
          target="_blank"
          color={linkColor}
          transition="all 0.2s ease"
          display="inline-flex"
          alignItems="center"
          _hover={{ color: 'secondary', transform: 'translate(2px, -2px)', textDecoration: 'none' }}
        >
          <FiArrowUpRight size="16px" />
        </Link>
      </Flex>

      <Text fontSize="14px" lineHeight={1.85} color={descColor} fontWeight="300">
        {description}
      </Text>
    </Flex>
  );
};

export default ExperienceCard;
