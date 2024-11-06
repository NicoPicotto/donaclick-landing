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
   useMediaQuery,
} from "@chakra-ui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
   const highlightRef = useRef(null);
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

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
      <Stack align='center' paddingInline='2em' id='about' paddingBottom='10em'>
         <Stack
            paddingTop={isMobile ? "4rem" : "8rem"}
            paddingBottom='6rem'
            maxW='1440px'
            align='center'
            justify='center'
            paddingInline='1em'
         >
            <Heading
               as='h2'
               size={isMobile ? "sm" : "xl"}
               textAlign='center'
               fontFamily='GothamRoundedBook'
               fontWeight={400}
               color='negro'
               maxW='40ch'
               lineHeight={1.4}
            >
               Un programa con <b>corazón</b>, que te permite{" "}
               <b>aportar valor a una ONG</b> donando el{" "}
               <Text
                  as='span'
                  bgColor='naranja'
                  color='blanco'
                  paddingInline={{ base: "5px", md: "10px" }}
                  paddingBlock={{ base: "3px", md: "5px" }}
                  borderRadius={20}
               >
                  3%
               </Text>{" "}
               de tus compras en{" "}
               <Link
                  color='naranja'
                  as='a'
                  fontWeight='bolder'
                  href='https://www.todoairelibre.com.ar'
                  target='_blank'
                  _hover={{ textDecoration: "none" }}
               >
                  www.todoairelibre.com.ar
               </Link>{" "}
               <Box position='relative' display='inline-block'>
                  <Text
                     as='span'
                     fontWeight='bolder'
                     ref={highlightRef}
                     position='relative'
                     zIndex={1}
                  >
                     sin costo extra.
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
            maxW='1440px'
            position='relative'
            w='100%'
            marginBottom={isMobile ? "0" : "5rem"}
            bgImage="url('assets/About/about-pic-2.png')"
            bgPosition='center'
            bgSize='cover'
            bgRepeat='no-repeat'
            borderRadius='60px'
            textAlign='center'
            h={isMobile ? "350px" : "600px"}
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
                  <Text color='white' fontSize={isMobile ? "sm" : "lg"} fontWeight='bold'>
                     Un proyecto de
                  </Text>
                  <Image
                     src='assets/About/todoairelibre.png'
                     w={isMobile ? "100px" : "130px"}
                     alt='Logo Todo Aire Libre'
                     pb={4}
                  />
               </HStack>
               <Heading
                  as='h3'
                  size={isMobile ? "2xl" : "4xl"}
                  lineHeight={1}
                  color='white'
                  mb='15px'
               >
                  CLICKEÁ CON IMPACTO
               </Heading>
               <Link
                  as='a'
                  href='https://www.todoairelibre.com.ar'
                  target='_blank'
               >
                  <Button fontWeight='bolder' size={isMobile ? "md" : "lg"} variant='outline'>
                     COMPRÁ Y DONÁ
                  </Button>
               </Link>
            </Stack>
         </Box>
      </Stack>
   );
};

export default About;
