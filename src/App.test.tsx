import React from 'react';
import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import { setupStore } from 'utils/redux';

import App from './App';


test('renders Vincenzo string', () => {
  render(<Provider store={setupStore()}><App lang={'en'} /></Provider>);
  const linkElement = screen.getByText(/salvadanaio/i);
  expect(linkElement).toBeInTheDocument();
});
