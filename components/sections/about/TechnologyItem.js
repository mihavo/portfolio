import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

const TechnologyItem = ({ name, icon }) => {
  const bg          = useColorModeValue('rgba(0,0,0,0.03)',      'rgba(255,255,255,0.03)');
  const border      = useColorModeValue('rgba(0,0,0,0.09)',      'rgba(255,255,255,0.07)');
  const color       = useColorModeValue('rgba(0,0,0,0.65)',      'rgba(255,255,255,0.65)');
  const hoverBg     = useColorModeValue('rgba(28,78,216,0.07)',  'rgba(96,165,250,0.08)');
  const hoverBorder = useColorModeValue('rgba(28,78,216,0.3)',   'rgba(96,165,250,0.3)');

  return (
    <Flex
      flexDir="row"
      px="12px"
      py="16px"
      borderRadius="12px"
      bg={bg}
      border={`1px solid ${border}`}
      flexShrink={0}
      gap="10px"
      alignItems="center"
      color={color}
      transition="all 0.2s ease"
      _hover={{
        bg: hoverBg,
        borderColor: hoverBorder,
        color: 'secondary',
        cursor: 'default',
      }}
    >
      {icon}
      <Text fontSize="15px" whiteSpace="nowrap" letterSpacing="0.01em" color="inherit">
        {name}
      </Text>
    </Flex>
  );
};

export default TechnologyItem;
