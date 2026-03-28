import { GridItem, Flex, Text } from '@chakra-ui/react';

const TechnologyItem = ({ name, icon }) => {
  return (
    <GridItem>
      <Flex
        className={`${name}-tech-item`}
        flexDir={'row'}
        p={'6px'}
        borderRadius={'6px'}
        bgColor={'secondary'}
        w={'100%'}
        justifyContent={'center'}
        gap={'6px'}
        alignItems={'center'}
        transition={'all 0.2s ease-in-out'}
        _hover={{ bgColor: 'green.500', cursor: 'pointer' }}
      >
        {icon}
        <Text color={'primary'} fontSize={'18px'} whiteSpace={'nowrap'}>
          {name}
        </Text>
      </Flex>
    </GridItem>
  );
};
export default TechnologyItem;
