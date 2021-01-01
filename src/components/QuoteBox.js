import React from "react";
import Quote from "./Quote";

export default class QuoteBox extends React.Component {
  state = {
    quotes: [],
    quoteNumber: 0,
  }

  async componentDidMount() {
    const response = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json');
    const quotes = await response.json();
    this.setState(() => ({ quotes }));
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
