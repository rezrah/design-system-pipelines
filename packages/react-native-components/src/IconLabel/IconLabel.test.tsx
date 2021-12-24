import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { IconLabel } from './IconLabel';

describe('React Components / IconLabel', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders default correctly', () => {
    const { getByTestId, getByText } = render(
      <IconLabel
        icon="arrow-up"
        label="arrow-up-label"
        iconStyle={{}}
        labelStyle={{}}
      />,
    );
    const iconElement = getByTestId(IconLabel.testIds.ROOT);
    const iconLabel = getByText('arrow-up-label');

    expect(iconElement).toBeDefined();
    expect(iconLabel).toBeDefined();
  });

  it('allows own testId to be passed', () => {
    const id = 'my-icon';
    const { getByTestId } = render(
      <IconLabel icon="arrow-up" label="arrow-up-label" testID={id} />,
    );
    const iconElement = getByTestId(id);

    expect(iconElement).toBeDefined();
  });

  it('allows truncation', () => {
    const { getByTestId } = render(
      <IconLabel truncate icon="arrow-up" label="arrow-up-label" />,
    );
    const iconElement = getByTestId(IconLabel.testIds.ROOT);

    expect(iconElement).toBeDefined();
  });

  it('allows override to color', () => {
    const { getByTestId } = render(
      <IconLabel icon="arrow-up" label="arrow-up-label" color="blue" />,
    );
    const iconElement = getByTestId(IconLabel.testIds.ROOT);

    expect(iconElement).toBeDefined();
  });
});
