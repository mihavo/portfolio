import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import ContactForm from '../sections/contact/ContactForm';

const ContactLayout = () => {
  const iconProps = { size: '24px' };
  const linkProps = { color: 'secondary', target: '_blank', _hover: { color: 'blue.500' } };
  return (
    <Flex
      flexDir={'column'}
      id={'contact'}
      alignItems={'center'}
      textAlign={['center', 'center', 'start']}
      mt={['20vh', '10vh', '0vh']}
      p={['0px 0px 0px 10px', '20px', '75px', '100px']}
    >
      <Flex flexDir={'column'} my={'5vh'} h={'100%'} alignItems={['center', 'center', 'center', 'start']}>
        <Heading>Get in Touch</Heading>
        <Flex mt={'30px'} gap={'30px'}>
          <Link {...linkProps} href={'https://www.facebook.com/michael.volakis'}><BsFacebook {...iconProps} /></Link>
          <Link {...linkProps} href={'https://www.instagram.com/_michaelvol_/'}><BsInstagram {...iconProps} /></Link>
          <Link {...linkProps} href={'https://twitter.com/michael_vks'}><BsTwitter {...iconProps} /></Link>
          <Link {...linkProps} href={'https://www.linkedin.com/in/michaelvolakis'}><BsLinkedin {...iconProps} /></Link>
          <Link {...linkProps} href={'https://github.com/mihavo'}><BsGithub {...iconProps} /></Link>
          <Link {...linkProps} href={'mailto:mivolakis@gmail.com'}><MdAlternateEmail {...iconProps} /></Link>
        </Flex>
        <Text color={'gray.300'} my={'5vh'} maxW={['90vw', '90vw', '35vw']} fontWeight={'500'}>
          I'm open to new opportunities and collaborations. If you're interested
          in working together on a project or have a position in mind that
          aligns with my skills, I'd love to hear more about it.
        </Text>
        <ContactForm />
      </Flex>
    </Flex>
  );
};
export default ContactLayout;
