import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Stack, Text, Heading, Highlight, Tag } from "@chakra-ui/react";
gsap.registerPlugin(ScrollTrigger);

const Numeros = () => {
  const counterRef = useRef(null);

  useGSAP(() => {
    const counter = { value: 0 };
    gsap.to(counter, {
      value: 1502026,
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
    <Stack bgColor='azul' w='100%' align='center' pb='2em'>
      <Stack
        maxW='1200px'
        justify='center'
        align='center'
        h='600px'
        w='100%'
        position='relative'
        id='numeros'
      >
        <Text color='white' fontSize='2xl' fontWeight='bold'>
          <Highlight query='donando' styles={{ color: "naranja" }}>
            Llevamos donando
          </Highlight>
        </Text>
        <Stack direction='row' align='center' pb='1em'>
          <Heading as='h3' fontSize='7em' color='white' fontWeight={500}>
            $
          </Heading>
          <Heading
            ref={counterRef}
            as='h3'
            fontSize='7em'
            color='white'
            fontWeight={500}
          >
            0
          </Heading>
        </Stack>
        <Tag variant='outline'>Actualizado al 15/05</Tag>
      </Stack>
    </Stack>
  );
};

export default Numeros;
