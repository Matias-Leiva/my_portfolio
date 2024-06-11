import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Root from './routes/root.jsx';
import ErrorPage from './views/ErrorPage/ErrorPage.jsx';
import Home from './views/Home/Home.jsx';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ContactMe from './views/ContactMe/ContactMe.jsx';
import "./assets/font-awesome/css/all.css";
import NoMatch from './views/NoMatch/NoMatch.jsx';
import Portfolio from './views/Portfolio/Portfolio.jsx';
import AboutMe from './views/About/AboutMe.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const theme = responsiveFontSizes(darkTheme)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "contact-me",
        element: <ContactMe />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: '*',
        element: <NoMatch />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
