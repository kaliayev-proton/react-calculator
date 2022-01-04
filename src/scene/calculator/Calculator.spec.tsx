import { Calculator } from './Calculator';
import {render, screen} from '@testing-library/react'

describe('Calculator', () => {
    it('should display ten numbers, from 0 to 9', () => {
      // Arrange
      render(<Calculator />);
      const key1 = screen.getByText('1');
      const key2 = screen.getByText('2');
      const key3 = screen.getByText('3');
      const key4 = screen.getByText('4');
      const key5 = screen.getByText('5');
      const key6 = screen.getByText('6');
      const key7 = screen.getByText('7');
      const key8 = screen.getByText('8');
      const key9 = screen.getByText('9');
      const key0 = screen.getByText('0');
      // Act
    
      // Assert
      expect(key1).toHaveTextContent('1');
      expect(key2).toHaveTextContent('2');
      expect(key3).toHaveTextContent('3');
      expect(key4).toHaveTextContent('4');
      expect(key5).toHaveTextContent('5');
      expect(key6).toHaveTextContent('6');
      expect(key7).toHaveTextContent('7');
      expect(key8).toHaveTextContent('8');
      expect(key9).toHaveTextContent('9');
      expect(key0).toHaveTextContent('0');
    })
})
