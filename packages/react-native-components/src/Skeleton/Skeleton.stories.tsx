import React, { useState, useEffect, ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Story, Meta } from '@storybook/react';

import { Skeleton } from './Skeleton';

const styles = StyleSheet.create({
  skeletonContainer: {
    height: '100%',
    width: '100%',
  },
});

export default {
  title: 'UI Elements/Skeleton',
  component: Skeleton,
  args: {
    height: 200,
    width: 200,
  },
} as Meta;

const Template: Story = (args) => (
  <View style={styles.skeletonContainer}>
    <Skeleton {...args} />
  </View>
);

export const Default = Template.bind({});

export const Loader = (): ReactElement => {
  const [loading, setLoadingState] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoadingState(false), 1500);
  }, []);

  return (
    <View style={styles.skeletonContainer}>
      {loading ? <Skeleton height={200} width={200} /> : <Text>LOADED</Text>}
    </View>
  );
};
