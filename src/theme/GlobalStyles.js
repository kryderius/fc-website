import { createGlobalStyle } from 'styled-components';
import './typography.css';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.white};
    font-family:  ${({ theme }) => theme.fontFamilyText};
  }


  ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  
  #___gatsby {
    overflow: hidden;
  }


  [data-aos="title-anim"] {
  transform: translateY(30px);
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    transform: translateY(0);
    opacity: 1;
  }
}
`;

export default GlobalStyles;
