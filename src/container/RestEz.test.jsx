import React from 'react';
import { render } from '@testing-library/react';
import RestEz from './RestEz';

describe('RestEz component', () => {
  it('renders RestEz', () => {
    const { asFragment } = render(<RestEz />);
    expect(asFragment()).toMatchSnapshot();
  });
});
