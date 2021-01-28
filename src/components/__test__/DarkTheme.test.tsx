import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App }from "App";

it('renders QuoteBox in dark theme as expected', () => {
  const { getByTestId, asFragment } = render(<App />);
  userEvent.click(getByTestId('theme-button'));
  expect(asFragment()).toMatchSnapshot();
});
