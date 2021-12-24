import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useWindowDimensions } from '../utils/dimensions';
// eslint-disable-next-line @typescript-eslint/ban-types
const setHorizontalMargin = () => {
    const { isMobile } = useWindowDimensions();
    const marginHorizontal = isMobile ? 16 : 24;
    return {
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal - 16,
    };
};
const rootTestId = 'toolshed-native-grid-row';
const testIds = {
    ROOT: rootTestId,
};
Row.testIds = testIds;
export function Row({ children, testID, style }) {
    return (React.createElement(View, { testID: testIds.ROOT, style: style },
        React.createElement(View, { style: [containerStyles.container, setHorizontalMargin()], testID: testID }, children)));
}
export const containerStyles = StyleSheet.create({
    container: {
        marginLeft: 16,
        marginRight: 0,
        maxWidth: 1440,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
//# sourceMappingURL=Row.js.map