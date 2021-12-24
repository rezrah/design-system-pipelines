import React, { ReactNode, ReactElement } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

import {
  tokenColorTextSecondary,
  tokenColorTextDisabled,
  tokenColorTextDefault,
  tokenColorTextInverse,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';
import * as Tokens from '@cat-home-experts/design-tokens/dist/typography/js/typography';
import {
  tokenColorBrandPrimaryDefault,
  tokenColorBrandSecondaryDefault,
} from '@cat-home-experts/design-tokens/dist/colours/brand/light/js/brand';

import { getWidth } from '../utils/dimensions';

import { MOBILE_LARGE_WIDTH_BREAKPOINT } from '../constants';

export type TypographyVariants =
  | 'headingXXL'
  | 'headingXL'
  | 'headingL'
  | 'headingM'
  | 'headingS'
  | 'headingXS'
  | 'headingNav'
  | 'bodyRegular'
  | 'bodySmall'
  | 'bodyTiny';

type RoleTypes = 'header' | 'link' | null;
// eslint-disable-next-line @typescript-eslint/ban-types
export type StyleProps = { [key: string]: object };

export type TypographyProps = {
  /**
   * The style of the Typography component, defaults to bodyTwo
   */
  use?: TypographyVariants;
  /**
   * Override larger devices to use different variant of the same role type (heading to heading, body to body).
   */
  desktopUse?: TypographyVariants;
  /**
   * The content of the Typography component
   */
  children: ReactNode;
  /**
   * Text to display instructions for blindness accessibility features.
   */
  accessibilityLabel?: string;
  /**
   * Assign a testid to the Typography root
   */
  testId?: string;
  /**
   * Override styles
   */
  style?: TextStyle | TextStyle[];
  /**
   * Will use default primary brand colour
   */
  isBranded?: boolean;
  /**
   * Will use secondary brand colour
   */
  isBrandedSecondary?: boolean;
  /**
   * Is disabled / inactive
   */
  isDisabled?: boolean;
  /**
   * Applies an inverse colour to the text
   */
  isInverse?: boolean;
  /**
   * Applies a muted colour to the text
   */
  isMuted?: boolean;
  /**
   * Emphasized with a bold font-weight
   */
  isEmphasized?: boolean;
  /**
   * Create line wrapping restriction. default: undefined
   */
  numberOfLines?: number | undefined;
  /**
   * Enabled in conjuction with numberOfLines.
   */
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  /**
   * Enables text centering
   */
  isCentred?: boolean;
  /**
   * Can turn off font scaling. default: true
   */
  allowFontScaling?: boolean;
};

const rootTestId = 'toolshed-native-typography';

const testIds = {
  ROOT: rootTestId,
};

Typography.testIds = testIds;

const isHeader = (useCase: string): RoleTypes => {
  return useCase.includes('heading') ? 'header' : null;
};

export function Typography({
  children,
  use = 'bodyRegular',
  accessibilityLabel = '',
  testId,
  style,
  isBranded,
  isBrandedSecondary,
  isDisabled,
  isInverse = false,
  isMuted = false,
  isEmphasized = false,
  numberOfLines = undefined,
  isCentred = false,
  desktopUse,
  ellipsizeMode = 'tail',
  allowFontScaling = true,
}: TypographyProps): ReactElement {
  const DEVICE_DIMENSIONS_WIDTH = getWidth();

  const roleType = isHeader(use);

  const deviceType =
    DEVICE_DIMENSIONS_WIDTH < MOBILE_LARGE_WIDTH_BREAKPOINT
      ? 'mobile'
      : 'desktop';

  const setStyle = (): StyleProps => {
    if (desktopUse && deviceType === 'desktop') {
      if (roleType) {
        return (styles as StyleProps)[
          `${deviceType}${desktopUse}`
        ] as StyleProps;
      }

      return (styles as StyleProps)[`${desktopUse}`] as StyleProps;
    }

    if (roleType) {
      return (styles as StyleProps)[`${deviceType}${use}`] as StyleProps;
    }

    return (styles as StyleProps)[use] as StyleProps;
  };

  return (
    <Text
      allowFontScaling={allowFontScaling}
      maxFontSizeMultiplier={2}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={roleType || 'none'}
      testID={testId || testIds.ROOT}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[
        styles.default,
        setStyle(),
        style,
        isBranded && styles.branded,
        isBrandedSecondary && styles.brandedSecondary,
        isDisabled && styles.disabled,
        isEmphasized && styles.emphasized,
        isMuted && styles.muted,
        isInverse && styles.inverted,
        isCentred && styles.centre,
      ]}
    >
      {children}
    </Text>
  );
}

export const styles = StyleSheet.create({
  branded: {
    color: tokenColorBrandPrimaryDefault,
  },
  brandedSecondary: {
    color: tokenColorBrandSecondaryDefault,
  },
  default: {
    color: tokenColorTextDefault,
  },
  desktopheadingXXL: {
    fontSize: Tokens.tokenTypographyHeadingDesktopXxlSize.number,
    lineHeight: Tokens.tokenTypographyHeadingDesktopXxlLineHeight.number,
    fontFamily: 'semi-bold',
  },
  desktopheadingXL: {
    fontSize: Tokens.tokenTypographyHeadingDesktopXlSize.number,
    lineHeight: Tokens.tokenTypographyHeadingDesktopXlLineHeight.number,
    fontFamily: 'semi-bold',
  },
  desktopheadingL: {
    fontSize: Tokens.tokenTypographyHeadingDesktopLSize.number,
    lineHeight: Tokens.tokenTypographyHeadingDesktopLLineHeight.number,
    fontFamily: 'semi-bold',
  },
  desktopheadingM: {
    fontSize: Tokens.tokenTypographyHeadingDesktopMSize.number,
    lineHeight: Tokens.tokenTypographyHeadingDesktopMLineHeight.number,
    fontFamily: 'semi-bold',
  },
  desktopheadingS: {
    fontSize: Tokens.tokenTypographyHeadingDesktopSSize.number,
    lineHeight: Tokens.tokenTypographyHeadingDesktopSLineHeight.number,
    fontFamily: 'semi-bold',
  },
  desktopheadingXS: {
    fontSize: Tokens.tokenTypographyHeadingDesktopXsSize.number,
    lineHeight: Tokens.tokenTypographyHeadingDesktopXsLineHeight.number,
    fontFamily: 'semi-bold',
  },
  desktopheadingNav: {
    fontSize: Tokens.tokenTypographyHeadingDesktopNavSize.number,
    lineHeight: Tokens.tokenTypographyHeadingDesktopNavLineHeight.number,
    fontFamily: 'semi-bold',
  },
  mobileheadingXXL: {
    fontSize: Tokens.tokenTypographyHeadingMobileXxlSize.number,
    lineHeight: Tokens.tokenTypographyHeadingMobileXxlLineHeight.number,
    fontFamily: 'semi-bold',
  },
  mobileheadingXL: {
    fontSize: Tokens.tokenTypographyHeadingMobileXlSize.number,
    lineHeight: Tokens.tokenTypographyHeadingMobileXlLineHeight.number,
    fontFamily: 'semi-bold',
  },
  mobileheadingL: {
    fontSize: Tokens.tokenTypographyHeadingMobileLSize.number,
    lineHeight: Tokens.tokenTypographyHeadingMobileLLineHeight.number,
    fontFamily: 'semi-bold',
  },
  mobileheadingM: {
    fontSize: Tokens.tokenTypographyHeadingMobileMSize.number,
    lineHeight: Tokens.tokenTypographyHeadingMobileMLineHeight.number,
    fontFamily: 'semi-bold',
  },
  mobileheadingS: {
    fontSize: Tokens.tokenTypographyHeadingMobileSSize.number,
    lineHeight: Tokens.tokenTypographyHeadingMobileSLineHeight.number,
    fontFamily: 'semi-bold',
  },
  mobileheadingXS: {
    fontSize: Tokens.tokenTypographyHeadingMobileXsSize.number,
    lineHeight: Tokens.tokenTypographyHeadingMobileXsLineHeight.number,
    fontFamily: 'semi-bold',
  },
  mobileheadingNav: {
    fontSize: Tokens.tokenTypographyHeadingMobileNavSize.number,
    lineHeight: Tokens.tokenTypographyHeadingMobileNavLineHeight.number,
    fontFamily: 'semi-bold',
  },
  bodyRegular: {
    fontSize: Tokens.tokenTypographyBodyRegularSize.number,
    lineHeight: Tokens.tokenTypographyBodyRegularLineHeight.number,
    letterSpacing: Tokens.tokenTypographyBodyRegularSpacing,
    fontFamily: 'regular',
  },
  bodySmall: {
    fontSize: Tokens.tokenTypographyBodySmallSize.number,
    lineHeight: Tokens.tokenTypographyBodySmallLineHeight.number,
    letterSpacing: Tokens.tokenTypographyBodySmallSpacing,
    fontFamily: 'regular',
  },
  bodyTiny: {
    fontSize: Tokens.tokenTypographyBodyTinySize.number,
    lineHeight: Tokens.tokenTypographyBodyTinyLineHeight.number,
    letterSpacing: Tokens.tokenTypographyBodyTinySpacing,
    fontFamily: 'regular',
  },
  disabled: {
    color: tokenColorTextDisabled,
  },
  emphasized: {
    fontFamily: 'semi-bold',
  },
  inverted: {
    color: tokenColorTextInverse,
  },
  muted: {
    color: tokenColorTextSecondary,
  },
  centre: {
    textAlign: 'center',
  },
});
