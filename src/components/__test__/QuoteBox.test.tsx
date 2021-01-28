import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { QuoteBox } from 'components/QuoteBox';
import { QuoteAPI } from "api/QuoteAPI";

describe('QuoteBox', () => {
  it('renders Quote component correctly', async () => {
    const mockGetQuote = jest.spyOn(QuoteAPI, 'getQuote');
    mockGetQuote.mockImplementation(() => Promise.resolve([{ "quote": "a quote", "author": "by this"}]));
    render(<QuoteBox />);

    expect(QuoteAPI.getQuote).toHaveReturnedTimes(1);
    expect(await screen.findByRole('heading', { name: /a quote/i })).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: /\- by this/i })).toBeInTheDocument();
    mockGetQuote.mockRestore();
  });

  it('can click the GET button', () => {
    render(<QuoteBox />);
    userEvent.click(screen.getByRole('button', { name: /get/i }));
  });
});

it('renders QuoteBox component as expected', () => {
  const quoteBox = renderer.create(<QuoteBox />).toJSON();
  expect(quoteBox).toMatchSnapshot();
});
