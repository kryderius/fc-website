import * as React from 'react';
import styled from 'styled-components';

import Layout from '../templates/Layout';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import HeroImg from '../assets/images/hero1.jpg';
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

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.headingM};

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
  }
  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.headingXL};
  }

  .span-container > div {
    display: inline-block;
    white-space: break-spaces;
  }
  .span-container {
    overflow: hidden;
    display: block;
    line-height: 110%;
  }
  .yellow-span {
    color: ${({ theme }) => theme.yellow};
  }
`;

const SectionWrapper = styled.section`
  height: 100vh;
  display: flex;
  position: relative;
`;

const SectionContainer = styled.div`
  position: relative;
  background-image: url(${HeroImg});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  border-radius: 0 50px 0 50px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 100px 15px;

  @media (min-width: 1200px) {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 0 100px 0 100px;
  }

  & > * {
    z-index: 10;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

const HeroText = styled(Text)`
  font-size: ${({ theme }) => theme.bodyS};
  margin: 30px 0;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingS};
  }
`;

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
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    flex-direction: row;
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
  @media (min-width: 1200px) {
    width: 35%;
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
  }
  @media (min-width: 1200px) {
    padding: 20px 15px 20px 150px;
    width: 50%;
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
    font-size: ${({ theme }) => theme.headingM};
  }
`;

const JumbotronText = styled(Text)`
  color: ${({ theme }) => theme.white};
  text-align: left;
  margin: 30px 0 50px 0;
`;

const IndexPage = () => {
  const seo = useStaticQuery(query);
  return (
    <Layout title={seo.datoCmsMainSeo.homepageTitle} isHomePage="isHomePage">
      {/*
<SectionWrapper>
        <SectionContainer>
          <StyledHeading>
            <div className="span-container">
              <div data-aos="title-down">Wszystkie cyfrowe usługi</div> <br />{' '}
            </div>
            <div className="span-container">
              <div
                className="yellow-span"
                data-aos="title-down"
                data-aos-delay="200"
              >
                w jednym miejscu
              </div>
            </div>
          </StyledHeading>
          <HeroText
            className="text--white"
            data-aos="title-up"
            data-aos-delay="400"
          >
            Poznaj naszych specjalistów z każdej branży!
          </HeroText>
          <Button link="/#czego-potrzebujesz" color="white">
            SPRAWDŹ
          </Button>
        </SectionContainer>
      </SectionWrapper>
      */}

      <HeroSlider />

      <Offer />
      <FullOffer />
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
            <Button color="yellow" link="/#kontakt" fontSize="small">
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
