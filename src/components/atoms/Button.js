import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ButtonWrapper = styled(Link)`
  outline: none;
  border: 2px solid ${({ theme }) => theme.black};
  border-radius: 50px;
  background: transparent;
  width: auto;
  max-width: 340px;
  height: 60px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.black};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    p {
      color: ${({ theme }) => theme.white};
    }
    svg path {
      fill: ${({ theme }) => theme.white};
    }
  }

  p {
    color: ${({ theme }) => theme.black};
    transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
    margin-right: 30px;
  }
  svg path {
    fill: ${({ theme }) => theme.black};
    transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  }

  &.white {
    border: 2px solid ${({ theme }) => theme.white};

    p {
      color: ${({ theme }) => theme.white};
    }
    svg path {
      fill: ${({ theme }) => theme.white};
    }

    &:hover {
      background-color: ${({ theme }) => theme.white};
      p {
        color: ${({ theme }) => theme.black};
      }
      svg path {
        fill: ${({ theme }) => theme.black};
      }
    }
  }
  &.yellow {
    border: 2px solid ${({ theme }) => theme.yellow};
    p {
      color: ${({ theme }) => theme.yellow};
    }
    svg path {
      fill: ${({ theme }) => theme.yellow};
    }

    &:hover {
      background-color: ${({ theme }) => theme.yellow};
      p {
        color: ${({ theme }) => theme.black};
      }
      svg path {
        fill: ${({ theme }) => theme.black};
      }
    }
  }

  &.small {
    p {
      font-size: ${({ theme }) => theme.bodyXS};
    }
  }
  &.btn--small {
    width: auto;
    max-width: 190px;
    height: 35px;
  }
  &.btn--offer {
    width: 165px;
    height: 45px;
    padding: 0 15px;
    margin-top: 30px;

    p {
      font-size: ${({ theme }) => theme.bodyXS};
    }

    @media (min-width: 1200px) {
      width: 257px;
      height: 69px;
      padding: 0 20px;

      p {
        font-size: ${({ theme }) => theme.bodyS};
      }
    }
  }
  &.btn--portfolio {
    width: 240px;
    height: 40px;
    padding: 0 10px;
    margin-top: 30px;

    p {
      font-size: ${({ theme }) => theme.bodyXS};
    }

    @media (min-width: 1200px) {
      width: 257px;
      height: 69px;
      padding: 0 20px;
    }
  }
`;

const Text = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.bodyXS};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
`;

const Button = ({ children, link, color, fontSize, size }) => {
  return (
    <ButtonWrapper to={link} className={`${color} ${fontSize} ${size}`}>
      <Text>{children}</Text>
      <svg
        width="30"
        height="18"
        viewBox="0 0 33 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5919 2.90812L25.1006 8.4375H0V12.5625H25.1006L19.6838 18L22.5919 20.9081L33 10.5L22.5 0L19.5919 2.90812Z"
          fill="#FEDD5A"
        />
      </svg>
    </ButtonWrapper>
  );
};

export default Button;
