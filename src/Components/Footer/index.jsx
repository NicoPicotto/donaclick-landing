import { Stack, Image, Link } from "@chakra-ui/react";

const Footer = () => {
   return (
      <Stack
         bgColor='azul'
         paddingInline='1em'
         paddingBlock='2em'
         align='center'
         justify='center'
         gap='30px'
      >
         <Stack
            maxW='1440px'
            w='100%'
            justify='center'
            gap='2rem'
            paddingTop='1em'
            align='center'
            h='100%'
            direction='row'
         >
            <Image
               src='/assets/Navbar/logo.png'
               w='175px'
               alt='Logo DonaClick'
            />
            <Link
               as='a'
               href='https://www.todoairelibre.com.ar'
               target='_blank'
            >
               <Image
                  src='/assets/About/todoairelibre.png'
                  w='150px'
                  alt='Logo DonaClick'
               />
            </Link>
         </Stack>
      </Stack>
   );
};

export default Footer;
