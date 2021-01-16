import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import QuoteBox from 'components/QuoteBox';
import QuoteApi from "api/QuoteApi";

jest.mock('api/QuoteApi');

describe('QuoteBox', () => {
  it('renders Quote component correctly', async () => {
    jest.spyOn(QuoteApi, 'getQuote');
    QuoteApi.getQuote.mockImplementation(() => Promise.resolve([{ "quote": "a quote", "author": "by this"}]));
    render(<QuoteBox />);

    expect(QuoteApi.getQuote).toHaveReturnedTimes(1);
    expect(await screen.findByRole('heading', { name: /a quote/i })).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: /\- by this/i })).toBeInTheDocument();
    QuoteApi.getQuote.mockRestore();
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
