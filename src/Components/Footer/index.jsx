import { Stack, Button, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Stack bgColor='naranja' padding='1em' align='center'>
      <Stack
        maxW='1200px'
        w='100%'
        justify='space-between'
        direction='row'
        align='center'
      >
        <Text fontSize='sm' color='blanco' fontWeight='bolder'>
          DonáClick Ⓡ
        </Text>
        <Button as={Link} variant="link">
          <Text fontSize='sm' color='blanco' fontWeight='bolder'>
            info@donaclick.com.ar
          </Text>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Footer;
