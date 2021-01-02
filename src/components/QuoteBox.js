import React from "react";
import Quote from "components/Quote";
import Tweet from "components/Tweet";
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
      <div>
        <Quote
          quote={this.state.quotes[this.state.quoteNumber]}
        />
        <button onClick={this.handleClick}>GET</button>
        <Tweet
          quote={this.state.quotes[this.state.quoteNumber]}
        />
      </div>
    );
  }
}
