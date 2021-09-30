import React, { useEffect } from 'react';
import styled from 'styled-components';
import GlobeIMG from '../../../assets/images/find-us-globe.png';
import Heading from '../../atoms/Heading';
import { gsap } from 'gsap';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import CircleSVG from '../../../assets/svg/circle_stroke_yellow.svg';
import CrossSVG from '../../../assets/svg/cross_black_sm.svg';

const SectionWrapper = styled.section`
  padding: 0 15px;
  position: relative;
`;

const SectionContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 200px 0 100px 0;
  position: relative;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    padding: 300px 0 100px 0;
    flex-direction: row-reverse;
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
    align-self: flex-end;
  }
`;

const StyledGlobe = styled.img`
  position: absolute;
  bottom: -5%;
  left: -26%;
  width: 60% !important;
  will-change: transform;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const StyledHeading = styled(Heading)`
  text-align: left;
  z-index: 1010;
  position: absolute;
  top: -8%;
  left: -30%;
  font-size: inherit;
  font-size: ${({ theme }) => theme.headingS};
  line-height: 140%;
  @media (min-width: 768px) {
    top: -10%;
    font-size: ${({ theme }) => theme.headingS};
  }
  @media (min-width: 1200px) {
    top: -10%;
    font-size: ${({ theme }) => theme.headingM};
  }
  @media (min-width: 1200px) {
    top: -5%;
    left: -60%;
    font-size: ${({ theme }) => theme.headingL};
  }
  @media (min-width: 1400px) {
    top: -5%;
    left: -70%;
    font-size: ${({ theme }) => theme.headingL};
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
    &:not(:first-child) {
      margin-top: -3%;
    }
  }
  .text {
    display: block;
  }
  .text--yellow {
    color: ${({ theme }) => theme.black};
    @media (min-width: 1200px) {
      color: ${({ theme }) => theme.yellow};
    }
  }
`;

const CircleTopLeft = styled.img`
  position: absolute;
  bottom: 50%;
  left: 5%;
  width: 49px;
  height: 49px;
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const CrossBottomRight = styled.img`
  position: absolute;
  bottom: 20%;
  left: 30%;
  width: 32px;
  height: 32px;
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const FindUs = () => {
  const data = useStaticQuery(query);

  useEffect(() => {
    setTimeout(() => {
      gsap.to('.globe-anim', 10, {
        y: '-100%',
        scrollTrigger: {
          trigger: '.globe-anim--trigger',
          scrub: true,
          start: 'top center',
          end: 'bottom 25%',
        },
      });
    }, 2000);
  }, []);

  return (
    <SectionWrapper className="bg-text--trigger">
      <SectionContainer>
        <SectionLeft className="globe-anim--trigger">
          <GatsbyImage image={data.findUs.childImageSharp.gatsbyImageData} />
          <StyledGlobe src={GlobeIMG} alt="" className="globe-anim" />
          <StyledHeading className="findUs-heading--trigger">
            <div className="overflow">
              <div
                className="text"
                data-aos="title-down"
                data-aos-anchor=".findUs-heading--trigger"
              >
                Nie znajdziesz nas na mapie
              </div>
            </div>
            <div className="overflow">
              <div
                className="text text-stroke"
                data-aos="title-down"
                data-aos-delay="200"
                data-aos-anchor=".findUs-heading--trigger"
              >
                Tworzymy zespół z całej Polski,
              </div>
            </div>
            <div className="overflow">
              <div
                className="text"
                data-aos="title-down"
                data-aos-delay="400"
                data-aos-anchor=".findUs-heading--trigger"
              >
                a granice dla nas
              </div>
            </div>
            <div className="overflow">
              <div
                className="text text--yellow"
                data-aos="title-down"
                data-aos-delay="600"
                data-aos-anchor=".findUs-heading--trigger"
              >
                NIE ISTNIEJĄ!
              </div>
            </div>
          </StyledHeading>
        </SectionLeft>
        <SectionRight></SectionRight>
        <CircleTopLeft src={CircleSVG} alt="" />
        <CrossBottomRight src={CrossSVG} alt="" />
      </SectionContainer>
    </SectionWrapper>
  );
};

const query = graphql`
  {
    findUs: file(name: { eq: "find-us-map" }) {
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

export default FindUs;
