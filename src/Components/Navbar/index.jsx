import {
  Stack,
  Image,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const MenuButtons = [
    { label: "¿De qué se trata?", link: "#nosotros" },
    { label: "ONG's Asociadas", link: "#ongs" },
    { label: "Transparencia", link: "#numeros" },
    { label: "Contacto", link: "#contacto" },
  ];

  return (
    <Stack
      bgColor='azul'
      align='center'
      position='sticky'
      top={0}
      zIndex={10}
      paddingInline='1em'
    >
      <Stack
        align='center'
        justify='space-between'
        maxW='1200px'
        paddingBlock='15px'
        direction='row'
        w='100%'
      >
        <Image src='/assets/Navbar/logo.png' w='175px' alt='Logo DonaClick' />
        <HStack gap={10} display={{ base: "none", md: "flex" }}>
          {MenuButtons.map((item) => (
            <Button key={item.link} variant='link' fontWeight='bolder'>
              {item.label}
            </Button>
          ))}
        </HStack>
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={<RiMenu3Line />}
          fontSize='2rem'
          onClick={onOpen}
          bgColor='transparent'
          color='blanco'
          _hover={{ bgColor: "transparent" }}
        />
      </Stack>
      <Drawer placement='right' size='full' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton fontSize='1rem' p='2em' color='white' />
          <DrawerBody bgColor='azul'>
            <Stack h='100%' justify='center' align='center' gap='3em'>
              {MenuButtons.map((item) => (
                <Button
                  w='100%'
                  key={item.link}
                  fontSize='1.5em'
                  variant='link'
                  color='blanco'
                  fontWeight='bolder'
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default Navbar;
