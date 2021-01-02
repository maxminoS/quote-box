import React from "react";
import Quote from "./Quote";
import QuoteApi from "../api/QuoteApi";

export default class QuoteBox extends React.Component {
  state = {
    quotes: [],
    quoteNumber: 0,
  }

  async componentDidMount() {
    QuoteApi.getQuote()
      .then(quotes => {
        this.setState(() => ({ quotes }));
      });
  }

  handleClick = () => {
    this.setState(state => ({
      quoteNumber: Math.floor(Math.random() * state.quotes.length)
    }));
  }

  render() {
    return (
      <div>
        <Quote
          quote={this.state.quotes[this.state.quoteNumber]}
        />
        <button onClick={this.handleClick}>GET</button>
      </div>
    );
  }
}
