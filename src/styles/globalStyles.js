import { createGlobalStyle } from "styled-components";
import Background from "../assets/images/background.jpg";
import BackgroundLine from "../assets/images/background-line.jpg";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  input:focus {
    outline: none;
  }
  
  body {
    background: url(${Background}) 50% 0px / 100% no-repeat, url(${BackgroundLine}) 50% 0px / 100% repeat-y;
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.mainText}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  main {
    width: 100vw;
    min-height: 100vh;
  }
`;
