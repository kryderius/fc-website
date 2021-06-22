import React, { useEffect } from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';
import { Link } from 'gatsby';
import OfferTopLeftSVG from '../../../assets/svg/offer_top_left.svg';
import DotsTopRightSVG from '../../../assets/svg/dots_black.svg';
import { gsap } from 'gsap';

const SectionWrapper = styled.section`
  margin: 200px 0 0 0;
  padding: 0 15px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 2%;
    left: 0;
    width: 80vw;
    height: 29%;
    background-color: ${({ theme }) => theme.black};
    z-index: -1;

    @media (min-width: 1200px) {
      top: 10%;
      height: 60%;
    }
  }
`;

const SectionContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.yellow};
  padding: 100px 0 250px 0;
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

const SectionContainerBlocks = styled(SectionContainer)`
  background-color: transparent;
  padding: 0;
  transform: translateY(-162.5px);

  &::before {
    display: none;
  }
`;

const Title = styled.div`
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  display: flex;
  flex-direction: column;
`;

const BigHeading = styled.span`
  margin-right: 12%;
  font-size: ${({ theme }) => theme.headingM};
  color: ${({ theme }) => theme.white};
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingXL};
  }
`;

const SmallHeading = styled.span`
  margin-left: 12%;
`;

const Blocks = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Block = styled(Link)`
  position: relative;
  width: 280px;
  height: 325px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 40px 0 40px 0;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1),
    0px 4px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  p,
  svg,
  button {
    transition: all 0.2s cubic-bezier(0.5, 1, 0.89, 1);
  }

  &:hover {
    background-color: ${({ theme }) => theme.yellow};

    p {
      color: ${({ theme }) => theme.white};
    }

    .icon {
      transform: scale(130%) translateY(-50%);
    }
    button {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 320px) {
    width: 240px;
  }

  @media (min-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 50px;
    }
  }
`;

const StyledText = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  max-width: 200px;
  text-align: center;
  margin-top: 50px;
`;

const BlockBtn = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  outline: none;
  border: none;
  border-radius: 50px;
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.yellow};
`;

const BgText = styled.span`
  font-size: calc(80px + (150 - 40) * ((100vw - 300px) / (1600 - 300)));
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  position: absolute;
  top: -10%;
  left: 0;
  color: ${({ theme }) => theme.white};
  text-shadow: 0 0 32px rgba(0, 0, 0, 0.05);
  z-index: -2;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  @media (min-width: 1200px) {
    top: -30%;
  }
`;

const OfferTopLeft = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    display: block;
  }
`;
const OfferTopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, -50%);
  width: 116px;

  img {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 180px;
  }
  @media (min-width: 1400px) {
    width: 230px;
  }
`;

const Offer = () => {
  useEffect(() => {
    gsap.to('.offer-bg-text', {
      x: '10%',
      scrollTrigger: {
        trigger: '.offer-bg-text--trigger',
        scrub: true,
        start: 'top center',
        end: 'center 25%',
      },
    });
  }, []);

  return (
    <SectionWrapper id="czego-potrzebujesz" className="offer-bg-text--trigger">
      <BgText className="offer-bg-text">OFERTA</BgText>
      <SectionContainer>
        <OfferTopLeft>
          <img src={OfferTopLeftSVG} alt="" />
        </OfferTopLeft>
        <OfferTopRight>
          <img src={DotsTopRightSVG} alt="" />
        </OfferTopRight>
        <Title>
          <StyledHeading>
            <BigHeading data-aos="fade-down">Czego</BigHeading>{' '}
            <SmallHeading data-aos="fade-down" data-aos-delay="200">
              potrzebujesz?
            </SmallHeading>
          </StyledHeading>
        </Title>
      </SectionContainer>
      <SectionContainerBlocks>
        <Blocks className="blocks--trigger">
          <Block
            to="/#block1"
            data-aos="card-up"
            data-aos-anchor=".blocks--trigger"
          >
            <svg
              width="101"
              height="101"
              viewBox="0 0 101 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
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
                <path
                  d="M66.248 9.21094H69.8548V23.638H66.248V9.21094Z"
                  fill="black"
                />
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

            <StyledText>Chcę zbudować markę</StyledText>
            <BlockBtn>
              <svg
                width="19"
                height="31"
                viewBox="0 0 19 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow_right"
              >
                <path
                  d="M0.294922 3.30374L12.1279 15.1367L0.294922 26.9697L3.47842 30.1532L18.4949 15.1367L3.47842 0.120239L0.294922 3.30374Z"
                  fill="white"
                />
              </svg>
            </BlockBtn>
          </Block>
          <Block
            data-aos="card-up"
            data-aos-anchor=".blocks--trigger"
            data-aos-delay="200"
          >
            <svg
              width="101"
              height="101"
              viewBox="0 0 101 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
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

            <StyledText>Chcę więcej sprzedawać</StyledText>
            <BlockBtn>
              <svg
                width="19"
                height="31"
                viewBox="0 0 19 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow_right"
              >
                <path
                  d="M0.294922 3.30374L12.1279 15.1367L0.294922 26.9697L3.47842 30.1532L18.4949 15.1367L3.47842 0.120239L0.294922 3.30374Z"
                  fill="white"
                />
              </svg>
            </BlockBtn>
          </Block>
          <Block
            data-aos="card-up"
            data-aos-anchor=".blocks--trigger"
            data-aos-delay="400"
          >
            <svg
              width="101"
              height="100"
              viewBox="0 0 101 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
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

            <StyledText>Zadbajcie o mój wizerunek</StyledText>
            <BlockBtn>
              <svg
                width="19"
                height="31"
                viewBox="0 0 19 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow_right"
              >
                <path
                  d="M0.294922 3.30374L12.1279 15.1367L0.294922 26.9697L3.47842 30.1532L18.4949 15.1367L3.47842 0.120239L0.294922 3.30374Z"
                  fill="white"
                />
              </svg>
            </BlockBtn>
          </Block>
        </Blocks>
      </SectionContainerBlocks>
    </SectionWrapper>
  );
};

export default Offer;
