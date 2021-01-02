import React from "react";

export default props => (
  <>
    {props.quote
     ? <a href={"https://twitter.com/intent/tweet?text="
                + escape("\"" + props.quote.quote + "\"\n- " + props.quote.author)
               }
         target="_blank"
       >
         Tweet
       </a>
     : ""}
  </>
);
