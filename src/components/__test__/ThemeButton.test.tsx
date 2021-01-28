import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { ThemeButton }from 'components/ThemeButton';

describe('ThemeButton', () => {
  it('can click the icon button', () => {
    render(<ThemeButton darkMode={false} setDarkMode={() =>  {}} />);
    userEvent.click(screen.getByRole('button'));
  });

  it('renders ThemeButton component as expected', () => {
    const themeButton = renderer.create(<ThemeButton darkMode={false} setDarkMode={() =>  {}} />).toJSON();
    expect(themeButton).toMatchSnapshot();
  });
})
