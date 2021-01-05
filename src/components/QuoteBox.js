import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Card, CardContent, CardActions } from "@material-ui/core";

import Quote from "components/Quote";
import Share from "components/Share";
import QuoteApi from "api/QuoteApi";

export default () => {
  const [quotes, setQuotes] = useState([]);
  const [quoteNumber, setQuoteNumber] = useState(0);

  useEffect(async () => {
    QuoteApi.getQuote()
      .then(quotes => {
        setQuotes(quotes);
        setQuoteNumber(Math.floor(Math.random() * quotes.length));
      });
  }, []);

  const handleClick = () => {
    setQuoteNumber(Math.floor(Math.random() * quotes.length));
  };

  return (
    <Card raised="true">
      <CardContent>
        <Quote
          quote={quotes[quoteNumber]}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          GET
        </Button>
        <Share
          quote={quotes[quoteNumber]}
        />
      </CardActions>
    </Card>
  );
}
