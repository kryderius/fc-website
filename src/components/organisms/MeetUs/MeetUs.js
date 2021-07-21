import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../atoms/Button';
import CircleYellowSVG from '../../../assets/svg/circle_stroke_yellow.svg';
import CircleGreySVG from '../../../assets/svg/circle_grey_stroke.svg';
import CrossYellowSVG from '../../../assets/svg/cross_yellow.svg';
import TriangleDotsWhiteSVG from '../../../assets/svg/triangle_dots_white.svg';
import { graphql, useStaticQuery } from 'gatsby';

const SectionWrapper = styled.section`
  padding: 0 15px;
  min-height: 100vh;
  position: relative;
`;

const SectionContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 100px 0;
  position: relative;

  @media (min-width: 768px) {
    max-width: 720px;
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

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1010;
`;

const StyledHeading = styled(Heading)`
  .heading--big {
    color: ${({ theme }) => theme.yellow};
    display: block;
    font-size: ${({ theme }) => theme.headingM};
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingL};
    }
  }
  .heading--small {
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.headingS};
    display: block;
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingM};
    }
  }
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.white};
  max-width: 250px;
  margin-top: 30px;
`;

const Slider = styled.div`
  margin: 100px auto 0 auto;
  max-width: 576px;
  padding: 0 15px;
  position: relative;
  @media (min-width: 768px) {
    max-width: 720px;
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
  .swiper-wrapper {
    display: inline-flex;
    align-items: center;
    .swiper-slide {
      &:last-child {
        margin-right: 1000px;
      }
    }
  }
`;

const SwiperBoxTeam = styled.div`
  width: 280px;
  height: 420px;
  background-color: ${({ theme }) => theme.white};
  border-right: 1px solid ${({ theme }) => theme.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  object-fit: cover;
  transition: box-shadow 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (min-width: 1200px) {
    width: 360px;
    height: 540px;
    flex-direction: row;
    border-right: none;
  }

  &:hover {
    z-index: 1090;
    box-shadow: 0px 0px 16px rgba(17, 17, 26, 0.1),
      0px 0px 24px rgba(17, 17, 26, 0.1), 0px 16px 56px rgba(17, 17, 26, 0.1);
  }

  &:hover .image-container .funny-img,
  &:hover .hover-info {
    opacity: 1;
  }
  &:hover .hover-info {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HoverInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  padding: 20px 10px;
  position: absolute;
  bottom: -18%;
  left: 5%;
  width: 90%;
  height: 209px;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 50px 0 50px 0;
  transform: translateY(-30%);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1010;
`;

const StyledNavigation = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  margin-top: 100px;
  @media (min-width: 1200px) {
    margin-top: 120px;
  }
`;

const StyledNavButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.yellow};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;

  &:first-child {
    margin-right: 30px;
  }

  svg path {
    fill: ${({ theme }) => theme.white};
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImgNormal = styled.img`
  width: 130%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ImgFunny = styled.img`
  width: 130%;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const Name = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  text-transform: uppercase;
  margin: 0;
`;

const Profession = styled(Text)`
  margin: 15px 0 30px 0;
`;

const CircleYellow = styled.img`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 5%;
  z-index: 1;

  @media (min-width: 1200px) {
    top: 7%;
    right: 20%;
  }
`;

const CircleGrey = styled.img`
  pointer-events: none;
  position: absolute;
  top: 22%;
  left: 5%;
  z-index: 1;

  @media (min-width: 1200px) {
    left: 25%;
  }
`;

const CrossYellow = styled.img`
  display: none;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 13%;
  z-index: 1;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const BgText = styled.span`
  font-size: calc(80px + (150 - 40) * ((100vw - 300px) / (1600 - 300)));
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  position: absolute;
  top: 0;
  left: 0;
  color: #0b0b0b;
  text-shadow: 0 0 32px rgba(0, 0, 0, 0.05);
  z-index: -2;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 2;
  @media (min-width: 1200px) {
    top: 0;
  }
`;

const TriangleDotsWhite = styled.img`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  display: none;
  transform: translate(-30%, 48%);
  z-index: 2;
  @media (min-width: 1200px) {
    display: block;
    width: 100px;
  }
  @media (min-width: 1920px) {
    width: 192px;
  }
`;

const MeetUs = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [canLoop, setCanLoop] = useState(true);
  const specialist = useStaticQuery(query);

  const handleNavRightClick = () => {
    const { activeIndex } = swiperInstance;

    const isActiveIndexEqualToLast =
      activeIndex === swiperInstance.slides.length - 1;

    if (isActiveIndexEqualToLast && canLoop) {
      swiperInstance.slideTo(0);
    } else if (isActiveIndexEqualToLast && !canLoop) {
      setCanLoop(true);
    } else if (!isActiveIndexEqualToLast && canLoop) {
      setCanLoop(false);
    }
  };

  const handleNavLeftClick = () => {
    const { activeIndex } = swiperInstance;

    const isActiveIndexEqualToFirst = activeIndex === 0;

    if (isActiveIndexEqualToFirst && canLoop) {
      swiperInstance.slideTo(swiperInstance.slides.length - 1);
    } else if (isActiveIndexEqualToFirst && !canLoop) {
      setCanLoop(true);
    } else if (!isActiveIndexEqualToFirst && canLoop) {
      setCanLoop(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      gsap.to('.bg-color', {
        backgroundColor: '#000000',
        scrollTrigger: {
          trigger: '.bg--trigger',
          scrub: true,
          start: 'top 75%',
          end: 'top 25%',
        },
      });
      gsap.to('.bg-color', {
        backgroundColor: '#ffffff',
        scrollTrigger: {
          trigger: '.bg--trigger',
          start: 'bottom 75%',
          end: '+=50',
          toggleActions: 'play none none reset',
        },
      });
      gsap.to('.bgtext-meetus', {
        x: '10%',
        scrollTrigger: {
          trigger: '.bg--trigger',
          scrub: true,
          start: 'top center',
          end: 'center 25%',
        },
      });
    }, 2000);
  }, []);
  return (
    <SectionWrapper className="bg--trigger" id="poznaj-nas">
      <CircleYellow src={CircleYellowSVG} alt="" />
      <CircleGrey src={CircleGreySVG} alt="" />
      <CrossYellow src={CrossYellowSVG} alt="" />
      <BgText className="bgtext-meetus">ZESPÓŁ</BgText>
      <SectionContainer className="meetUs-anim--trigger">
        <Headline>
          <StyledHeading>
            <span
              className="heading--big"
              data-aos="title-down"
              data-aos-anchor=".meetUs-anim--trigger"
            >
              Poznajmy się
            </span>
            <span
              className="heading--small"
              data-aos="title-down"
              data-aos-delay="200"
              data-aos-anchor=".meetUs-anim--trigger"
            >
              bliżej
            </span>
          </StyledHeading>
          <StyledText>
            Oto nasz zespół. Ekipa profesjonalistów, zapaleńców i przede
            wszystkim pasjonatów.
          </StyledText>
        </Headline>
        <Slider>
          <Swiper
            spaceBetween={0}
            slidesPerView="auto"
            centeredSlides={false}
            speed={500}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            grabCursor
            updateOnWindowResize
            breakpoints={{
              768: {
                slidesPerView: 'auto',
                spaceBetween: 0,
                centeredSlides: false,
              },
              1025: {
                slidesPerView: 'auto',
                spaceBetween: 0,
                centeredSlides: false,
              },
              1410: {
                centeredSlides: false,
                slidesPerView: 'auto',
                spaceBetween: 0,
              },
            }}
            onSwiper={setSwiperInstance}
          >
            {specialist.allDatoCmsSpecialist.edges.map((item, index, i) => {
              return (
                <SwiperSlide key={index}>
                  <SwiperBoxTeam
                    data-aos="fade-up"
                    data-aos-delay={`${index * 2}00`}
                  >
                    <ImageContainer className="image-container">
                      <ImgNormal src={item.node.image.fluid.src} />
                      <ImgFunny
                        className="funny-img"
                        src={
                          item.node.funnyImage === null
                            ? undefined
                            : item.node.funnyImage.fluid.src
                        }
                      />
                    </ImageContainer>
                    <HoverInfo className="hover-info">
                      <Name>{item.node.name}</Name>
                      <Profession>{item.node.professionShort}</Profession>
                      <Button
                        fontSize="small"
                        size="btn--small"
                        link={`/specjalisci/${item.node.name.toLowerCase()}`}
                      >
                        PORTFOLIO
                      </Button>
                    </HoverInfo>
                  </SwiperBoxTeam>
                </SwiperSlide>
              );
            })}
            {/*
            {meetUsItems.map((item, index, i) => {
              return (
                <SwiperSlide key={index}>
                  <SwiperBoxTeam
                    data-aos="fade-up"
                    data-aos-delay={`${index * 2}00`}
                  >
                    <ImageContainer className="image-container">
                      <ImgNormal
                        src={
                          require(`../../../assets/images/${item.imageNormal}.jpg`)
                            .default
                        }
                      />
                      <ImgFunny
                        className="funny-img"
                        src={
                          require(`../../../assets/images/${item.imageFunny}.jpg`)
                            .default
                        }
                      />
                    </ImageContainer>
                    <HoverInfo className="hover-info">
                      <Name>{item.name}</Name>
                      <Profession>{item.profession}</Profession>
                      <Button
                        fontSize="small"
                        size="btn--small"
                        link={`/specjalisci/${item.slug}`}
                      >
                        PORTFOLIO
                      </Button>
                    </HoverInfo>
                  </SwiperBoxTeam>
                </SwiperSlide>
              );
            })}
            */}
          </Swiper>
          <TriangleDotsWhite src={TriangleDotsWhiteSVG} alt="" />
        </Slider>
        <StyledNavigation>
          <StyledNavButton
            aria-label="Poprzednie zdjęcie"
            className="swiper-button-prev"
            onClick={handleNavLeftClick}
          >
            <svg
              width="13"
              height="23"
              viewBox="0 0 13 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2.34184L11.0283 0.370117L0 11.3984L11.0283 22.4267L13 20.4549L3.94344 11.3984L13 2.34184Z"
                fill="white"
              />
            </svg>
          </StyledNavButton>
          <StyledNavButton
            aria-label="Następne zdjęcie"
            className="swiper-button-next"
            onClick={handleNavRightClick}
          >
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2.64404L8.45215 11.0962L0 19.5483L2.27393 21.8223L13 11.0962L2.27393 0.370117L0 2.64404Z"
                fill="white"
              />
            </svg>
          </StyledNavButton>
        </StyledNavigation>
      </SectionContainer>
    </SectionWrapper>
  );
};

export const query = graphql`
  query SpecialistSlider {
    allDatoCmsSpecialist {
      edges {
        node {
          id
          name
          professionShort
          image {
            fluid {
              src
            }
          }
          funnyImage {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

export default MeetUs;
