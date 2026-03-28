import { Flex } from '@chakra-ui/react';
const NavbarDivider = () => {
  return (
    <Flex
      w={'2px'}
      h={'30px'}
      bgColor={'secondary'}
      transform={{ base: 'rotate(15deg)' }}
    />
  );
};
export default NavbarDivider;
