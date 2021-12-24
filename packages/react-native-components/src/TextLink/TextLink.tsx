import React, { ReactElement } from 'react';
import {
  Pressable,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Insets,
} from 'react-native';

import {
  tokenColorTextLinkDefault,
  tokenColorTextInverse,
  tokenColorTextLinkPressed,
  tokenColorTextLinkHover,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

import { Typography } from '../Typography';

export type Props = {
  /**
   * The text to be shown inside the TextLink
   */
  label: string;
  /**
   * Text to display for blindness accessibility features.
   */
  accessibilityLabel?: string;
  /**
   * Disable TextLink
   */
  isDisabled?: boolean;
  /**
   * Inverse TextLink colour
   */
  isInverse?: boolean;
  /**
   * Press handler fn
   */
  onPress: () => void;
  /**
   * Style overrides
   */
  style?: TextStyle;
  /**
   * Assign a testid to the TextLink root
   */
  testID?: string;
  /**
   * Use ellipsis and trunctated text for longer labels
   */
  truncateText?: boolean;
  /**
   * Size of the text link in terms of Typography primitives
   */
  variant?: 'regular' | 'small';
  /**
   * Sets additional distance outside of element in which a press can be detected.
   */
  hitSlop?: Insets | number;
};

const setLabelStyle = (
  isInverse: boolean,
  pressed?: boolean,
  hovered?: boolean,
): ViewStyle[] => {
  const style = [styles.label] as ViewStyle[];

  if (hovered) {
    style.push(styles.hover);
  }

  if (pressed) {
    style.push(styles.pressed);
  }

  if (isInverse) {
    style.push(styles.inverse);
  }

  return style;
};

const rootTestId = 'toolshed-native-menulink';

const testIds = {
  ROOT: rootTestId,
};

TextLink.testIds = testIds;

export function TextLink({
  label,
  testID,
  onPress,
  accessibilityLabel,
  isDisabled = false,
  isInverse = false,
  truncateText = false,
  variant = 'regular',
  hitSlop,
  style,
}: Props): ReactElement {
  const isSmall = variant === 'small';

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessible
      accessibilityLabel={accessibilityLabel || label}
      accessibilityHint={`Navigates to ${label}`}
      accessibilityRole="link"
      accessibilityState={isDisabled ? { disabled: true } : undefined}
      testID={testID || testIds.ROOT}
      style={style}
      hitSlop={hitSlop}
    >
      {
        // hovered is missing from the type definition
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ({ pressed, hovered }) => (
          <Typography
            style={setLabelStyle(isInverse, pressed, hovered)}
            use={isSmall ? 'bodySmall' : 'bodyRegular'}
            isEmphasized
            isDisabled={isDisabled}
            numberOfLines={truncateText ? 1 : undefined}
          >
            {label}
          </Typography>
        )
      }
    </Pressable>
  );
}

interface TextLinkStyles {
  inverse: ViewStyle;
  hover: ViewStyle;
  pressed: ViewStyle;
  label: TextStyle;
}

export const styles = StyleSheet.create<TextLinkStyles>({
  label: {
    color: tokenColorTextLinkDefault,
    textDecorationColor: tokenColorTextLinkDefault,
  },
  inverse: {
    color: tokenColorTextInverse,
    textDecorationColor: tokenColorTextInverse,
  },
  hover: {
    color: tokenColorTextLinkHover,
    textDecorationLine: 'underline',
  },
  pressed: {
    color: tokenColorTextLinkPressed,
  },
});
