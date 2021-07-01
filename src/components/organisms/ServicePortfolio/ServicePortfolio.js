import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from '../../atoms/Button';

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

const ServicePortfolio = ({ portfolio }) => {
  return (
    <PortfolioWrapper>
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
            <ImageContainer key={index}>
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
