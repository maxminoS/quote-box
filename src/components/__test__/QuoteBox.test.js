import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import QuoteBox from 'components/QuoteBox';
import QuoteApi from "api/QuoteApi";

jest.mock('api/QuoteApi');

it('renders Quote component correctly and GET button works', async () => {
  jest.spyOn(QuoteApi, 'getQuote');
  QuoteApi.getQuote.mockImplementation(() => Promise.resolve([{ "quote": "a quote", "author": "by this"}]));

  render(<QuoteBox />);
  expect(QuoteApi.getQuote).toHaveReturnedTimes(1);
  expect(await screen.findByRole('heading', { name: /a quote/i })).toBeInTheDocument();
  expect(await screen.findByRole('heading', { name: /\- by this/i })).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: /get/i }));
  QuoteApi.getQuote.mockRestore();
});
