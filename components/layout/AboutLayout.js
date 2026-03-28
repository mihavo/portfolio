import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  BiLogoJava, BiLogoJavascript, BiLogoNodejs,
} from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoMdDocument } from 'react-icons/io';
import { LuFileJson2, LuNetwork } from 'react-icons/lu';
import {
  SiApachekafka,
  SiApachemaven,
  SiDocker,
  SiHibernate, SiIbm, SiKubernetes, SiMongodb,
  SiMysql, SiOpentelemetry, SiPostgresql,
  SiPrometheus,
  SiPython,
  SiRabbitmq, SiRedis, SiSpring,
} from 'react-icons/si';
import { VscTerminalBash } from 'react-icons/vsc';
import TechnologyItem from '../sections/about/TechnologyItem';

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const TECH_ROW_1 = [
  { name: 'Java',         icon: <BiLogoJava size="20px" /> },
  { name: 'Spring',       icon: <SiSpring size="20px" /> },
  { name: 'Python',       icon: <SiPython size="20px" /> },
  { name: 'JavaScript',   icon: <BiLogoJavascript size="20px" /> },
  { name: 'NodeJS',       icon: <BiLogoNodejs size="20px" /> },
  { name: 'Docker',       icon: <SiDocker size="20px" /> },
  { name: 'Kubernetes',   icon: <SiKubernetes size="20px" /> },
  { name: 'Kafka',        icon: <SiApachekafka size="20px" /> },
  { name: 'Redis',        icon: <SiRedis size="20px" /> },
  { name: 'gRPC',         icon: <LuNetwork size="20px" /> },
  { name: 'IBM DB2',      icon: <SiIbm size="20px" /> },
];

const TECH_ROW_2 = [
  { name: 'PostgreSQL',   icon: <SiPostgresql size="20px" /> },
  { name: 'MySQL',        icon: <SiMysql size="20px" /> },
  { name: 'MongoDB',      icon: <SiMongodb size="20px" /> },
  { name: 'Hibernate',    icon: <SiHibernate size="20px" /> },
  { name: 'RabbitMQ',     icon: <SiRabbitmq size="20px" /> },
  { name: 'Maven',        icon: <SiApachemaven size="20px" /> },
  { name: 'Git',          icon: <BsGithub size="20px" /> },
  { name: 'Linux & Bash',    icon: <VscTerminalBash size="20px" /> },
  { name: 'JSON',            icon: <LuFileJson2 size="20px" /> },
  { name: 'OpenTelemetry',   icon: <SiOpentelemetry size="20px" /> },
  { name: 'Prometheus',      icon: <SiPrometheus size="20px" /> },
];

const MarqueeColumn = ({ items, direction = 'up', duration = 28 }) => {
  const doubled = [...items, ...items];
  const animate = direction === 'up'
    ? { y: ['0%', '-50%'] }
    : { y: ['-50%', '0%'] };

  return (
    <Box overflow="hidden" position="relative" h="380px" flex={1}>
      <motion.div
        animate={animate}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <TechnologyItem key={i} name={item.name} icon={item.icon} />
        ))}
      </motion.div>
    </Box>
  );
};

const AboutLayout = () => {
  const headingColor  = useColorModeValue('#0f172a',              'white');
  const textColor     = useColorModeValue('rgba(0,0,0,0.72)',     'rgba(255,255,255,0.72)');
  const linkHover     = useColorModeValue('#1a3fb5',              '#93c5fd');
  const btnBorder     = useColorModeValue('rgba(0,0,0,0.2)',      'rgba(255,255,255,0.2)');
  const btnColor      = useColorModeValue('rgba(0,0,0,0.65)',     'rgba(255,255,255,0.72)');
  const btnHoverBg    = useColorModeValue('rgba(28,78,216,0.07)', 'rgba(96,165,250,0.06)');
  const fadeMask      = useColorModeValue(
    'linear-gradient(to bottom, #f0f4f8, transparent 18%, transparent 82%, #f0f4f8)',
    'linear-gradient(to bottom, #050b14, transparent 18%, transparent 82%, #050b14)'
  );
  const techLabelColor = useColorModeValue('rgba(0,0,0,0.55)',    'rgba(255,255,255,0.55)');

  const ctaButton = {
    size: 'md',
    bg: 'transparent',
    border: '1px solid',
    borderColor: btnBorder,
    color: btnColor,
    fontWeight: '400',
    px: 6,
    borderRadius: 'full',
    transition: 'all 0.25s ease',
    _hover: {
      borderColor: 'secondary',
      color: 'secondary',
      bg: btnHoverBg,
      transform: 'translateY(-2px)',
    },
  };

  return (
    <Flex
      flexDir="column"
      minH="100vh"
      id="about"
      px={['28px', '56px', '96px', '120px']}
      py={['80px', '96px', '112px']}
    >
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
        <Text className="section-eyebrow" mb={10}>01 — About Me</Text>
      </motion.div>

      <Flex
        flexDir={['column', 'column', 'row']}
        gap={['56px', '56px', '80px']}
        alignItems="flex-start"
      >
        {/* Left: bio */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          <motion.div variants={fadeUp}>
            <Heading
              fontSize={['32px', '40px', '48px']}
              fontWeight="800"
              letterSpacing="-0.035em"
              color={headingColor}
              mb={7}
            >
              About Me
            </Heading>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Text color={textColor} fontSize={['15px', '16px', '17px']} lineHeight={1.9} fontWeight="300" mb={5}>
              Hi there! I&apos;m Michael. I studied Computer Science at{' '}
              <Link
                href="https://di.uoa.gr"
                target="_blank"
                color="secondary"
                fontWeight="400"
                _hover={{ color: linkHover, textDecoration: 'none' }}
              >
                DIT, University of Athens
              </Link>
              , and have been working on back-end systems ever since. Right now I&apos;m particularly focused on cloud-native development and building services that scale.
            </Text>

            <Text color={textColor} fontSize={['15px', '16px', '17px']} lineHeight={1.9} fontWeight="300">
              I enjoy working across the stack when needed, but back-end engineering and cloud infrastructure are where I feel most at home. I&apos;m always looking for opportunities to build things that are reliable, well-structured, and actually useful.
            </Text>

            <Flex mt={10} gap={4} flexWrap="wrap">
              <Link href="https://github.com/mihavo" target="_blank" _hover={{ textDecoration: 'none' }}>
                <Button {...ctaButton} leftIcon={<BsGithub />}>GitHub Profile</Button>
              </Link>
              <Link href="/resume.pdf" target="_blank" _hover={{ textDecoration: 'none' }}>
                <Button {...ctaButton} leftIcon={<IoMdDocument />}>Download Resume</Button>
              </Link>
            </Flex>
          </motion.div>
        </motion.div>

        {/* Right: tech marquee */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}
        >
          <Text
            fontSize="11px"
            fontWeight="500"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color={techLabelColor}
            mb={6}
          >
            Technologies I work with
          </Text>

          <Box position="relative">
            {/* Top/bottom fade masks */}
            <Box
              position="absolute"
              inset={0}
              backgroundImage={fadeMask}
              zIndex={1}
              pointerEvents="none"
            />
            <Flex gap={3}>
              <MarqueeColumn items={TECH_ROW_1} direction="up"   duration={32} />
              <MarqueeColumn items={TECH_ROW_2} direction="down" duration={28} />
            </Flex>
          </Box>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default AboutLayout;
