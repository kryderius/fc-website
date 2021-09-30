import React, { useEffect } from 'react';
import styled from 'styled-components';
import LaptopIMG from '../../../assets/images/laptop.png';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import { gsap } from 'gsap';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const SectionWrapper = styled.section`
  padding: 0 15px;
  position: relative;
`;

const SectionContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 200px 0 100px 0;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    padding: 300px 0 100px 0;
    flex-direction: row;
  }
  /*
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
  */
`;

const SectionLeft = styled.div`
  width: 70%;
  position: relative;
  z-index: 1001;

  @media (min-width: 1200px) {
    width: 55%;
  }

  img {
    width: 100%;
  }
`;

const SectionRight = styled.div`
  width: 80%;
  align-self: center;
  margin-top: 100px;
  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
    width: 45%;
    margin-top: 200px;
    align-self: flex-start;
  }
`;

const StyledLaptop = styled.img`
  position: absolute;
  bottom: -5%;
  right: -26%;
  width: 70% !important;
  will-change: transform;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const StyledHeading = styled(Heading)`
  text-align: left;
  z-index: 1010;
  position: absolute;
  top: -16%;
  right: -30%;
  font-size: ${({ theme }) => theme.headingL};

  @media (min-width: 1200px) {
    top: -10%;
    right: -30%;
    font-size: ${({ theme }) => theme.headingXL};
  }
  @media (min-width: 1200px) {
    top: -10%;
    right: -30%;
    font-size: ${({ theme }) => theme.headingXXL};
  }

  .text-stroke {
    color: ${({ theme }) => theme.black};
    //-webkit-text-stroke: 1px ${({ theme }) => theme.black};
    //-webkit-text-fill-color: transparent;
    font-family: ${({ theme }) => theme.fontFamilyHeading};
    font-weight: ${({ theme }) => theme.medium};
  }

  .overflow {
    overflow: hidden;
  }
  .text {
    display: block;
  }
`;

const BgText = styled.span`
  font-size: calc(80px + (150 - 40) * ((100vw - 300px) / (1600 - 300)));
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  position: absolute;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.white};
  text-shadow: 0 0 32px rgba(0, 0, 0, 0.05);
  z-index: -2;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (min-width: 1200px) {
    top: 0;
  }
`;

const WeAreWaiting = () => {
  const data = useStaticQuery(query);

  useEffect(() => {
    setTimeout(() => {
      gsap.to('.laptop-anim', 10, {
        y: '-100%',
        scrollTrigger: {
          trigger: '.laptop-anim--trigger',
          scrub: true,
          start: 'top center',
          end: 'bottom 25%',
        },
      });

      gsap.to('.bg-text', 10, {
        x: '-10%',
        scrollTrigger: {
          trigger: '.bg-text--trigger',
          scrub: true,
          start: 'top center',
          end: 'center 25%',
        },
      });
    }, 1500);
  }, []);

  return (
    <SectionWrapper className="bg-text--trigger">
      <BgText className="bg-text">FREELANCE</BgText>
      <SectionContainer>
        <SectionLeft className="laptop-anim--trigger">
          {/*
          <img
            src={WeAreWaitingIMG}
            alt="Czekamy na Ciebie! Skontaktuj się z nami"
            width="300px"
            height="888px"
          />
          */}
          <GatsbyImage
            image={data.weAreWaiting.childImageSharp.gatsbyImageData}
          />
          <StyledLaptop src={LaptopIMG} alt="" className="laptop-anim" />
          <StyledHeading className="anim-trigger-heading">
            <div className="overflow">
              <div
                className="text"
                data-aos="title-down"
                data-aos-anchor=".anim-trigger-heading"
              >
                Czekamy
              </div>
            </div>
            <div className="overflow">
              <div
                className="text"
                data-aos="title-down"
                data-aos-delay="200"
                data-aos-anchor=".anim-trigger-heading"
              >
                właśnie na
              </div>
            </div>
            <div className="overflow">
              <div
                className="text text-stroke"
                data-aos="title-down"
                data-aos-delay="400"
                data-aos-anchor=".anim-trigger-heading"
              >
                Ciebie
              </div>
            </div>
          </StyledHeading>
        </SectionLeft>
        <SectionRight>
          <Button link="/#kontakt">KONTAKT</Button>
        </SectionRight>
      </SectionContainer>
    </SectionWrapper>
  );
};

const query = graphql`
  {
    weAreWaiting: file(name: { eq: "we-are-waiting" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          quality: 100
          formats: WEBP
          placeholder: NONE
        )
      }
    }
  }
`;

export default WeAreWaiting;
