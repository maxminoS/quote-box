import React from "react";
import { Button } from "@material-ui/core";
import { Card, CardContent, CardActions } from "@material-ui/core";

import Quote from "components/Quote";
import Share from "components/Share";
import QuoteApi from "api/QuoteApi";

export default class QuoteBox extends React.Component {
  state = {
    quotes: [],
  }

  async componentDidMount() {
    QuoteApi.getQuote()
      .then(quotes => {
        this.setState(() => ({
          quotes,
          quoteNumber: Math.floor(Math.random() * quotes.length),
        }));
      });
  }

  handleClick = () => {
    this.setState(state => ({
      quoteNumber: Math.floor(Math.random() * state.quotes.length),
    }));
  }

  render() {
    return (
      <Card raised="true">
        <CardContent>
          <Quote
            quote={this.state.quotes[this.state.quoteNumber]}
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" onClick={this.handleClick}>
            GET
          </Button>
          <Share
            quote={this.state.quotes[this.state.quoteNumber]}
          />
        </CardActions>
      </Card>
    );
  }
}
