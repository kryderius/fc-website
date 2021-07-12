import * as React from 'react';
import Layout from '../templates/Layout';
import SubPageHeader from '../components/SubPageHeader/SubPageHeader';
import ErrorHeader from '../assets/images/404.jpg';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import ErrorSvg from '../assets/svg/error-svg.svg';

const SectionWrapper = styled.div`
  padding: 0 15px;
  margin: 100px 0;
`;

const SectionContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.yellow};

  p {
    text-align: left;

    &:nth-of-type(2) {
      margin-bottom: 30px;
    }
  }

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
`;

const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;

  @media (min-width: 1200px) {
    width: 70%;
  }
`;

const Right = styled.div`
  width: 100%;

  img {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: left;
  margin-bottom: 30px;
`;

const NotFoundPage = () => (
  <Layout>
    <SubPageHeader background={ErrorHeader}>
      <MainHeading data-aos="fade-up">upsss...</MainHeading>
    </SubPageHeader>
    <SectionWrapper>
      <SectionContainer>
        <Left>
          <StyledHeading data-aos="fade-up">
            Wygląda na to, że się zbubiłeś :(
          </StyledHeading>
          <Text>
            Prawdopodobnie strona, której szukasz nie istnieje lub została
            przeniesiona.
          </Text>
          <Text>Spróbuj wrócić na stronę główną i poszukać jeszcze raz</Text>
          <Button link="/">Strona główna</Button>
        </Left>
        <Right>
          <img src={ErrorSvg} alt="" />
        </Right>
      </SectionContainer>
    </SectionWrapper>
  </Layout>
);

export default NotFoundPage;
