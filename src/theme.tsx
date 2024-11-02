// import { extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import { switchAnatomy } from "@chakra-ui/anatomy";
// import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// const { definePartsStyle, defineMultiStyleConfig } =
//   createMultiStyleConfigHelpers(switchAnatomy.keys);

// const baseStyle = definePartsStyle({
//   thumb: {
//     bg: "gray.100",
//   },
//   track: {
//     bg: "gray.300",
//     _checked: {
//       bg: "ui.main",
//     },
//   },
// });

// const switchTheme = defineMultiStyleConfig({ baseStyle });

const disabledStyles = {
  _disabled: {
    backgroundColor: "ui.main",
  },
};

const theme = {
  fonts: {
    body: `'Raleway', sans-serif`,
    heading: `'Raleway', sans-serif`,
  },
  colors: {
    ui: {
      main: "#33C3F0",
      secondary: "#EDF2F7",
      success: "#48BB78",
      danger: "#E53E3E",
      light: "#FAFAFA",
      dark: "#222",
      darkSlate: "#252D3D",
      dim: "#A0AEC0",
      black: "#000",
      white: "#fff",
    },
  },
  components: {
    Button: {
      baseStyle: {
        height: "38px",
        lineHeight: "38px",
        border: "1px",
        borderRadius: "4px",
        fontSize: "11px",
        fontWeight: "bold",
        color: "#555",
        borderColor: "#bbb",
        textTransform: "uppercase",
        backgroundColor: "ui.white",
        _hover: {
          backgroundColor: "transparent",
          color: "#333",
          outline: 0,
          borderColor: "#888",
        },
        _disabled: {
          ...disabledStyles,
          _hover: {
            ...disabledStyles,
          },
        },
      },
      variants: {
        primary: {
          backgroundColor: "ui.main",
          color: "#FFF",
          borderColor: "ui.main",
          fontSize: "14px",
          fontWeight: "900",
          _hover: {
            backgroundColor: "#1EAEDB",
            color: "#FFF",
            borderColor: "#1EAEDB",
          },
          _disabled: {
            ...disabledStyles,
            _hover: {
              ...disabledStyles,
            },
          },
        },
        outline: {
          backgroundColor: "transparent",
          color: "ui.dark",
          borderColor: "ui.dark",
          fontSize: "14px",
          fontWeight: "900",
          border: "1px",
          borderRadius: "4px",
        },
        danger: {
          backgroundColor: "ui.danger",
          color: "ui.light",
          _hover: {
            backgroundColor: "#E32727",
          },
        },
      },
    },
    Tabs: {
      variants: {
        enclosed: {
          tab: {
            _selected: {
              color: "ui.main",
            },
          },
        },
      },
    },
  },
};

export default theme;
