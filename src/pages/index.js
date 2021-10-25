import React from 'react';
import styled from 'styled-components';

import Layout from '../templates/Layout';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import Offer from '../components/organisms/Offer/Offer';
import FullOffer from '../components/organisms/FullOffer/FullOffer';
import JumbotronImg from '../assets/svg/jumbotron_homepage.svg';
import WeAreWaiting from '../components/organisms/WeAreWaiting/WeAreWaiting';
import MeetUs from '../components/organisms/MeetUs/MeetUs';
import YourTurn from '../components/organisms/YourTurn/YourTurn';
import Contact from '../components/organisms/Contact/Contact';
import FindUs from '../components/organisms/FindUs/FindUs';
import Footer from '../components/Footer/Footer';
import { graphql, useStaticQuery } from 'gatsby';
import HeroSlider from '../components/organisms/HeroSlider/HeroSlider';
import HomePortfolio from '../components/organisms/HomePortfolio/HomePortfolio';
import scrollToAlt from '../utils/scrollToAlt';

const ContactJumbotron = styled.section`
  background-color: ${({ theme }) => theme.black};
`;

const JumbotronWrapper = styled.div`
  background-color: ${({ theme }) => theme.black};
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    max-width: 720px;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const JumbotronLeft = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 1200px) {
    width: 25%;
  }
  img {
    display: block;
    width: 100%;
  }
`;
const JumbotronRight = styled.div`
  width: 100%;
  padding: 100px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 20px 15px 20px 50px;
    width: 55%;
  }
  @media (min-width: 1200px) {
    padding: 20px 15px 20px 150px;
    width: 75%;
  }
`;

const JumbotronTitle = styled(Heading)`
  color: ${({ theme }) => theme.white};
  text-align: left;
  white-space: break-spaces;

  .yellow {
    color: ${({ theme }) => theme.yellow};
  }

  span {
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingS};
  }
`;

const JumbotronText = styled(Text)`
  color: ${({ theme }) => theme.white};
  text-align: left;
  margin: 30px 0 50px 0;
  font-size: ${({ theme }) => theme.bodyAlt};
`;

const IndexPage = () => {
  const seo = useStaticQuery(query);
  return (
    <Layout title={seo.datoCmsMainSeo.homepageTitle} isHomePage="isHomePage">
      <HeroSlider />
      <Offer />
      <FullOffer />
      <HomePortfolio />
      <ContactJumbotron>
        <JumbotronWrapper>
          <JumbotronLeft>
            <img src={JumbotronImg} alt="" />
          </JumbotronLeft>
          <JumbotronRight>
            <JumbotronTitle as="h3" className="anim-trigger">
              <span data-aos="title-down" data-aos-anchor=".anim-trigger">
                Nie znalazłeś tego czego szukałeś?
              </span>
              <span
                className="yellow"
                data-aos="title-down"
                data-aos-delay="200"
                data-aos-anchor=".anim-trigger"
              >
                To nic takiego!
              </span>
            </JumbotronTitle>
            <JumbotronText>
              Nasz zespół lubi wyzwania, a co najważniejsze - nie boi się ich
              podejmować! Napisz do nas, to nic nie kosztuje, a uzyskasz
              indywidualną ofertę.
            </JumbotronText>
            <Button
              color="yellow"
              link="/#kontakt"
              onClick={(e) => scrollToAlt(e, 'kontakt')}
              fontSize="small"
            >
              BEZPŁATNA WYCENA
            </Button>
          </JumbotronRight>
        </JumbotronWrapper>
      </ContactJumbotron>
      <WeAreWaiting />
      <MeetUs />
      <YourTurn />
      <Contact />
      <FindUs />
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query HomepageSEO {
    datoCmsMainSeo {
      homepageTitle
    }
  }
`;

export default IndexPage;
