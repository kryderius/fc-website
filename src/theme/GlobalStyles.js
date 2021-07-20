import { createGlobalStyle } from 'styled-components';
import './typography.css';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        //scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.white};
    font-family:  ${({ theme }) => theme.fontFamilyText};
    //scroll-behavior: smooth;
  }

  ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  #___gatsby {
    overflow: hidden;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background: #FEDD5A;
    border-radius: 0px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #ffe88a;
  }
  ::-webkit-scrollbar-track{
    background: #000000;
    border-radius: 0px;
  }


  [data-aos="title-down"] {
  transform: translateY(-100%);
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    transform: translateY(0);
    opacity: 1;
  }
}
[data-aos="title-up"] {
  transform: translateY(100%);
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    transform: translateY(0);
    opacity: 1;
  }
}
[data-aos="card-up"] {
  transform: translateY(50px);
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    transform: translateY(0);
    opacity: 1;
  }
}
`;

export default GlobalStyles;
