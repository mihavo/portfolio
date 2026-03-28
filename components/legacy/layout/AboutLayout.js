import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
} from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoMdDocument } from 'react-icons/io';
import { LuFileJson2 } from 'react-icons/lu';
import {
  SiApachemaven,
  SiDocker,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNpm,
  SiPython,
  SiSpring,
} from 'react-icons/si';
import { VscTerminalBash } from 'react-icons/vsc';
import TechnologyItem from '../sections/about/TechnologyItem';

const buttonProps = {
  size: 'lg',
  borderColor: 'green.700',
  border: '2px solid',
  bgColor: 'primary',
  color: 'secondary',
  transition: 'all 0.3s ease-in-out',
  _hover: { color: 'primary', bgColor: 'secondary' },
};

const AboutLayout = () => {
  return (
    <Flex
      flexDir={'row'}
      h={'100vh'}
      id="about"
      textAlign={['center', 'start']}
      justifyContent={'center'}
      ml={['25px', '50px', '75px', '100px']}
      p={['25px', '50px', '75px', '100px']}
    >
      <Flex
        flexDir={'column'}
        maxW={['100%', '100%', '100%', '60%']}
        mt={['0vh', '0vh', '0vh']}
      >
        <Heading>About Me</Heading>
        <Flex flexDir={'column'}>
          <Text mt={'4vh'} color={'purple.300'}>
            Hello there! My name is Michael. I studied Computer Science at{' '}
            <Link
              color={'secondary'}
              fontSize={'1.2rem'}
              href={'https://di.uoa.gr'}
              target={'_blank'}
            >
              DIT, University of Athens
            </Link>
            , Greece. I'm interested in exploring new ways to build web
            applications. My journey in web development began in 2018 when I
            started experimenting with the interfaces of simple webpages using
            HTML, CSS & JS and getting familiar with the way server-side code
            worked. That inspired me to learn more about the JavaScript
            ecosystem and the frameworks that surround it.
            <br />
            <br />
            Since then I have been working on various projects and building web
            apps that look and feel both modern and functional. My current
            interests involve learning more about Databases, Microservices as
            well as creating back-end applications that are helpful and
            accessible to all.
          </Text>
          <Flex my={'2vh'} flexDir={'column'}>
            <Text fontSize={'1.2rem'} color={'purple.300'}>
              Here are some of the technologies I've been working with:
            </Text>
            <Grid mt={'20px'} templateColumns="repeat(6, 1fr)" gap={3}>
              <TechnologyItem
                name={'Java'}
                icon={<BiLogoJava size={'28px'} />}
              />
              <TechnologyItem
                name={'Spring'}
                icon={<SiSpring size={'28px'} />}
              />
              <TechnologyItem
                name={'Python'}
                icon={<SiPython size={'28px'} />}
              />
              <TechnologyItem
                name={'JavaScript (ES6+)'}
                icon={<BiLogoJavascript size={'28px'} />}
              />
              <TechnologyItem
                name={'ReactJS'}
                icon={<BiLogoReact size={'28px'} />}
              />
              <TechnologyItem
                name={'NextJS'}
                icon={<SiNextdotjs size={'28px'} />}
              />
              <TechnologyItem
                name={'NodeJS'}
                icon={<BiLogoNodejs size={'28px'} />}
              />
              <TechnologyItem
                name={'ExpressJS'}
                icon={<SiExpress size={'28px'} />}
              />
              <TechnologyItem
                name={'HTML'}
                icon={<BiLogoHtml5 size={'28px'} />}
              />
              <TechnologyItem
                name={'CSS'}
                icon={<BiLogoCss3 size={'28px'} />}
              />
              <TechnologyItem name={'MySQL'} icon={<SiMysql size={'28px'} />} />
              <TechnologyItem
                name={'MongoDB'}
                icon={<SiMongodb size={'28px'} />}
              />
              <TechnologyItem
                name={'Git & Github'}
                icon={<BsGithub size={'28px'} />}
              />
              <TechnologyItem
                name={'Linux & Bash'}
                icon={<VscTerminalBash size={'28px'} />}
              />
              <TechnologyItem
                name={'Docker'}
                icon={<SiDocker size={'28px'} />}
              />
              <TechnologyItem
                name={'Maven'}
                icon={<SiApachemaven size={'28px'} />}
              />
              <TechnologyItem name={'npm'} icon={<SiNpm size={'28px'} />} />
              <TechnologyItem
                name={'JSON'}
                icon={<LuFileJson2 size={'28px'} />}
              />
            </Grid>
          </Flex>
          <Flex
            mt={'5vh'}
            gap={10}
            flexDir={['column', 'column', 'row']}
            alignItems={'center'}
          >
            <Link href="https://github.com/mihavo" target={'_blank'}>
              <Button {...buttonProps} leftIcon={<BsGithub />}>
                Check my Github Profile
              </Button>
            </Link>
            <Link
              href={
                'public/Resume.pdf'
              }
              target={'_blank'}
            >
              <Button {...buttonProps} leftIcon={<IoMdDocument />}>
                Download my Resume
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="about-vector">
        <Image
          src="/vectors/about.png"
          alt="tech vector"
          h={['30vh', '40vh', '50vh', '60vh']}
          w={['30vh', '40vh', '50vh', '60vh']}
        />
      </Flex>
    </Flex>
  );
};
export default AboutLayout;
