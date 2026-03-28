import { Box } from '@chakra-ui/react';

const Separator = () => {
  return (
    <Box
      className="separator"
      h={'2px'}
      backdropFilter={'blur(5px)'}
      bgColor={'#262C4D'}
      mt={'0vh'}
    />
  );
};
export default Separator;
