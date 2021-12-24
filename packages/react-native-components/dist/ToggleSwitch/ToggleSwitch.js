import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, View, StyleSheet } from 'react-native';
import { tokenColorBrandPrimaryDefault } from '@cat-home-experts/design-tokens/dist/colours/brand/light/js/brand';
import { tokenColorSurfaceDefault, tokenColorSurfaceLight, tokenColorSurfaceDisabled, tokenColorSurfaceWarm, tokenColorTextDisabled, tokenColorBorderHover, } from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';
import { Icon } from '../Icon';
const THUMB_WIDTH = 30;
const TRACKBAR_HEIGHT = 32;
const TRACKBAR_WIDTH = 52;
const BORDER_WIDTH = 1;
const setTrackBarStyles = (checked, disabled) => {
    const activeBgColor = tokenColorBrandPrimaryDefault;
    const inactiveBgColor = tokenColorSurfaceLight;
    const disabledBgColor = tokenColorSurfaceDisabled;
    let backgroundColor;
    let borderColor;
    if (disabled) {
        backgroundColor = disabledBgColor;
        borderColor = disabledBgColor;
    }
    else if (checked) {
        backgroundColor = activeBgColor;
        borderColor = activeBgColor;
    }
    else {
        backgroundColor = inactiveBgColor;
        borderColor = inactiveBgColor;
    }
    return {
        backgroundColor,
        borderColor,
    };
};
const setThumbStyles = (checked, disabled) => {
    const normalBgColor = tokenColorSurfaceDefault;
    const disabledBgColor = tokenColorSurfaceWarm;
    let backgroundColor;
    if (disabled && !checked) {
        backgroundColor = disabledBgColor;
    }
    else {
        backgroundColor = normalBgColor;
    }
    return {
        backgroundColor,
    };
};
const rootTestId = 'toolshed-native-toggleswitch';
const testIds = {
    ROOT: rootTestId,
    TRACKBAR: `${rootTestId}-trackbar`,
    THUMB: `${rootTestId}-thumb`,
    ICON: `${rootTestId}-icon`,
};
ToggleSwitch.testIds = testIds;
export function ToggleSwitch({ isChecked, isDisabled = false, onToggle, testID, }) {
    const [translateValue] = useState(new Animated.Value(0));
    const distance = TRACKBAR_WIDTH - THUMB_WIDTH - BORDER_WIDTH * 2;
    const el = useRef(false);
    useEffect(() => {
        if (!el.current) {
            el.current = true;
        }
        animateThumb(isChecked);
    }, [isChecked]);
    const handleToggle = () => {
        onToggle();
    };
    const animateThumb = (state) => {
        const toValue = state ? distance : 0;
        Animated.spring(translateValue, {
            toValue,
            velocity: 10,
            useNativeDriver: true,
        }).start();
    };
    const translateX = !el.current && isChecked ? distance : translateValue;
    return (React.createElement(View, { testID: testIds.ROOT, style: styles.container },
        React.createElement(Pressable, { testID: testID, onPress: handleToggle, disabled: isDisabled, accessibilityState: isDisabled ? { disabled: true } : undefined, 
            // hovered is missing from the type definition
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            style: ({ hovered }) => [hovered && styles.hovered] },
            React.createElement(View, { testID: testIds.TRACKBAR, style: [styles.trackBar, setTrackBarStyles(isChecked, isDisabled)] },
                React.createElement(Animated.View, { testID: testIds.THUMB, style: [
                        styles.thumb,
                        setThumbStyles(isChecked, isDisabled),
                        {
                            transform: [
                                {
                                    translateX,
                                },
                            ],
                        },
                    ] }, isChecked && (React.createElement(Icon, { testID: testIds.ICON, name: "check", size: 16, color: isDisabled
                        ? tokenColorTextDisabled
                        : tokenColorBrandPrimaryDefault })))))));
}
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    trackBar: {
        width: TRACKBAR_WIDTH,
        height: TRACKBAR_HEIGHT,
        borderRadius: 30,
        justifyContent: 'center',
        borderWidth: 1,
    },
    thumb: {
        width: THUMB_WIDTH,
        height: THUMB_WIDTH,
        borderRadius: 30,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hovered: {
        shadowColor: tokenColorBorderHover,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 30,
    },
});
//# sourceMappingURL=ToggleSwitch.js.map