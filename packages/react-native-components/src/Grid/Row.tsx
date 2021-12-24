import React, { ReactElement, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { useWindowDimensions } from '../utils/dimensions';

type RowProps = {
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Assign a testid to the row container
   */
  testID?: string;
  /**
   * Style overrides
   */
  style?: ViewStyle;
};

// eslint-disable-next-line @typescript-eslint/ban-types
const setHorizontalMargin = (): string | {} => {
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

export function Row({ children, testID, style }: RowProps): ReactElement {
  return (
    <View testID={testIds.ROOT} style={style}>
      <View
        style={[containerStyles.container, setHorizontalMargin()]}
        testID={testID}
      >
        {children}
      </View>
    </View>
  );
}

interface RowStyles {
  container: ViewStyle;
}

export const containerStyles = StyleSheet.create<RowStyles>({
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
