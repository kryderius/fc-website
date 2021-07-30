import React from 'react';
import SubPageHeader from '../components/SubPageHeader/SubPageHeader';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from './Layout';
import SpecialistHeaderImg from '../assets/images/specialist_header.jpg';
import SpecialistsSlider from '../components/organisms/SpecialistsSlider/SpecialistsSlider';
import { GatsbyImage } from 'gatsby-plugin-image';
import Footer from '../components/Footer/Footer';
import SpecialistPortfolio from '../components/organisms/SpecialistPortfolio/SpecialistPortfolio';
import Contact from '../components/organisms/Contact/Contact';
import JumbotronSVG from '../assets/svg/jumbotron_specialist.svg';
import Button from '../components/atoms/Button';

const MainHeading = styled(Heading)`
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.headingM};

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
  }
  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.headingXL};
  }

  .heading--yellow {
    color: ${({ theme }) => theme.yellow};
  }
`;

const InfoWrapper = styled.section``;

const InfoContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 100px 15px 100px 15px;
  position: relative;

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  margin-top: 50px;

  @media (min-width: 1200px) {
    width: 50%;
    margin-top: 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    height: 630px;
  }
  @media (min-width: 1200px) {
    width: 45%;
    height: 630px;
  }

  &::before {
    position: absolute;
    content: '';
    width: 90%;
    height: 90%;
    top: 0;
    right: 0;
    transform: translate(-10%, 10%);
    background-color: ${({ theme }) => theme.yellow};
  }

  .gatsby-image-wrapper {
    width: 90%;
    height: 90%;
  }
`;

const SpecialistName = styled(Heading)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.yellow};
  font-size: ${({ theme }) => theme.headingM};
  text-align: left;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
  }
`;

const ServiceBoldText = styled(Text)`
  text-align: left;
  font-weight: ${({ theme }) => theme.medium};
  margin: 50px 0 30px 0;
`;

const ServiceLongText = styled(Text)`
  text-align: left;
  font-weight: ${({ theme }) => theme.light};

  * {
    font-weight: ${({ theme }) => theme.light}!important;
  }

  p:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const CheckMoreWrapper = styled.section`
  margin-bottom: 300px;
  margin-top: 100px;
`;

const CheckMoreContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  background-color: ${({ theme }) => theme.yellow};
  position: relative;

  &::after {
    position: absolute;
    content: '';
    width: 60%;
    height: 130%;
    top: -10%;
    right: 5%;
    background-color: ${({ theme }) => theme.black};
    z-index: -1;

    @media (min-width: 1200px) {
      height: 140%;
    }
  }

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

const CheckMoreText = styled.div`
  width: 100%;
  padding: 50px 20px;

  @media (min-width: 768px) {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 1200px) {
    width: 70%;
    padding: 50px 50px;
  }
`;

const CheckMoreImg = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
  }
  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: left;
  font-size: ${({ theme }) => theme.headingM};
  margin-bottom: 50px;

  span {
    display: block;
  }

  .heading--black {
    font-size: ${({ theme }) => theme.headingS};

    @media (min-width: 1400px) {
      font-size: ${({ theme }) => theme.headingM};
    }
  }

  .heading--white {
    font-size: ${({ theme }) => theme.headingM};
    color: ${({ theme }) => theme.white};
    margin-left: 100px;

    @media (min-width: 1400px) {
      font-size: ${({ theme }) => theme.headingL};
    }
  }
`;

const Specialist = ({ data }) => {
  const specialist = data.datoCmsSpecialist;
  const allSpecialists = data.allDatoCmsSpecialist;
  const portfolio = data.allDatoCmsPortfolio;

  return (
    <Layout title={`${specialist.name} - ${specialist.professionShort}`}>
      <SubPageHeader background={SpecialistHeaderImg}>
        <MainHeading data-aos="fade-up">
          Nasz <span className="heading--yellow">zespół</span>
        </MainHeading>
      </SubPageHeader>
      <SpecialistsSlider allSpecialists={allSpecialists} />
      <InfoWrapper>
        <InfoContainer>
          <TextWrapper>
            <SpecialistName data-aos="fade-up">
              {specialist.name}
            </SpecialistName>
            <ServiceBoldText>{specialist.shortDesc}</ServiceBoldText>
            <ServiceLongText
              dangerouslySetInnerHTML={{ __html: specialist.longDesc }}
            />
          </TextWrapper>
          <ImageWrapper data-aos="fade-up" data-aos-delay="200">
            <GatsbyImage image={specialist.image.gatsbyImageData} />
          </ImageWrapper>
        </InfoContainer>
      </InfoWrapper>
      {portfolio.edges.length && <SpecialistPortfolio portfolio={portfolio} />}
      <CheckMoreWrapper>
        <CheckMoreContainer>
          <CheckMoreText className="jumbotron-specialist--trigger">
            <StyledHeading>
              <span
                className="heading--black"
                data-aos="fade-down"
                data-aos-anchor=".jumbotron-specialist--trigger"
              >
                Spodobały Ci się nasze prace?
              </span>
              <span
                className="heading--white"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-anchor=".jumbotron-specialist--trigger"
              >
                Sprawdź co jeszcze robimy
              </span>
            </StyledHeading>
            <Button link="/oferta">OFERTA</Button>
          </CheckMoreText>
          <CheckMoreImg src={JumbotronSVG} alt="" />
        </CheckMoreContainer>
      </CheckMoreWrapper>
      <Contact />
      <Footer isServicePage="isServicePage" />
    </Layout>
  );
};

export const query = graphql`
  query SpecialistTemplate($name: String!) {
    datoCmsSpecialist(name: { eq: $name }) {
      name
      longDesc
      shortDesc
      professionShort
      image {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    allDatoCmsSpecialist {
      edges {
        node {
          name
          professionShort
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
    allDatoCmsPortfolio(filter: { author: { eq: $name } }) {
      edges {
        node {
          id
          title
          slug
          author
          shortDesc
          image {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
          authorImage {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default Specialist;
