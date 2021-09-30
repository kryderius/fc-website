import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const SectionWrapper = styled.section`
  margin: 200px 0 100px 0;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;

  @media (min-width: 1200px) {
    justify-content: flex-end;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 1200px) {
    width: 50%;
  }

  img {
    width: 100%;
    display: block;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: left;
  z-index: 1010;
  position: absolute;
  top: -35px;
  right: 5%;
  line-height: 130%;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.headingM};
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
    top: 100px;
    right: calc(35vw - 15px);
  }
  @media (min-width: 1500px) {
    font-size: ${({ theme }) => theme.headingXL};
  }

  .yourturn_text--yellow {
    color: ${({ theme }) => theme.yellow};
    font-size: ${({ theme }) => theme.headingS};
    display: block;
    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.headingM};
    }
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingL};
    }
    @media (min-width: 1500px) {
      font-size: ${({ theme }) => theme.headingXL};
    }
  }

  .yourturn_text {
    font-size: ${({ theme }) => theme.headingS};
    display: block;
    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.headingM};
    }
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingL};
    }
    @media (min-width: 1500px) {
      font-size: ${({ theme }) => theme.headingXL};
    }
  }

  .yourturn_heading_wrapper {
    overflow: hidden;
  }
  .yourturn_heading_wrapper:nth-of-type(2) {
    margin-top: -3%;
  }
`;

const YourTurn = () => {
  const data = useStaticQuery(query);
  return (
    <SectionWrapper>
      <SectionContainer>
        <ImageWrapper>
          <GatsbyImage image={data.yourTurn.childImageSharp.gatsbyImageData} />
          <StyledHeading className="yourturn_anim_trigger">
            <div className="yourturn_heading_wrapper">
              <div
                className="yourturn_text--yellow"
                data-aos="title-down"
                data-aos-anchor=".yourturn_anim_trigger"
              >
                Teraz Twoja kolej!
              </div>
            </div>
            <div className="yourturn_heading_wrapper">
              <div
                className="yourturn_text"
                data-aos="title-down"
                data-aos-delay="200"
                data-aos-anchor=".yourturn_anim_trigger"
              >
                Opowiedz nam coś o sobie
              </div>
            </div>
          </StyledHeading>
        </ImageWrapper>
      </SectionContainer>
    </SectionWrapper>
  );
};

const query = graphql`
  {
    yourTurn: file(name: { eq: "your_turn" }) {
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

export default YourTurn;
