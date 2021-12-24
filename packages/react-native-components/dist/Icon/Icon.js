/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { createIconSet } from 'react-native-vector-icons';
import glyphMap from '@cat-home-experts/iconography/dist/icons.json';
import { tokenColorTextDisabled, tokenColorTextDefault, } from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';
const rootTestId = 'toolshed-native-icon';
const testIds = {
    ROOT: rootTestId,
};
Icon.testIds = testIds;
export const BaseIcon = createIconSet(glyphMap, 'Icons');
export function Icon({ name, size = 24, color = tokenColorTextDefault, testID = testIds.ROOT, isDisabled = false, style = {}, }) {
    const iconColor = isDisabled ? tokenColorTextDisabled : color;
    return (React.createElement(BaseIcon, { testID: testID, name: name, size: size, color: iconColor, style: style }));
}
//# sourceMappingURL=Icon.js.map