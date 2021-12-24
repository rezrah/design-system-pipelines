import React from 'react';
import { Pressable, StyleSheet, } from 'react-native';
import { tokenColorTextLinkDefault, tokenColorTextInverse, tokenColorTextLinkPressed, tokenColorTextLinkHover, } from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';
import { Typography } from '../Typography';
const setLabelStyle = (isInverse, pressed, hovered) => {
    const style = [styles.label];
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
export function TextLink({ label, testID, onPress, accessibilityLabel, isDisabled = false, isInverse = false, truncateText = false, variant = 'regular', hitSlop, style, }) {
    const isSmall = variant === 'small';
    return (React.createElement(Pressable, { onPress: onPress, disabled: isDisabled, accessible: true, accessibilityLabel: accessibilityLabel || label, accessibilityHint: `Navigates to ${label}`, accessibilityRole: "link", accessibilityState: isDisabled ? { disabled: true } : undefined, testID: testID || testIds.ROOT, style: style, hitSlop: hitSlop }, 
    // hovered is missing from the type definition
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ({ pressed, hovered }) => (React.createElement(Typography, { style: setLabelStyle(isInverse, pressed, hovered), use: isSmall ? 'bodySmall' : 'bodyRegular', isEmphasized: true, isDisabled: isDisabled, numberOfLines: truncateText ? 1 : undefined }, label))));
}
export const styles = StyleSheet.create({
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
//# sourceMappingURL=TextLink.js.map