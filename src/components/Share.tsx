import React from "react";
import { Tooltip, IconButton } from '@material-ui/core';
import { Twitter } from '@material-ui/icons';

type Props = {
  quote: {
    quote: string,
    author: string,
  }
}

export const Share = (props: Props) => (
  <>
    {props.quote
     ? <Tooltip title="Tweet" arrow>
         <IconButton onClick={() => window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("\"" + props.quote.quote + "\"\n- " + props.quote.author))
                           }
         >
           <Twitter color="primary" fontSize="large" />
         </IconButton>
       </Tooltip>
     : ""}
  </>
);
