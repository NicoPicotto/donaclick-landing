import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Stack, Image, Heading, Text, Divider } from "@chakra-ui/react";
import dataOngs from "./ongs.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

const Ongs = () => {
  return (
    <Stack align='center' position='relative'>
      <Divider
        borderColor='naranja'
        position='absolute'
        w='52%'
        top='13.5em'
        right={0}
      />
      <Stack
        paddingBlock='10em'
        maxW='1200px'
        align='center'
        justify='center'
        paddingInline='1em'
        w='100%'
        position='relative'
      >
        <Stack position='absolute' top='10em' right='10em'></Stack>
        <Swiper
          effect={"fade"}
          modules={[EffectFade, Navigation, Autoplay]}
          className='mySwiper'
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {dataOngs.map((ong) => (
            <SwiperSlide key={ong.slug}>
              <Stack
                direction='row'
                justify='space-between'
                h='100%'
                align='flex-start'
              >
                <Image
                  src='assets/Ongs/cora-haciendo.png'
                  w='400px'
                  objectFit='contain'
                />
                <Stack w='50%' gap={2}>
                  <Text color='azul' fontWeight={600} fontSize='4xl'>
                    {ong.label}
                  </Text>
                  <Image w='200px' src={ong.path} />
                  <Text color='gris' fontWeight={300}>
                    {ong.description}
                  </Text>
                </Stack>
              </Stack>
              <Image
                src='assets/Ongs/icon-haciendo.png'
                position='absolute'
                bottom={0}
                right='2em'
                w='70px'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <Stack h='2em' bgColor='azul' w='100%' position='relative'>
        <Image />
      </Stack>
    </Stack>
  );
};

export default Ongs;
