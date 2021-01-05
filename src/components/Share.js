import React from "react";
import { IconButton } from '@material-ui/core';
import { Twitter } from '@material-ui/icons';

export default props => (
  <>
    {props.quote
     ? <IconButton onClick={() => window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("\"" + props.quote.quote + "\"\n- " + props.quote.author))
                           }
       >
         <Twitter color="primary" fontSize="large" />
       </IconButton>
     : ""}
  </>
);
