import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';
import ContactForm from '../ContactForm/ContactForm';
import ZigzagSVG from '../../../assets/svg/zigzag.svg';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import scrollTo from '../../../utils/scrollTo';

const SectionWrapper = styled.section`
  padding: 0 15px;
  margin: 50px 0;
  background-color: ${({ theme }) => theme.yellow};
`;

const SectionContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 50px 0;
  position: relative;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    flex-direction: row;
    align-items: flex-start;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const SectionLeft = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 1200px) {
    width: 55%;
  }
`;
const SectionRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    width: 45%;
  }
`;
const StyledHeading = styled(Heading)`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 140px;
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
  }

  .contact_heading--top {
    font-size: ${({ theme }) => theme.headingS};
    margin-bottom: 10px;
  }
  .contact_heading--big {
    font-size: ${({ theme }) => theme.headingM};
    color: ${({ theme }) => theme.white};
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingL};
    }
  }
  .contact_heading--small {
    font-size: ${({ theme }) => theme.headingS};
    margin-left: 200px;
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingM};
      margin-left: 250px;
    }
  }
`;

const MobileText = styled(Text)`
  text-align: left;
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.bodyAlt};
  @media (min-width: 1200px) {
    display: none;
  }
`;

const ContactBox = styled.div`
  /*
  position: absolute;
  bottom: 0;
  left: 0;
  */
  padding: 100px 30px 30px 30px;
  background-color: ${({ theme }) => theme.black};
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 390px;
  //transform: translateY(100%);
  margin-bottom: -200px;
  position: relative;
  @media (min-width: 1200px) {
    display: flex;
  }
`;

const ContactBoxMobile = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 95%;
  height: 400px;
  //transform: translateY(50%);
  margin-bottom: -200px;
  margin-top: 100px;
  position: relative;

  @media (min-width: 1200px) {
    display: none;
  }
  div a:first-child {
    margin: 0 0 50px 0;
  }
`;

const ContactBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactBoxItem = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;

  span {
    font-family: ${({ theme }) => theme.fontFamilyHeading};
    font-size: ${({ theme }) => theme.bodyS};
    color: ${({ theme }) => theme.white};
  }

  &:nth-of-type(1) {
    margin: 25px 0;
  }
`;

const LightboxAuthorImg = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  justify-self: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  a > .gatsby-image-wrapper > img {
    position: absolute;
    top: -8%;
    left: 50%;
    transform: translateX(-50%);
    width: 110%;
    height: auto;
  }

  @media (min-width: 1200px) {
    width: 220px;
    height: 220px;
  }
`;

const ContactBoxText = styled(Text)`
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: ${({ theme }) => theme.bodyAlt};
`;

const TopRightSvg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%);
  width: 60%;

  @media (min-width: 1200px) {
    width: 20%;
  }
`;

const Contact = () => {
  const imageQuery = useStaticQuery(query);
  return (
    <SectionWrapper id="kontakt">
      <SectionContainer>
        <SectionLeft className="contact-anim--trigger">
          <StyledHeading>
            <span
              className="contact_heading--top"
              data-aos="fade-down"
              data-aos-anchor=".contact-anim--trigger"
            >
              Darmowa wycena
            </span>
            <span
              className="contact_heading--big"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor=".contact-anim--trigger"
            >
              Skontaktuj się
            </span>
            <span
              className="contact_heading--small"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor=".contact-anim--trigger"
            >
              z nami
            </span>
          </StyledHeading>
          <MobileText>
            Masz pytania?
            <br />
            Wypełnij formularz i daj nam 24h na odpowiedź!
            <br />
            Ewentualnie skontaktuj się z nami telefonicznie - porozmawiajmy o
            Twoich potrzebach
          </MobileText>
          <ContactBox>
            <ContactBoxWrapper>
              <ContactBoxText>
                Masz pytania?
                <br />
                Wypełnij formularz i daj nam 24h na odpowiedź!
                <br />
                Ewentualnie skontaktuj się z nami telefonicznie - porozmawiajmy
                o Twoich potrzebach
              </ContactBoxText>
              <LightboxAuthorImg>
                <Link to="/specjalisci/milena">
                  <GatsbyImage
                    image={imageQuery.milenaImg.childImageSharp.gatsbyImageData}
                    alt=""
                  />
                </Link>
              </LightboxAuthorImg>
              <ContactBoxItem href="mailto:m.gorska@onet.com.pl">
                <span>m.gorska@freelanceconcept.pl</span>
              </ContactBoxItem>
              <ContactBoxItem href="mailto:m.gorska@onet.com.pl">
                <span>513 625 502</span>
              </ContactBoxItem>
            </ContactBoxWrapper>
          </ContactBox>
        </SectionLeft>
        <SectionRight>
          <ContactForm />
          <ContactBoxMobile>
            <ContactBoxWrapper>
              <LightboxAuthorImg>
                <Link
                  to="/specjalisci/milena"
                  onClick={(e) => scrollTo(e, 'info', '/specjalisci/milena')}
                >
                  <GatsbyImage
                    image={imageQuery.milenaImg.childImageSharp.gatsbyImageData}
                    alt=""
                  />
                </Link>
              </LightboxAuthorImg>
              <ContactBoxItem href="mailto:m.gorska@freelanceconcept.pl">
                <span>m.gorska@freelanceconcept.pl</span>
              </ContactBoxItem>
              <ContactBoxItem href="tel:513625502">
                <span>513 625 502</span>
              </ContactBoxItem>
            </ContactBoxWrapper>
          </ContactBoxMobile>
        </SectionRight>
        <TopRightSvg src={ZigzagSVG} />
      </SectionContainer>
    </SectionWrapper>
  );
};

const query = graphql`
  {
    milenaImg: file(name: { eq: "milenaImg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          quality: 100
          formats: WEBP
          placeholder: NONE
        )
      }
    }
  }
`;

export default Contact;
