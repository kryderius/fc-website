import styled from 'styled-components';

export default styled.p`
  font-size: ${({ theme }) => theme.bodyS};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamilyText};
  line-height: 101%;
  font-weight: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.black};
  margin: 15px 0;

  &.text--white {
    color: ${({ theme }) => theme.white};
  }
  &.text--yellow {
    color: ${({ theme }) => theme.yellow};
  }
`;
