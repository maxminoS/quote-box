import React from 'react';
import { render, screen } from '@testing-library/react';

import Quote from 'components/Quote';

// [ ] components/Quote.js
//   [ ] "FormatQuote" rendered
//   [X] h6 "{quote}" rendered
//   [X] subtitle1 "- {author}" rendered

it('renders Quote component correctly', () => {
  render(<Quote quote={{
    "quote": "a quote",
    "author": "by this"
  }} />);
  expect(screen.getByTestId("quote-display")).toHaveTextContent("a quote");
  expect(screen.getByTestId("author-display")).toHaveTextContent("- by this");
  screen.debug();
});
