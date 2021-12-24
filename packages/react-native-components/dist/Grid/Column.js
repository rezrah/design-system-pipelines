import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useWindowDimensions } from '../utils/dimensions';
// eslint-disable-next-line @typescript-eslint/ban-types
const parseSpan = (span, spanDesktop) => {
    const { isMobile } = useWindowDimensions();
    if ((isMobile && span === 0) || (!isMobile && spanDesktop === 0)) {
        return {
            display: 'none',
        };
    }
    const GRID_BASE = isMobile ? 4 : 12;
    /**
     * use {span} value for mobile 4 column grid
     * calculate ${span} * 3 for tablet & web 12 column grid
     * use {spanDesktop} for custom widths on the 12 column grid
     */
    const size = (100 * (isMobile ? span : spanDesktop || span * 3)) / GRID_BASE;
    return {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: `${size}%`,
    };
};
const rootTestId = 'toolshed-native-grid-column';
const testIds = {
    ROOT: rootTestId,
};
Column.testIds = testIds;
export function Column({ children, span, spanDesktop, testID, style, }) {
    return (React.createElement(View, { testID: testIds.ROOT, style: [columnStyles.container, parseSpan(span, spanDesktop)] },
        React.createElement(View, { style: style, testID: testID }, children)));
}
export const columnStyles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingRight: 16,
    },
});
//# sourceMappingURL=Column.js.map