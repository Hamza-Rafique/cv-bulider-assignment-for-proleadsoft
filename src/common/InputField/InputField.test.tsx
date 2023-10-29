import React from 'react';
import { render, screen } from '@testing-library/react';
import InputField from './index'; 

test('renders an input field with label and placeholder', () => {
  const props = {
    label: 'Test Label',
    type: 'text',
    placeholder: 'Test Placeholder',
    name: 'testName',
    value: 'Test Value',
    onChange: jest.fn(),
    onBlur: jest.fn(),
    error: 'Test Error Message',
  };

  render(<InputField {...props} />);

  expect(screen.getByText(/Test Label/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Test Placeholder/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/Test Value/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Error Message/i)).toBeInTheDocument();
});

test('renders without error message if error prop is not provided', () => {
  const props = {
    label: 'Test Label',
    type: 'text',
    placeholder: 'Test Placeholder',
    name: 'testName',
    value: 'Test Value',
    onChange: jest.fn(),
    onBlur: jest.fn(),
  };
  render(<InputField {...props} />);
  expect(screen.queryByText(/Test Error Message/i)).not.toBeInTheDocument();
});

