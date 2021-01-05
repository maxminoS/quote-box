import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import 'fontsource-roboto';

import QuoteBox from "components/QuoteBox";

class App extends Component {
  render() {
    return (
      <Grid container
            justify="center"
            alignItems="center"
            style={{ minHeight: "100vh" }}
      >
        <Grid item xs={8}>
          <QuoteBox />
        </Grid>
      </Grid>
    );
  }
}

export default App;
