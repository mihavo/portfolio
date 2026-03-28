import React from 'react';
import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { HiOutlineCode } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectCard = ({ title, description, github, website }) => {
  const cardBg      = useColorModeValue('#ffffff',                     'rgba(255,255,255,0.025)');
  const cardBorder  = useColorModeValue('rgba(0,0,0,0.08)',            'rgba(255,255,255,0.06)');
  const hoverShadow = useColorModeValue('0 12px 40px rgba(28,78,216,0.14)', '0 12px 40px rgba(96,165,250,0.12)');
  const hoverBorder = useColorModeValue('rgba(28,78,216,0.35)',        'rgba(96,165,250,0.3)');
  const titleColor  = useColorModeValue('#0f172a',                     'rgba(255,255,255,0.95)');
  const descColor   = useColorModeValue('rgba(0,0,0,0.65)',            'rgba(255,255,255,0.62)');
  const iconColor   = useColorModeValue('rgba(0,0,0,0.45)',            'rgba(255,255,255,0.45)');
  const dotColor    = useColorModeValue('rgba(28,78,216,0.5)',         'rgba(96,165,250,0.4)');

  return (
    <Flex
      className="project_card"
      flexDir="column"
      minW={['80vw', '56vw', '32vw', '26vw', '22vw']}
      maxW="360px"
      h={['200px', '210px', '220px']}
      overflow="hidden"
      onClick={() => window.open(github, '_blank')}
      transition="all 0.25s ease"
      _hover={{
        boxShadow: hoverShadow,
        border: `1px solid ${hoverBorder}`,
        transform: 'translateY(-6px)',
        cursor: 'pointer',
      }}
      border={`1px solid ${cardBorder}`}
      borderRadius="14px"
      bg={cardBg}
      backdropFilter="blur(8px)"
      p="22px"
      position="relative"
    >
      <Flex justifyContent="space-between" alignItems="flex-start" mb="auto">
        {github && (
          <Link
            target="_blank"
            href={github}
            color={iconColor}
            onClick={(e) => e.stopPropagation()}
            _hover={{ color: 'secondary', textDecoration: 'none' }}
            transition="color 0.2s"
          >
            <HiOutlineCode size="20px" />
          </Link>
        )}
        {website && (
          <Link
            target="_blank"
            href={website}
            color={iconColor}
            onClick={(e) => e.stopPropagation()}
            _hover={{ color: 'secondary', textDecoration: 'none' }}
            transition="color 0.2s"
            ml="auto"
          >
            <FiArrowUpRight size="18px" />
          </Link>
        )}
      </Flex>

      <Flex flexDir="column" mt={4}>
        <Text
          fontSize={['14px', '15px']}
          fontWeight="600"
          color={titleColor}
          fontFamily="'Outfit', sans-serif"
          letterSpacing="-0.01em"
          mb={2}
          noOfLines={1}
        >
          {title}
        </Text>
        <Text fontSize="13px" lineHeight={1.75} color={descColor} fontWeight="300" noOfLines={3}>
          {description}
        </Text>
      </Flex>

      <Box
        position="absolute"
        top="18px"
        right="18px"
        w="6px"
        h="6px"
        borderRadius="full"
        bg="secondary"
        opacity={0.45}
      />
    </Flex>
  );
};

export default ProjectCard;
