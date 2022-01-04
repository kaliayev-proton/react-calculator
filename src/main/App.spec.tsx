import { App } from './App';
import {render, screen} from '@testing-library/react'

test('loads and displays greeting', () => {
  // Arrange
  render(<App />);
  const text = screen.getByRole('heading', { level: 1 })
  // Act

  // Assert
  expect(text).toHaveTextContent('Calculator');
})