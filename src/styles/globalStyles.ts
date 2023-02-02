import { createGlobalStyle } from 'styled-components';
import { montserrat } from './fonts';
import { devices } from './breakpoints'

const GlobalStyle = createGlobalStyle`
  :root {
  --background: #E5E5E5;
  --main-color: #0F52BA;
  --background-footer: #EEEEEE;
  --color-text: #2C2C2C;
  --background-price: #373737;
  --white-color: #FFFFFF;
  --black-color: #000000;
  --button-quantity-color: #BFBFBF;
  --scrollbar-color: #F5F5F5;
  --primary-font: ${montserrat.style.fontFamily}
  }

  html {
    @media ${devices.laptop} {
      font-size: 93.75%;
    }

    @media ${devices.tablet} {
      font-size: 87.5%; 
    }

    @media ${devices.mobileL} {
      font-size: 72.5%;
    }

    @media ${devices.mobileS} {
      font-size: 62.5%;
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--background);
    font-family: var(--primary-font);
    
  }

  button {
    cursor: pointer;
  }

  
`;

export default GlobalStyle;