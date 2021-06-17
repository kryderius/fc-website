import styled from 'styled-components';

export default styled.h1`
  font-size: ${({ theme }) => theme.headingS};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  line-height: 101%;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
  }
  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.headingL};
  }
`;
