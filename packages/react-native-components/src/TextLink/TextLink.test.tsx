import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';

import { TextLink } from './TextLink';

describe('React Components / TextLink', () => {
  const mockLabel = 'test-textlink';

  afterEach(() => {
    cleanup();
  });

  it('renders a default TextLink with an appropriate accessibility marker', () => {
    const mockHandle = jest.fn();
    const { getByRole } = render(
      <TextLink label={mockLabel} onPress={mockHandle} />,
    );
    const textLinkComponent = getByRole('link');

    expect(textLinkComponent).toBeDefined();
  });

  it('does not disable the TextLink by default', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <TextLink label={mockLabel} onPress={mockHandle} />,
    );

    const disabledEl = getByTestId(TextLink.testIds.ROOT);

    expect(disabledEl.props.accessibilityState).toBeUndefined();
  });

  it('disables the TextLink correctly on request', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <TextLink label={mockLabel} onPress={mockHandle} isDisabled />,
    );

    const disabledEl = getByTestId(TextLink.testIds.ROOT);
    const expected = { disabled: true };

    expect(disabledEl.props.accessibilityState).toMatchObject(expected);
  });

  it('accepts a press handler that fires by default', () => {
    const handlePress = jest.fn();
    const { getByTestId } = render(
      <TextLink testID={mockLabel} label={mockLabel} onPress={handlePress} />,
    );

    const rootEl = getByTestId(mockLabel);

    fireEvent.press(rootEl);

    expect(handlePress).toHaveBeenCalled();
  });

  it('accepts a press handler that does NOT fire when disabled', () => {
    const handlePress = jest.fn();
    const { getByTestId } = render(
      <TextLink
        testID={mockLabel}
        isDisabled
        label={mockLabel}
        onPress={handlePress}
      />,
    );

    const rootEl = getByTestId(mockLabel);

    fireEvent.press(rootEl);

    expect(handlePress).not.toHaveBeenCalled();
  });

  it('allows truncation of the label', () => {
    const handlePress = jest.fn();

    const longText = 'This is very long text, lets trim this down a lot';
    const expectedEllipsis = 'tail';
    const expectedLines = 1;

    const { getByText } = render(
      <TextLink label={longText} onPress={handlePress} truncateText />,
    );

    const textLinkComponent = getByText(longText);

    expect(textLinkComponent.props.numberOfLines).toBe(expectedLines);
    expect(textLinkComponent.props.ellipsizeMode).toBe(expectedEllipsis);
  });

  it('renders a TextLink with a hitSlop value', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <TextLink label={mockLabel} onPress={mockHandle} hitSlop={5} />,
    );
    const rootEl = getByTestId(TextLink.testIds.ROOT);

    expect(rootEl.props.hitSlop).toEqual({
      bottom: 5,
      left: 5,
      right: 5,
      top: 5,
    });
  });
});
