import React, { useRef, useEffect, ReactElement } from 'react';
import { View, Animated, StyleSheet, ViewStyle } from 'react-native';

import {
  tokenColorSurfaceDefault,
  tokenColorSurfaceDisabled,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

const rootTestId = 'toolshed-native-skeleton';

const testIds = {
  ROOT: rootTestId,
  INNER: `${rootTestId}-inner`,
};

type SkeletonProps = {
  /**
   * Height of the skeleton component (defaults to container height)
   */
  height?: number | string;
  /**
   * Width of the skeleton component (defaults to container width)
   */
  width?: number | string;
  /**
   * Assign a testid to the Icon root
   */
  testID?: string;
  /**
   * Override container styles
   */
  outerStyle?: ViewStyle | ViewStyle[];
  /**
   * Override skeleton styles
   */
  innerStyle?: ViewStyle | ViewStyle[];
};

interface SkeletonStyles {
  container: ViewStyle;
  skeleton: ViewStyle;
}

const styles = StyleSheet.create<SkeletonStyles>({
  container: {
    backgroundColor: tokenColorSurfaceDefault,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  skeleton: {
    backgroundColor: tokenColorSurfaceDisabled,
    borderRadius: 3,
    minHeight: 10,
    minWidth: 10,
  },
});

Skeleton.testIds = testIds;

export function Skeleton({
  height = '100%',
  width = '100%',
  testID = testIds.ROOT,
  outerStyle = {},
  innerStyle = {},
}: SkeletonProps): ReactElement {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const computedStyle = [
    styles.skeleton,
    innerStyle,
    {
      height,
      width,
      opacity: fadeAnim,
    },
  ];

  return (
    <View testID={testID} style={[outerStyle, styles.container]}>
      <Animated.View testID={testIds.INNER} style={computedStyle} />
    </View>
  );
}
