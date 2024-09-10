import { createTheme } from '@mui/material/styles';

// Define your custom theme with breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      custom1: 1500, // Custom breakpoint example
      custom2: 1000, // Another custom breakpoint example
    },
  },
  // Other theme customizations can go here
});

export default theme;