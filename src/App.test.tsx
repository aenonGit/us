import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';


test('renders learn react link', () => {
  render(<App lang={'en'} />);
  const linkElement = screen.getByText(/Vincenzo/i);
  expect(linkElement).toBeInTheDocument();
});
