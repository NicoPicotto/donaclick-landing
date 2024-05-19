import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/source-serif-4";

const colors = {
  negro: "#0e1111",
  blanco: "#F5F7F8",
  azul: "#2E3192",
  naranja: "#FF7E00",
  gris: "#606060",
  fondo: "#F5F7F8",
};

const fonts = {
  heading: `'Source Serif 4 Variable', serif`,
};

const Button = {
  baseStyle: {
    fontWeight: "regular",
    rounded: 10,
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
      borderColor: colors.blanco,
      color: colors.blanco,
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
    "@font-face": {
      fontFamily: "GothamRoundedBook",
      src: "url('/assets/fonts/Gotham-Rounded-Book.otf') format('opentype')",
      fontStyle: "normal",
    },
    "html, body": {
      backgroundColor: colors.fondo,
      color: colors.negro,
      fontSize: "16px",
      scrollBehavior: "smooth",
      fontFamily: "GothamRoundedBook, sans-serif",
    },
  },
};

const theme = extendTheme({ colors, fonts, styles, components: { Button } });

export default theme;
