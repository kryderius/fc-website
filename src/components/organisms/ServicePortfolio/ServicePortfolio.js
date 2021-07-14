import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from '../../atoms/Button';
import CloseSVG from '../../../assets/svg/cross_black_sm.svg';
import { Link } from 'gatsby';

const PortfolioWrapper = styled.section``;

const PortfolioContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 15px 200px 15px;
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

const HeadingWrapper = styled.div``;

const StyledHeading = styled(Heading)`
  display: flex;
  flex-direction: column;
  text-align: left;

  .heading--black {
    font-size: ${({ theme }) => theme.headingS};

    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingL};
    }
  }
  .heading--yellow {
    font-size: ${({ theme }) => theme.headingM};
    color: ${({ theme }) => theme.yellow};
    margin-left: 50px;

    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingXL};
      margin-left: 80px;
    }
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: zoom-in;

  @media (min-width: 1200px) {
    width: 33.33%;
    height: 380px;
  }
  @media (min-width: 1400px) {
    width: 33.33%;
    height: 440px;
  }
  @media (min-width: 1920px) {
    width: 33.33%;
    height: 480px;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  &:hover .image-hover-info {
    opacity: 1;
  }
`;

const ImageHoverInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(254, 221, 90, 0.8);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HoverTitle = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  font-size: ${({ theme }) => theme.headingS};
`;

const HoverAuthor = styled(Text)`
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.bodyS};
  text-transform: uppercase;

  .author-before {
    font-weight: ${({ theme }) => theme.light};
    text-transform: none;
    margin-right: 10px;
  }
`;

const HoverImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  overflow: hidden;

  @media (min-width: 1200px) {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const Lightbox = styled.div`
  display: none;
  //padding: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  z-index: 2000;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const LightboxWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px;
  overflow-y: scroll;
  position: relative;
`;

const CloseBtn = styled.div`
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  border: none;
  outline: none;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.yellow};
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 40%;
  }
`;

const LightboxInfo = styled.div`
  position: absolute;
  top: 15px;
  left: 100px;
  z-index: 2010;
  display: flex;
`;

const LightboxAuthorImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  overflow: hidden;
  position: relative;

  .img {
    position: abolute;
    top: 0;
    left: 0;
  }
`;

const LightboxInfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

const LightboxInfoTitle = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  font-size: ${({ theme }) => theme.headingS};
  color: ${({ theme }) => theme.white};
  margin: 0 0 10px 0;
  text-align: left;
`;

const LightboxInfoAuthor = styled(Text)`
  text-align: left;
  color: ${({ theme }) => theme.white};
  margin: 0;
  font-weight: ${({ theme }) => theme.medium};

  span {
    font-weight: ${({ theme }) => theme.light};
  }
`;

const StyledAuthorLink = styled(Link)`
  color: ${({ theme }) => theme.yellow};
`;

const ServicePortfolio = ({ portfolio }) => {
  const [openImage, setOpenImage] = useState(false);
  const [activeImage, setActiveImage] = useState('');
  const [activeAuthorImg, setActiveAuthorImg] = useState('');
  const [activeAuthorName, setActiveAuthorName] = useState('');
  const [activeTitle, setActiveTitle] = useState('');

  const handleImageWrapper = (e, authorImg, title, name) => {
    setOpenImage(!openImage);
    setActiveImage(e);
    setActiveAuthorImg(authorImg);
    setActiveTitle(title);
    setActiveAuthorName(name);
  };

  return (
    <PortfolioWrapper>
      {openImage && (
        <Lightbox>
          <LightboxInfo>
            <LightboxAuthorImg>
              {activeAuthorImg && <GatsbyImage image={activeAuthorImg} />}
            </LightboxAuthorImg>
            <LightboxInfoText>
              <LightboxInfoTitle>{activeTitle}</LightboxInfoTitle>
              <LightboxInfoAuthor>
                <span>Autor:</span>{' '}
                <StyledAuthorLink
                  to={`/specjalisci/${activeAuthorName.toLowerCase()}`}
                >
                  {activeAuthorName}
                </StyledAuthorLink>
              </LightboxInfoAuthor>
            </LightboxInfoText>
          </LightboxInfo>
          <CloseBtn onClick={() => setOpenImage(false)}>
            <img src={CloseSVG} alt="" />
          </CloseBtn>
          <LightboxWrapper>
            <GatsbyImage image={activeImage} alt="" />
          </LightboxWrapper>
        </Lightbox>
      )}
      <PortfolioContainer>
        <HeadingWrapper className="service-heading--trigger">
          <StyledHeading as="h3">
            <span
              className="heading--black"
              data-aos="fade-down"
              data-aos-anchor=".service-heading--trigger"
            >
              Nasze
            </span>
            <span
              className="heading--yellow"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-anchor=".service-heading--trigger"
            >
              realizacje
            </span>
          </StyledHeading>
        </HeadingWrapper>
        <ImagesWrapper data-aos="fade-up">
          {portfolio.edges.map((item, index) => (
            <ImageContainer
              key={index}
              onClick={(e) =>
                handleImageWrapper(
                  item.node.image.gatsbyImageData,
                  item.node.authorImage.gatsbyImageData,
                  item.node.title,
                  item.node.author
                )
              }
            >
              <GatsbyImage image={item.node.image.gatsbyImageData} />
              <ImageHoverInfo className="image-hover-info">
                <HoverTitle>{item.node.title}</HoverTitle>
                <HoverImg>
                  {item.node.authorImage && (
                    <GatsbyImage
                      image={item.node.authorImage.gatsbyImageData}
                    />
                  )}
                </HoverImg>
                <HoverAuthor>
                  <span className="author-before">Autor:</span>
                  {item.node.author}
                </HoverAuthor>
                <Button
                  link={`/specjalisci/${item.node.author.toLowerCase()}`}
                  size="btn--portfolio"
                >
                  ZOBACZ PORTFOLIO
                </Button>
              </ImageHoverInfo>
            </ImageContainer>
          ))}
        </ImagesWrapper>
      </PortfolioContainer>
    </PortfolioWrapper>
  );
};

export default ServicePortfolio;
