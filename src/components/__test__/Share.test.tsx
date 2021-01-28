import React from 'react';
import renderer from 'react-test-renderer';

import { Share } from 'components/Share';

it('renders Share component as expected', () => {
  const share = renderer.create(<Share quote={{
    "quote": "a quote",
    "author": "by this"
  }} />).toJSON();
  expect(share).toMatchSnapshot();
});
