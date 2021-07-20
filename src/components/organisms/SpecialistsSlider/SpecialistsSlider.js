import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';

const SliderContainer = styled.div`
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

const Slider = styled.div`
  margin: 0 auto;
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
    height: 360px;
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

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
  }
`;

/*
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

*/
const Name = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  text-transform: uppercase;
  margin: 0;
`;

const Profession = styled(Text)`
  margin: 15px 0 30px 0;
`;

const SpecialistsSlider = ({ allSpecialists }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [canLoop, setCanLoop] = useState(true);

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
    <SliderContainer>
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
          {allSpecialists.edges.map((item, index, i) => {
            return (
              <SwiperSlide key={index}>
                <SwiperBoxTeam
                  data-aos="fade-up"
                  data-aos-delay={`${index * 2}00`}
                >
                  <ImageContainer className="image-container">
                    <GatsbyImage image={item.node.image.gatsbyImageData} />
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
        </Swiper>
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
    </SliderContainer>
  );
};

export default SpecialistsSlider;
