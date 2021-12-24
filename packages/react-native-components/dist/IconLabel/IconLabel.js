/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
const rootTestId = 'toolshed-native-icon-label';
const testIds = {
    ROOT: rootTestId,
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    label: {
        width: '90%',
    },
    icon: {
        backgroundColor: 'transparent',
        marginRight: 10,
    },
});
IconLabel.testIds = testIds;
export function IconLabel({ icon, label, size, color, testID = testIds.ROOT, isDisabled, isEmphasized, truncate = false, iconStyle = {}, labelStyle = {}, }) {
    return (React.createElement(View, { testID: testID, style: [styles.container] },
        React.createElement(View, { style: [styles.icon, iconStyle] },
            React.createElement(Icon, { name: icon, size: size, color: color, isDisabled: isDisabled })),
        React.createElement(View, { style: [styles.label, labelStyle] },
            React.createElement(Typography, { use: "bodyRegular", isDisabled: isDisabled, isEmphasized: isEmphasized, numberOfLines: truncate ? 1 : 0, style: { ...(color ? { color } : null) } }, label))));
}
//# sourceMappingURL=IconLabel.js.map