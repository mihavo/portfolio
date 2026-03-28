import { Box, Flex, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import ContactForm from '../sections/contact/ContactForm';

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const SOCIAL_LINKS = [
  { icon: BsLinkedin,       href: 'https://www.linkedin.com/in/michaelvolakis',   label: 'LinkedIn'  },
  { icon: BsGithub,         href: 'https://github.com/mihavo',                    label: 'GitHub'    },
  { icon: MdAlternateEmail, href: 'mailto:mivolakis@gmail.com',                   label: 'Email'     },
];

const ContactLayout = () => {
  const headingColor   = useColorModeValue('#0f172a',              'white');
  const textColor      = useColorModeValue('rgba(0,0,0,0.68)',     'rgba(255,255,255,0.68)');
  const footerColor    = useColorModeValue('rgba(0,0,0,0.4)',      'rgba(255,255,255,0.35)');
  const iconBg         = useColorModeValue('rgba(0,0,0,0.05)',     'rgba(255,255,255,0.06)');
  const iconBorder     = useColorModeValue('rgba(0,0,0,0.14)',     'rgba(255,255,255,0.14)');
  const iconColor      = useColorModeValue('rgba(0,0,0,0.55)',     'rgba(255,255,255,0.55)');
  const iconHoverBg    = useColorModeValue('rgba(28,78,216,0.08)', 'rgba(96,165,250,0.1)');
  const iconHoverBorder = useColorModeValue('rgba(28,78,216,0.3)', 'rgba(96,165,250,0.3)');

  return (
    <Flex
      flexDir="column"
      id="contact"
      alignItems="center"
      px={['28px', '56px', '96px', '120px']}
      py={['80px', '96px', '120px']}
    >
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
        <Text className="section-eyebrow" mb={10}>04 — Contact</Text>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '640px' }}
      >
        <Flex flexDir="column" alignItems="center" textAlign="center" maxW="640px" w="100%">
          <motion.div variants={fadeUp}>
            <Heading
              fontSize={['32px', '40px', '48px']}
              fontWeight="800"
              letterSpacing="-0.035em"
              color={headingColor}
              mb={5}
            >
              Get in Touch
            </Heading>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Text
              color={textColor}
              fontSize={['15px', '16px', '17px']}
              lineHeight={1.85}
              fontWeight="300"
              mb={10}
              maxW="440px"
            >
              I&apos;m open to new opportunities and collaborations. If you have a
              project in mind or a position that aligns with my skills, I&apos;d
              love to hear more about it.
            </Text>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={fadeUp}>
            <Flex gap={3} mb={12} flexWrap="wrap" justifyContent="center">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="44px"
                  h="44px"
                  borderRadius="10px"
                  bg={iconBg}
                  border={`1px solid ${iconBorder}`}
                  color={iconColor}
                  transition="all 0.2s ease"
                  _hover={{
                    bg: iconHoverBg,
                    borderColor: iconHoverBorder,
                    color: 'secondary',
                    transform: 'translateY(-3px)',
                    textDecoration: 'none',
                  }}
                >
                  <Icon size="18px" />
                </Link>
              ))}
            </Flex>
          </motion.div>

          <motion.div variants={fadeUp} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ContactForm />
          </motion.div>
        </Flex>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={fadeUp}>
        <Box mt={16} textAlign="center">
          <Text fontSize="13px" color={footerColor} fontWeight="300">
            Built with Next.js
          </Text>
        </Box>
      </motion.div>
    </Flex>
  );
};

export default ContactLayout;
