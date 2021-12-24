import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react-native';

import { SystemCard, systemCardVariantStates } from './SystemCard';

describe('React Components / SystemCard', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders a default correctly', () => {
    const { getByTestId } = render(
      <SystemCard title="test" description="test" />,
    );

    const systemCardElement = getByTestId(SystemCard.testIds.ROOT);

    expect(systemCardElement).toBeDefined();
  });

  it('renders a compact version', () => {
    const { getByTestId } = render(
      <SystemCard isCompact title="test" description="test" />,
    );

    const systemCardElement = getByTestId(SystemCard.testIds.ROOT);

    expect(systemCardElement).toBeDefined();
  });

  it('does trigger the onPress event if pressed', () => {
    const mockHandle = jest.fn();

    const { getByTestId } = render(
      <SystemCard title="test" description="test" onPress={mockHandle} />,
    );

    const systemCardElement = getByTestId(SystemCard.testIds.ROOT);

    fireEvent.press(systemCardElement);

    expect(mockHandle).toHaveBeenCalled();
  });

  it('does not trigger the onPress event if card is disabled', () => {
    const mockHandle = jest.fn();

    const { getByTestId } = render(
      <SystemCard
        title="test"
        description="test"
        isDisabled
        onPress={mockHandle}
      />,
    );

    const systemCardElement = getByTestId(SystemCard.testIds.ROOT);

    fireEvent.press(systemCardElement);

    expect(mockHandle).not.toHaveBeenCalled();
  });

  it('covers correct styles for disabled state', () => {
    const mockHandle = jest.fn();

    const { getByTestId } = render(
      <SystemCard
        isDisabled
        title="test"
        description="test"
        onPress={mockHandle}
      />,
    );

    const systemCardElement = getByTestId(SystemCard.testIds.ROOT);
    const expectedResult = {
      backgroundColor: systemCardVariantStates.disabled,
      borderColor: systemCardVariantStates.disabledBorder,
    };

    expect(systemCardElement.props.style[2]).toEqual(expectedResult);
  });

  it('renders a without an arrow', () => {
    const { queryByTestId } = render(
      <SystemCard noArrow title="test" description="test" />,
    );

    const arrow = queryByTestId(SystemCard.testIds.ARROW);

    expect(arrow).toBe(null);
  });

  it('allows own testId to be passed', () => {
    const id = 'my-system-card';
    const { getByTestId } = render(
      <SystemCard testID={id} title="test" description="test" />,
    );
    const systemCardElement = getByTestId(id);

    expect(systemCardElement).toBeDefined();
  });
});
