import { createTheme } from "@mui/material/styles";
import { arSD } from "@mui/material/locale";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@mui/styles";

// إعداد RTL
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createTheme(
  {
    direction: "rtl",
    palette: {
      mode: "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#f50057",
      },
    },
    typography: {
      fontFamily: "Tajawal, sans-serif",
    },
  },
  arSD
);

export default theme;
