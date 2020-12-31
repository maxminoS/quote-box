import React from "react";

export default class QuoteBox extends React.Component {
  state = {
    "quoteNumber": 0,
    "quotes": [
      {
        "text": "<quote1>",
        "author": "author1"
      },
      {
        "text": "<quote2>",
        "author": "author2"
      }
    ]
  }

  handleClick = () => {
    this.setState({
      "quoteNumber": Math.floor(Math.random() * this.state.quotes.length)
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.quotes[this.state.quoteNumber].text}</h3>
        <p>- {this.state.quotes[this.state.quoteNumber].author}</p>
        <button onClick={this.handleClick}>GET</button>
        <p>No: {this.state.quoteNumber + 1}</p>
      </div>
    );
  }
}
