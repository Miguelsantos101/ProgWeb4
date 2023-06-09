import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableRow from './TableRow';

describe('<TableRow />', () => {
  test('it should mount', () => {
    render(<TableRow />);
    
    const tableRow = screen.getByTestId('TableRow');

    expect(tableRow).toBeInTheDocument();
  });
});