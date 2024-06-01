import { Stack, AspectRatio, IconButton } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import videoHero from "/assets/Hero/video.mp4";
import portada from "/assets/Hero/portada.png";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Stack id='hero' position='relative'>
      <AspectRatio ratio={16 / 9}>
        <video
          ref={videoRef}
          src={videoHero}
          autoPlay
          muted
          controls={false}
          loop={false}
          playsInline
          poster={portada}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
