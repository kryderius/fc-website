import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';

const SectionWrapper = styled.section`
  padding: 0 15px;
  min-height: 100vh;
`;

const SectionContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 100px 0;
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

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  .heading--big {
    color: ${({ theme }) => theme.yellow};
    display: block;
    font-size: ${({ theme }) => theme.headingM};
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingL};
    }
  }
  .heading--small {
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.headingS};
    display: block;
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.headingM};
    }
  }
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.white};
  max-width: 250px;
  margin-top: 30px;
`;

const MeetUs = () => {
  useEffect(() => {
    setTimeout(() => {
      gsap.to('.bg-color', {
        backgroundColor: '#000000',
        scrollTrigger: {
          trigger: '.bg--trigger',
          scrub: true,
          start: 'top 75%',
          end: 'top 25%',
        },
      });
    }, 1500);
  }, []);
  return (
    <SectionWrapper className="bg--trigger" id="poznaj-nas">
      <SectionContainer>
        <Headline>
          <StyledHeading>
            <span className="heading--big">Poznajmy się</span>
            <span className="heading--small">bliżej</span>
          </StyledHeading>
          <StyledText>
            Oto nasz zespół. Ekipa profesjonalistów, zapaleńców i przede
            wszystkim pasjonatów.
          </StyledText>
        </Headline>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default MeetUs;
