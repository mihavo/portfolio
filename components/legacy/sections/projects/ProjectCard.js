import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import { HiOutlineCode } from 'react-icons/hi';
import { FiLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, github, website }) => {
  return (
    <Flex
      className="project_card"
      flexDir={'column'}
      boxShadow={'lg'}
      minW={['70vw', '50vw', '30vw', '25vw', '20vw']}
      maxW={'20vw'}
      h={['35vh', '30vh']}
      overflow={'hidden'}
      onClick={() => window.open(github, '_blank')}
      transition={'all .2s ease-in-out'}
      _hover={{ boxShadow: '2xl', border: '2px solid', cursor: 'pointer' }}
      border={'2px solid black'}
      borderRadius={'6px'}
      bgColor={'blue.700'}
      color={'secondary'}
      p={'20px'}
    >
      <Flex justifyContent={'space-between'}>
        {github && (
          <Link target={'_blank'} href={github} color={'gray.400'} _hover={{ color: 'red.400' }}>
            <HiOutlineCode size={'1.6em'} />
          </Link>
        )}
        {website && (
          <Link target={'_blank'} href={website} color={'gray.400'} _hover={{ color: 'green.500' }}>
            <FiLink size={'1.6em'} />
          </Link>
        )}
      </Flex>
      <Flex flexDir={'column'} mt={'25px'}>
        <Text my={'10px'} fontWeight={'600'} color={'secondary'}>{title}</Text>
        <Text fontSize={'16px'} color={'whiteAlpha.800'}>{description}</Text>
      </Flex>
    </Flex>
  );
};
export default ProjectCard;
