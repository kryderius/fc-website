import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SubmenuWrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: 75px;
  padding: 0 15px;
  z-index: 1090;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
  display: none;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);

  &.submenu--active {
    visibility: visible;
    opacity: 1;
  }

  @media (min-width: 1200px) {
    display: flex;
  }
`;

const SubmenuContainer = styled.div`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
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

const NavListWrapper = styled.div`
  display: none;
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
    color: ${({ theme }) => theme.black};
    font-family: ${({ theme }) => theme.fontFamilyHeading};
    font-size: ${({ theme }) => theme.bodyS};

    &.active--link {
      color: ${({ theme }) => theme.yellow};
    }
  }
`;

const Submenu = () => {
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

  return (
    <SubmenuWrapper className={!isVisible && 'submenu--active'}>
      <SubmenuContainer>
        <NavListWrapper>
          <NavList className="nav-list">
            <NavListItem>
              <Link to="/strategia" activeClassName="active--link">
                Strategia
              </Link>
            </NavListItem>
            <NavListItem>
              <Link to="/branding" activeClassName="active--link">
                Branding
              </Link>
            </NavListItem>
            <NavListItem>
              <Link to="/komunikacja" activeClassName="active--link">
                Komunikacja
              </Link>
            </NavListItem>
            <NavListItem>
              <Link to="/reklama-w-internecie" activeClassName="active--link">
                Reklama
              </Link>
            </NavListItem>
            <NavListItem>
              <Link to="/strony-sklepy-www" activeClassName="active--link">
                WWW
              </Link>
            </NavListItem>
            <NavListItem>
              <Link to="/seo-i-optymalizacja" activeClassName="active--link">
                SEO
              </Link>
            </NavListItem>
            <NavListItem>
              <Link to="/influencer-marketing" activeClassName="active--link">
                Influencer marketing
              </Link>
            </NavListItem>
          </NavList>
        </NavListWrapper>
      </SubmenuContainer>
    </SubmenuWrapper>
  );
};

export default Submenu;
