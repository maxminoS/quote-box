import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Quote } from 'components/Quote';

it('renders Quote component correctly', () => {
  render(<Quote quote={{
    "quote": "a quote",
    "author": "by this"
  }} />);

  expect(screen.getByRole('heading', { name: /a quote/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /\- by this/i })).toBeInTheDocument();
});

it('renders Quote component as expected', () => {
  const quote = renderer.create(<Quote quote={{
    "quote": "a quote",
    "author": "by this"
  }} />).toJSON();
  expect(quote).toMatchSnapshot();
});
