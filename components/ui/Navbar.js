import React, { useEffect, useState } from 'react';
import { Box, Flex, IconButton, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BsMoon, BsSun } from 'react-icons/bs';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const scrolledBg     = useColorModeValue('rgba(240,244,248,0.88)', 'rgba(5,11,20,0.88)');
  const scrolledBorder = useColorModeValue('rgba(0,0,0,0.07)',        'rgba(255,255,255,0.05)');
  const logoColor      = useColorModeValue('#0f172a',                 'white');
  const linkColor      = useColorModeValue('rgba(0,0,0,0.45)',        'rgba(255,255,255,0.45)');
  const linkHover      = useColorModeValue('#0f172a',                 'white');
  const toggleColor    = useColorModeValue('rgba(0,0,0,0.45)',        'rgba(255,255,255,0.5)');
  const toggleHoverBg  = useColorModeValue('rgba(0,0,0,0.06)',        'rgba(255,255,255,0.08)');
  const toggleHoverColor = useColorModeValue('#0f172a',               'white');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Flex
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      px={['20px', '40px', '64px', '88px']}
      py="20px"
      alignItems="center"
      justifyContent="space-between"
      transition="background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease"
      backdropFilter={scrolled ? 'blur(20px) saturate(180%)' : 'none'}
      bg={scrolled ? scrolledBg : 'transparent'}
      borderBottom={scrolled ? `1px solid ${scrolledBorder}` : '1px solid transparent'}
    >
      {/* Monogram */}
      <Text
        as="span"
        fontFamily="'Outfit', sans-serif"
        fontSize="22px"
        fontWeight="800"
        letterSpacing="-0.04em"
        color={logoColor}
        cursor="pointer"
        userSelect="none"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        _hover={{ color: 'secondary' }}
        transition="color 0.2s ease"
      >
        MV<Box as="span" color="secondary">.</Box>
      </Text>

      <Flex alignItems="center" gap={[4, 6, 8]}>
        {/* Nav links */}
        <Flex
          as="ul"
          gap={[5, 6, 8]}
          alignItems="center"
          listStyleType="none"
          display={['none', 'none', 'flex']}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Box as="li" key={label}>
              <Link
                href={href}
                fontSize="14px"
                fontWeight="400"
                color={linkColor}
                letterSpacing="0.015em"
                transition="color 0.2s ease"
                _hover={{ color: linkHover, textDecoration: 'none' }}
              >
                {label}
              </Link>
            </Box>
          ))}
        </Flex>

        {/* v1 link */}
        <Link
          href="/v1"
          fontSize="12px"
          fontWeight="500"
          color={linkColor}
          letterSpacing="0.08em"
          border="1px solid"
          borderColor={useColorModeValue('rgba(0,0,0,0.12)', 'rgba(255,255,255,0.12)')}
          borderRadius="6px"
          px="10px"
          py="4px"
          transition="all 0.2s ease"
          _hover={{ color: 'secondary', borderColor: 'secondary', textDecoration: 'none' }}
        >
          v1
        </Link>

        {/* Color mode toggle */}
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'dark' ? <BsSun size="15px" /> : <BsMoon size="15px" />}
          onClick={toggleColorMode}
          size="sm"
          bg="transparent"
          color={toggleColor}
          border="1px solid"
          borderColor={scrolled ? scrolledBorder : 'transparent'}
          borderRadius="8px"
          _hover={{ bg: toggleHoverBg, color: toggleHoverColor, borderColor: 'transparent' }}
          transition="all 0.2s ease"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
