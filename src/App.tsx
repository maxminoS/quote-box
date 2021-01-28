import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import 'fontsource-roboto';

import { QuoteBox } from "components/QuoteBox";
import { ThemeButton } from "components/ThemeButton";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({ palette: { type: darkMode ? "dark" : "light" } });

  return (
    <ThemeProvider theme={theme}>
    <Paper>
      <Grid container
            justify="center"
            alignItems="center"
            style={{ minHeight: "100vh" }}
      >
        <Grid item xs={8} lg={6} xl={4}>
          <QuoteBox />
        </Grid>
        <ThemeButton darkMode={darkMode} setDarkMode={setDarkMode} />
      </Grid>
    </Paper>
    </ThemeProvider>
  );
}
