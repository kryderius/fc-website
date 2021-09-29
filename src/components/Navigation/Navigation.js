import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../atoms/Button';

const NavWrapper = styled.div`
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1090;
  padding: 0 15px;
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);

  &.nav--fixed {
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    height: 80px;
    display: flex;
    justify-content: center;

    .logo-wrapper {
      background-color: transparent;
      box-shadow: none;
      width: 75px;
      height: 75px;

      svg path:nth-of-type(1) {
        fill: ${({ theme }) => theme.yellow};
      }
    }
    .nav-list {
      li a {
        color: ${({ theme }) => theme.black};
      }
    }
    .hamburger div {
      background-color: ${({ theme }) => theme.black};
    }
  }
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const LogoWrapper = styled(Link)`
  width: 70px;
  height: 70px;
  background: ${({ theme }) => theme.yellow};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1080;
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);

  @media (min-width: 1200px) {
    width: 200px;
    height: 200px;

    svg {
      width: 76px;
      height: 76px;
      transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
    }
  }
`;

const NavListWrapper = styled.div`
  display: none;
  * {
    text-decoration: none;
  }
  @media (min-width: 1200px) {
    display: flex;
  }
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
`;
const NavListItem = styled.li`
  margin-right: 30px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.fontFamilyHeading};
    font-size: ${({ theme }) => theme.bodyS};
  }
`;

const Hamburger = styled.button`
  position: relative;
  width: 40px;
  height: 25px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1080;
  @media (min-width: 1200px) {
    display: none;
  }

  .hamburger--center {
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    right: 0;
    width: 80%;
    height: 3px;
    background: ${({ theme }) => theme.white};
    transition: opacity 0.6s cubic-bezier(0.5, 1, 0.89, 1);
  }
  .hamburger--top {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.white};
    transition: all 0.6s cubic-bezier(0.5, 1, 0.89, 1);
  }
  .hamburger--bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.white};
    transition: all 0.6s cubic-bezier(0.5, 1, 0.89, 1);
  }

  &.open {
    .hamburger--center {
      opacity: 0;
    }
    .hamburger--top {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      transform-origin: center;
    }
    .hamburger--bottom {
      bottom: 50%;
      transform: translateY(50%) rotate(-45deg);
      transform-origin: center;
    }
  }
`;

const NavMobile = styled.div`
  visibility: hidden;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.yellow};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1070;
  transform: translateX(-100%);
  transition: all 0.8s cubic-bezier(0.5, 1, 0.89, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    display: none;
  }

  &.open {
    visibility: visible;
    transform: translateX(0);
  }
`;

const NavMobileList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavMobileListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
    font-family: ${({ theme }) => theme.fontFamilyHeading};
    font-size: ${({ theme }) => theme.headingS};
  }
`;

const StyledButton = styled(Button)`
  a {
    width: 200px !important;
  }
`;

const Navigation = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const posY = useRef(5);

  useEffect(() => {
    const handleScroll = () => {
      let currentPosY = window.scrollY;
      if (posY.current > currentPosY && !isVisible) {
        setVisible(true);
      }
      if (posY.current < currentPosY && isVisible) {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const openHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <NavWrapper className={!isVisible && 'nav--fixed'}>
      <NavContainer>
        <LogoWrapper to="/" className="logo-wrapper">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6587 9.0687C13.141 9.0121 12.7815 8.9838 12.5801 8.9838C11.8611 8.9838 11.3146 9.1253 10.9407 9.40831C10.5668 9.66302 10.3079 10.1158 10.1641 10.7667L10.0778 18.6202V34.7092H0.5V18.6202V10.7667C0.557525 7.65366 1.54982 5.2481 3.47689 3.55006C5.43272 1.82371 8.16513 0.960541 11.6741 0.960541C12.0768 0.960541 12.7383 0.988841 13.6587 1.04544V9.0687Z"
              fill="white"
            />
            <path
              d="M10.0995 21.199C8.43128 21.199 7.09384 20.7604 6.08716 19.8831C5.08049 19.0057 4.57715 17.902 4.57715 16.5719C4.57715 15.2134 5.08049 14.0956 6.08716 13.2182C7.09384 12.3126 8.43128 11.8598 10.0995 11.8598C11.7389 11.8598 13.062 12.3126 14.0687 13.2182C15.0754 14.0956 15.5787 15.2134 15.5787 16.5719C15.5787 17.902 15.0754 19.0057 14.0687 19.8831C13.062 20.7604 11.7389 21.199 10.0995 21.199Z"
              fill="black"
            />
            <path
              d="M35.4999 24.688C35.4999 22.5867 35.0631 20.76 34.1895 19.2079C33.2915 17.6319 32.0539 16.426 30.4764 15.5902C28.8747 14.7545 27.0546 14.3366 25.0161 14.3366C22.3466 14.3366 20.1018 15.0769 18.2817 16.5573C16.4373 18.0378 15.2725 20.0914 14.7871 22.718H23.3416C23.6571 21.6674 24.2759 21.1421 25.1981 21.1421C25.8534 21.1421 26.3751 21.4405 26.7634 22.0375C27.1274 22.6345 27.3095 23.518 27.3095 24.688C27.3095 25.8581 27.1274 26.7416 26.7634 27.3386C26.3751 27.9356 25.8534 28.234 25.1981 28.234C24.2759 28.234 23.6571 27.7087 23.3416 26.658H14.7871C15.2725 29.2847 16.4373 31.3383 18.2817 32.8188C20.1018 34.2992 22.3466 35.0395 25.0161 35.0395C27.0546 35.0395 28.8747 34.6216 30.4764 33.7858C32.0539 32.9501 33.2915 31.7562 34.1895 30.204C35.0631 28.628 35.4999 26.7894 35.4999 24.688Z"
              fill="black"
            />
          </svg>
        </LogoWrapper>
        <Hamburger
          onClick={openHamburger}
          className={isHamburgerOpen ? 'hamburger open' : 'hamburger'}
        >
          <div className="hamburger--center"></div>
          <div className="hamburger--top"></div>
          <div className="hamburger--bottom"></div>
        </Hamburger>
        <NavMobile className={isHamburgerOpen && 'open'}>
          <NavMobileList>
            <NavMobileListItem>
              <Link to="/" onClick={openHamburger}>
                Start
              </Link>
            </NavMobileListItem>
            <NavMobileListItem>
              <Link to="/#oferta" onClick={openHamburger}>
                Oferta
              </Link>
            </NavMobileListItem>
            <NavMobileListItem>
              <Link to="/#poznaj-nas" onClick={openHamburger}>
                Poznaj nas
              </Link>
            </NavMobileListItem>
            <NavMobileListItem>
              <Link to="/kim-jestesmy" onClick={openHamburger}>
                Kim jesteśmy
              </Link>
            </NavMobileListItem>
            <NavMobileListItem>
              <Link to="/blog" onClick={openHamburger}>
                Baza wiedzy
              </Link>
            </NavMobileListItem>
            <NavMobileListItem onClick={openHamburger}>
              <StyledButton link="/#kontakt" color="">
                Kontakt
              </StyledButton>
            </NavMobileListItem>
          </NavMobileList>
        </NavMobile>
        <NavListWrapper>
          <NavList className="nav-list">
            <NavListItem>
              <Link to="/">Start</Link>
            </NavListItem>
            <NavListItem>
              <Link to="/#oferta">Oferta</Link>
            </NavListItem>
            <NavListItem>
              <Link to="/#poznaj-nas">Poznaj nas</Link>
            </NavListItem>
            <NavListItem>
              <Link to="/kim-jestesmy">Kim jesteśmy</Link>
            </NavListItem>
            <NavListItem>
              <Link to="/blog">Baza wiedzy</Link>
            </NavListItem>
            <StyledButton link="/#kontakt" color="yellow">
              Kontakt
            </StyledButton>
          </NavList>
        </NavListWrapper>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navigation;
