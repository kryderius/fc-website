import React, { useEffect } from 'react';
import Layout from '../templates/Layout';
import styled from 'styled-components';
import SubPageHeader from '../components/SubPageHeader/SubPageHeader';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import HeaderIMG from '../assets/images/about_us_header.jpg';
import RectangleSVG from '../assets/svg/about_us_rectangle.svg';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';

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

  .mainHeading--yellow {
    color: ${({ theme }) => theme.yellow};
  }
`;

const MainText = styled(Text)`
  color: ${({ theme }) => theme.white};
  margin-top: 50px;
`;

const GoalSection = styled.section``;

const GoalContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 200px 15px 300px 15px;

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

const ImageLeft = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 1200px) {
    width: 50%;
  }

  .rectangle--svg {
    width: 55%;
  }

  .about_us_phone {
    position: absolute;
    width: 40%;
    bottom: -55%;
    right: 20%;
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

const TextRight = styled.div`
  width: 100%;
  margin-bottom: 100px;

  @media (min-width: 1200px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const GoalHeading = styled(Heading)`
  display: block;
  text-align: left;
  margin-bottom: 100px;
  line-height: 100%;

  .goal_heading--yellow {
    margin-left: 15%;
    color: ${({ theme }) => theme.yellow};
    font-size: ${({ theme }) => theme.headingL};
    display: block;

    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingXL};
    }
  }

  .goal_heading--black {
    display: block;
    font-size: ${({ theme }) => theme.headingM};
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingL};
    }
  }
`;

const GoalText = styled(Text)`
  text-align: left;
`;

const KimJestesmy = () => {
  const images = useStaticQuery(query);

  useEffect(() => {
    gsap.to('.about_us_phone', 10, {
      y: '-20%',
      scrollTrigger: {
        trigger: '.about_us_phone--trigger',
        scrub: true,
        start: 'top 75%',
        end: 'bottom 25%',
      },
    });
  }, []);

  return (
    <Layout>
      <SubPageHeader background={HeaderIMG}>
        <MainHeading data-aos="fade-up">
          Kim <span className="mainHeading--yellow">jesteśmy</span>
        </MainHeading>
        <MainText data-aos="fade-up" data-aos-delay="200">
          Dowiedz się po co powstaliśmy i jaki jest nasz cel.
        </MainText>
      </SubPageHeader>
      <GoalSection>
        <GoalContainer>
          <ImageLeft className="about_us_phone--trigger">
            <img src={RectangleSVG} alt="" className="rectangle--svg" />
            <GatsbyImage
              image={images.aboutUsPhone.childImageSharp.gatsbyImageData}
              alt=""
              className="about_us_phone"
            />
          </ImageLeft>
          <TextRight>
            <GoalHeading className="about_us_goal--trigger">
              <span
                className="goal_heading--black"
                data-aos="fade-down"
                data-aos-anchor=".about_us_goal--trigger"
              >
                Jaki jest
              </span>
              <span
                className="goal_heading--yellow"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-anchor=".about_us_goal--trigger"
              >
                nasz cel?
              </span>
            </GoalHeading>
            <GoalText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ultricies gravida leo, quis blandit est finibus at. Sed posuere
              elit non nisl suscipit maximus. Cras ultrices felis at aliquet
              vestibulum. Morbi sodales condimentum mauris quis ullamcorper.
              Donec mattis tellus nec dui consequat condimentum. Pellentesque
              iaculis nec magna non sagittis. Nam aliquet at nunc vel egestas.
              Vestibulum vel tincidunt metus, a gravida quam. Donec finibus
              dictum accumsan. Aliquam mollis tortor urna, non scelerisque dui
              euismod eu. Aenean est turpis, lobortis sit amet sem vitae,
              pretium elementum lectus.
            </GoalText>
          </TextRight>
        </GoalContainer>
      </GoalSection>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    aboutUsPhone: file(name: { eq: "about_us_phone" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
  }
`;

export default KimJestesmy;
