import { Stack, Button, Text, Divider, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <Stack
      bgColor='azul'
      paddingInline='1em'
      paddingBlock='2em'
      align='center'
      justify='space-between'
      gap='30px'
    >
      <Stack
        maxW='1200px'
        w='100%'
        justify='space-between'
        direction={{ base: "column", md: "row" }}
        gap={{ base: "20px", md: "0px" }}
        paddingTop='1em'
        align='end'
        h='100%'
      >
        <Stack justify='space-between' w='100%' h='100%' gap='20px'>
          <Image src='/assets/Navbar/logo.png' w='175px' alt='Logo DonaClick' />
          <Stack gap='20px' justify='end'>
            <Button as={Link} variant='link' leftIcon={<IoLogoWhatsapp />}>
              <Text color='blanco' fontSize='sm' fontWeight='bolder'>
                358-123456789
              </Text>
            </Button>
            <Button as={Link} variant='link' leftIcon={<IoMail />}>
              <Text color='blanco' fontSize='sm' fontWeight='bolder'>
                info@donaclick.com.ar
              </Text>
            </Button>
            <Button as={Link} variant='link' leftIcon={<IoLocationSharp />}>
              <Text color='blanco' fontSize='sm' fontWeight='bolder'>
                Calle Falsa 123, Springfield, United States
              </Text>
            </Button>
          </Stack>
        </Stack>
        <Stack gap='20px' align={{ base: "start", md: "end" }} w='100%'>
          <Button as='a' href='#about' variant='link'>
            <Text color='blanco' fontWeight='bolder'>
              ¿De qué se trata?
            </Text>
          </Button>
          <Button as='a' href='#numeros' variant='link'>
            <Text color='blanco' fontWeight='bolder'>
              Resultados
            </Text>
          </Button>
          <Button as='a' href='#ongs' variant='link'>
            <Text color='blanco' fontWeight='bolder'>
              ONG&apos;s Asociadas
            </Text>
          </Button>
        </Stack>
      </Stack>
      <Stack
        maxW='1200px'
        w='100%'
        justify='space-between'
        direction={{ base: "column", md: "row" }}
        h='100%'
        borderTop='1px solid white'
        paddingTop='1em'
      >
        <Text fontSize='sm' color='blanco' fontWeight='bolder'>
          DonáClick Ⓡ Todos los derechos reservados.
        </Text>
        <Button as='a' href='#' variant='link'>
          <Text color='blanco' fontSize='sm' fontWeight='bolder'>
            Política de privacidad
          </Text>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Footer;
