/* eslint-disable react/no-array-index-key */
import React, { ReactElement } from 'react';
import { View, Pressable, StyleSheet, ViewStyle } from 'react-native';

import {
  tokenColorAttentionDefault,
  tokenColorAttentionLightest,
  tokenColorAttentionDarkest,
  tokenColorErrorDefault,
  tokenColorErrorLightest,
  tokenColorSuccessDefault,
  tokenColorSuccessLightest,
  tokenColorSurfaceDefault,
  tokenColorBorderDisabled,
  tokenColorSurfaceDisabled,
  tokenColorTextDisabled,
  tokenColorShadowDefault,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

import {
  tokenColorBrandPrimaryDefault,
  tokenColorBrandPrimaryLightest,
} from '@cat-home-experts/design-tokens/dist/colours/brand/light/js/brand';

import { IconsId } from '@cat-home-experts/iconography/dist/icons';

import { Icon } from '../Icon';
import { Typography } from '../Typography';

export type SystemCardProps = {
  /**
   * Card type
   */
  type?: SystemCardVariant;
  /**
   * Card title
   */
  title: string;
  /**
   * Card Content
   */
  description: string;
  /**
   * isDisabled flag
   */
  isDisabled?: boolean;
  /**
   * flag allowing to hide the Arrow Icon
   */
  noArrow?: boolean;
  /**
   * When used inside a carousel, has a fixed width
   */
  isCompact?: boolean;
  /**
   * CTA handler.
   */
  onPress?: () => void;
  /**
   * Style overrides
   */
  style?: ViewStyle;
  /**
   * Assign a testid to the SystemCard root
   */
  testID?: string;
};

type SystemCardVariant = 'attention' | 'warning' | 'success' | 'info';

const getStylesPerVariant = (variant: SystemCardVariant) =>
  ({
    attention: {
      icon: 'warning-circle-fill',
      color: tokenColorAttentionDefault,
      titleColor: tokenColorAttentionDarkest,
    },
    warning: {
      icon: 'warning-triangle-fill',
      color: tokenColorErrorDefault,
      titleColor: tokenColorErrorDefault,
    },
    success: {
      icon: 'check-circle-fill',
      color: tokenColorSuccessDefault,
      titleColor: tokenColorSuccessDefault,
    },
    info: {
      icon: 'info-fill',
      color: tokenColorBrandPrimaryDefault,
      titleColor: tokenColorBrandPrimaryDefault,
    },
  }[variant]);

export const systemCardVariantStates = {
  attention: {
    hover: tokenColorAttentionLightest,
    pressed: tokenColorAttentionLightest,
    borderColor: tokenColorAttentionDefault,
  },
  warning: {
    hover: tokenColorErrorLightest,
    pressed: tokenColorErrorLightest,
    borderColor: tokenColorErrorDefault,
  },
  success: {
    hover: tokenColorSuccessLightest,
    pressed: tokenColorSuccessLightest,
    borderColor: tokenColorSuccessDefault,
  },
  info: {
    hover: tokenColorBrandPrimaryLightest,
    pressed: tokenColorBrandPrimaryLightest,
    borderColor: tokenColorBrandPrimaryDefault,
  },

  disabled: tokenColorSurfaceDisabled,
  disabledBorder: tokenColorBorderDisabled,
};

const setButtonVariantStyles = (
  variant: SystemCardVariant,
  pressed: boolean,
  hover: boolean,
  disabled: boolean,
): ViewStyle => {
  let backgroundTokenName = tokenColorSurfaceDefault;
  let borderTokenName = systemCardVariantStates[variant].borderColor;

  if (hover) {
    backgroundTokenName = systemCardVariantStates[variant].hover;
  }

  if (pressed) {
    backgroundTokenName = systemCardVariantStates[variant].pressed;
  }

  if (disabled) {
    backgroundTokenName = systemCardVariantStates.disabled;
    borderTokenName = systemCardVariantStates.disabledBorder;
  }

  return {
    backgroundColor: backgroundTokenName,
    borderColor: borderTokenName,
  };
};

const rootTestId = 'toolshed-native-system-card';

const testIds = {
  ROOT: rootTestId,
  TITLE: `${rootTestId}-title`,
  DESCRIPTION: `${rootTestId}-desc`,
  ARROW: `${rootTestId}-arrow`,
};

SystemCard.testIds = testIds;

export function SystemCard({
  type = 'attention',
  title,
  description,
  isDisabled = false,
  noArrow = false,
  isCompact = false,
  onPress,
  style,
  testID,
}: SystemCardProps): ReactElement {
  return (
    <Pressable
      testID={testID || testIds.ROOT}
      onPress={onPress}
      disabled={isDisabled}
      accessibilityState={isDisabled ? { disabled: true } : undefined}
      // hovered is missing from the type definition
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={({ hovered, pressed }) => [
        styles.root,
        style,
        setButtonVariantStyles(type, pressed, hovered, isDisabled),
        { width: isCompact ? 262 : '100%' },
      ]}
    >
      <Icon
        name={getStylesPerVariant(type).icon as IconsId}
        size={32}
        color={
          isDisabled ? tokenColorTextDisabled : getStylesPerVariant(type).color
        }
      />
      <View style={styles.text}>
        <View style={styles.title}>
          <Typography
            testId={testIds.TITLE}
            use="headingS"
            isDisabled={isDisabled}
            style={{
              color: getStylesPerVariant(type).titleColor,
            }}
          >
            {title}
          </Typography>
        </View>
        <Typography
          testId={testIds.DESCRIPTION}
          use="bodySmall"
          isDisabled={isDisabled}
          ellipsizeMode="tail"
          numberOfLines={isCompact ? 3 : undefined}
        >
          {description}
        </Typography>
      </View>
      {!noArrow && (
        <Icon
          testID={testIds.ARROW}
          name="chevron-right"
          size={24}
          color={
            isDisabled ? tokenColorTextDisabled : tokenColorBrandPrimaryDefault
          }
          style={styles.arrow}
        />
      )}
    </Pressable>
  );
}

interface SystemCardStyles {
  root: ViewStyle;
  text: ViewStyle;
  title: ViewStyle;
  arrow: ViewStyle;
}

export const styles = StyleSheet.create<SystemCardStyles>({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 'auto',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    shadowColor: tokenColorShadowDefault,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 1,
  },
  text: {
    marginLeft: 6,
    flex: 1,
  },
  title: {
    marginTop: 4,
    marginBottom: 4,
  },
  arrow: {
    alignSelf: 'center',
  },
});
