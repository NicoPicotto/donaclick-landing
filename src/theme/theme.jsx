import { extendTheme } from "@chakra-ui/react";

const colors = {
  negro: "#0e1111",
  blanco: "#F5F7F8",
  azul: "#2E3192",
  naranja: "#FF7E00",
  fondo: "#F5F7F8",
};

const fonts = {
  body: `'Noto Sans TC Variable', sans-serif`,
  heading: `'Paytone One', sans-serif`,
};

const Button = {
  baseStyle: {
    fontWeight: "regular",
  },
  // Variaciones de estilos por prop `variant`
  variants: {
    solid: {
      bg: colors.naranja,
      width: "fit-content",
      color: colors.blanco,
      fontWeight: "bold",
      _hover: {
        bg: "#d46900",
      },
    },
    outline: {
      border: "2px solid",
      width: "fit-content",
      borderColor: colors.azul,
      color: colors.azul,
      _hover: {
        bg: colors.azul,
        color: colors.blanco,
      },
    },
    ghost: {
      color: colors.azul,
      width: "fit-content",
      _hover: {
        bg: colors.azul,
        color: colors.blanco,
      },
    },
    link: {
      color: colors.blanco,
      width: "fit-content",
      _hover: {
        textDecoration: "underline",
        textUnderlineOffset: "2px",
      },
    },
  },
};

const styles = {
  global: {
    "html, body": {
      backgroundColor: colors.fondo,
      color: colors.negro,
      fontSize: "16px",
    },
  },
};

const theme = extendTheme({ colors, fonts, styles, components: { Button } });

export default theme;
