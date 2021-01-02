import React from "react";

export default props => (
  <>
    {props.quote
     ? <>
         <h3>{props.quote.quote}</h3>
         <p>- {props.quote.author}</p>
       </>
     : ""}
  </>
);
