import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders the Ruby Portfolio Web landing page', () => {
  render(<App />);
  const primaryNav = screen.getByRole('navigation', { name: /primary navigation/i });

  expect(screen.getByRole('heading', { name: /consignment lot tracking/i })).toBeInTheDocument();
  expect(within(primaryNav).getByRole('link', { name: /^home$/i })).toHaveAttribute('href', '#home');
  expect(within(primaryNav).getByRole('link', { name: /^workflow$/i })).toHaveAttribute('href', '#workflow');
  expect(within(primaryNav).getByRole('link', { name: /^results \/ contact$/i })).toHaveAttribute(
    'href',
    '#results-contact',
  );
  expect(screen.getByRole('link', { name: /view workflow/i })).toHaveAttribute('href', '#workflow');
  expect(screen.getByRole('heading', { name: /from lot intake to item capture/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /sales, payouts, and updated lot details/i })).toBeInTheDocument();
});
