import React, { ReactElement } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { IconsId } from '@cat-home-experts/iconography/dist/icons';
import {
  tokenColorBorderActive,
  tokenColorSurfaceLight,
  tokenColorSurfaceDefault,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

import { Icon } from '../Icon';

export type FabProps = {
  /**
   * The Icon for the Fab to contain
   */
  icon: IconsId;
  /**
   * Optional custom testId
   */
  testID?: string;
  /**
   * Custom styles
   */
  style?: ViewStyle | ViewStyle[];
};

const rootTestId = 'toolshed-native-fab';

const testIds = {
  ROOT: rootTestId,
  BUTTON: `${rootTestId}-icon`,
};

Fab.testIds = testIds;

export function Fab({ icon, testID, style = {} }: FabProps): ReactElement {
  return (
    <View testID={testID || testIds.ROOT} style={[styles.container, style]}>
      <Icon name={icon} size={16} color={tokenColorBorderActive} />
    </View>
  );
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
