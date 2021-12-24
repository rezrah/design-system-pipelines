import React, { ReactElement, useState } from 'react';
import {
  View,
  Pressable,
  ViewStyle,
  TextStyle,
  FlexStyle,
  StyleSheet,
  ActivityIndicator,
  ColorValue,
} from 'react-native';

import {
  tokenColorBrandSecondaryDefault,
  tokenColorBrandSecondaryDark,
  tokenColorBrandPrimaryDefault,
  tokenColorBrandPrimaryDark,
} from '@cat-home-experts/design-tokens/dist/colours/brand/light/js/brand';

import {
  tokenColorTextInverse,
  tokenColorSurfaceDisabled,
  tokenColorBorderDisabled,
  tokenColorSurfaceDefault,
  tokenColorSurfaceLight,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

import { IconsId } from '@cat-home-experts/iconography/dist/icons';

import { Icon } from '../Icon';
import { Typography } from '../Typography';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'inverse';
export type ButtonSizes = 'default' | 'small';

export type ButtonProps = {
  /**
   * The style of the button
   */
  variant?: ButtonVariants;
  /**
   * The sizes of the button
   */
  size?: ButtonSizes;
  /**
   * The text to be shown inside the button
   */
  label: string;
  /**
   * Icon on the left of the label
   */
  iconStart?: IconsId;
  /**
   * Text to display for blindness accessibility features.
   */
  accessibilityLabel?: string;
  /**
   * Disable button
   */
  isDisabled?: boolean;
  /**
   * Processing state
   */
  isLoading?: boolean;
  /**
   * Stretch full width
   */
  block?: boolean;
  /**
   * Press handler fn
   */
  onPress: () => void;
  /**
   * Called immediately when a touch is engaged, before onPressOut and onPress.
   */
  onPressIn?: () => void;
  /**
   * Called when a touch is released.
   */
  onPressOut?: () => void;
  /**
   * Style overrides
   */
  style?: ViewStyle;
  /**
   * Assign a testid to the button root
   */
  testID?: string;
};

const setButtonSizeStyles = (size: ButtonSizes): FlexStyle => {
  const sizeStylesMap = {
    default: {
      paddingVertical: 12,
    },
    small: {
      paddingVertical: 8,
    },
  };

  return sizeStylesMap[size];
};

export const buttonVariantStates = {
  primary: {
    idle: tokenColorBrandSecondaryDefault,
    pressed: tokenColorBrandSecondaryDark,
    loading: tokenColorBrandSecondaryDefault,
    borderColor: null,
  },
  secondary: {
    idle: tokenColorBrandPrimaryDefault,
    pressed: tokenColorBrandPrimaryDark,
    loading: tokenColorBrandPrimaryDefault,
    borderColor: null,
  },
  tertiary: {
    idle: null,
    pressed: tokenColorBrandPrimaryDefault,
    loading: tokenColorBrandPrimaryDefault,
    borderColor: tokenColorBrandPrimaryDefault,
  },
  inverse: {
    idle: tokenColorSurfaceDefault,
    pressed: tokenColorSurfaceLight,
    loading: tokenColorSurfaceDefault,
    borderColor: null,
  },
  disabled: tokenColorSurfaceDisabled,
  disabledBorder: tokenColorBorderDisabled,
};

const setButtonVariantStyles = (
  variant: ButtonVariants,
  pressed: boolean,
  loading: boolean,
  disabled: boolean,
): ViewStyle => {
  let backgroundTokenName = buttonVariantStates[variant].idle;
  let borderTokenName = buttonVariantStates[variant].borderColor;

  if (pressed) {
    backgroundTokenName = buttonVariantStates[variant].pressed;
  }

  if (loading) {
    backgroundTokenName = buttonVariantStates[variant].loading;
  }

  if (disabled) {
    backgroundTokenName = buttonVariantStates.disabled;
    borderTokenName =
      variant === 'tertiary'
        ? buttonVariantStates.disabledBorder
        : borderTokenName;
  }

  return {
    backgroundColor: backgroundTokenName as ColorValue,
    borderWidth: variant === 'tertiary' ? 2 : 0,
    borderColor: (variant === 'tertiary'
      ? borderTokenName
      : 'none') as ColorValue,
  };
};

const setLabelVariantStyles = (
  variant: ButtonVariants,
  pressed: boolean,
  loading: boolean,
): TextStyle => {
  const textVariantStates = {
    primary: {
      idle: tokenColorTextInverse,
      pressed: tokenColorTextInverse,
      loading: tokenColorTextInverse,
      lineHeight: 24,
    },
    secondary: {
      idle: tokenColorTextInverse,
      pressed: tokenColorTextInverse,
      loading: tokenColorTextInverse,
      lineHeight: 24,
    },
    tertiary: {
      idle: tokenColorBrandPrimaryDefault,
      pressed: tokenColorTextInverse,
      loading: tokenColorTextInverse,
      lineHeight: 20,
    },
    inverse: {
      idle: tokenColorBrandPrimaryDefault,
      pressed: tokenColorBrandPrimaryDark,
      loading: tokenColorTextInverse,
      lineHeight: 24,
    },
  };

  let colorTokenName = textVariantStates[variant].idle;
  const lineHeightToken = textVariantStates[variant].lineHeight;

  if (pressed) {
    colorTokenName = textVariantStates[variant].pressed;
  }

  if (loading) {
    colorTokenName = textVariantStates[variant].loading;
  }

  return {
    color: colorTokenName,
    lineHeight: lineHeightToken,
  };
};

const rootTestId = 'toolshed-native-button';

const testIds = {
  ROOT: rootTestId,
  INNER: `${rootTestId}-inner`,
  LOADER: `${rootTestId}-loader`,
  ICON: `${rootTestId}-icon`,
};

Button.testIds = testIds;

export function Button({
  variant = 'primary',
  size = 'default',
  label,
  iconStart,
  onPress,
  isDisabled = false,
  isLoading = false,
  block = false,
  style,
  accessibilityLabel = label,
  testID,
  onPressIn,
  onPressOut,
}: ButtonProps): ReactElement {
  const [pressed, setPressed] = useState(false);

  const handlePressIn = (): void => {
    setPressed(true);
    if (onPressIn) onPressIn();
  };

  const handlePressOut = (): void => {
    setPressed(false);
    if (onPressOut) onPressOut();
  };

  const buttonSizeStyles = setButtonSizeStyles(size);

  const buttonVariantStyles = setButtonVariantStyles(
    variant,
    pressed,
    isLoading,
    isDisabled,
  );
  const labelVariantStyle = setLabelVariantStyles(variant, pressed, isLoading);

  const iconColor =
    labelVariantStyle.color === tokenColorTextInverse
      ? tokenColorTextInverse
      : labelVariantStyle.color;

  return (
    <View
      style={[styles.container, block && styles.block]}
      pointerEvents={isDisabled ? 'none' : 'auto'}
      testID={testIds.ROOT}
    >
      <Pressable
        disabled={isDisabled || isLoading}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessible
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        accessibilityState={isDisabled ? { disabled: true } : undefined}
        testID={testID}
      >
        <View
          style={[
            styles.buttonBox,
            buttonSizeStyles,
            buttonVariantStyles,
            style,
          ]}
          testID={testIds.INNER}
        >
          {(isLoading || iconStart) && (
            <View style={styles.fakeIconStart}>
              {isLoading ? (
                <ActivityIndicator
                  testID={testIds.LOADER}
                  color={tokenColorTextInverse}
                />
              ) : (
                iconStart && (
                  <Icon
                    testID={testIds.ICON}
                    name={iconStart}
                    isDisabled={isDisabled}
                    size={22}
                    color={iconColor}
                  />
                )
              )}
            </View>
          )}
          <Typography
            isEmphasized
            isDisabled={isDisabled}
            style={labelVariantStyle}
          >
            {label}
          </Typography>
        </View>
      </Pressable>
    </View>
  );
}

interface ButtonStyles {
  block: ViewStyle;
  container: ViewStyle;
  buttonBox: TextStyle;
  fakeIconStart: ViewStyle;
}

export const styles = StyleSheet.create<ButtonStyles>({
  block: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonBox: {
    paddingHorizontal: 16,
    borderRadius: 4,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fakeIconStart: {
    width: 24,
    marginRight: 8,
    justifyContent: 'center',
  },
});
