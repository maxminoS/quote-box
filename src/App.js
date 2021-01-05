import React from "react";
import { Grid } from "@material-ui/core";
import 'fontsource-roboto';

import QuoteBox from "components/QuoteBox";

export default () => {
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
