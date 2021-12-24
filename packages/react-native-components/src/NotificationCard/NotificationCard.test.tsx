/* eslint-disable no-param-reassign, @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';

import { tokenColorSurfaceDisabled } from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

import { NotificationCard } from './NotificationCard';

import { flattenStyles } from '../utils/styles';

describe('React Components / NotificationCard', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders default correctly', () => {
    const { getByRole } = render(
      <NotificationCard
        message="Testy testy"
        icon="moon"
        style={{}}
        onPress={() => null}
      />,
    );

    const notificationElement = getByRole('button');

    expect(notificationElement).toBeDefined();
  });

  it('correctly renders a notification dot if the prop is passed', () => {
    const { getByTestId } = render(
      <NotificationCard
        message="Testy testy"
        onPress={() => null}
        hasUnreadNotifications
      />,
    );

    const notificationElement = getByTestId(
      NotificationCard.testIds.NOTIFICATIONS,
    );

    expect(notificationElement).toBeDefined();
  });

  it('correctly renders a disabled state', () => {
    const { getByTestId } = render(
      <NotificationCard
        message="Testy testy"
        onPress={() => null}
        isDisabled
      ></NotificationCard>,
    );

    const notificationElement = getByTestId(NotificationCard.testIds.ROOT);

    const elementsStyle = flattenStyles(notificationElement);

    expect(elementsStyle.backgroundColor).toBe(tokenColorSurfaceDisabled);
  });

  it('allows own testId to be passed', () => {
    const id = 'my-notification-card';

    const { getByTestId } = render(
      <NotificationCard
        message="Testy testy"
        testID={id}
        onPress={() => null}
      />,
    );

    const notificationElement = getByTestId(id);

    expect(notificationElement).toBeDefined();
  });

  it('does not trigger the onPress event if notification-card is disabled', () => {
    const mockHandle = jest.fn();

    const { getByRole } = render(
      <NotificationCard
        message="Testy testy"
        onPress={mockHandle}
        isDisabled
      />,
    );

    const notificationElement = getByRole('button');

    fireEvent.press(notificationElement);

    expect(mockHandle).not.toHaveBeenCalled();
  });

  it('does trigger the onPress event if notification-card is not disabled', () => {
    const mockHandle = jest.fn();

    const { getByRole } = render(
      <NotificationCard message="Testy testy" onPress={mockHandle} />,
    );

    const notificationElement = getByRole('button');

    fireEvent.press(notificationElement);

    expect(mockHandle).toHaveBeenCalled();
  });
});
