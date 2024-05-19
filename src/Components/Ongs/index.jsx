// Import Swiper React components
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Stack,
  Image,
  Text,
  Divider,
  Icon,
  IconButton,
  Heading,
  Highlight,
  Tag,
} from "@chakra-ui/react";
import dataOngs from "./ongs.json";
import { MdRestaurant } from "react-icons/md";
import { GiSittingDog, GiSchoolBag } from "react-icons/gi";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { BsCupHotFill } from "react-icons/bs";
import { FaTruckMedical } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import { BiLogoInstagramAlt, BiWorld } from "react-icons/bi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import Numeros from "../Numeros";

const Ongs = () => {
  const imageRefs = useRef([]);

  const handleSlideChangeStart = (swiper) => {
    const currentIndex = swiper.realIndex;
    if (imageRefs.current[currentIndex]) {
      gsap.fromTo(
        imageRefs.current[currentIndex],
        { rotateY: 0 },
        { rotateY: 360, duration: 1 } // Ajusta la duración según sea necesario
      );
    }
  };

  const handleSlideChangeEnd = (swiper) => {
    imageRefs.current.forEach((image) => {
      if (image) {
        gsap.set(image, { rotateY: 0 });
      }
    });
  };

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

  const iconMap = {
    MdRestaurant: MdRestaurant,
    GiSittingDog: GiSittingDog,
    GiSchoolBag: GiSchoolBag,
    RiSurgicalMaskFill: RiSurgicalMaskFill,
    BsCupHotFill: BsCupHotFill,
    FaTruckMedical: FaTruckMedical,
  };

  return (
    <Stack align='center' position='relative' id='ongs'>
      <Image
        src='assets/Ongs/hand-big.png'
        position='absolute'
        bottom={-20}
        left={0}
        w='50%'
        zIndex={1}
        opacity={0.05}
        blendMode='difference'
      />
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
          onSlideChangeTransitionStart={handleSlideChangeStart}
          onSlideChangeTransitionEnd={handleSlideChangeEnd}
        >
          {dataOngs.map((ong, index) => (
            <SwiperSlide key={ong.slug}>
              <Stack
                direction='row'
                justify='space-between'
                h='100%'
                align='flex-start'
              >
                <Image
                  ref={(el) => (imageRefs.current[index] = el)}
                  src={ong.corazon}
                  w='400px'
                  objectFit='contain'
                />
                <Stack w='50%' gap={5}>
                  <Text color='azul' fontWeight={600} fontSize='4xl'>
                    {ong.label}
                  </Text>
                  <Image
                    h='120px'
                    maxW='200px'
                    w='fit-content'
                    objectFit='contain'
                    src={ong.path}
                  />
                  <Text color='gris' fontWeight={300} textAlign='justify'>
                    {ong.description}
                  </Text>
                  <Stack direction='row' gap={2}>
                    {ong.web && (
                      <IconButton
                        p={0}
                        fontSize={25}
                        border='1.7px solid #FF7E00'
                        size='sm'
                        as='a'
                        href={ong.web}
                        target='_blank'
                        bgColor='blanco'
                        _hover={{ color: "blanco", bgColor: "naranja" }}
                        icon={<BiWorld />}
                        color='naranja'
                      />
                    )}
                    {ong.ig && (
                      <IconButton
                        p={0}
                        fontSize={25}
                        border='1.7px solid #FF7E00'
                        size='sm'
                        as='a'
                        href={ong.ig}
                        target='_blank'
                        bgColor='blanco'
                        _hover={{ color: "blanco", bgColor: "naranja" }}
                        icon={<BiLogoInstagramAlt />}
                        color='naranja'
                      />
                    )}
                  </Stack>
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
      <Stack
        h='4em'
        bgColor='azul'
        w='100%'
        position='absolute'
        bottom='38.5em'
      >
        <Image />
      </Stack>
      <Stack bgColor='azul' w='100%' align='center' pb='2em' id='numeros'>
        <Stack
          maxW='1200px'
          justify='center'
          align='center'
          h='600px'
          w='100%'
          position='relative'
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
    </Stack>
  );
};

export default Ongs;
