import React from 'react';
import { Box, Button, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import Navbar from '../ui/Navbar';
import AsciiTitle from '../ui/AsciiTitle';
import { BsGithub } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import 'animate.css';

const HeroLayout = () => {
const fadeColor    = useColorModeValue('#f0f4f8',                    '#050b14');
  const heroBg       = useColorModeValue(
    'radial-gradient(circle, rgba(0,0,0,0.12) 1.5px, transparent 1.5px), linear-gradient(135deg, #e8eef8 0%, #f0f4f8 40%, #e4ecf7 70%, #dde8f5 100%)',
    'radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px), linear-gradient(135deg, #050b14 0%, #080f1e 40%, #060d1a 70%, #030810 100%)'
  );
  const heroBgSize   = '28px 28px, cover';
  const textMuted    = useColorModeValue('rgba(0,0,0,0.7)',            'rgba(255,255,255,0.7)');
  const outlineSolidBg     = useColorModeValue('#eef2f8',              '#070c18');
  const outlineBorder      = useColorModeValue('rgba(28,78,216,0.45)', 'rgba(96,165,250,0.4)');
  const outlineColor       = useColorModeValue('rgba(0,0,0,0.55)',     'rgba(255,255,255,0.55)');
  const outlineGlow        = useColorModeValue('0 0 12px rgba(28,78,216,0.25)', '0 0 12px rgba(96,165,250,0.25)');
  const outlineHoverBorder = useColorModeValue('rgba(28,78,216,0.8)',  'rgba(96,165,250,0.75)');
  const outlineHoverColor  = useColorModeValue('#1C4ED8',              '#60a5fa');
  const outlineHoverGlow   = useColorModeValue('0 0 18px rgba(28,78,216,0.4)', '0 0 18px rgba(96,165,250,0.4)');
  const githubColor        = useColorModeValue('rgba(0,0,0,0.58)',     'rgba(255,255,255,0.58)');
  const githubAccent       = useColorModeValue('#1C4ED8',              '#60a5fa');

  return (
    <Flex
      flexDir="column"
      w="100%"
      minH="100vh"
      id="home"
      position="relative"
      overflow="hidden"
      background={heroBg}
      backgroundSize={heroBgSize}
    >
{/* Ambient glow */}
      <Box
        position="absolute"
        top="-20%"
        left="-10%"
        w="75vw"
        h="75vw"
        maxW="900px"
        maxH="900px"
        background="radial-gradient(ellipse at center, rgba(28,78,216,0.055) 0%, transparent 62%)"
        pointerEvents="none"
      />
      {/* Bottom fade */}
      <Box
        position="absolute"
        bottom={0} left={0} right={0}
        h="180px"
        background={`linear-gradient(to top, ${fadeColor}, transparent)`}
        pointerEvents="none"
      />

      <Navbar />

      <Flex
        flexDir="column"
        flex={1}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        px={['28px', '56px', '96px', '120px']}
        pt={['140px', '130px', '120px']}
        pb="80px"
      >

        <Box
          w="100%"
          h={['200px', '240px', '290px', '330px']}
          mb={2}
        >
          <AsciiTitle lines={['Michael', 'Volakis']} />
        </Box>

        <Link
          href="https://github.com/mihavo"
          target="_blank"
          display="flex"
          alignItems="center"
          gap={2}
          mb={9}
          color={githubColor}
          fontFamily="'DM Sans', sans-serif"
          fontSize={['15px', '16px']}
          letterSpacing="0.02em"
          _hover={{ color: githubAccent, textDecoration: 'none' }}
          transition="color 0.2s ease"
          className="animate__animated animate__fadeIn animate__slower"
          sx={{
            '& .Typewriter__cursor': { color: githubAccent },
          }}
        >
          <BsGithub size="17px" />
          <Typewriter
            onInit={(tw) => {
              tw.typeString('github.com/mihavo')
                .pauseFor(2000)
                .deleteChars(7)
                .pauseFor(500)
                .typeString('/mihavo')
                .pauseFor(2000)
                .deleteChars(7)
                .pauseFor(500)
                .typeString('/mihavo')
                .pauseFor(2000)
                .deleteChars(7)
                .pauseFor(500)
                .typeString('/mihavo')
                .pauseFor(3000)
                .start();
            }}
            options={{
              loop: false,
              delay: 55,
              deleteSpeed: 80,
            }}
          />
        </Link>

        <Flex
          flexDir="column"
          gap={8}
          className="animate__animated animate__fadeInUp animate__slow"
          alignItems="center"
          maxW={['100%', '100%', '520px']}
        >
          <Text
            color={textMuted}
            fontSize={['16px', '17px', '18px']}
            lineHeight={1.85}
            fontWeight="300"
          >
            Software Engineer building reliable, well-crafted back-end systems.
          </Text>

          <Flex gap={3} flexWrap="wrap" justifyContent="center">
            <Button
              as="a"
              href="#projects"
              size="lg"
              bg={outlineSolidBg}
              border="1px solid"
              borderColor={outlineBorder}
              color={outlineColor}
              fontWeight="400"
              px={8}
              boxShadow={outlineGlow}
              _hover={{
                borderColor: outlineHoverBorder,
                color: outlineHoverColor,
                bg: outlineSolidBg,
                boxShadow: outlineHoverGlow,
                transform: 'translateY(-2px)',
              }}
            >
              View Projects
            </Button>
            <Button
              as="a"
              href="#contact"
              size="lg"
              bg={outlineSolidBg}
              border="1px solid"
              borderColor={outlineBorder}
              color={outlineColor}
              fontWeight="400"
              px={8}
              boxShadow={outlineGlow}
              _hover={{
                borderColor: outlineHoverBorder,
                color: outlineHoverColor,
                bg: outlineSolidBg,
                boxShadow: outlineHoverGlow,
                transform: 'translateY(-2px)',
              }}
            >
              Get in Touch
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroLayout;
