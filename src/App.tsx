import React, { useState } from "react";
import { Grid, Paper, IconButton } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Brightness3, WbSunny } from "@material-ui/icons";
import 'fontsource-roboto';

import QuoteBox from "components/QuoteBox";

export default () => {
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
        <IconButton onClick={() => setDarkMode(!darkMode)}>
          { darkMode ? <Brightness3 /> : <WbSunny /> }
        </IconButton>
      </Grid>
    </Paper>
    </ThemeProvider>
  );
}
