import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home title', () => {
  render(<Home titlePage="Home" />);
  const linkElement = screen.getByText(/HOME/i);
  expect(linkElement).toBeInTheDocument();
});
