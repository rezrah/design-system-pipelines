import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { Icon } from './Icon';

describe('React Components / Icon', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders default correctly', () => {
    const { getByTestId } = render(<Icon name="arrow-up" />);
    const iconElement = getByTestId(Icon.testIds.ROOT);

    expect(iconElement).toBeDefined();
  });

  it('allows override of size', () => {
    const alteredFontSize = 90;
    const { getByTestId } = render(
      <Icon name="arrow-up" size={alteredFontSize} />,
    );
    const iconElement = getByTestId(Icon.testIds.ROOT);

    expect(iconElement.props.style[0].fontSize).toBe(alteredFontSize);
  });

  it('allows override of colour', () => {
    const alteredColor = 'pink';
    const { getByTestId } = render(
      <Icon name="arrow-up" color={alteredColor} />,
    );
    const iconElement = getByTestId(Icon.testIds.ROOT);

    expect(iconElement.props.style[0].color).toBe(alteredColor);
  });

  it('allows own testId to be passed', () => {
    const id = 'my-icon';
    const { getByTestId } = render(<Icon name="arrow-up" testID={id} />);
    const iconElement = getByTestId(id);

    expect(iconElement).toBeDefined();
  });
});
