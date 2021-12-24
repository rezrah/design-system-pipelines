import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { tokenColorSurfaceDefault, tokenColorSurfaceDisabled, } from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';
const rootTestId = 'toolshed-native-skeleton';
const testIds = {
    ROOT: rootTestId,
    INNER: `${rootTestId}-inner`,
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: tokenColorSurfaceDefault,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    skeleton: {
        backgroundColor: tokenColorSurfaceDisabled,
        borderRadius: 3,
        minHeight: 10,
        minWidth: 10,
    },
});
Skeleton.testIds = testIds;
export function Skeleton({ height = '100%', width = '100%', testID = testIds.ROOT, outerStyle = {}, innerStyle = {}, }) {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        Animated.loop(Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0.3,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        ])).start();
    }, []);
    const computedStyle = [
        styles.skeleton,
        innerStyle,
        {
            height,
            width,
            opacity: fadeAnim,
        },
    ];
    return (React.createElement(View, { testID: testID, style: [outerStyle, styles.container] },
        React.createElement(Animated.View, { testID: testIds.INNER, style: computedStyle })));
}
//# sourceMappingURL=Skeleton.js.map