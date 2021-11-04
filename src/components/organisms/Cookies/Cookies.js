import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Text from '../../atoms/Text';
import { Link } from 'gatsby';
import { useCookie } from 'react-use';

const CookieBanner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.white};
  z-index: 3000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.5, 1, 0.89, 1);
  pointer-events: none;

  @media (min-width: 1200px) {
    height: 150px;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      pointer-events: all;
    `};
`;

const CookieBannerContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;

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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (min-width: 1200px) {
    width: 80%;
    margin-bottom: 0;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.medium};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  @media (min-width: 1200px) {
    width: 20%;
  }
`;

const StyledButton = styled.button`
  width: 160px;
  height: 50px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.black};
  border-radius: 50px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);

  &:hover {
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    box-shadow: 0px 1px 20px 1px rgb(0, 0, 0, 0.4);
  }
`;

const Cookies = ({ canBeDisplayed, setCanBeDisplayed }) => {
  const [cookie, setCookie] = useCookie('cookie-information');

  const handleClick = () => {
    setCookie('cookie-information', {
      expires: new Date().getDate() + 7,
    });
  };

  useEffect(() => {
    setTimeout(() => setCanBeDisplayed(true), 1000);
  }, [setCanBeDisplayed]);

  return (
    <CookieBanner $isActive={!cookie && canBeDisplayed}>
      <CookieBannerContainer>
        <TextContainer>
          <Text>
            Ta strona używa plików cookie w celu usprawnienia i ułatwienia
            dostępu do serwisu oraz prowadzenia danych statystycznych. Dalsze
            korzystanie z tej witryny oznacza akceptację tego stanu rzeczy.
          </Text>
          <StyledLink to="/polityka-prywatnosci">
            Polityka prywatności
          </StyledLink>
        </TextContainer>
        <ButtonContainer>
          <StyledButton onClick={handleClick}>Akceptuję</StyledButton>
        </ButtonContainer>
      </CookieBannerContainer>
    </CookieBanner>
  );
};

export default Cookies;
