import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import NavbarDivider from './NavbarDivider';
const Navbar = () => {
  return (
    <Flex
      backdropFilter={'blur(5px)'}
      justifyContent={'flex-end'}
      alignItems={'center'}
      w={'100%'}
      h={'10vh'}
      borderBottom={'2px solid #262C4D'}
      pr={'30px'}
    >
      <Flex alignItems={'center'} gap={6}>
        <Link href="#about">About</Link>
        <NavbarDivider />
        <Link href={'#projects'}>Projects</Link>
        <NavbarDivider />
        <Link href={'#experience'}>Experience</Link>
        <NavbarDivider />
        <Link href={'#contact'}>Contact</Link>
      </Flex>
    </Flex>
  );
};
export default Navbar;
