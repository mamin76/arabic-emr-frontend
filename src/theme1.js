import { createTheme } from "@mui/material/styles";
import { arSD } from "@mui/material/locale";

const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily: "Tahoma, sans-serif",
    },
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
    },
  },
  arSD // دعم اللغة العربية RTL
);

export default theme;
