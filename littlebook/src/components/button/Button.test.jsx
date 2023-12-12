import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Button name="Test Button" />);
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('calls onClick prop when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button name="Test Button" onClick={onClickMock} />
    );

    fireEvent.click(getByText('Test Button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies the provided style class', () => {
    const { getByText } = render(
      <Button name="Test Button" style="custom-button" />
    );

    const buttonElement = getByText('Test Button');
    expect(buttonElement).toHaveClass('custom-button');
  });
});