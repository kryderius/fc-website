import React, { useEffect } from 'react';
import Layout from '../templates/Layout';
import styled from 'styled-components';
import SubPageHeader from '../components/SubPageHeader/SubPageHeader';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import HeaderIMG from '../assets/images/about_us_header.jpg';
import RectangleSVG from '../assets/svg/about_us_rectangle.svg';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import CoopSVG from '../assets/svg/about_us_coop.svg';
import MeetUs from '../components/organisms/MeetUs/MeetUs';
import FullOffer from '../components/organisms/FullOffer/FullOffer';
import Contact from '../components/organisms/Contact/Contact';
import Footer from '../components/Footer/Footer';

const MainHeading = styled(Heading)`
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.headingM};

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
  }
  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.headingXL};
  }

  .mainHeading--yellow {
    color: ${({ theme }) => theme.yellow};
  }
`;

const MainText = styled(Text)`
  color: ${({ theme }) => theme.white};
  margin-top: 50px;
`;

const GoalSection = styled.section``;

const GoalContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 200px 15px 100px 15px;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    flex-direction: row;
    padding: 200px 15px 300px 15px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const ImageLeft = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 1200px) {
    width: 50%;
  }

  .rectangle--svg {
    width: 55%;
  }

  .about_us_phone {
    position: absolute;
    width: 40%;
    bottom: -55%;
    right: 20%;
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

const TextRight = styled.div`
  width: 100%;
  margin-bottom: 100px;

  @media (min-width: 1200px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const GoalHeading = styled(Heading)`
  display: block;
  text-align: left;
  margin-bottom: 100px;
  line-height: 100%;

  .goal_heading--yellow {
    margin-left: 15%;
    color: ${({ theme }) => theme.yellow};
    font-size: ${({ theme }) => theme.headingL};
    display: block;

    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingXL};
    }
  }

  .goal_heading--black {
    display: block;
    font-size: ${({ theme }) => theme.headingM};
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingL};
    }
  }
`;

const GoalText = styled(Text)`
  text-align: left;
`;

const LampSection = styled.section``;

const LampContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 15px 100px 15px;

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

  .gatsby-image-wrapper {
    width: 50%;

    @media (min-width: 1200px) {
      width: auto;
    }
  }
`;

const LampText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%;
`;

const LampHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.headingM};
  margin-bottom: 50px;

  span {
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
  }

  .lamp_heading--yellow {
    color: ${({ theme }) => theme.yellow};
  }
`;

const LampParagraph = styled(Text)`
  margin-bottom: 100px;
  width: 100%;
  max-width: 800px;
`;

const LampBlocks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const FeatureBox = styled.div`
  width: 280px;
  height: 280px;
  background: #ffffff;
  box-shadow: 0px 5px 45px 1px rgba(0, 0, 0, 0.13);
  border-radius: 50px 0px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:not(:last-child) {
    margin-bottom: 50px;
  }

  @media (min-width: 1200px) {
    width: 316px;
    height: 316px;

    &:not(:last-child) {
      margin-right: 100px;
      margin-bottom: 0;
    }
  }

  svg path {
    fill: ${({ theme }) => theme.yellow};
  }

  svg {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover {
    box-shadow: 0px 5px 45px 1px rgba(0, 0, 0, 0.2);

    svg {
      transform: scale(1.3);
    }
  }
`;

const BoxTitle = styled(Heading)`
  font-size: ${({ theme }) => theme.headingS};
  text-align: left;
`;

const HowWeWorkSection = styled.section`
  background-color: ${({ theme }) => theme.yellow};
  position: relative;
  margin-bottom: 100px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-color: ${({ theme }) => theme.white};
  }
`;

const HowWeWorkContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 15px 100px 15px;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    flex-direction: row;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const HowWeWorkLeft = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 1200px) {
    width: 50%;
    text-align: left;
  }
`;

const HowWeWorkRight = styled.div`
  width: 100%;
  margin-top: 100px;

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const HowWeWorkHeading = styled(Heading)`
  text-align: left;
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.headingM};
  span {
    color: ${({ theme }) => theme.white};
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
  }
`;

const HowWeWorkText = styled(Text)`
  text-align: left;
`;

const CoopSection = styled.section``;

const CoopContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 100px 15px;

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

const CoopLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const CoopRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const CoopImage = styled.div`
  display: none;
  text-align: center;
  margin-top: 100px;

  @media (min-width: 1200px) {
    display: block;
  }
  img {
    width: 70%;
  }
`;

const CoopHeading = styled(Heading)`
  text-align: left;
  font-size: ${({ theme }) => theme.headingM};
  margin-bottom: 100px;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
    margin-bottom: 0;
  }
  span {
    color: ${({ theme }) => theme.yellow};
  }
`;

const CoopBlock = styled.div`
  width: 100%;
  height: 240px;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 0px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const CoopBlockNumber = styled(Text)`
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  text-align: left;
  font-size: ${({ theme }) => theme.headingL};
  margin: 0 0 20px 0;
  line-height: 100%;
`;

const CoopBlockTitle = styled(Text)`
  color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  text-align: left;
  font-size: ${({ theme }) => theme.headingS};
  margin: 0 0 20px 0;
`;

const CoopBlockText = styled(Text)`
  color: ${({ theme }) => theme.black};
  text-align: left;
  margin: 0;
`;

const Pencil = () => {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M45.145 92.1664H54.8922L57.8136 86.7562H42.2217L45.145 92.1664Z"
          fill="black"
        />
        <path
          d="M41.001 32.6548H48.2144V83.1494H41.001V32.6548Z"
          fill="black"
        />
        <path
          d="M15.9014 12.9296C28.9469 13.943 30.1805 25.5189 30.2365 29.0482H35.5907V3.8009H24.7705C18.5054 3.8009 16.4894 8.76378 15.9014 12.9296Z"
          fill="black"
        />
        <path
          d="M51.8213 32.6548H59.0347V83.1494H51.8213V32.6548Z"
          fill="black"
        />
        <path
          d="M50.8151 99.7207L52.9468 95.7731H47.0947L49.2281 99.7207C49.3855 100.012 49.6903 100.194 50.0216 100.194C50.353 100.194 50.6577 100.012 50.8151 99.7207Z"
          fill="black"
        />
        <path
          d="M82.4788 0.194092H75.2653C74.2694 0.194092 73.4619 1.00141 73.4619 1.9975V30.8516C73.4619 31.8475 74.2692 32.655 75.2653 32.655H82.4788C83.4747 32.655 84.2822 31.8477 84.2822 30.8516V1.9975C84.2822 1.00141 83.4749 0.194092 82.4788 0.194092Z"
          fill="black"
        />
        <path d="M66.248 9.21094H69.8548V23.638H66.248V9.21094Z" fill="black" />
        <path
          d="M59.0343 3.8009H39.1973V29.0482H62.6412V7.40752C62.6412 5.41575 61.0263 3.8009 59.0343 3.8009ZM57.2309 11.0143H44.6073C43.6114 11.0143 42.8039 10.207 42.8039 9.21093C42.8039 8.21484 43.6112 7.40752 44.6073 7.40752H57.2309C58.2268 7.40752 59.0343 8.21484 59.0343 9.21093C59.0343 10.207 58.227 11.0143 57.2309 11.0143Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="100"
            height="100"
            fill="white"
            transform="translate(0.0917969 0.194092)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const MoneyBag = () => {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M38.416 100.984C47.0571 100.984 53.7473 100.157 59.1138 98.4659C59.0001 97.8556 58.9238 97.2315 58.9238 96.5891C58.9238 93.7189 60.1171 91.128 62.0244 89.2649C60.1171 87.4018 58.9238 84.8109 58.9238 81.9407C58.9238 79.0705 60.1171 76.4796 62.0244 74.6165C60.1171 72.7534 58.9238 70.1624 58.9238 67.2922C58.9238 64.4221 60.1171 61.8311 62.0244 59.968C60.1171 58.1049 58.9238 55.514 58.9238 52.6438C58.9238 49.2533 60.5977 46.2649 63.1421 44.3972C61.3996 42.8019 59.538 41.3721 57.5849 40.114C58.3783 39.1146 58.9238 37.9053 58.9238 36.5305C58.9238 33.2941 56.3008 30.6711 53.0645 30.6711H23.7676C20.5312 30.6711 17.9082 33.2941 17.9082 36.5305C17.9082 37.9023 18.4522 39.1077 19.2411 40.1057C7.86716 47.4329 0.134766 60.7012 0.134766 74.6165C0.134766 98.2516 22.0655 100.984 38.416 100.984ZM38.3847 72.5451C33.5378 72.5451 29.5957 68.603 29.5957 63.756C29.5957 59.9299 32.0676 56.7019 35.4863 55.4972V51.179C35.4863 49.56 36.7971 48.2493 38.416 48.2493C40.035 48.2493 41.3457 49.56 41.3457 51.179V55.517C44.7324 56.7385 47.1738 59.9535 47.1738 63.756C47.1738 65.3757 45.8631 66.6857 44.2441 66.6857C42.6244 66.6857 41.3144 65.3757 41.3144 63.756C41.3144 62.1393 40.0006 60.8263 38.3847 60.8263C36.7681 60.8263 35.455 62.1393 35.455 63.756C35.455 65.3727 36.7681 66.6857 38.3847 66.6857C43.2309 66.6857 47.1738 70.6286 47.1738 75.4748C47.1738 79.2773 44.7324 82.4923 41.3457 83.7145V86.3352C41.3457 87.9542 40.035 89.2649 38.416 89.2649C36.7971 89.2649 35.4863 87.9542 35.4863 86.3352V83.7336C32.0676 82.5297 29.5957 79.3009 29.5957 75.4748C29.5957 73.8558 30.9056 72.5451 32.5254 72.5451C34.1443 72.5451 35.455 73.8558 35.455 75.4748C35.455 77.0914 36.7681 78.4044 38.3847 78.4044C40.0006 78.4044 41.3144 77.0914 41.3144 75.4748C41.3144 73.8581 40.0006 72.5451 38.3847 72.5451Z"
          fill="black"
        />
        <path
          d="M95.7402 92.1946H69.1777C66.7508 92.1946 64.7832 94.1622 64.7832 96.5891C64.7832 99.016 66.7508 100.984 69.1777 100.984H95.7402C98.1671 100.984 100.135 99.016 100.135 96.5891C100.135 94.1622 98.1671 92.1946 95.7402 92.1946Z"
          fill="black"
        />
        <path
          d="M95.7402 77.5461H69.1777C66.7508 77.5461 64.7832 79.5138 64.7832 81.9407C64.7832 84.3676 66.7508 86.3352 69.1777 86.3352H95.7402C98.1671 86.3352 100.135 84.3676 100.135 81.9407C100.135 79.5138 98.1671 77.5461 95.7402 77.5461Z"
          fill="black"
        />
        <path
          d="M95.7402 62.8977H69.1777C66.7508 62.8977 64.7832 64.8653 64.7832 67.2922C64.7832 69.7191 66.7508 71.6868 69.1777 71.6868H95.7402C98.1671 71.6868 100.135 69.7191 100.135 67.2922C100.135 64.8653 98.1671 62.8977 95.7402 62.8977Z"
          fill="black"
        />
        <path
          d="M95.7402 48.2493H69.1777C66.7508 48.2493 64.7832 50.2169 64.7832 52.6438C64.7832 55.0707 66.7508 57.0383 69.1777 57.0383H95.7402C98.1671 57.0383 100.135 55.0707 100.135 52.6438C100.135 50.2169 98.1671 48.2493 95.7402 48.2493Z"
          fill="black"
        />
        <path
          d="M46.6657 6.84302C45.4519 3.44031 42.2308 0.983643 38.4161 0.983643C34.5968 0.983643 31.3383 3.43268 30.1275 6.84302H20.8379C19.8965 6.84302 19.0122 7.29468 18.4606 8.05914C17.9113 8.82285 17.7595 9.80704 18.0601 10.6997L22.6339 24.8118H54.199L58.772 10.6997C59.0726 9.80704 58.9208 8.82285 58.3715 8.05914C57.8199 7.29468 56.9356 6.84302 55.9942 6.84302H46.6657Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="100"
            height="100"
            fill="white"
            transform="translate(0.134766 0.983643)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const Tools = () => {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M33.9443 28.5715H41.0871V39.2858H33.9443V28.5715Z"
          fill="black"
        />
        <path
          d="M44.6582 28.5715H50.0154V39.2858H44.6582V28.5715Z"
          fill="black"
        />
        <path
          d="M42.8721 25H49.4186L49.415 24.9928L43.4668 16.0715H31.5631L25.615 24.9928L25.6113 25H32.1578H42.8721Z"
          fill="black"
        />
        <path
          d="M36.0301 9.37153L33.9443 12.5H41.0871L39.0014 9.37153C38.6701 8.87485 38.1127 8.57642 37.5156 8.57642C36.9187 8.57642 36.3611 8.87485 36.0301 9.37153Z"
          fill="black"
        />
        <path
          d="M53.5871 26.9732V39.2857H75.0156V35.7143H73.2299C72.2438 35.7143 71.4441 34.9148 71.4441 33.9285C71.4441 32.9422 72.2436 32.1428 73.2299 32.1428H75.0156V28.5713H71.4441C70.458 28.5713 69.6584 27.7719 69.6584 26.7855C69.6584 25.7992 70.4578 24.9998 71.4441 24.9998H75.0156V21.4283H73.2299C72.2438 21.4283 71.4441 20.6289 71.4441 19.6426C71.4441 18.6562 72.2436 17.8568 73.2299 17.8568H75.0156V14.2857H71.4441C70.458 14.2857 69.6584 13.4863 69.6584 12.5C69.6584 11.5137 70.4578 10.7143 71.4441 10.7143H75.0156V7.14277H73.2299C72.2438 7.14277 71.4441 6.34336 71.4441 5.35703C71.4441 4.3707 72.2436 3.57129 73.2299 3.57129H75.0156V1.78574C75.0156 0.799609 74.2162 0 73.2299 0H51.8014C50.8152 0 50.0156 0.799414 50.0156 1.78574V19.4643L52.3871 23.0215C53.1689 24.1912 53.5865 25.5662 53.5871 26.9732Z"
          fill="black"
        />
        <path
          d="M41.0865 83.9285C42.0728 83.9285 42.8723 83.129 42.8723 82.1428C42.8723 81.1566 42.0728 80.3571 41.0865 80.3571C40.1003 80.3571 39.3008 81.1566 39.3008 82.1428C39.3008 83.129 40.1003 83.9285 41.0865 83.9285Z"
          fill="black"
        />
        <path
          d="M41.0871 69.6428C42.0732 69.6428 42.8729 68.8434 42.8729 67.857V50H25.0156V73.2143C25.0156 74.2004 25.815 75 26.8014 75C27.7875 75 28.5871 74.2006 28.5871 73.2143V66.0715C28.5871 63.1129 30.9855 60.7143 33.9443 60.7143C36.9029 60.7143 39.3016 63.1127 39.3016 66.0715V67.8572C39.3014 68.8434 40.101 69.6428 41.0871 69.6428Z"
          fill="black"
        />
        <path
          d="M85.7295 42.8572H16.0865C15.1004 42.8572 14.3008 43.6566 14.3008 44.6429C14.3008 45.6293 15.1002 46.4287 16.0865 46.4287H85.7293C86.7154 46.4287 87.515 45.6293 87.515 44.6429C87.515 43.6566 86.7156 42.8572 85.7295 42.8572Z"
          fill="black"
        />
        <path
          d="M46.4436 67.8572C46.4436 70.8158 44.0451 73.2145 41.0863 73.2145C38.1275 73.2145 35.7291 70.816 35.7291 67.8572V66.0715C35.7291 65.0854 34.9297 64.2857 33.9434 64.2857C32.957 64.2857 32.1578 65.0852 32.1578 66.0715V73.2143C32.1578 76.1728 29.7594 78.5715 26.8006 78.5715C23.842 78.5715 21.4434 76.173 21.4434 73.2143V50H17.8721V91.0715C17.8779 96.0002 21.8721 99.9941 26.8006 100H73.2291C78.1578 99.9941 82.1517 96.0002 82.1576 91.0715V50H46.4436V67.8572ZM41.0863 87.5C38.1277 87.5 35.7291 85.1016 35.7291 82.1428C35.7291 79.184 38.1275 76.7855 41.0863 76.7855C44.0451 76.7855 46.4436 79.184 46.4436 82.1428C46.4436 85.1016 44.0451 87.5 41.0863 87.5Z"
          fill="black"
        />
        <path
          d="M25.0156 28.5715H30.3729V39.2858H25.0156V28.5715Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="100"
            height="100"
            fill="white"
            transform="translate(0.908203)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const CoopItems = [
  {
    number: 1,
    name: 'Wywiad',
    desc:
      'Przeprowadzamy szczegółowy wywiad, by poznać Twoje preferencje oraz ustalić mierzalne cele do zdobycia.',
  },
  {
    number: 2,
    name: 'Oferta',
    desc:
      'Na podstawie zebranych informacji i przedstawiamy kompleksową ofertę, odpowiadającą potrzebom klienta.',
  },
  {
    number: 3,
    name: 'Formalności',
    desc:
      'Po procesie akceptacji oferty przychodzi czas na formalności - tutaj szczegółowo omawiamy warunki współpracy oraz podpisujemy umowę.',
  },
  {
    number: 4,
    name: 'Planowanie',
    desc:
      'To podstawa. Nasi klienci otrzymują pełny harmonogram działań, dzięki czemu wiedzą, w jakim czasie otrzymają poszczególne etapy projektu. Tworzymy dedykowany zespół dla klienta.',
  },
  {
    number: 5,
    name: 'Wdrożenie',
    desc:
      'Praca wre! Realizujemy wcześniej określone założenia. W zależności od specyfiki projektu nasi klienci otrzymują zarówno tygodniowe podsumowania działań w ramach projektu, jak i comiesięczne raporty i rekomendacje.',
  },
];

const KimJestesmy = () => {
  const images = useStaticQuery(query);

  useEffect(() => {
    gsap.to('.about_us_phone', 10, {
      y: '-20%',
      scrollTrigger: {
        trigger: '.about_us_phone--trigger',
        scrub: true,
        start: 'top 75%',
        end: 'bottom 25%',
      },
    });
  }, []);

  return (
    <Layout title="Kim jesteśmy i co robimy">
      <SubPageHeader background={HeaderIMG}>
        <MainHeading data-aos="fade-up">
          Kim <span className="mainHeading--yellow">jesteśmy</span>
        </MainHeading>
        <MainText data-aos="fade-up" data-aos-delay="200">
          Dowiedz się po co powstaliśmy i jaki jest nasz cel.
        </MainText>
      </SubPageHeader>
      <GoalSection>
        <GoalContainer>
          <ImageLeft className="about_us_phone--trigger">
            <img src={RectangleSVG} alt="" className="rectangle--svg" />
            <GatsbyImage
              image={images.aboutUsPhone.childImageSharp.gatsbyImageData}
              alt=""
              className="about_us_phone"
            />
          </ImageLeft>
          <TextRight>
            <GoalHeading className="about_us_goal--trigger">
              <span
                className="goal_heading--black"
                data-aos="fade-down"
                data-aos-anchor=".about_us_goal--trigger"
              >
                Jaki jest
              </span>
              <span
                className="goal_heading--yellow"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-anchor=".about_us_goal--trigger"
              >
                nasz cel?
              </span>
            </GoalHeading>
            <GoalText>
              Naszym celem jest maksymalizacja Twojego zysku. To znaczy, że
              freelance concept to efektywne i kompleksowe wsparcie marketingowe
              Twojego biznesu w Internecie.
              <br />
              <br />
              FREELANCE CONCEPT
              <br />
              Jesteśmy grupą freelancerów aktywnie działających w różnych
              sferach marketingu. Wspólnie pracujemy na Twój sukces. Znajdziesz
              wśród nas zarówno władców deadline’ów, jak i wirtuozów sztuki
              wizualnej, miłośników psychologii osobowości czy tych, którzy
              najlepiej porozumiewają się z… liczbami ;). To wszystko sprawia,
              że nasza obietnica wartości jest uzasadniona - patrzymy na Twój
              problem z każdej możliwej perspektywy, by wdrożyć najlepsze
              rozwiązania w Twojej sytuacji.
              <br />
              <br />
              Cenimy szeroko pojętą równowagę w życiu, dlatego łączymy przyjemne
              z pożytecznym - współpracujemy ze sobą zdalnie, ponieważ dzięki
              temu ograniczenia lokalizacyjne dla nas nie istnieją, a co
              ważniejsze - Internet jest dla nas naturalnym środowiskiem :)
            </GoalText>
          </TextRight>
        </GoalContainer>
      </GoalSection>
      <LampSection>
        <LampContainer>
          <GatsbyImage
            image={images.aboutUsLamp.childImageSharp.gatsbyImageData}
            alt=""
          />
          <LampText>
            <LampHeading className="lamp_heading--trigger">
              <span
                className="lamp_heading--yellow"
                data-aos="zoom-in-down"
                data-aos-anchor=".lamp_heading--trigger"
              >
                Rozświetlimy
              </span>{' '}
              <span
                data-aos="fade-up"
                data-aos-anchor=".lamp_heading--trigger"
                data-aos-delay="200"
              >
                Twoją markę w sieci!
              </span>
            </LampHeading>
            <LampParagraph>
              Prężnie działasz w swojej branży, świetnie znasz swoich klientów.
              Dlatego doskonale zdajesz sobie sprawę, że obecność w Internecie
              to już nieodłączny element Twojej zawodowej aktywności… ba! Często
              to podstawa funkcjonowania. Nawet masz własną stronę, cyklicznie
              publikujesz treści, ale… coś nie działa, nie przynosi to
              oczekiwanych rezultatów?
              <br />
              <br />
              <b>Jeśli tak - to jesteś we właściwym miejscu!</b>
              <br />
              <br />
              Wiemy, jak komunikować się z Twoimi klientami oraz jak
              konsekwentnie dotrzeć do tych potencjalnych. Szczegółowo
              definiujemy Twoich klientów: poznajemy ich specyfikę, potrzeby
              oraz preferencje. Dzięki temu wiemy, gdzie ich szukać i jak
              rozmawiać, by Twoja marka osiągnęła założone cele. W zależności od
              tego, co dokładnie chcesz osiągnąć - opracowujemy strategię
              marketingową, w ramach której m.in. przeprowadzamy szczegółowy
              audyt dotychczasowych działań, komunikację Twojej konkurencji,
              badamy potencjał a przede wszystkim - dostarczamy zestaw narzędzi
              marketingowych, które pozwolą nam spełnić Twoje oczekiwania
              biznesowe.
            </LampParagraph>
            <LampBlocks className="box-anim--trigger">
              <FeatureBox
                data-aos-anchor=".box-anim--trigger"
                data-aos="fade-up"
              >
                <BoxTitle as="h5">
                  Budowa <br /> świadomości
                </BoxTitle>
                <Pencil />
              </FeatureBox>
              <FeatureBox
                data-aos-anchor=".box-anim--trigger"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <BoxTitle as="h5">
                  Wzrost
                  <br /> sprzedaży
                </BoxTitle>
                <MoneyBag />
              </FeatureBox>
              <FeatureBox
                data-aos-anchor=".box-anim--trigger"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <BoxTitle as="h5">
                  Tworzenie <br /> wizerunku
                </BoxTitle>
                <Tools />
              </FeatureBox>
            </LampBlocks>
          </LampText>
        </LampContainer>
      </LampSection>
      <HowWeWorkSection>
        <HowWeWorkContainer>
          <HowWeWorkLeft data-aos="fade-down">
            <GatsbyImage
              image={images.aboutUsWhatWeDo.childImageSharp.gatsbyImageData}
              alt=""
            />
          </HowWeWorkLeft>
          <HowWeWorkRight>
            <HowWeWorkHeading data-aos="fade-down">
              <span>Jak</span> działamy?
            </HowWeWorkHeading>
            <HowWeWorkText>
              <b>Szybko - Sprawnie - Efektywnie</b>
              <br />
              <br />
              Na dobry początek poznajemy Twoje potrzeby i oczekiwania, by na
              tej podstawie dokładnie określić sytuację, w której znajduje się
              Twoja firma oraz wyznaczyć kamienie milowe - które realnie
              pomożemy Ci osiągnąć. Każdy nowy projekt jest dla nas fascynującym
              światem danych, które możemy przetworzyć i przekuć w kolejny
              sukces.
            </HowWeWorkText>
          </HowWeWorkRight>
        </HowWeWorkContainer>
      </HowWeWorkSection>
      <CoopSection>
        <CoopContainer>
          <CoopLeft>
            <CoopImage>
              <img src={CoopSVG} alt="" />
            </CoopImage>
            <CoopHeading data-aos="fade-down">
              Jak wygląda przebieg <br />
              <span>współpracy?</span>
            </CoopHeading>
          </CoopLeft>
          <CoopRight className="coop_block--trigger">
            {CoopItems.map((item, index) => (
              <CoopBlock
                key={index}
                data-aos="fade-left"
                data-aos-delay={`${index * 2}00`}
                data-aos-anchor=".coop_block--trigger"
              >
                <CoopBlockNumber>{`${item.number}.`}</CoopBlockNumber>
                <CoopBlockTitle>{item.name}</CoopBlockTitle>
                <CoopBlockText>{item.desc}</CoopBlockText>
              </CoopBlock>
            ))}
          </CoopRight>
        </CoopContainer>
      </CoopSection>
      <MeetUs />
      <FullOffer />
      <Contact />
      <Footer isServicePage="isServicePage" />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    aboutUsPhone: file(name: { eq: "about_us_phone" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE, quality: 100)
      }
    }
    aboutUsLamp: file(name: { eq: "about_us_lamp" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE, quality: 100)
      }
    }
    aboutUsWhatWeDo: file(name: { eq: "about_us_whatwedo" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE, quality: 100)
      }
    }
  }
`;

export default KimJestesmy;
