import React from "react";
import { ThemeProvider } from "styled-components";

import FlightsSearch from "./components/flights-search/FlightsSearch";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <FlightsSearch />
      </main>
    </ThemeProvider>
  );
}

export default App;
