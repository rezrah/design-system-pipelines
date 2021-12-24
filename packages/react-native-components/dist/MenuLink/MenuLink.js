import React from 'react';
import { View, Pressable, StyleSheet, } from 'react-native';
import { tokenColorBrandPrimaryDefault } from '@cat-home-experts/design-tokens/dist/colours/brand/light/js/brand';
import { tokenColorBorderDisabled, tokenColorSurfaceDisabled, tokenColorSurfaceWarm, tokenColorSurfaceLight, tokenColorSurfaceDefault, } from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
const rootTestId = 'toolshed-native-menulink';
const testIds = {
    ROOT: rootTestId,
    INNER: `${rootTestId}-inner`,
    ICON: `${rootTestId}-icon`,
    NAV_ICON: `${rootTestId}-nav-icon`,
};
MenuLink.testIds = testIds;
export function MenuLink({ label, testID, onPress, accessibilityLabel, icon, hasNavigationIcon = true, isDisabled = false, isEmphasized = true, truncateText = false, hasBottomBorder = true, }) {
    return (React.createElement(Pressable, { onPress: onPress, disabled: isDisabled, accessible: true, accessibilityLabel: accessibilityLabel || label, accessibilityHint: `Navigates to ${label}`, accessibilityRole: "menuitem", accessibilityState: isDisabled ? { disabled: true } : undefined, testID: testID || testIds.ROOT, 
        // hovered is missing from the type definition
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style: ({ hovered, pressed }) => [
            styles.root,
            hovered && styles.hover,
            pressed && styles.pressed,
        ] },
        React.createElement(View, { testID: testIds.INNER, style: [
                styles.innerContainer,
                hasBottomBorder && styles.hasBottomBorder,
            ] },
            icon && (React.createElement(View, { style: styles.icon },
                React.createElement(Icon, { name: icon, size: 24, isDisabled: isDisabled, testID: testIds.ICON }))),
            React.createElement(Typography, { style: styles.label, use: "bodyRegular", isEmphasized: isEmphasized, isDisabled: isDisabled, numberOfLines: truncateText ? 1 : undefined }, label),
            hasNavigationIcon && (React.createElement(View, { style: [styles.iconEnd] },
                React.createElement(Icon, { name: "chevron-right", size: 16, color: tokenColorBrandPrimaryDefault, isDisabled: isDisabled, testID: testIds.NAV_ICON }))))));
}
export const styles = StyleSheet.create({
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
//# sourceMappingURL=MenuLink.js.map