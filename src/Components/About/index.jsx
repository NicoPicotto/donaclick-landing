import { useRef, useEffect } from "react";
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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const highlightRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      highlightRef.current,
      { width: "0%" },
      {
        width: "100%",
        scrollTrigger: {
          trigger: highlightRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
        duration: 1,
        ease: "power2.out",
        background: "#FF7E00",
        immediateRender: false,
      }
    );
  });

  return (
    <Stack align='center' paddingInline='1em' id='about' paddingBottom="10em">
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
            _hover={{ textDecoration: "none" }}
          >
            www.todoairelibre.com.ar
          </Link>{" "}
          <Box position='relative' display='inline-block'>
            <Text as='span' ref={highlightRef} position='relative' zIndex={1}>
              sin ningún costo extra.
            </Text>
            <Box
              position='absolute'
              bottom='0'
              left='0'
              height='2px'
              width='0'
              backgroundColor='#FF7E00'
              ref={highlightRef}
            />
          </Box>
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
          left='1em'
          bottom='-3em'
          w={{ base: "80px", md: "100px" }}
          zIndex={2}
          atl='Smiley face'
        />
        <Image
          src='assets/About/iso.png'
          position='absolute'
          right='2em'
          top='-5em'
          w={{ base: "70px", md: "100px" }}
          zIndex={2}
          atl='Iso logo de DonaClick'
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
              alt='Logo Todo Aire Libre'
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
