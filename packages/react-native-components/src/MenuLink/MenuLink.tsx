import React, { ReactElement } from 'react';
import {
  View,
  Pressable,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import { IconsId } from '@cat-home-experts/iconography/dist/icons';
import { tokenColorBrandPrimaryDefault } from '@cat-home-experts/design-tokens/dist/colours/brand/light/js/brand';
import {
  tokenColorBorderDisabled,
  tokenColorSurfaceDisabled,
  tokenColorSurfaceWarm,
  tokenColorSurfaceLight,
  tokenColorSurfaceDefault,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

import { Icon } from '../Icon';
import { Typography } from '../Typography';

export type Props = {
  /**
   * The text to be shown inside the MenuLink
   */
  label: string;
  /**
   * Optional icon at the start of the label
   */
  icon?: IconsId;
  /**
   * Choose to show/hide the navigation arrow at the end of the label
   */
  hasNavigationIcon?: boolean;
  /**
   * Text to display for blindness accessibility features.
   */
  accessibilityLabel?: string;
  /**
   * Disable MenuLink
   */
  isDisabled?: boolean;
  /**
   * Emphasize text in MenLink
   */
  isEmphasized?: boolean;
  /**
   * Press handler fn
   */
  onPress: () => void;
  /**
   * Style overrides
   */
  style?: ViewStyle;
  /**
   * Assign a testid to the MenuLink root
   */
  testID?: string;
  /**
   * Use ellipsis and trunctated text for longer labels
   */
  truncateText?: boolean;
  /**
   * Has a bottom border. default: enabled
   */
  hasBottomBorder?: boolean;
};

const rootTestId = 'toolshed-native-menulink';

const testIds = {
  ROOT: rootTestId,
  INNER: `${rootTestId}-inner`,
  ICON: `${rootTestId}-icon`,
  NAV_ICON: `${rootTestId}-nav-icon`,
};

MenuLink.testIds = testIds;

export function MenuLink({
  label,
  testID,
  onPress,
  accessibilityLabel,
  icon,
  hasNavigationIcon = true,
  isDisabled = false,
  isEmphasized = true,
  truncateText = false,
  hasBottomBorder = true,
}: Props): ReactElement {
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessible
      accessibilityLabel={accessibilityLabel || label}
      accessibilityHint={`Navigates to ${label}`}
      accessibilityRole="menuitem"
      accessibilityState={isDisabled ? { disabled: true } : undefined}
      testID={testID || testIds.ROOT}
      // hovered is missing from the type definition
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={({ hovered, pressed }) => [
        styles.root,
        hovered && styles.hover,
        pressed && styles.pressed,
      ]}
    >
      <View
        testID={testIds.INNER}
        style={[
          styles.innerContainer,
          hasBottomBorder && styles.hasBottomBorder,
        ]}
      >
        {icon && (
          <View style={styles.icon}>
            <Icon
              name={icon}
              size={24}
              isDisabled={isDisabled}
              testID={testIds.ICON}
            />
          </View>
        )}
        <Typography
          style={styles.label}
          use="bodyRegular"
          isEmphasized={isEmphasized}
          isDisabled={isDisabled}
          numberOfLines={truncateText ? 1 : undefined}
        >
          {label}
        </Typography>
        {hasNavigationIcon && (
          <View style={[styles.iconEnd]}>
            <Icon
              name="chevron-right"
              size={16}
              color={tokenColorBrandPrimaryDefault}
              isDisabled={isDisabled}
              testID={testIds.NAV_ICON}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
}

interface MenuLinkStyles {
  root: ViewStyle;
  iconEnd: ViewStyle;
  icon: ViewStyle;
  rootDisabled: ViewStyle;
  pressed: ViewStyle;
  hover: ViewStyle;
  label: TextStyle;
  innerContainer: ViewStyle;
  hasBottomBorder: ViewStyle;
}

export const styles = StyleSheet.create<MenuLinkStyles>({
  root: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    paddingHorizontal: 12,
    marginBottom: 4,
    backgroundColor: tokenColorSurfaceDefault,
  },
  rootDisabled: {
    backgroundColor: tokenColorSurfaceDisabled,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    paddingVertical: 12,
  },
  hasBottomBorder: {
    borderBottomColor: tokenColorBorderDisabled,
    borderBottomWidth: 1,
  },
  label: {
    maxWidth: '80%',
  },
  icon: {
    alignSelf: 'center',
    textAlign: 'center',
    marginRight: 8,
  },
  iconEnd: {
    marginLeft: 'auto',
    height: 24,
    width: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    backgroundColor: tokenColorSurfaceLight,
  },
  hover: {
    backgroundColor: tokenColorSurfaceWarm,
  },
});
