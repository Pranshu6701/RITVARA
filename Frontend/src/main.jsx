import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import theme from './theme.jsx'; // Import your custom theme

createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
