import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  afterEach(() => cleanup());
  it('renders Input', () => {
    const { asFragment } = render(
      <Input
        url=""
        method=""
        json=""
        onSubmit={() => { }}
        onChange={jest.fn()}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
