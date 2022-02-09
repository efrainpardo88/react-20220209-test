import React from 'react';
import { render, screen } from '@testing-library/react';
import Bing from './Bing';

test('renders Bing title', () => {
  render(<Bing titlePage="Bing Search" />);
  const linkElement = screen.getByText(/BING/i);
  expect(linkElement).toBeInTheDocument();
});
