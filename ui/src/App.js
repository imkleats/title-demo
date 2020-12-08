import { useMemo } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import LandingPage from "./components/LandingPage/LandingPage";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getTitles: offsetLimitPagination(),
        },
      },
    },
  }),
});

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toolbar title="DEMO Streaming" />
        <LandingPage />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
