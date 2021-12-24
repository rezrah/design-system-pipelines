/* eslint-disable @typescript-eslint/no-var-requires */
import React, { ReactElement } from 'react';
import { ColorValue, TextStyle } from 'react-native';
import { createIconSet } from 'react-native-vector-icons';
import glyphMap from '@cat-home-experts/iconography/dist/icons.json';
import { IconsId } from '@cat-home-experts/iconography/dist/icons';
import {
  tokenColorTextDisabled,
  tokenColorTextDefault,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

const rootTestId = 'toolshed-native-icon';

const testIds = {
  ROOT: rootTestId,
};

type IconProps = {
  /**
   * Name of icon you wish to use. Eg. arrow-down
   */
  name: IconsId;
  /**
   * Assign the size of icon, default 24
   */
  size?: number;
  /**
   * Apply disabled state to the icon
   */
  isDisabled?: boolean;
  /**
   * Assign the color of icon, default black
   */
  color?: ColorValue;
  /**
   * Assign a testid to the Icon root
   */
  testID?: string;
  /**
   * Assign a testid to the Icon root
   */
  style?: TextStyle | TextStyle[];
};

Icon.testIds = testIds;

export const BaseIcon = createIconSet(glyphMap, 'Icons');

export function Icon({
  name,
  size = 24,
  color = tokenColorTextDefault,
  testID = testIds.ROOT,
  isDisabled = false,
  style = {},
}: IconProps): ReactElement {
  const iconColor = isDisabled ? tokenColorTextDisabled : color;
  return (
    <BaseIcon
      testID={testID}
      name={name}
      size={size}
      color={iconColor}
      style={style}
    />
  );
}
