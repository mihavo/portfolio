import React from 'react';
import { Flex, Text, Heading, Button } from '@chakra-ui/react';
import Navbar from '../ui/Navbar';
import 'animate.css';

const HeroLayout = () => {
  const textAnimationProps = {
    className: 'animate__animated animate__fadeInDown animate__slow',
  };
  const buttonProps = {
    className: 'animate__animated animate__fadeInUp animate__slow',
    color: 'secondary',
    variant: 'outline',
    size: 'lg',
    borderColor: 'secondary',
    transition: 'all 0.3s ease-in-out',
    _hover: { bgColor: 'secondary', color: 'primary' },
  };
  return (
    <Flex
      bgImage={'/vectors/background.svg'}
      bgRepeat={'no-repeat'}
      flexDir={'column'}
      w={'100%'}
      h={['100%', '100%', '100vh']}
      id={'home'}
      textAlign={['center', 'center', 'center', 'start']}
    >
      <Navbar />
      <Flex
        css={{ '-webkit-justify-content': 'flex-end' }}
        justifyContent={['start', 'center', 'center', 'flex-end']}
        my={'10vh'}
        mx={'5vh'}
        h={'100%'}
      >
        <Flex flexDir={'column'} h={'100%'} w={['100vw', '100vw', '70vw']}>
          <Flex flexDir={'column'} justifyContent={'space-between'}>
            <Flex flexDir={'column'}>
              <Text {...textAnimationProps} fontSize={['24px', '20px', '24px']} color={'secondary'}>
                Hi there! I'm
              </Text>
              <Heading my={'5px'} {...textAnimationProps} color={'gray.300'} fontSize={'80px'}>
                Michael Volakis
              </Heading>
              <Heading fontSize={['20px', '22px', '30px']} {...textAnimationProps} mt={'15px'} color={'secondary'} fontWeight={'300'}>
                Computer Science Graduate & Back-End Software Developer
              </Heading>
              <Text mt={'6vh'} color={'gray.400'} maxW={['100%', '100%', '100%', '66%']} fontFamily={'Inter'} fontSize={['18px', '20px', '20px']}>
                I'm a passionate software developer with an unwavering drive for
                learning and problem-solving. My expertise lies in crafting
                innovative and efficient solutions for the server-side. I'm
                constantly exploring new technologies to deliver seamless and
                robust web applications. Currently, I'm focused on learning
                about the ins and outs of backend systems.
              </Text>
            </Flex>
            <Flex mt={'10vh'} justifyContent={['center', 'center', 'center', 'start']}>
              <Button {...buttonProps} outline={'none'}>
                <a href="#projects">Check out my Projects</a>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default HeroLayout;
