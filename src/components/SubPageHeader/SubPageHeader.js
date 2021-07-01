import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 600px;
  display: flex;
  position: relative;
`;

const SectionContainer = styled.div`
  position: relative;
  background-image: url(${(props) => props.background});
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

const SubPageHeader = ({ children, background }) => {
  return (
    <HeaderWrapper>
      <SectionContainer background={background}>{children}</SectionContainer>
    </HeaderWrapper>
  );
};

export default SubPageHeader;
