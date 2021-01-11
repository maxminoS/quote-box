import React from 'react';
import { render, screen } from '@testing-library/react';

import Quote from 'components/Quote';

it('renders Quote component correctly', () => {
  render(<Quote quote={{
    "quote": "a quote",
    "author": "by this"
  }} />);
  expect(screen.getByText("a quote")).toBeInTheDocument();
  expect(screen.getByText("- by this")).toBeInTheDocument();
});
