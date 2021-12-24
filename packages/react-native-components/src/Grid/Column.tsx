import React, { ReactElement, ReactNode } from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

import { useWindowDimensions } from '../utils/dimensions';

type ColumnProps = {
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Number of columns to take (1-2)
   */
  span: number;
  /**
   * Number of columns to take on tablets & desktop (1-12)
   */
  spanDesktop?: number;
  /**
   * Assign a testid to the column
   */
  testID?: string;
  /**
   * Style overrides
   */
  style?: ViewStyle;
};

// eslint-disable-next-line @typescript-eslint/ban-types
const parseSpan = (span: number, spanDesktop?: number): string | {} => {
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

export function Column({
  children,
  span,
  spanDesktop,
  testID,
  style,
}: ColumnProps): ReactElement {
  return (
    <View
      testID={testIds.ROOT}
      style={[columnStyles.container, parseSpan(span, spanDesktop)]}
    >
      <View style={style} testID={testID}>
        {children}
      </View>
    </View>
  );
}

interface ColumnStyles {
  container: ViewStyle;
}

export const columnStyles = StyleSheet.create<ColumnStyles>({
  container: {
    display: 'flex',
    paddingRight: 16,
  },
});
