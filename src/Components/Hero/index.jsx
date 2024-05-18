import { Stack, AspectRatio } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Stack>
      <AspectRatio ratio={16 / 9}>
        <iframe
          title='naruto'
          src='https://www.youtube.com/embed/L3RmBB4L5to?si=jcVe8nhDW-JdGrnK'
          allowFullScreen
        />
      </AspectRatio>
    </Stack>
  );
};

export default Hero;
