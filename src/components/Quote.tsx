import React from "react";
import { Typography } from "@material-ui/core";
import { FormatQuote } from "@material-ui/icons";

type Props = {
  quote: {
    quote: string,
    author: string,
  }
}

export const Quote = (props: Props) => (
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
