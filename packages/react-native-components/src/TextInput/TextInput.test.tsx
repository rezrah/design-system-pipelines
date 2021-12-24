import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { TextInput } from './TextInput';

describe('React Components / TextInput', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders default correctly', () => {
    const { getByTestId } = render(
      <TextInput label="Label" keyboardType="default" onChange={jest.fn()} />,
    );
    const textInput = getByTestId(TextInput.testIds.ROOT);

    expect(textInput).toBeDefined();
  });

  it('accepts different testId', () => {
    const customTestId = 'custom';
    const { getByTestId } = render(
      <TextInput label="Label" onChange={jest.fn()} testID={customTestId} />,
    );
    const textInput = getByTestId(customTestId);

    expect(textInput).toBeDefined();
  });

  it('renders error text if error prop is passed', () => {
    const { getByTestId } = render(
      <TextInput label="Label" onChange={jest.fn()} error="Poops" />,
    );
    const errorEl = getByTestId(TextInput.testIds.ERROR);

    expect(errorEl).toBeDefined();
  });

  it('does not disable the TextInput by default', () => {
    const { getByTestId } = render(
      <TextInput label="Label" onChange={jest.fn()} />,
    );

    const disabledEl = getByTestId(TextInput.testIds.INPUT);

    expect(disabledEl.props.accessibilityState).toBeUndefined();
  });

  it('disables the TextInput correctly on request', () => {
    const { getByTestId } = render(
      <TextInput label="Label" onChange={jest.fn()} isDisabled />,
    );

    const disabledEl = getByTestId(TextInput.testIds.INPUT);
    const expected = { disabled: true };

    expect(disabledEl.props.accessibilityState).toMatchObject(expected);
  });

  it('accepts a change handler that fires by default', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <TextInput label="Label" onChange={handleChange} />,
    );

    const inputEl = getByTestId(TextInput.testIds.INPUT);

    fireEvent.changeText(inputEl, 'new-text');
    fireEvent.changeText(inputEl, '');

    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  it('accepts a change handler that does NOT fire when disabled', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <TextInput label="Label" onChange={handleChange} isDisabled />,
    );

    const inputEl = getByTestId(TextInput.testIds.INPUT);

    fireEvent.changeText(inputEl, 'new-text');

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('hides or shows sensitive info based on icon press', () => {
    const { getByTestId } = render(
      <TextInput label="Label" onChange={jest.fn()} isSensitive />,
    );

    const pressableEl = getByTestId(TextInput.testIds.SENSITIVE);
    const iconEl = getByTestId(TextInput.testIds.ICON);

    expect(pressableEl).toBeDefined();

    const eyeClosed = iconEl.props.children[0];

    fireEvent.press(pressableEl);

    const eyeOpen = iconEl.props.children[0];

    expect(eyeClosed).not.toEqual(eyeOpen);
  });
});
