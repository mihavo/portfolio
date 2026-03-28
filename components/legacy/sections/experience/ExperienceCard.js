import { Flex, Link, Text } from '@chakra-ui/react';
import { FiLink } from 'react-icons/fi';
const ExperienceCard = ({ description, time_range, title, link }) => {
  return (
    <Flex
      color={'#7384A6'}
      p={'20px'}
      maxW={'60vw'}
      mt={'10px'}
      transition={'all .2s ease-in-out'}
      background={'rgba(79, 97, 131, 0.05)'}
      _hover={{
        background: 'rgba(79, 97, 131, 0.10)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'gray.400',
      }}
      borderRadius={'6px'}
      backdropFilter={'blur(0px)'}
      border={'1px solid rgba(255, 255, 255, 0.1)'}
      boxShadow={'0 4px 30px rgba(0, 0, 0, 0.5)'}
    >
      <Flex flexDir={'row'} gap={'4vw'} justifyContent={'space-between'}>
        <Text fontSize={'16px'} color={'gray.400'}>{time_range}</Text>
        <Flex flexDir={'column'}>
          <Flex flexDir={'row'} gap={2} alignItems={'center'}>
            <Text fontSize={'18px'}>{title}</Text>
            <Link
              href={link}
              target="_blank"
              _hover={{ color: 'blue.500', transform: 'translateY(-4px)' }}
              p={'8px'}
            >
              <FiLink />
            </Link>
          </Flex>
          <Flex mt={'20px'} maxW={'30vw'}>{description}</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ExperienceCard;
