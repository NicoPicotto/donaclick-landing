// Import Swiper React components
import { useRef } from "react";
import { Stack, Text, Heading, Highlight, Tag, useMediaQuery } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Results = () => {
   const counterRef = useRef(null);
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   useGSAP(() => {
      const counter = { value: 0 };
      gsap.to(counter, {
         value: 4789257,
         duration: 3,
         ease: "power2.out",
         onUpdate: () => {
            counterRef.current.innerHTML = Math.floor(
               counter.value
            ).toLocaleString();
         },
         scrollTrigger: {
            trigger: counterRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
         },
      });
   });

   return (
      <Stack
         bgColor='azul'
         w='100%'
         align='center'
         pb='2em'
         paddingBlock={isMobile && "5rem"}
         id='numeros'
         bgImage="url('assets/Results/hand.svg')"
         bgSize='6rem'
      >
         <Stack
            maxW='1440px'
            justify='center'
            align='center'
            h={isMobile ? "100%" : "100dvh"}
            w='100%'
            position='relative'
            gap={isMobile && 0}
         >
            <Text color='white' fontSize='2xl' fontWeight='bold' lineHeight={isMobile && 1}>
               <Highlight query='donando' styles={{ color: "naranja" }}>
                  Llevamos donando
               </Highlight>
            </Text>
            <Stack direction='row' align='center' pb='1em'>
               <Heading
                  as='h3'
                  fontSize={{ base: "4em", md: "7em" }}
                  color='white'
                  fontWeight={500}
               >
                  $
               </Heading>
               <Heading
                  ref={counterRef}
                  as='h3'
                  fontSize={{ base: "4em", md: "7em" }}
                  color='white'
                  fontWeight={500}
               >
                  0
               </Heading>
            </Stack>
            <Tag variant='outline'>Actualizado al 01/11</Tag>
         </Stack>
      </Stack>
   );
};

export default Results;
