import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ButtonWrapper = styled(Link)`
  outline: none;
  border: 2px solid ${({ theme }) => theme.black};
  border-radius: 50px;
  background: transparent;
  width: auto;
  height: 69px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);

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
`;

const Text = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.bodyS};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
`;

const Button = ({ children, link, color }) => {
  return (
    <ButtonWrapper to={link} className={color}>
      <Text>{children}</Text>
      <svg
        width="33"
        height="21"
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
