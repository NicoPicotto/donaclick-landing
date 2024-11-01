import {
   Stack,
   AspectRatio,
   IconButton,
   useMediaQuery,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import videoHero from "/assets/Hero/video2.mp4";
import videoMobile from "/assets/Hero/video-mobile.mp4";
import portada from "/assets/Hero/portada.png";

const Hero = () => {
   const videoRef = useRef(null);
   const [isMuted, setIsMuted] = useState(true);
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   const handleToggleMute = () => {
      if (videoRef.current) {
         videoRef.current.muted = !videoRef.current.muted;
         setIsMuted(!isMuted);
      }
   };

   return (
      <Stack id='hero' position='relative' h='100dvh'>
         <AspectRatio ratio={isMobile ? 2 / 3 : 16 / 9}>
            <video
               ref={videoRef}
               src={isMobile ? videoMobile : videoHero}
               autoPlay
               muted
               controls={false}
               loop={true}
               playsInline
               poster={portada}
               style={{ width: "100%", height: "100dvh", objectFit: "cover" }}
            />
         </AspectRatio>
         <IconButton
            position='absolute'
            bottom='20px'
            right='20px'
            variant='ghost'
            color='blanco'
            aria-label='Toggle Mute'
            icon={
               isMuted ? (
                  <FaVolumeMute fontSize='25px' />
               ) : (
                  <FaVolumeUp fontSize='25px' />
               )
            }
            onClick={handleToggleMute}
         />
      </Stack>
   );
};

export default Hero;
