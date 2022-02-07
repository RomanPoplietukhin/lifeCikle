import { render, screen } from '@testing-library/react';
import Ships from './Ships';

test('renders learn react link', () => {
  render(<Ships />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
