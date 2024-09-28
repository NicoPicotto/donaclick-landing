import {
   Stack,
   Input,
   Button,
   FormLabel,
   FormControl,
   Heading,
   Textarea,
   Select,
} from "@chakra-ui/react";

const Contact = () => {
   const onSubmit = (e) => {
      e.preventDefault();
      console.log("Formulario enviado");
   };

   return (
      <Stack align='center' paddingInline='1em' id='contacto'>
         <Stack
            paddingBlock='10em'
            maxW='1440px'
            align='center'
            justify='center'
            paddingInline='1em'
            w='100%'
         >
            <Heading
               pb={10}
               color='azul'
               textDecor='underline'
               textDecorationThickness={2}
               textUnderlineOffset={4}
               textDecorationColor='naranja'
            >
               Contactate con nosotros
            </Heading>
            <FormControl
               w='100%'
               as='form'
               display='flex'
               justifyContent='center'
               flexDir='column'
               gap={4}
               onSubmit={onSubmit}
            >
               <Stack
                  direction={{ base: "column", md: "row" }}
                  align='center'
                  w='100%'
                  justify='center'
               >
                  <Stack w='100%' gap={0}>
                     <FormLabel
                        fontWeight='bold'
                        fontSize='sm'
                        htmlFor='name'
                        color='azul'
                     >
                        Nombre
                     </FormLabel>
                     <Input
                        type='text'
                        id='name'
                        placeholder='Juan Perez'
                        borderColor='azul'
                        borderRadius={10}
                        p={2}
                        focusBorderColor='naranja'
                        color='azul'
                     />
                  </Stack>
                  <Stack w='100%' gap={0}>
                     <FormLabel
                        fontWeight='bold'
                        fontSize='sm'
                        htmlFor='email'
                        color='azul'
                     >
                        Email
                     </FormLabel>
                     <Input
                        type='email'
                        id='email'
                        placeholder='juanperez@gmail.com'
                        borderColor='azul'
                        borderRadius={10}
                        p={2}
                        focusBorderColor='naranja'
                        color='azul'
                     />
                  </Stack>
                  <Stack w='100%' gap={0}>
                     <FormLabel
                        fontWeight='bold'
                        fontSize='sm'
                        htmlFor='motive'
                        color='azul'
                     >
                        Motivo
                     </FormLabel>
                     <Select
                        id='motivo'
                        placeholder='Seleccioná una opción'
                        borderColor='azul'
                        borderRadius={10}
                        focusBorderColor='naranja'
                        color='azul'
                     >
                        <option value='Administro una ONG y me gustaría sumarla a DonaClick'>
                           Administro una ONG y me gustaría sumarla a DonaClick
                        </option>
                        <option value='Tengo una tienda online y me gustaría sumar el programa'>
                           Tengo una tienda online y me gustaría sumar el
                           programa
                        </option>
                        <option value='Otro motivo'>Otro motivo</option>
                     </Select>
                  </Stack>
               </Stack>
               <Stack w='100%' justify='center' gap={0}>
                  <FormLabel
                     fontWeight='bold'
                     fontSize='sm'
                     htmlFor='message'
                     color='azul'
                  >
                     Mensaje
                  </FormLabel>
                  <Textarea
                     rows={6}
                     borderColor='azul'
                     borderRadius={10}
                     focusBorderColor='naranja'
                     p={2}
                     color='azul'
                     placeholder='¡Hola DonáClick! Quería saber más sobre...'
                  ></Textarea>
               </Stack>
               <Button type='submit'>Enviar mensaje</Button>
            </FormControl>
         </Stack>
      </Stack>
   );
};

export default Contact;
