import React from 'react';
import { graphql } from 'gatsby';
import Layout from './Layout';
import SubPageHeader from '../components/SubPageHeader/SubPageHeader';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import ServicePortfolio from '../components/organisms/ServicePortfolio/ServicePortfolio';
import FullOffer from '../components/organisms/FullOffer/FullOffer';
import Contact from '../components/organisms/Contact/Contact';
import Footer from '../components/Footer/Footer';

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
`;

const AboutServiceWrapper = styled.section``;

const AboutServiceContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 100px 15px;
  position: relative;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: unset;
    padding: 100px 0;
    padding-right: calc((100vw - 1140px) / 2);
    flex-direction: row;
  }
  @media (min-width: 1400px) {
    padding: 100px 0;
    padding-right: calc((100vw - 1320px) / 2);
  }
  @media (min-width: 1920px) {
    padding: 100px 0;
    padding-right: calc((100vw - 1440px) / 2);
  }
  @media (min-width: 1921px) {
    padding: 100px 15px;
    max-width: 1440px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 390px;
  margin-top: 350px;

  @media (min-width: 1200px) {
    height: 665px;
    width: 50%;
    margin-top: 0;
  }
`;

const IncludingBox = styled.div`
  padding: 7%;
  position: absolute;
  width: 90%;
  height: 370px;
  top: -60%;
  left: 5%;
  background-color: ${({ theme }) => theme.black};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25), 0px 0px 10px rgba(0, 0, 0, 0.25);

  @media (min-width: 1200px) {
    width: 350px;
    height: 370px;
    left: unset;
    top: 25%;
    right: 0;
  }
`;

const IncludingBoxTitle = styled(Heading)`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.headingS};
  text-align: left;
  margin-bottom: 30px;

  span {
    color: ${({ theme }) => theme.yellow};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media (min-width: 1200px) {
    width: 70%;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180%;
    display: block;
  }
`;

const TextWrapper = styled.div`
  width: 100%;

  @media (min-width: 1200px) {
    width: 50%;
    padding-left: 5%;
  }
`;

const ServiceTitle = styled(Heading)`
  text-align: left;
  font-size: ${({ theme }) => theme.headingM};

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
  }

  .service_title--yellow {
    color: ${({ theme }) => theme.yellow};
    text-transform: lowercase;
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
`;

const IncludingList = styled.div`
  ul li {
    color: ${({ theme }) => theme.white};
    font-weight: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.bodyS};

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const Service = ({ data }) => {
  const service = data.datoCmsService;
  const portfolio = data.allDatoCmsPortfolio;

  return (
    <Layout>
      <SubPageHeader
        background={require(`../assets/images/${service.image}.jpg`).default}
      >
        <MainHeading data-aos="fade-up">{service.name}</MainHeading>
      </SubPageHeader>
      <AboutServiceWrapper>
        <AboutServiceContainer>
          <ImageWrapper>
            <ImageContainer>
              <img
                src={require(`../assets/images/${service.image}.jpg`).default}
                alt=""
              />
            </ImageContainer>
            <IncludingBox data-aos="fade-up">
              <IncludingBoxTitle as="h5">
                Co <span>zawiera?</span>
              </IncludingBoxTitle>
              <IncludingList
                dangerouslySetInnerHTML={{ __html: service.whatIncludes }}
              />
            </IncludingBox>
          </ImageWrapper>
          <TextWrapper>
            <ServiceTitle as="h3" data-aos="title-down">
              Czym jest{' '}
              <span className="service_title--yellow">{service.name}?</span>
            </ServiceTitle>
            <ServiceBoldText>{service.shortDesc}</ServiceBoldText>
            <ServiceLongText>{service.longDesc}</ServiceLongText>
          </TextWrapper>
        </AboutServiceContainer>
      </AboutServiceWrapper>
      <ServicePortfolio portfolio={portfolio} />
      <FullOffer />
      <Contact />
      <Footer isServicePage="isServicePage" />
    </Layout>
  );
};

export const query = graphql`
  query ServiceTemplate($slug: String!) {
    datoCmsService(slug: { eq: $slug }) {
      slug
      name
      image
      shortDesc
      longDesc
      whatIncludes
    }
    allDatoCmsPortfolio(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          slug
          author
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

export default Service;
