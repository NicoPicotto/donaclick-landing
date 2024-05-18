import {
  Heading,
  Stack,
  Text,
  Link,
  Image,
  HStack,
  Box,
  Button,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Stack align='center' paddingInline='1em' id="about">
      <Stack
        paddingBlock='10em'
        maxW='1200px'
        align='center'
        justify='center'
        paddingInline='1em'
      >
        <Heading
          as='h2'
          size='xl'
          textAlign='center'
          fontWeight={400}
          color='azul'
          maxW='56ch'
          lineHeight={1.4}
        >
          Un programa que te permite aportar valor a una ONG donando el{" "}
          <Text
            as='span'
            bgColor='naranja'
            color='blanco'
            paddingInline='10px'
            borderRadius={10}
          >
            3%
          </Text>{" "}
          de tus compras en{" "}
          <Link
            color='naranja'
            as='a'
            href='https://www.todoairelibre.com.ar'
            target='_blank'
          >
            www.todoairelibre.com.ar
          </Link>{" "}
          sin ningún costo extra.
        </Heading>
      </Stack>
      <Box
        maxW='1200px'
        position='relative'
        w='100%'
        marginBottom='5em'
        bgImage="url('assets/About/about-pic-2.png')"
        bgPosition='center'
        bgSize='cover'
        bgRepeat='no-repeat'
        borderRadius='60px'
        textAlign='center'
        h='600px'
      >
        <Stack
          position='absolute'
          w='100%'
          h='100%'
          bgColor='rgba(0,0,0,0.5)'
          overflow='hidden'
          zIndex={1}
          borderRadius='60px'
        ></Stack>
        <Image
          src='assets/About/smile.png'
          position='absolute'
          left="1em"
          bottom='-3em'
          w='100px'
          zIndex={2}
        />
        <Image
          src='assets/About/iso.png'
          position='absolute'
          right="2em"
          top='-5em'
          w='100px'
          zIndex={2}
        />
        <Stack
          align='center'
          zIndex={2}
          position='relative'
          h='100%'
          justify='center'
        >
          <HStack spacing={1} align='center' position='absolute' top={10}>
            <Text color='white' fontSize='lg' fontWeight='bold'>
              Un proyecto de
            </Text>
            <Image
              src='assets/About/todoairelibre.png'
              w='130px'
              alt='Todo Aire Libre'
              pb={4}
            />
          </HStack>
          <Heading as='h3' size='4xl' color='white' mb='15px'>
            CLICKEÁ CON IMPACTO
          </Heading>
          <Button fontWeight='bolder' size='lg' variant='outline'>
            APORTÁ VALOR
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default About;
