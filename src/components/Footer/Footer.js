import React from 'react';
import styled from 'styled-components';
import LogoPNG from '../../assets/images/logoPNG.png';
import Heading from '../atoms/Heading';
import { Link } from 'gatsby';
import FacebookSVG from '../../assets/svg/facebook.svg';
import YouTubeSVG from '../../assets/svg/youtube.svg';
import BehanceSVG from '../../assets/svg/behance.svg';
import TwitterSVG from '../../assets/svg/twitter.svg';
import Text from '../atoms/Text';
import HeartSVG from '../../assets/svg/copy_heart.svg';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.black};
  padding: 0 15px;

  &.isServicePage {
    margin-top: 300px;
  }
`;

const FooterContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 50px 0;
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

const WrapperOne = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 50px;

  @media (min-width: 1200px) {
    width: 25%;
    text-align: left;
  }
`;

const FooterLogo = styled.img`
  width: 30%;
  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const WrapperTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
  @media (min-width: 1200px) {
    width: 25%;
  }
`;

const FooterHeading = styled(Heading)`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.bodyS};
  margin-bottom: 20px;
  text-align: left;
  position: relative;
  z-index: 1020;

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: -2px;
    width: 25px;
    height: 10px;
    background-color: ${({ theme }) => theme.yellow};
    z-index: -1;
  }
`;

const FooterMenu = styled.ul``;

const FooterMenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 7px;
  }
  a {
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.bodyXS};
  }
  span {
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.bodyXS};
  }
`;

const WrapperThree = styled.div`
  margin-bottom: 50px;
  width: 100%;
  @media (min-width: 1200px) {
    width: 25%;
  }
`;

const WrapperFour = styled.div`
  margin-bottom: 50px;
  width: 100%;
  @media (min-width: 1200px) {
    width: 25%;
  }
`;

const WrapperFourContact = styled.div`
  margin-bottom: 50px;
`;

const WrapperFourSocials = styled.div``;

const ContactBoxWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ContactBoxItem = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;

  span {
    margin-left: 15px;
    font-family: ${({ theme }) => theme.fontFamilyText};
    font-weight: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.bodyXS};
    color: ${({ theme }) => theme.white};
  }

  &:nth-of-type(1) {
    margin-bottom: 15px;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  &:not(:last-child) {
    margin-right: 5%;
  }
`;

const CopyrightsContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0 30px 0;
  border-top: 1px solid ${({ theme }) => theme.white};

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    justify-content: flex-end;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const CopyrightsContent = styled(Text)`
  font-size: ${({ theme }) => theme.bodyXS};
  font-weight: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  white-space: nowrap;
  margin: 0;

  .copyrights--bold {
    font-weight: ${({ theme }) => theme.medium};
  }
  .copy_heart {
    display: inline-block;
    transform: translateY(25%);
    margin: 0 5px;
  }
`;

const Footer = ({ isServicePage }) => {
  return (
    <FooterWrapper className={isServicePage}>
      <FooterContainer>
        <WrapperOne>
          <FooterLogo src={LogoPNG} alt="Logo" />
        </WrapperOne>

        <WrapperTwo>
          <FooterHeading>O firmie</FooterHeading>
          <FooterMenu>
            <FooterMenuItem>
              <span>NO Project</span>
            </FooterMenuItem>
            <FooterMenuItem>
              <span>ul. Kochanowskiego 4</span>
            </FooterMenuItem>
            <FooterMenuItem>
              <span>09-300 Żuromin</span>
            </FooterMenuItem>
            <FooterMenuItem>
              <span>NIP: 511 028 42 19</span>
            </FooterMenuItem>
          </FooterMenu>
        </WrapperTwo>

        <WrapperTwo>
          <FooterHeading>Menu</FooterHeading>
          <FooterMenu>
            <FooterMenuItem>
              <Link to="/">Start</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/#oferta">Oferta</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/#poznaj-nas">Poznaj nas</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/kim-jestesmy">Kim jesteśmy</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/#kontakt">Kontakt</Link>
            </FooterMenuItem>
          </FooterMenu>
        </WrapperTwo>

        <WrapperThree>
          <FooterHeading>Oferta</FooterHeading>
          <FooterMenu>
            <FooterMenuItem>
              <Link to="/strategia">Strategia</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/branding">Branding</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/komunikacja">Komunikacja</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/reklama-w-internecie">Reklama</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/strony-sklepy-www">WWW</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/seo-i-optymalizacja">SEO</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/influencer-marketing">Influencer marketing</Link>
            </FooterMenuItem>
          </FooterMenu>
        </WrapperThree>
        <WrapperFour>
          <WrapperFourContact>
            <FooterHeading>Kontakt</FooterHeading>
            <ContactBoxWrapper>
              <ContactBoxItem href="mailto:m.gorska@onet.com.pl">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 41 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.3125 0.264648H4.3125C2.1125 0.264648 0.3325 2.06465 0.3325 4.26465L0.3125 28.2646C0.3125 30.4646 2.1125 32.2646 4.3125 32.2646H36.3125C38.5125 32.2646 40.3125 30.4646 40.3125 28.2646V4.26465C40.3125 2.06465 38.5125 0.264648 36.3125 0.264648ZM36.3125 8.26465L20.3125 18.2646L4.3125 8.26465V4.26465L20.3125 14.2646L36.3125 4.26465V8.26465Z"
                    fill="white"
                  />
                </svg>
                <span>m.gorska@onet.com.pl</span>
              </ContactBoxItem>
              <ContactBoxItem href="tel:513625502">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.1125 27.8705C35.3792 27.8705 32.7347 27.426 30.2681 26.626C29.4903 26.3594 28.6236 26.5594 28.0236 27.1594L24.5347 31.5372C18.2458 28.5372 12.3569 22.8705 9.22361 16.3594L13.5569 12.6705C14.1569 12.0483 14.3347 11.1816 14.0903 10.4038C13.2681 7.93715 12.8458 5.29271 12.8458 2.55938C12.8458 1.35938 11.8458 0.359375 10.6458 0.359375H2.95694C1.75694 0.359375 0.3125 0.892708 0.3125 2.55938C0.3125 23.2038 17.4903 40.3594 38.1125 40.3594C39.6903 40.3594 40.3125 38.9594 40.3125 37.7372V30.0705C40.3125 28.8705 39.3125 27.8705 38.1125 27.8705Z"
                    fill="white"
                  />
                </svg>

                <span>513 625 502</span>
              </ContactBoxItem>
            </ContactBoxWrapper>
          </WrapperFourContact>
          <WrapperFourSocials>
            <FooterHeading>Znajdź nas</FooterHeading>
            <SocialsWrapper>
              <SocialIcon href="fb.com">
                <img src={FacebookSVG} alt="" />
              </SocialIcon>
              <SocialIcon href="yt.com">
                <img src={YouTubeSVG} alt="" />
              </SocialIcon>
              <SocialIcon href="behance.com">
                <img src={BehanceSVG} alt="" />
              </SocialIcon>
              <SocialIcon href="twitter.com">
                <img src={TwitterSVG} alt="" />
              </SocialIcon>
            </SocialsWrapper>
          </WrapperFourSocials>
        </WrapperFour>
      </FooterContainer>
      <CopyrightsContainer>
        <CopyrightsContent>
          Stworzone z{' '}
          <span className="copy_heart">
            <img src={HeartSVG} alt="" />
          </span>{' '}
          przez <span className="copyrights--bold">Freelance Concept</span>
        </CopyrightsContent>
      </CopyrightsContainer>
    </FooterWrapper>
  );
};

export default Footer;
