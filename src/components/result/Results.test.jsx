import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Results from './Results';

describe('Results component', () => {
  afterEach(() => cleanup());
  it('renders Results', () => {
    const { asFragment } = render(<Results results="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
