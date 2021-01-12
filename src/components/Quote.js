import React from "react";
import { Typography } from "@material-ui/core";
import { FormatQuote } from "@material-ui/icons";

export default props => (
  <>
    {props.quote
     ? <>
         <FormatQuote fontSize="large" />
         <Typography variant="h6">
           {props.quote.quote}
         </Typography>
         <Typography variant="subtitle1"
                     align="right"
         >
           - {props.quote.author}
         </Typography>
       </>
     : ""}
  </>
);
