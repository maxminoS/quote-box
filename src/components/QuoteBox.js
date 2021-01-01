import React from "react";

export default class QuoteBox extends React.Component {
  state = {
    quoteNumber: 0,
    quotes: [],
  }

  async componentDidMount() {
    const response = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json');
    const quotes = await response.json();
    this.setState({ quotes });
  }

  handleClick = () => {
    this.setState({
      quoteNumber: Math.floor(Math.random() * this.state.quotes.length)
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.quotes[this.state.quoteNumber]
           ? this.state.quotes[this.state.quoteNumber].quote
           : ""}</h3>
        <p>- {this.state.quotes[this.state.quoteNumber]
           ? this.state.quotes[this.state.quoteNumber].author
           : ""}</p>
        <button onClick={this.handleClick}>GET</button>
        <p>No: {this.state.quoteNumber + 1}</p>
      </div>
    );
  }
}
