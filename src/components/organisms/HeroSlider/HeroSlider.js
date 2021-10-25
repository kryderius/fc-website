import React from 'react';

import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Heading from '../../atoms/Heading';
import Slide1 from '../../../assets/images/hero_1.jpg';
import Slide2 from '../../../assets/images/hero_2.jpg';
import Slide3 from '../../../assets/images/hero_3.jpg';
import Slide4 from '../../../assets/images/hero_4.jpg';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
//import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination, Autoplay]);

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

const Slider = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  .swiper-container {
    height: 100%;
    width: 100%;

    .swiper-pagination {
      position: absolute;
      text-align: center;
      transition: 300ms opacity;
      transform: translate3d(0, 0, 0);
      z-index: 10;

      &.swiper-pagination-bullets {
        bottom: 50px;
        left: 0;
        width: 100%;
      }

      .swiper-pagination-bullet {
        width: 15px;
        height: 15px;
        margin: 0 10px;
        cursor: pointer;
        display: inline-block;
        border-radius: 50%;
        background: #000;
        opacity: 0.2;

        &.swiper-pagination-bullet-active {
          background: ${({ theme }) => theme.yellow};
          opacity: 1;
        }
      }
    }

    .swiper-wrapper {
      display: inline-flex;
      height: 100%;

      .swiper-slide {
        margin: auto;
        height: 100%;

        @media (min-width: 1200px) {
          height: calc(100vh - 20px) !important;
        }
      }
    }
  }
`;

const SectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  border-radius: 0 50px 0 50px;
  margin: auto;
  overflow: hidden;
  padding: 100px 15px;

  @media (min-width: 1200px) {
    width: calc(100vw - 30px);
    height: calc(100vh - 20px);
    border-radius: 0 100px 0 100px;
  }
  & > * {
    z-index: 10;
  }
`;

const HeroText = styled(Text)`
  font-size: ${({ theme }) => theme.bodyS};
  margin: 30px 0;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingS};
  }
`;

const SlideImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

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

const HeroSlider = () => {
  const sliderImg = useStaticQuery(query);

  return (
    <Slider>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        speed={500}
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor
        updateOnWindowResize={true}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          1025: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          1410: {
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <SectionContainer>
            <SlideImage
              image={sliderImg.firstSlide.childImageSharp.gatsbyImageData}
              alt="Hero image"
            />
            <StyledHeading>
              <div className="span-container">
                <div data-aos="title-down">Wiemy gdzie znajdują się</div> <br />{' '}
              </div>
              <div className="span-container">
                <div
                  className="yellow-span"
                  data-aos="title-down"
                  data-aos-delay="200"
                >
                  Twoi klienci
                </div>
              </div>
            </StyledHeading>
            <HeroText
              className="text--white"
              data-aos="title-up"
              data-aos-delay="400"
            >
              strategia - komunikacja - wizerunek marki - reklama
            </HeroText>
            <Button
              link="/oferta"
              state={{ activeFilter: 'mark' }}
              color="white"
            >
              SPRAWDŹ
            </Button>
          </SectionContainer>
        </SwiperSlide>
        {/* Next slide */}
        <SwiperSlide>
          <SectionContainer>
            <SlideImage
              image={sliderImg.secondSlide.childImageSharp.gatsbyImageData}
              alt="Hero image"
            />
            <StyledHeading>
              <div className="span-container">
                <div data-aos="title-down">Projektujemy według</div> <br />{' '}
              </div>
              <div className="span-container">
                <div
                  className="yellow-span"
                  data-aos="title-down"
                  data-aos-delay="200"
                >
                  Twoich oczekiwań
                </div>
              </div>
            </StyledHeading>
            <HeroText
              className="text--white"
              data-aos="title-up"
              data-aos-delay="400"
            >
              logo - branding - identyfikacja wizualna - WWW - aplikacje
            </HeroText>
            <Button
              link="/oferta"
              state={{ activeFilter: 'earning' }}
              color="white"
            >
              SPRAWDŹ
            </Button>
          </SectionContainer>
        </SwiperSlide>
        {/* Next slide */}
        <SwiperSlide>
          <SectionContainer>
            <SlideImage
              image={sliderImg.thirdSlide.childImageSharp.gatsbyImageData}
              alt="Hero image"
            />
            <StyledHeading>
              <div className="span-container">
                <div data-aos="title-down">Przenieś swój biznes</div> <br />{' '}
              </div>
              <div className="span-container">
                <div
                  className="yellow-span"
                  data-aos="title-down"
                  data-aos-delay="200"
                >
                  do Internetu
                </div>
              </div>
            </StyledHeading>
            <HeroText
              className="text--white"
              data-aos="title-up"
              data-aos-delay="400"
            >
              WWW - sklep internetowy - aplikacje - reklama - SEO
            </HeroText>
            <Button
              link="/oferta"
              state={{ activeFilter: 'earning' }}
              color="white"
            >
              SPRAWDŹ
            </Button>
          </SectionContainer>
        </SwiperSlide>
        {/* Next slide */}
        <SwiperSlide>
          <SectionContainer>
            <SlideImage
              image={sliderImg.fourthSlide.childImageSharp.gatsbyImageData}
              alt="Hero image"
            />
            <StyledHeading>
              <div className="span-container">
                <div data-aos="title-down">Zwiększamy wolumen </div> <br />{' '}
              </div>
              <div className="span-container">
                <div
                  className="yellow-span"
                  data-aos="title-down"
                  data-aos-delay="200"
                >
                  Twojej sprzedaży
                </div>
              </div>
            </StyledHeading>
            <HeroText
              className="text--white"
              data-aos="title-up"
              data-aos-delay="400"
            >
              promocja - reklama - SEO - influencer marketing
            </HeroText>
            <Button
              link="/oferta"
              state={{ activeFilter: 'earning' }}
              color="white"
            >
              SPRAWDŹ
            </Button>
          </SectionContainer>
        </SwiperSlide>
      </Swiper>
    </Slider>
  );
};

const query = graphql`
  {
    firstSlide: file(name: { eq: "hero_1" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          quality: 60
          formats: WEBP
          placeholder: BLURRED
        )
      }
    }
    secondSlide: file(name: { eq: "hero_2" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          quality: 60
          formats: WEBP
          placeholder: BLURRED
        )
      }
    }
    thirdSlide: file(name: { eq: "hero_3" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          quality: 60
          formats: WEBP
          placeholder: BLURRED
        )
      }
    }
    fourthSlide: file(name: { eq: "hero_4" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          quality: 60
          formats: WEBP
          placeholder: BLURRED
        )
      }
    }
  }
`;

export default HeroSlider;
