import { ThemeProvider } from "styled-components";
import { AppRouter } from "./router/AppRouter";
import { GlobalStyles, mainTheme } from "./styles/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />

      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
