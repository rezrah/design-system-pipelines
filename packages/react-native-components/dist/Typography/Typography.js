import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { tokenColorTextSecondary, tokenColorTextDisabled, tokenColorTextDefault, tokenColorTextInverse, } from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';
import * as Tokens from '@cat-home-experts/design-tokens/dist/typography/js/typography';
import { tokenColorBrandPrimaryDefault, tokenColorBrandSecondaryDefault, } from '@cat-home-experts/design-tokens/dist/colours/brand/light/js/brand';
import { getWidth } from '../utils/dimensions';
import { MOBILE_LARGE_WIDTH_BREAKPOINT } from '../constants';
const rootTestId = 'toolshed-native-typography';
const testIds = {
    ROOT: rootTestId,
};
Typography.testIds = testIds;
const isHeader = (useCase) => {
    return useCase.includes('heading') ? 'header' : null;
};
export function Typography({ children, use = 'bodyRegular', accessibilityLabel = '', testId, style, isBranded, isBrandedSecondary, isDisabled, isInverse = false, isMuted = false, isEmphasized = false, numberOfLines = undefined, isCentred = false, desktopUse, ellipsizeMode = 'tail', allowFontScaling = true, }) {
    const DEVICE_DIMENSIONS_WIDTH = getWidth();
    const roleType = isHeader(use);
    const deviceType = DEVICE_DIMENSIONS_WIDTH < MOBILE_LARGE_WIDTH_BREAKPOINT
        ? 'mobile'
        : 'desktop';
    const setStyle = () => {
        if (desktopUse && deviceType === 'desktop') {
            if (roleType) {
                return styles[`${deviceType}${desktopUse}`];
            }
            return styles[`${desktopUse}`];
        }
        if (roleType) {
            return styles[`${deviceType}${use}`];
        }
        return styles[use];
    };
    return (React.createElement(Text, { allowFontScaling: allowFontScaling, maxFontSizeMultiplier: 2, accessibilityLabel: accessibilityLabel, accessibilityRole: roleType || 'none', testID: testId || testIds.ROOT, numberOfLines: numberOfLines, ellipsizeMode: ellipsizeMode, style: [
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
        ] }, children));
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
//# sourceMappingURL=Typography.js.map