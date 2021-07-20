import React, { useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import GlobalStyles from '../theme/GlobalStyles';
import Navigation from '../components/Navigation/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { graphql, useStaticQuery } from 'gatsby';
import Cookies from '../components/organisms/Cookies/Cookies';

gsap.registerPlugin(ScrollTrigger);

const StyledMain = styled.main`
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const Layout = ({ children, title, description }) => {
  const seo = useStaticQuery(query);
  const [canBeDisplayedCookie, setCanBeDisplayedCookie] = useState(false);

  useLayoutEffect(() => {
    setTimeout(() => {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-out-quad',
      });
    }, 100);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {title ? `${title} | Freelance Concept` : `Freelance Concept`}
        </title>
        <meta
          name="description"
          content={
            description ? description : seo.datoCmsMainSeo.metaDescription
          }
        />
        <meta property="og:image" content={seo.datoCmsMainSeo.ogImage.url} />
        <html lang="pl" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <StyledMain className="bg-color">{children}</StyledMain>
        <Cookies
          canBeDisplayed={canBeDisplayedCookie}
          setCanBeDisplayed={setCanBeDisplayedCookie}
        />
      </ThemeProvider>
    </>
  );
};

export const query = graphql`
  query SEOQuery {
    datoCmsMainSeo {
      homepageTitle
      metaDescription
      ogImage {
        url
      }
    }
  }
`;

export default Layout;
