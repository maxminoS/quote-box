import React from "react";

export default props => (
  <div>
    <h3>{props.quote
         ? props.quote.quote
         : ""}</h3>
    <p>- {props.quote
          ? props.quote.author
          : ""}</p>
  </div>
);
