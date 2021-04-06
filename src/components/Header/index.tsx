import { Flex, Image } from '@chakra-ui/react';
// import { FiChevronLeft } from 'react-icons/fi';

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justify="center"
      // position="relative"
    >
      {/* <Flex position="absolute" left={0} top={0} h="20" align="center">
        <Icon as={FiChevronLeft} color="gray.900" />
      </Flex> */}
      <Image src="logo.svg" alt="Logo Clocker" />
    </Flex>
  );
}
