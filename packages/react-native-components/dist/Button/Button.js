import React, { useState } from 'react';
import { View, Pressable, StyleSheet, ActivityIndicator, } from 'react-native';
import { tokenColorBrandSecondaryDefault, tokenColorBrandSecondaryDark, tokenColorBrandPrimaryDefault, tokenColorBrandPrimaryDark, } from '@cat-home-experts/design-tokens/dist/colours/brand/light/js/brand';
import { tokenColorTextInverse, tokenColorSurfaceDisabled, tokenColorBorderDisabled, tokenColorSurfaceDefault, tokenColorSurfaceLight, } from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
const setButtonSizeStyles = (size) => {
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
const setButtonVariantStyles = (variant, pressed, loading, disabled) => {
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
        backgroundColor: backgroundTokenName,
        borderWidth: variant === 'tertiary' ? 2 : 0,
        borderColor: (variant === 'tertiary'
            ? borderTokenName
            : 'none'),
    };
};
const setLabelVariantStyles = (variant, pressed, loading) => {
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
export function Button({ variant = 'primary', size = 'default', label, iconStart, onPress, isDisabled = false, isLoading = false, block = false, style, accessibilityLabel = label, testID, onPressIn, onPressOut, }) {
    const [pressed, setPressed] = useState(false);
    const handlePressIn = () => {
        setPressed(true);
        if (onPressIn)
            onPressIn();
    };
    const handlePressOut = () => {
        setPressed(false);
        if (onPressOut)
            onPressOut();
    };
    const buttonSizeStyles = setButtonSizeStyles(size);
    const buttonVariantStyles = setButtonVariantStyles(variant, pressed, isLoading, isDisabled);
    const labelVariantStyle = setLabelVariantStyles(variant, pressed, isLoading);
    const iconColor = labelVariantStyle.color === tokenColorTextInverse
        ? tokenColorTextInverse
        : labelVariantStyle.color;
    return (React.createElement(View, { style: [styles.container, block && styles.block], pointerEvents: isDisabled ? 'none' : 'auto', testID: testIds.ROOT },
        React.createElement(Pressable, { disabled: isDisabled || isLoading, onPress: onPress, onPressIn: handlePressIn, onPressOut: handlePressOut, accessible: true, accessibilityLabel: accessibilityLabel, accessibilityRole: "button", accessibilityState: isDisabled ? { disabled: true } : undefined, testID: testID },
            React.createElement(View, { style: [
                    styles.buttonBox,
                    buttonSizeStyles,
                    buttonVariantStyles,
                    style,
                ], testID: testIds.INNER },
                (isLoading || iconStart) && (React.createElement(View, { style: styles.fakeIconStart }, isLoading ? (React.createElement(ActivityIndicator, { testID: testIds.LOADER, color: tokenColorTextInverse })) : (iconStart && (React.createElement(Icon, { testID: testIds.ICON, name: iconStart, isDisabled: isDisabled, size: 22, color: iconColor }))))),
                React.createElement(Typography, { isEmphasized: true, isDisabled: isDisabled, style: labelVariantStyle }, label)))));
}
export const styles = StyleSheet.create({
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
//# sourceMappingURL=Button.js.map