import React, { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import GlobalStyles from '../theme/GlobalStyles';
import Navigation from '../components/Navigation/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children, title }) => {
  useLayoutEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: 'ease-out-quad',
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {title ? `${title} | Freelance Concept` : `Freelance Concept`}
        </title>
        <meta name="description" content="Agencja WWW" />
        <html lang="pl" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
