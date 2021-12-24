/* eslint-disable @typescript-eslint/no-var-requires */
import React, { ReactElement } from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { IconsId } from '@cat-home-experts/iconography/dist/icons';

import { Icon } from '../Icon';
import { Typography } from '../Typography';

const rootTestId = 'toolshed-native-icon-label';

const testIds = {
  ROOT: rootTestId,
};

type IconLabelProps = {
  /**
   * Name of icon you wish to use. Eg. arrow-down
   */
  icon: IconsId;
  /**
   * Label text to render under icon
   */
  label: string;
  /**
   * Assign the size of icon, default 24
   */
  size?: number;
  /**
   * Apply disabled state to the icon
   */
  isDisabled?: boolean;
  /**
   * Apply emphasized state to the icon
   */
  isEmphasized?: boolean;
  /**
   * Force no of lines to be 1 and chop off overflowing text
   */
  truncate?: boolean;
  /**
   * Assign the color of icon, default black
   */
  color?: string;
  /**
   * Assign a testid to the IconLabel root
   */
  testID?: string;
  /**
   * Stylesheet object for the label container component
   */
  labelStyle?: ViewStyle;
  /**
   * Stylesheet object for the Icon component
   */
  iconStyle?: ViewStyle;
};

interface Styles {
  container: ViewStyle;
  label: ViewStyle;
  icon: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
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

export function IconLabel({
  icon,
  label,
  size,
  color,
  testID = testIds.ROOT,
  isDisabled,
  isEmphasized,
  truncate = false,
  iconStyle = {},
  labelStyle = {},
}: IconLabelProps): ReactElement {
  return (
    <View testID={testID} style={[styles.container]}>
      <View style={[styles.icon, iconStyle]}>
        <Icon name={icon} size={size} color={color} isDisabled={isDisabled} />
      </View>
      <View style={[styles.label, labelStyle]}>
        <Typography
          use="bodyRegular"
          isDisabled={isDisabled}
          isEmphasized={isEmphasized}
          numberOfLines={truncate ? 1 : 0}
          style={{ ...(color ? { color } : null) }}
        >
          {label}
        </Typography>
      </View>
    </View>
  );
}
