import React from 'react';
import { View, StyleSheet } from 'react-native';
import { tokenColorBorderActive, tokenColorSurfaceLight, tokenColorSurfaceDefault, } from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';
import { Icon } from '../Icon';
const rootTestId = 'toolshed-native-fab';
const testIds = {
    ROOT: rootTestId,
    BUTTON: `${rootTestId}-icon`,
};
Fab.testIds = testIds;
export function Fab({ icon, testID, style = {} }) {
    return (React.createElement(View, { testID: testID || testIds.ROOT, style: [styles.container, style] },
        React.createElement(Icon, { name: icon, size: 16, color: tokenColorBorderActive })));
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        borderColor: tokenColorSurfaceLight,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: tokenColorSurfaceDefault,
    },
});
//# sourceMappingURL=Fab.js.map