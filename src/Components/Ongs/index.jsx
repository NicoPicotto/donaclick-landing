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
   Button,
   useMediaQuery,
} from "@chakra-ui/react";
import dataOngs from "./ongs.json";
import { MdRestaurant } from "react-icons/md";
import { GiSittingDog, GiSchoolBag } from "react-icons/gi";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { BsCupHotFill } from "react-icons/bs";
import { FaTruckMedical } from "react-icons/fa6";
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

const Ongs = () => {
   const imageRefs = useRef([]);
   const iconsRefs = useRef([]);
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   const handleSlideChangeStart = (swiper) => {
      const currentIndex = swiper.realIndex;
      if (imageRefs.current[currentIndex]) {
         gsap.fromTo(
            imageRefs.current[currentIndex],
            { rotateY: 0 },
            { rotateY: 360, duration: 1 } // Ajusta la duración según sea necesario
         );
         gsap.fromTo(
            iconsRefs.current[currentIndex],
            { rotateY: 0 },
            { rotateY: -360, duration: 1 } // Ajusta la duración según sea necesario
         );
      }
   };

   const handleSlideChangeEnd = (swiper) => {
      imageRefs.current.forEach((image) => {
         if (image) {
            gsap.set(image, { rotateY: 0 });
         }
      });
      iconsRefs.current.forEach((image) => {
         if (image) {
            gsap.set(image, { rotateY: 0 });
         }
      });
   };

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
         <Divider
            borderColor='naranja'
            position='absolute'
            w='52%'
            top='13.5em'
            borderWidth={1}
            right={0}
            display={{ base: "none", md: "block" }}
         />
         <Stack
            paddingTop={isMobile ? "2em" : "10em"}
            marginBottom={isMobile ? "5em" : "0em"}
            maxW='1440px'
            align='center'
            justify='center'
            paddingInline='2em'
            w='100%'
            position='relative'
         >
            <Swiper
               effect={"fade"}
               modules={[EffectFade, Navigation, Autoplay]}
               className='mySwiper'
               draggable={false}
               navigation={{
                  // Habilitar navegación
                  nextEl: ".custom-swiper-button-next",
                  prevEl: ".custom-swiper-button-prev",
               }}
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
                        direction={{ base: "column", md: "row" }}
                        justify={{ base: "center", md: "space-between" }}
                        h='100%'
                        align={{ base: "center", md: "flex-start" }}
                        gap={{ base: "20px", md: "inherit" }}
                     >
                        <Image
                           ref={(el) => (imageRefs.current[index] = el)}
                           src={ong.corazon}
                           w={{ base: "100%", md: "350px" }}
                           marginLeft={isMobile ? 0 : "20px"}
                           objectFit='contain'
                           alt={`Imagen de ${ong.label}`}
                        />
                        <Stack
                           position='absolute'
                           borderRadius='full'
                           bgColor='naranja'
                           left='0.75em'
                           padding='15px'
                           zIndex={100}
                           ref={(el) => (iconsRefs.current[index] = el)}
                           display={{ base: "none", md: "flex" }}
                        >
                           <Icon
                              as={iconMap[ong.icon]}
                              color='blanco'
                              fontSize='30px'
                           />
                        </Stack>
                        <Image
                           src='assets/Ongs/hand-big.png'
                           position='absolute'
                           bottom='-12rem'
                           left={"0px"}
                           h='500px'
                           zIndex={10}
                           opacity={0.5}
                           blendMode='difference'
                           alt='Isologo de DonaClick'
                           display={{ base: "none", md: "block" }}
                        />
                        <Stack w={{ base: "100%", md: "50%" }} gap={5}>
                           <Stack
                              direction={isMobile ? "column" : "row"}
                              align={isMobile ? "flex-start" : "center"}
                              gap={isMobile && 5}
                           >
                              <Stack
                                 borderRadius='full'
                                 bgColor='naranja'
                                 w='40px'
                                 h='40px'
                                 align='center'
                                 justify='center'
                                 display={{ base: "flex", md: "none" }}
                              >
                                 <Icon
                                    as={iconMap[ong.icon]}
                                    color='blanco'
                                    fontSize='20px'
                                    aspectRatio={1}
                                 />
                              </Stack>

                              <Text
                                 color='azul'
                                 fontWeight={600}
                                 mr='0.5rem'
                                 lineHeight={isMobile ? "1.2" : "1.4"}
                                 fontSize={isMobile ? "xl" : "4xl"}
                              >
                                 {isMobile ? ong.label : "ONGs Asociadas"}
                              </Text>
                              <Stack direction='row'>
                                 <IconButton
                                    className='custom-swiper-button-prev'
                                    aria-label='Previous'
                                    icon={<FaAngleLeft />}
                                    color='azul'
                                    size='sm'
                                    variant='ghost'
                                    outline='1px solid #2E3192'
                                    _hover={{
                                       bgColor: "azul",
                                       color: "blanco",
                                    }}
                                 />
                                 <IconButton
                                    className='custom-swiper-button-next'
                                    aria-label='Next'
                                    icon={<FaAngleRight />}
                                    color='azul'
                                    size='sm'
                                    variant='ghost'
                                    outline='1px solid #2E3192'
                                    _hover={{
                                       bgColor: "azul",
                                       color: "blanco",
                                    }}
                                 />
                              </Stack>
                           </Stack>

                           <Image
                              h='120px'
                              maxW='200px'
                              w='fit-content'
                              objectFit='contain'
                              alt={`Logo de ${ong.label}`}
                              src={ong.path}
                              display={{ base: "none", md: "block" }}
                           />
                           <Text
                              color='gris'
                              fontWeight={300}
                              textAlign='justify'
                           >
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
                                    _hover={{
                                       color: "blanco",
                                       bgColor: "naranja",
                                    }}
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
                                    _hover={{
                                       color: "blanco",
                                       bgColor: "naranja",
                                    }}
                                    icon={<BiLogoInstagramAlt />}
                                    color='naranja'
                                 />
                              )}
                              <Button
                                 paddingBlock={0}
                                 border='1.7px solid #FF7E00'
                                 size='sm'
                                 as='a'
                                 href={ong.url}
                                 target='_blank'
                                 bgColor='blanco'
                                 _hover={{
                                    color: "blanco",
                                    bgColor: "naranja",
                                 }}
                                 color='naranja'
                              >
                                 Comprá y doná a esta ONG
                              </Button>
                           </Stack>
                        </Stack>
                     </Stack>
                  </SwiperSlide>
               ))}
            </Swiper>
         </Stack>
      </Stack>
   );
};

export default Ongs;
