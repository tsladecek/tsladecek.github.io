import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Resume from "./pages/Resume";
import { ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/NavBar";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Resume} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/article/:articleName" component={Article} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
