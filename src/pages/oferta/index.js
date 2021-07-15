import React, { useState, useEffect } from 'react';
import SubPageHeader from '../../components/SubPageHeader/SubPageHeader';
import Layout from '../../templates/Layout';
import Heading from '../../components/atoms/Heading';
import styled from 'styled-components';
import Text from '../../components/atoms/Text';
//import offerItems from '../../components/organisms/FullOffer/offerItems';
import Button from '../../components/atoms/Button';
import DotsYellowSVG from '../../assets/svg/dots_yellow.svg';
import HeaderImg from '../../assets/images/FullOffer_Header.jpg';
import Footer from '../../components/Footer/Footer';
import { graphql } from 'gatsby';

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

const ButtonsContainer = styled.div`
  position: relative;
  max-width: 540px;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px 100px 15px;

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

const OfferItemsContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 15px;
  position: relative;

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(13, 250px);
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const DotsYellow = styled.img`
  display: none;
  position: absolute;
  top: 0;
  left: 40%;
  z-index: 1001;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const FilterButton = styled.button`
  color: ${({ theme }) => theme.black};
  border: 2px solid ${({ theme }) => theme.black};
  background-color: transparent;
  border-radius: 50px;
  padding: 10px 20px;
  width: 100%;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);

  &:not(:last-child) {
    margin-bottom: 50px;

    @media (min-width: 1200px) {
      margin-bottom: 0;
      margin-right: 50px;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.black};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

    p {
      color: ${({ theme }) => theme.white};
    }
  }

  &.btn--active {
    background-color: ${({ theme }) => theme.black};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    p {
      color: ${({ theme }) => theme.yellow};
    }
  }
`;

const OfferBox = styled.div`
  width: 100%;
  max-width: 345px;
  height: 510px;
  background-color: ${({ theme }) => theme.black};
  margin-bottom: 50px;
  box-shadow: 0px 4px 16px rgba(17, 17, 26, 0.05),
    0px 8px 32px rgba(17, 17, 26, 0.05);

  z-index: 1060;
  @media (min-width: 1200px) {
    max-width: unset;
    height: 100%;
    margin-bottom: 0;

    &:first-child {
      grid-area: 1 / 1 / 4 / 2;
    }
    &:nth-of-type(2) {
      grid-area: 2 / 2 / 5 / 3;
    }
    &:nth-of-type(3) {
      grid-area: 4 / 1 / 7 / 2;
    }
    &:nth-of-type(4) {
      grid-area: 5 / 2 / 8 / 3;
    }
    &:nth-of-type(5) {
      grid-area: 7 / 1 / 10 / 2;
    }
    &:nth-of-type(6) {
      grid-area: 8 / 2 / 11 / 3;
    }
    &:nth-of-type(7) {
      grid-area: 10 / 1 / 13 / 2;
    }
  }
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
`;

const OfferBoxHeading = styled(Heading)`
  color: ${({ theme }) => theme.yellow};
  font-size: ${({ theme }) => theme.headingS};
  text-align: left;
  margin-bottom: 30px;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingM};
  }
`;

const OfferBoxImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 45%;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: auto;
    transform: translate(-50%, -50%);
  }
`;

const OfferBoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
`;

const OfferTextBold = styled(Text)`
  font-weight: ${({ theme }) => theme.medium};
  text-align: left;
  font-size: ${({ theme }) => theme.bodyXS};
  color: ${({ theme }) => theme.white};
  margin: 0 0 15px 0;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.bodyS};
  }
`;

const OfferTextThin = styled(Text)`
  text-align: left;
  font-size: ${({ theme }) => theme.bodyXS};
  color: ${({ theme }) => theme.white};
  margin: 0;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.bodyS};
  }
`;

const ButtonsText = styled(Text)`
  font-size: ${({ theme }) => theme.bodyXS};
  position: absolute;
  top: -15%;
  left: 0;
  margin: 0;
  padding-left: 15px;
`;

const BottomText = styled.div`
  @media (min-width: 1200px) {
    grid-area: 11 / 2 / 14 / 3;
    padding-left: 10%;
  }

  p {
    text-align: left;
    margin: 50px 0;
  }
`;

const BottomTextHeading = styled(Heading)`
  text-align: left;
  display: block;

  span {
    display: block;
  }

  .text--yellow {
    color: ${({ theme }) => theme.yellow};
  }
`;

const OurOffer = ({ location, data }) => {
  const [isActiveFilter, setActiveFilter] = useState();
  const [activeButton, setActiveButton] = useState();

  //const offerItems = useStaticQuery(query);

  const handleButtonChange = (e) => {
    if (isActiveFilter === e) {
      setActiveFilter('all');
      setActiveButton('all');
    } else {
      setActiveFilter(e);
      setActiveButton(e);
    }
  };

  useEffect(() => {
    if (location.state.activeFilter === 'mark') {
      setActiveFilter('mark');
      setActiveButton('mark');
    } else if (location.state.activeFilter === 'earning') {
      setActiveFilter('earning');
      setActiveButton('earning');
    } else if (location.state.activeFilter === 'image') {
      setActiveFilter('image');
      setActiveButton('image');
    }
  }, []);

  return (
    <Layout>
      <SubPageHeader background={HeaderImg}>
        <MainHeading data-aos="fade-up">
          Pakiety <span className="mainHeading--yellow">usług</span>
        </MainHeading>
        <MainText data-aos="fade-up" data-aos-delay="200">
          Sprawdź co możemy dla Ciebie zrobić
        </MainText>
      </SubPageHeader>
      <ButtonsContainer>
        <ButtonsText>
          Wybierz interesujący Cię cel, aby poznać pakiet usług
        </ButtonsText>
        <FilterButton
          onClick={(e) => handleButtonChange('mark')}
          className={activeButton === 'mark' && 'btn--active'}
        >
          <ButtonText>Chcę zbudować markę</ButtonText>
        </FilterButton>
        <FilterButton
          onClick={(e) => handleButtonChange('earning')}
          className={activeButton === 'earning' && 'btn--active'}
        >
          <ButtonText>Chcę więcej sprzedawać</ButtonText>
        </FilterButton>
        <FilterButton
          onClick={(e) => handleButtonChange('image')}
          className={activeButton === 'image' && 'btn--active'}
        >
          <ButtonText>Zadbajcie o mój wizerunek</ButtonText>
        </FilterButton>
      </ButtonsContainer>
      <OfferItemsContainer>
        {data.allDatoCmsService.edges
          .filter((item, index) => {
            if (!isActiveFilter) {
              return true;
            } else if (item.node.categoryFilter.includes(isActiveFilter)) {
              return true;
            } else if (isActiveFilter === 'all') {
              return true;
            }
            return false;
          })
          .map((item, index) => {
            return (
              <OfferBox key={index}>
                <OfferBoxImageWrapper>
                  <img
                    src={
                      require(`../../assets/images/${item.node.image}.jpg`)
                        .default
                    }
                    alt={item.name}
                  />
                </OfferBoxImageWrapper>
                <OfferBoxText>
                  <OfferBoxHeading as="h4">{item.node.name}</OfferBoxHeading>
                  <OfferTextBold>{item.node.shortDesc}</OfferTextBold>
                  <OfferTextThin>{item.node.longDesc}</OfferTextThin>
                  <Button
                    link={`/${item.node.slug}`}
                    color="yellow"
                    size="btn--offer"
                  >
                    SPRAWDŹ
                  </Button>
                </OfferBoxText>
              </OfferBox>
            );
          })}
        {/*offerItems
          .filter((item, index) => {
            if (!isActiveFilter) {
              return true;
            } else if (item.categoryFilter.includes(isActiveFilter)) {
              return true;
            } else if (isActiveFilter === 'all') {
              return true;
            }
            return false;
          })
          .map((item, index) => {
            return (
              <OfferBox key={index}>
                <OfferBoxImageWrapper>
                  <img
                    src={
                      require(`../../assets/images/${item.image}.jpg`).default
                    }
                    alt={item.offerName}
                  />
                </OfferBoxImageWrapper>
                <OfferBoxText>
                  <OfferBoxHeading as="h4">{item.offerName}</OfferBoxHeading>
                  <OfferTextBold>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </OfferTextBold>
                  <OfferTextThin>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vel interdum lacus. Praesent congue eget eros non aliquam.
                  </OfferTextThin>
                  <Button link={item.link} color="yellow" size="btn--offer">
                    SPRAWDŹ
                  </Button>
                </OfferBoxText>
              </OfferBox>
            );
          })*/}
        <DotsYellow src={DotsYellowSVG} alt="" />
        <BottomText>
          <BottomTextHeading as="h3">
            <span className="text--black">
              Na liście nie ma tego czego szukasz?
            </span>
            <span className="text--yellow">To żaden problem!</span>
          </BottomTextHeading>
          <Text>
            Jesteśmy otwarci na nowe wyzwania i chętnie podążamy nowymi
            ścieżkami. Napisz do nas lub zadzwoń, opowiedz czego potrzebujesz, a
            dostaniesz od nas darmową odpowiedź.
          </Text>
          <Button link="/#kontakt">KONTAKT</Button>
        </BottomText>
      </OfferItemsContainer>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query AllServicesPage {
    allDatoCmsService(sort: { fields: idNumber, order: ASC }) {
      edges {
        node {
          name
          locale
          shortDesc
          longDesc
          slug
          image
          categoryFilter
        }
      }
    }
  }
`;

export default OurOffer;
