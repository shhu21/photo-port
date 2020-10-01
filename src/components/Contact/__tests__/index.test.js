import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact />);
    });
  
    it('submit button', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
})