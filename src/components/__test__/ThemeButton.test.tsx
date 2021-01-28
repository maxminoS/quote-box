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

  it('renders light ThemeButton component as expected', () => {
    const themeButtonLight = renderer.create(<ThemeButton darkMode={false} setDarkMode={() =>  {}} />).toJSON();
    expect(themeButtonLight).toMatchSnapshot();
  });

  it('renders dark ThemeButton component as expected', () => {
    const themeButtonDark = renderer.create(<ThemeButton darkMode={true} setDarkMode={() =>  {}} />).toJSON();
    expect(themeButtonDark).toMatchSnapshot();
  });
})
