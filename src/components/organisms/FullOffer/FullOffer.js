import React, { useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
//import offerItems from './offerItems';
import Text from '../../atoms/Text';
import TriangleDotsSVG from '../../../assets/svg/triangle_dots_yellow_black.svg';
import CrossBlackSVG from '../../../assets/svg/cross_black_sm.svg';
import CircleYellowSVG from '../../../assets/svg/circle_stroke_yellow.svg';
import CrossGreySVG from '../../../assets/svg/cross_grey_rotate.svg';
import FullOfferDotsSVG from '../../../assets/svg/fullOffer_dots.svg';
import { graphql, useStaticQuery } from 'gatsby';
import Tilt from 'react-parallax-tilt';

SwiperCore.use([Navigation]);

const SectionWrapper = styled.section`
  padding: 0 15px;
  position: relative;

  &::before {
    display: none;
    content: '';
    position: absolute;
    bottom: 15%;
    left: 0;
    width: 70vw;
    height: 50%;
    background-color: ${({ theme }) => theme.yellow};
    z-index: -1;

    @media (min-width: 1200px) {
      display: block;
    }
  }
`;

const CrossBlack = styled.img`
  position: absolute;
  top: -10%;
  left: 15%;
`;

const CrossGrey = styled.img`
  display: none;
  position: absolute;
  top: 18%;
  right: 15%;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const CircleYellow = styled.img`
  position: absolute;
  top: 0;
  left: 45%;
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

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 768px) {
    align-items: flex-end;
    flex-direction: row;
  }
`;

const StyledHeading = styled(Heading)`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    width: 40%;
    margin-bottom: 0;
  }
`;

const BigHeading = styled.span`
  margin-right: 12%;
  font-size: ${({ theme }) => theme.headingM};
  color: ${({ theme }) => theme.yellow};
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingXL};
  }
`;

const SmallHeading = styled.span`
  margin-left: 20%;
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
        margin-right: 280px;
      }
    }
  }
`;

const TriangleDots = styled.img`
  display: none;
  position: absolute;
  bottom: 0;
  transform: translateY(33%);

  @media (min-width: 1200px) {
    display: block;
  }
`;

const FullOfferDots = styled.img`
  position: absolute;
  top: 0;
  right: 12%;
  transform: translateY(-50%);
`;

const SwiperBox = styled.div`
  width: 280px;
  height: 700px;
  background-color: ${({ theme }) => theme.black};
  border-right: 1px solid ${({ theme }) => theme.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    width: 1080px;
    height: 617px;
    flex-direction: row;
    border-right: none;
  }
`;

const SwiperImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 40%;
  overflow: hidden;
  @media (min-width: 1200px) {
    width: 50%;
    height: 100%;
  }

  div {
    position: absolute;
    width: 100%;
    min-height: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .tilt-image-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      img {
        position: absolute;
        width: auto;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

const SwiperText = styled.div`
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 60%;
  @media (min-width: 1200px) {
    padding: 100px 100px;
    width: 50%;
    height: 100%;
    align-items: flex-start;
  }

  a {
    justify-self: flex-end;
  }
`;

const TopText = styled.div``;

const StyledNavigation = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  margin-top: 50px;
  @media (min-width: 1200px) {
    margin-top: 70px;
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

const BoxHeading = styled(Heading)`
  color: ${({ theme }) => theme.yellow};
  font-size: ${({ theme }) => theme.headingS};
  text-align: center;
  width: 100%;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingM};
    text-align: left;
  }
`;

const BoxParagraphBold = styled(Text)`
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.white};
  margin-top: 30px;
  font-size: ${({ theme }) => theme.bodyS};
  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const BoxParagraph = styled(Text)`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.bodyXS};
  margin: 15px 0 50px 0;
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.bodyS};
    text-align: left;
  }
`;

const BoxButton = styled(Button)`
  * {
    align-self: center;
  }
`;

const FullOffer = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [canLoop, setCanLoop] = useState(true);

  const offerItems = useStaticQuery(query);

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

  return (
    <SectionWrapper id="oferta">
      <CrossBlack src={CrossBlackSVG} alt="" />
      <CircleYellow src={CircleYellowSVG} alt="" />
      <CrossGrey src={CrossGreySVG} alt="" />
      <SectionContainer>
        <Title>
          <StyledHeading className="full-offer--trigger">
            <BigHeading
              data-aos="fade-down"
              data-aos-anchor=".full-offer--trigger"
            >
              Sprawdź
            </BigHeading>{' '}
            <SmallHeading
              data-aos="fade-down"
              data-aos-anchor=".full-offer--trigger"
              data-aos-delay="200"
            >
              pełną ofertę
            </SmallHeading>
          </StyledHeading>
          <Button link="/oferta" color="">
            POKAŻ WSZYSTKO
          </Button>
        </Title>
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
            {offerItems.allDatoCmsService.edges.map((item, index, i) => {
              return (
                <SwiperSlide key={index}>
                  <SwiperBox
                    data-aos="fade-up"
                    data-aos-delay={`${index * 2}00`}
                  >
                    <SwiperImageWrapper>
                      <div>
                        <Tilt
                          className="tilt-image-wrapper"
                          tiltMaxAngleX={10}
                          tiltMaxAngleY={10}
                        >
                          <img
                            src={
                              require(`../../../assets/images/${item.node.image}.jpg`)
                                .default
                            }
                            alt={item.node.image}
                          />
                        </Tilt>
                      </div>
                    </SwiperImageWrapper>
                    <SwiperText>
                      <TopText>
                        <BoxHeading>{item.node.name}</BoxHeading>
                        <BoxParagraphBold>
                          {item.node.sliderShortDesc}
                        </BoxParagraphBold>
                        <BoxParagraph>{item.node.sliderLongDesc}</BoxParagraph>
                      </TopText>
                      <BoxButton
                        color="yellow"
                        link={`/${item.node.slug}`}
                        fontSize="small"
                      >
                        SPRAWDŹ
                      </BoxButton>
                    </SwiperText>
                  </SwiperBox>
                </SwiperSlide>
              );
            })}
            {/*offerItems.map((item, index, i) => {
              return (
                <SwiperSlide key={index}>
                  <SwiperBox
                    data-aos="fade-up"
                    data-aos-delay={`${index * 2}00`}
                  >
                    <SwiperImageWrapper>
                      <div>
                        <img
                          src={
                            require(`../../../assets/images/${item.image}.jpg`)
                              .default
                          }
                          alt={item.image}
                        />
                      </div>
                    </SwiperImageWrapper>
                    <SwiperText>
                      <BoxHeading>{item.offerName}</BoxHeading>
                      <BoxParagraphBold>{item.shortDesc}</BoxParagraphBold>
                      <BoxParagraph>{item.longDesc}</BoxParagraph>
                      <BoxButton
                        color="yellow"
                        link={item.link}
                        fontSize="small"
                      >
                        SPRAWDŹ
                      </BoxButton>
                    </SwiperText>
                  </SwiperBox>
                </SwiperSlide>
              );
            })*/}
          </Swiper>
          <TriangleDots src={TriangleDotsSVG} alt="" />
          <FullOfferDots src={FullOfferDotsSVG} alt="" />
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
  query FullOffer {
    allDatoCmsService(sort: { fields: idNumber, order: ASC }) {
      edges {
        node {
          name
          locale
          shortDesc
          longDesc
          sliderLongDesc
          sliderShortDesc
          slug
          image
          categoryFilter
        }
      }
    }
  }
`;

export default FullOffer;
