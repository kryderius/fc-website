import * as React from 'react';
import styled from 'styled-components';

import Layout from '../templates/Layout';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import HeroImg from '../assets/images/hero1.jpg';
import Button from '../components/atoms/Button';
import Offer from '../components/organisms/Offer/Offer';

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

  span {
    color: ${({ theme }) => theme.yellow};
  }
`;

const SectionWrapper = styled.section`
  height: 100vh;
  display: flex;
  position: relative;
`;

const SectionContainer = styled.div`
  position: relative;
  background-image: url(${HeroImg});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  border-radius: 0 50px 0 50px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 100px 15px;

  @media (min-width: 1200px) {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 0 100px 0 100px;
  }

  & > * {
    z-index: 10;
  }

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

const HeroText = styled(Text)`
  font-size: ${({ theme }) => theme.bodyS};
  margin: 30px 0;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingS};
  }
`;

const IndexPage = () => (
  <Layout title="Marketing internetowy">
    <SectionWrapper>
      <SectionContainer>
        <StyledHeading>
          Wszystkie cyfrowe usługi <br /> <span>w jednym miejscu</span>
        </StyledHeading>
        <HeroText className="text--white">
          Poznaj naszych specjalistów z każdej branży!
        </HeroText>
        <Button link="/#offer" color="white">
          SPRAWDŹ
        </Button>
      </SectionContainer>
    </SectionWrapper>
    <Offer />
  </Layout>
);

export default IndexPage;
