import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('Label Component', () => {
  it('renders without crashing', () => {
    const { getByLabelText } = render(<Label htmlFor="testId">Test Label</Label>);
    expect(getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('applies the provided htmlFor prop', () => {
    const { getByLabelText } = render(<Label htmlFor="testId">Test Label</Label>);
    const labelElement = getByLabelText('Test Label');

    expect(labelElement).toHaveAttribute('for', 'testId');
  });

  it('applies other provided props', () => {
    const { getByTestId } = render(
      <Label htmlFor="testId" className="custom-label" data-testid="customTestId">
        Test Label
      </Label>
    );
    const labelElement = getByTestId('customTestId');

    expect(labelElement).toHaveClass('custom-label');
    expect(labelElement).toHaveAttribute('for', 'testId');
  });
});
