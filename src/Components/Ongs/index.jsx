import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Stack,
  Image,
  Text,
  Divider,
  Icon,
  Heading,
  Highlight,
} from "@chakra-ui/react";
import dataOngs from "./ongs.json";
import { MdRestaurant } from "react-icons/md";
import { GiSittingDog, GiSchoolBag } from "react-icons/gi";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { BsCupHotFill } from "react-icons/bs";
import { FaTruckMedical } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

const Ongs = () => {
  const iconMap = {
    MdRestaurant: MdRestaurant,
    GiSittingDog: GiSittingDog,
    GiSchoolBag: GiSchoolBag,
    RiSurgicalMaskFill: RiSurgicalMaskFill,
    BsCupHotFill: BsCupHotFill,
    FaTruckMedical: FaTruckMedical,

    // Agrega más íconos según sea necesario
  };

  return (
    <Stack align='center' position='relative' id='ongs'>
      <Divider
        borderColor='naranja'
        position='absolute'
        w='52%'
        top='13.5em'
        right={0}
      />
      <Stack
        paddingTop='10em'
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
          draggable={false}
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
                <Image src={ong.corazon} w='400px' objectFit='contain' />
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
              <Stack
                position='absolute'
                bottom={0}
                borderRadius='full'
                bgColor='naranja'
                right='2em'
                padding='15px'
              >
                <Icon as={iconMap[ong.icon]} color='blanco' fontSize='45px' />
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <Stack h='4em' bgColor='azul' w='100%' position='absolute' bottom='41em'>
        <Image />
      </Stack>
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
          <Heading as='h3' fontSize='7em' color='white' fontWeight={500}>
            $1.502.026,65
          </Heading>
        </Stack>
        <Stack w='100%' maxW='1200px'>
          <Text color='white' fontSize='xl'>
            Actualizado el 15/05
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Ongs;
