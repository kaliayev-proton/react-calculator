import { Calculator } from './Calculator';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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
    });

    it('should render a number when clicks in each number button', () => {
        render(<Calculator />);
        const inputs = screen.getAllByRole('textbox');
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

        userEvent.click(key1);
        userEvent.click(key2);
        userEvent.click(key3);
        userEvent.click(key4);
        userEvent.click(key5);
        userEvent.click(key6);
        userEvent.click(key7);
        userEvent.click(key8);
        userEvent.click(key9);
        userEvent.click(key0);

        expect(inputs[1]).toHaveValue('1234567890')
    })

    it('should sum two numbers', () => {
        render(<Calculator />);
        const inputs = screen.getAllByRole('textbox');
        const key2 = screen.getByText('2');
        const key3 = screen.getByText('3');
        const sumButton = screen.getByText('SUM');
        const equalButton = screen.getByText('=');

        userEvent.click(key2);
        userEvent.click(sumButton);
        userEvent.click(key3);
        
        expect(inputs[1]).toHaveValue('2 + 3')
        
        userEvent.click(equalButton);

        expect(inputs[0]).toHaveValue('5')
        expect(inputs[1]).toHaveValue('')
    });

    it('should sum some numbers', () => {
        render(<Calculator />);
        const inputs = screen.getAllByRole('textbox');
        const key2 = screen.getByText('2');
        const key3 = screen.getByText('3');
        const key5 = screen.getByText('5');
        const sumButton = screen.getByText('SUM');
        const equalButton = screen.getByText('=');

        userEvent.click(key2);
        userEvent.click(sumButton);
        userEvent.click(key3);
        userEvent.click(sumButton);
        userEvent.click(key5);
        
        expect(inputs[1]).toHaveValue('2 + 3 + 5')
        
        userEvent.click(equalButton);

        expect(inputs[0]).toHaveValue('10')
        expect(inputs[1]).toHaveValue('')
    });

    it('should subtract two numbers', () => {
        render(<Calculator />);
        const inputs = screen.getAllByRole('textbox');
        const key8 = screen.getByText('8');
        const key7 = screen.getByText('7');
        const subtButton = screen.getByText('SUBT');
        const equalButton = screen.getByText('=');

        userEvent.click(key8);
        userEvent.click(subtButton);
        userEvent.click(key7);
        
        expect(inputs[1]).toHaveValue('8 - 7')
        
        userEvent.click(equalButton);

        expect(inputs[0]).toHaveValue('1')
        expect(inputs[1]).toHaveValue('')
    });

    it('should multiply two numbers', () => {
        render(<Calculator />);
        const inputs = screen.getAllByRole('textbox');
        const key8 = screen.getByText('8');
        const key7 = screen.getByText('7');
        const multButton = screen.getByText('MULT');
        const equalButton = screen.getByText('=');

        userEvent.click(key8);
        userEvent.click(multButton);
        userEvent.click(key7);
        
        expect(inputs[1]).toHaveValue('8 * 7')
        
        userEvent.click(equalButton);

        expect(inputs[0]).toHaveValue('56')
        expect(inputs[1]).toHaveValue('')
    });

    it('should divide two numbers', () => {
        render(<Calculator />);
        const inputs = screen.getAllByRole('textbox');
        const key1 = screen.getByText('1');
        const key5 = screen.getByText('5');
        const key3 = screen.getByText('3');
        const divButton = screen.getByText('DIV');
        const equalButton = screen.getByText('=');

        userEvent.click(key1);
        userEvent.click(key5);
        userEvent.click(divButton);
        userEvent.click(key3);
        
        expect(inputs[1]).toHaveValue('15 / 3')
        
        userEvent.click(equalButton);

        expect(inputs[0]).toHaveValue('5')
        expect(inputs[1]).toHaveValue('')
    });
})
