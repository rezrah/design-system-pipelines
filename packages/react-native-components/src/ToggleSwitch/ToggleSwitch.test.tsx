import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';

import { ToggleSwitch } from './ToggleSwitch';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('React Components / ToggleSwitch', () => {
  const mockId = 'test-toggleSwitch';

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders unchecked state correctly', () => {
    const mockHandle = jest.fn();

    const { queryByTestId, getByTestId } = render(
      <ToggleSwitch testID={mockId} isChecked={false} onToggle={mockHandle} />,
    );
    const toggleSwitchComponent = getByTestId(ToggleSwitch.testIds.ROOT);
    const icon = queryByTestId(ToggleSwitch.testIds.ICON);

    expect(icon).toBe(null);
    expect(toggleSwitchComponent).toBeDefined();
  });

  it('renders checked state correctly', () => {
    const mockHandle = jest.fn();

    const { queryByTestId, getByTestId } = render(
      <ToggleSwitch testID={mockId} isChecked onToggle={mockHandle} />,
    );
    const toggleSwitchComponent = getByTestId(ToggleSwitch.testIds.ROOT);
    const icon = queryByTestId(ToggleSwitch.testIds.ICON);

    expect(icon).toBeDefined();
    expect(toggleSwitchComponent).toBeDefined();
  });

  it('toggles between states correctly', () => {
    let checked = false;
    // Faking a setValue hook
    // eslint-disable-next-line no-return-assign
    const onToggle = () => (checked = !checked);

    const { getByTestId } = render(
      <ToggleSwitch testID={mockId} isChecked={checked} onToggle={onToggle} />,
    );

    const toggleSwitchComponent = getByTestId(mockId);

    expect(checked).toBe(false);
    fireEvent.press(toggleSwitchComponent);
    expect(checked).toBe(true);
  });

  it('toggles twice between states correctly', () => {
    let checked = false;
    // Faking a setValue hook
    // eslint-disable-next-line no-return-assign
    const onToggle = () => (checked = !checked);

    const { getByTestId } = render(
      <ToggleSwitch testID={mockId} isChecked={checked} onToggle={onToggle} />,
    );

    const toggleSwitchComponent = getByTestId(mockId);

    expect(checked).toBe(false);
    fireEvent.press(toggleSwitchComponent);
    fireEvent.press(toggleSwitchComponent);
    expect(checked).toBe(false);
  });

  it('blocks disabled toggle from changing state', () => {
    const mockHandle = jest.fn();

    const { getByTestId } = render(
      <ToggleSwitch
        testID={mockId}
        isDisabled
        isChecked={false}
        onToggle={mockHandle}
      />,
    );

    const toggleSwitchComponent = getByTestId(mockId);

    fireEvent.press(toggleSwitchComponent);
    expect(mockHandle).not.toHaveBeenCalled();
  });

  it('does not render an Icon when unchecked', () => {
    const mockHandle = jest.fn();

    const { queryByTestId } = render(
      <ToggleSwitch
        testID={mockId}
        isDisabled
        isChecked={false}
        onToggle={mockHandle}
      />,
    );

    const icon = queryByTestId(ToggleSwitch.testIds.ICON);

    expect(icon).toBe(null);
  });
});
