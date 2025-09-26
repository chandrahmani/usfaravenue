import { createTheme } from "@mui/material";


declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#1565c0" },   // Deep Blue
    secondary: { main: "#64b5f6" }, // Light Blue
    background: { default: "#f9fafc" },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
  },
});
