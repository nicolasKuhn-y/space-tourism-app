import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body { 
  width: 100vw;
  overflow-x: hidden; 
}

body { 
  background-image: url("assets/home/background-home-mobile.webp");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
}

::-webkit-scrollbar {
  display: none;
}

h1, 
h2,
h3,
h4 { 
  font-family: 'Bellefair', serif;
}

h5 { 
  font-family: 'Barlow Condensed', sans-serif;
}

a { 
  text-decoration: none;
}

@media (min-width: 768px) and ( max-width: 1000px) {

body { 
  background-image: url("assets/home/background-home-tablet.webp");
}
}

@media (min-width: 1000px) {
body { 
  background-image: url("assets/home/background-home-desktop.webp");
}
}
`;

export const mainTheme = {
  colors: {
    black: "#0B0D17",
    grey: "#979797",
    lightGrey: "#D0D6F9",
    white: "#FFFFFF",
  },
};
