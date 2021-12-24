import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { tokenColorBorderDisabled } from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

import { MenuLink } from './MenuLink';

import { flattenStyles } from '../utils/styles';

describe('React Components / MenuLink', () => {
  const mockLabel = 'test-menulink';

  afterEach(() => {
    cleanup();
  });

  it('renders a default MenuLink with an appropriate accessibility marker', () => {
    const mockHandle = jest.fn();
    const { getByRole } = render(
      <MenuLink label={mockLabel} onPress={mockHandle} />,
    );
    const menuLinkComponent = getByRole('menuitem');

    expect(menuLinkComponent).toBeDefined();
  });

  it('does not render or require a starting icon by default', () => {
    const mockHandle = jest.fn();
    const { queryByTestId } = render(
      <MenuLink testID={mockLabel} label={mockLabel} onPress={mockHandle} />,
    );
    const iconStart = queryByTestId(MenuLink.testIds.ICON);

    expect(iconStart).toBe(null);
  });

  it('does render an optional starting icon', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <MenuLink
        testID={mockLabel}
        label={mockLabel}
        icon="download"
        onPress={mockHandle}
      />,
    );
    const iconStart = getByTestId(MenuLink.testIds.ICON);

    expect(iconStart).toBeDefined();
  });

  it('renders the trailing navigation icon by default', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <MenuLink testID={mockLabel} label={mockLabel} onPress={mockHandle} />,
    );
    const navIcon = getByTestId(MenuLink.testIds.NAV_ICON);

    expect(navIcon).toBeDefined();
  });

  it('does not render a navigation icon if its manually turned off', () => {
    const mockHandle = jest.fn();
    const { queryByTestId } = render(
      <MenuLink
        testID={mockLabel}
        label={mockLabel}
        onPress={mockHandle}
        hasNavigationIcon={false}
      />,
    );
    const navIcon = queryByTestId(MenuLink.testIds.NAV_ICON);

    expect(navIcon).toBe(null);
  });

  it('does not disable the MenuLink by default', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <MenuLink label={mockLabel} onPress={mockHandle} />,
    );

    const disabledEl = getByTestId(MenuLink.testIds.ROOT);

    expect(disabledEl.props.accessibilityState).toBeUndefined();
  });

  it('disables the MenuLink correctly on request', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <MenuLink label={mockLabel} onPress={mockHandle} isDisabled />,
    );

    const disabledEl = getByTestId(MenuLink.testIds.ROOT);
    const expected = { disabled: true };

    expect(disabledEl.props.accessibilityState).toMatchObject(expected);
  });

  it('accepts a press handler that fires by default', () => {
    const handlePress = jest.fn();
    const { getByTestId } = render(
      <MenuLink testID={mockLabel} label={mockLabel} onPress={handlePress} />,
    );

    const rootEl = getByTestId(mockLabel);

    fireEvent.press(rootEl);

    expect(handlePress).toHaveBeenCalled();
  });

  it('accepts a press handler that does NOT fire when disabled', () => {
    const handlePress = jest.fn();
    const { getByTestId } = render(
      <MenuLink
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
      <MenuLink label={longText} onPress={handlePress} truncateText />,
    );

    const menuLinkComponent = getByText(longText);

    expect(menuLinkComponent.props.numberOfLines).toBe(expectedLines);
    expect(menuLinkComponent.props.ellipsizeMode).toBe(expectedEllipsis);
  });

  it('shows a border by default', () => {
    const handlePress = jest.fn();

    const { getByTestId } = render(
      <MenuLink label={mockLabel} onPress={handlePress} hasBottomBorder />,
    );

    const innerComponent = getByTestId(MenuLink.testIds.INNER);

    const flattendStyles = flattenStyles(innerComponent);

    const expected = {
      borderBottomColor: tokenColorBorderDisabled,
      borderBottomWidth: 1,
    };

    expect(flattendStyles).toMatchObject(expected);
  });
});
