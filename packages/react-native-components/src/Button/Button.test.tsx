import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { Button, styles, buttonVariantStates } from './Button';

describe('React Components / Button', () => {
  const mockLabel = 'test-button';

  afterEach(() => {
    cleanup();
  });

  it('renders default correctly', () => {
    const mockHandle = jest.fn();
    const { getByRole } = render(
      <Button label={mockLabel} onPress={mockHandle} />,
    );
    const buttonComponent = getByRole('button');

    expect(buttonComponent).toBeDefined();
  });

  it('renders a block button when prop bassed in', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <Button
        testID={mockLabel}
        label={mockLabel}
        onPress={mockHandle}
        block
      />,
    );
    const buttonElement = getByTestId(Button.testIds.ROOT);

    expect(buttonElement.props.style[1]).toBe(styles.block);
  });

  it('allows custom accessibilityLabel', () => {
    const mockHandle = jest.fn();
    const accessibilityLabel = 'accessibilityLabel';
    const { getByA11yLabel } = render(
      <Button
        testID={mockLabel}
        label={mockLabel}
        accessibilityLabel={accessibilityLabel}
        onPress={mockHandle}
        block
      />,
    );
    const buttonElement = getByA11yLabel(accessibilityLabel);

    expect(buttonElement).toBeDefined();
  });

  it('renders a loader when prop is passed in', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <Button
        testID={mockLabel}
        label={mockLabel}
        isLoading
        onPress={mockHandle}
      />,
    );
    const loader = getByTestId(Button.testIds.LOADER);

    expect(loader).toBeDefined();
  });

  it('does not render a loader when prop isnt passed in', () => {
    const mockHandle = jest.fn();
    const { queryByTestId } = render(
      <Button testID={mockLabel} label={mockLabel} onPress={mockHandle} />,
    );

    const loader = queryByTestId(Button.testIds.LOADER);

    expect(loader).toBe(null);
  });

  it('renders an icon', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <Button
        testID={mockLabel}
        label={mockLabel}
        onPress={mockHandle}
        iconStart="shield-check"
      />,
    );

    const icon = getByTestId(Button.testIds.ICON);

    expect(icon).toBeDefined();
  });

  it('renders icon color correctly with its label when inverse', () => {
    const mockHandle = jest.fn();

    const { getByTestId, getByText } = render(
      <Button
        testID={mockLabel}
        onPress={mockHandle}
        iconStart="shield-check"
        variant="inverse"
        label={mockLabel}
      />,
    );

    const icon = getByTestId(Button.testIds.ICON);
    const label = getByText(mockLabel);

    expect(icon.props.style[0].color).toEqual(label.props.style[2].color);
  });

  it('does not render an icon if the button is in a loading state', () => {
    const mockHandle = jest.fn();
    const { queryByTestId, getByTestId } = render(
      <Button
        testID={mockLabel}
        label={mockLabel}
        onPress={mockHandle}
        isLoading
        iconStart="shield-check"
      />,
    );

    const icon = queryByTestId(Button.testIds.ICON);
    const loader = getByTestId(Button.testIds.LOADER);

    expect(icon).toBe(null);
    expect(loader).toBeDefined();
  });

  it('does not trigger the onPress event if button is disabled', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <Button
        testID={mockLabel}
        label={mockLabel}
        isDisabled
        onPress={mockHandle}
      />,
    );

    const buttonElement = getByTestId(mockLabel);

    fireEvent.press(buttonElement);

    expect(mockHandle).not.toHaveBeenCalled();
  });

  it('allows custom style override on inner button ', () => {
    const mockHandle = jest.fn();
    const customStyles = { backgroundColor: 'pink' };
    const { getByTestId } = render(
      <Button
        testID={mockLabel}
        label={mockLabel}
        isDisabled
        onPress={mockHandle}
        style={customStyles}
      />,
    );

    const innerButtonElement = getByTestId(Button.testIds.INNER);

    expect(innerButtonElement.props.style[3]).toEqual(customStyles);
  });

  it('successfully calls onPressIn when passed in', () => {
    const mockHandle = jest.fn();
    const mockOnPressIn = jest.fn();

    const { getByTestId } = render(
      <Button
        testID={mockLabel}
        label={mockLabel}
        onPress={mockHandle}
        onPressIn={mockOnPressIn}
      />,
    );

    const buttonElement = getByTestId(mockLabel);

    fireEvent(buttonElement, 'pressIn');

    expect(mockOnPressIn).toHaveBeenCalledTimes(1);
  });

  it('does not call onPressIn if not passed in', () => {
    const mockHandle = jest.fn();
    const mockOnPressIn = jest.fn();

    const { getByTestId } = render(
      <Button testID={mockLabel} label={mockLabel} onPress={mockHandle} />,
    );

    const buttonElement = getByTestId(mockLabel);

    fireEvent(buttonElement, 'pressIn');

    expect(mockOnPressIn).not.toHaveBeenCalled();
  });

  it('successfully calls onPressOut when passed in', () => {
    const mockHandle = jest.fn();
    const mockOnPressOut = jest.fn();

    const { getByTestId } = render(
      <Button
        testID={mockLabel}
        label={mockLabel}
        onPress={mockHandle}
        onPressOut={mockOnPressOut}
      />,
    );

    const buttonElement = getByTestId(mockLabel);

    fireEvent(buttonElement, 'pressOut');

    expect(mockOnPressOut).toHaveBeenCalledTimes(1);
  });

  it('does not call onPressOut if not passed in', () => {
    const mockHandle = jest.fn();
    const mockOnPressOut = jest.fn();

    const { getByTestId } = render(
      <Button testID={mockLabel} label={mockLabel} onPress={mockHandle} />,
    );

    const buttonElement = getByTestId(mockLabel);

    fireEvent(buttonElement, 'pressOut');

    expect(mockOnPressOut).not.toHaveBeenCalled();
  });

  it('allows size prop', () => {
    const mockHandle = jest.fn();
    const { getByTestId } = render(
      <Button
        testID={mockLabel}
        label={mockLabel}
        onPress={mockHandle}
        size="small"
      />,
    );
    const innerButtonElement = getByTestId(Button.testIds.INNER);
    expect(innerButtonElement).toBeDefined();
  });

  describe('setButtonVariantStyles', () => {
    const mockHandle = jest.fn();

    it('covers default disabled state', () => {
      const { getByTestId } = render(
        <Button
          testID={mockLabel}
          label={mockLabel}
          onPress={mockHandle}
          isDisabled
        />,
      );

      const innerButtonElement = getByTestId(Button.testIds.INNER);
      const expectedResult = {
        backgroundColor: buttonVariantStates.disabled,
        borderColor: 'none',
        borderWidth: 0,
      };

      expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
    });

    describe('assigns correct styles for primary', () => {
      it('covers default state', () => {
        const { getByTestId } = render(
          <Button testID={mockLabel} label={mockLabel} onPress={mockHandle} />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        const expectedResult = {
          backgroundColor: buttonVariantStates.primary.idle,
          borderColor: 'none',
          borderWidth: 0,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });

      it('covers pressed state', () => {
        const mockOnPressIn = jest.fn();
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            onPressIn={mockOnPressIn}
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        fireEvent(innerButtonElement, 'pressIn');
        const expectedResult = {
          backgroundColor: buttonVariantStates.primary.pressed,
          borderColor: 'none',
          borderWidth: 0,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });

      it('covers loading state', () => {
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            isLoading
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        const expectedResult = {
          backgroundColor: buttonVariantStates.primary.loading,
          borderColor: 'none',
          borderWidth: 0,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });
    });

    describe('assigns correct styles for secondary', () => {
      it('covers default state', () => {
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            variant="secondary"
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        const expectedResult = {
          backgroundColor: buttonVariantStates.secondary.idle,
          borderColor: 'none',
          borderWidth: 0,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });

      it('covers pressed state', () => {
        const mockOnPressIn = jest.fn();
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            onPressIn={mockOnPressIn}
            variant="secondary"
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        fireEvent(innerButtonElement, 'pressIn');
        const expectedResult = {
          backgroundColor: buttonVariantStates.secondary.pressed,
          borderColor: 'none',
          borderWidth: 0,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });

      it('covers loading state', () => {
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            variant="secondary"
            isLoading
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        const expectedResult = {
          backgroundColor: buttonVariantStates.secondary.loading,
          borderColor: 'none',
          borderWidth: 0,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });
    });

    describe('assigns correct styles for tertiary', () => {
      it('covers default state', () => {
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            variant="tertiary"
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        const expectedResult = {
          borderColor: buttonVariantStates.tertiary.borderColor,
          borderWidth: 2,
          backgroundColor: null,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });

      it('covers pressed state', () => {
        const mockOnPressIn = jest.fn();
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            onPressIn={mockOnPressIn}
            variant="tertiary"
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        fireEvent(innerButtonElement, 'pressIn');
        const expectedResult = {
          borderColor: buttonVariantStates.tertiary.borderColor,
          borderWidth: 2,
          backgroundColor: buttonVariantStates.tertiary.pressed,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });

      it('covers loading state', () => {
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            isLoading
            variant="tertiary"
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        const expectedResult = {
          borderColor: buttonVariantStates.tertiary.loading,
          borderWidth: 2,
          backgroundColor: buttonVariantStates.tertiary.loading,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });

      it('covers disabled state', () => {
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            isDisabled
            variant="tertiary"
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        const expectedResult = {
          backgroundColor: buttonVariantStates.disabled,
          borderColor: buttonVariantStates.disabledBorder,
          borderWidth: 2,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });
    });

    describe('assigns correct styles for inverse', () => {
      it('covers default state', () => {
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            variant="inverse"
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        const expectedResult = {
          backgroundColor: buttonVariantStates.inverse.idle,
          borderColor: 'none',
          borderWidth: 0,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });

      it('covers pressed state', () => {
        const mockOnPressIn = jest.fn();
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            onPressIn={mockOnPressIn}
            variant="inverse"
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);

        fireEvent(innerButtonElement, 'pressIn');
        const expectedResult = {
          backgroundColor: buttonVariantStates.inverse.pressed,
          borderColor: 'none',
          borderWidth: 0,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });

      it('covers loading state', () => {
        const { getByTestId } = render(
          <Button
            testID={mockLabel}
            label={mockLabel}
            onPress={mockHandle}
            variant="inverse"
            isLoading
          />,
        );

        const innerButtonElement = getByTestId(Button.testIds.INNER);
        const expectedResult = {
          backgroundColor: buttonVariantStates.inverse.loading,
          borderColor: 'none',
          borderWidth: 0,
        };

        expect(innerButtonElement.props.style[2]).toEqual(expectedResult);
      });
    });
  });
});
