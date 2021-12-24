import React, { ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Column, Row } from './Grid';
import { Typography } from '../Typography';
import { NotificationCard } from '../NotificationCard';
import { StatisticCard } from '../StatisticCard';

export default {
  title: 'Layout/Grid',
  component: Row,
};

export const FullWidth = (): ReactElement => {
  return (
    <View>
      <Row>
        <Column span={4} style={styles.pinkBackground}>
          <Typography>100</Typography>
        </Column>
      </Row>
    </View>
  );
};

export const WebLayout = (): ReactElement => {
  return (
    <View>
      <Row>
        <Column span={0} spanDesktop={3} style={styles.pinkBackground}>
          <Typography>menu</Typography>
        </Column>
        <Column span={4} spanDesktop={9}>
          <Row>
            <Column span={4}>
              <NotificationCard
                message="You have"
                notification="14 new messages"
                onPress={action('Pressed')}
                hasUnreadNotifications
              />
            </Column>
          </Row>
          <Row>
            <Column span={4} spanDesktop={4}>
              <StatisticCard
                style={styles.spacing}
                heading="Reviews score"
                value={444}
                buttonLabel="Start collecting reviews"
                buttonIcon="phone-fill"
                buttonVariant="secondary"
                buttonOnPress={action('Pressed')}
              />
            </Column>
            <Column span={4} spanDesktop={4}>
              <StatisticCard
                style={styles.spacing}
                heading="Reviews score"
                buttonLabel="Start collecting reviews"
                buttonIcon="phone-fill"
                buttonVariant="secondary"
                buttonOnPress={action('Pressed')}
              />
            </Column>
            <Column span={4} spanDesktop={4}>
              <StatisticCard
                style={styles.spacing}
                heading="Reviews score"
                buttonLabel="Start collecting reviews"
                buttonIcon="phone-fill"
                buttonVariant="secondary"
                buttonOnPress={action('Pressed')}
              />
            </Column>
          </Row>
        </Column>
      </Row>
    </View>
  );
};

export const HalfWidth = (): ReactElement => {
  return (
    <View>
      <Row>
        <Column span={2} style={styles.pinkBackground}>
          <Typography>50</Typography>
        </Column>
        <Column span={2} style={styles.pinkBackground}>
          <Typography>50</Typography>
        </Column>
      </Row>
    </View>
  );
};

export const ThirdWidth = (): ReactElement => {
  return (
    <View>
      <Row>
        <Column span={1} style={styles.pinkBackground}>
          <Typography>33</Typography>
        </Column>
        <Column span={1} style={styles.pinkBackground}>
          <Typography>33</Typography>
        </Column>
        <Column span={1} style={styles.pinkBackground}>
          <Typography>33</Typography>
        </Column>
      </Row>
    </View>
  );
};

export const QuarterWidth = (): ReactElement => {
  return (
    <View>
      <Row>
        <Column span={1} style={styles.pinkBackground}>
          <Typography>25</Typography>
        </Column>
        <Column span={1} style={styles.pinkBackground}>
          <Typography>25</Typography>
        </Column>
        <Column span={1} style={styles.pinkBackground}>
          <Typography>25</Typography>
        </Column>
        <Column span={1} style={styles.pinkBackground}>
          <Typography>25</Typography>
        </Column>
      </Row>
    </View>
  );
};

export const OddWidth = (): ReactElement => {
  return (
    <View>
      <Row>
        <Column span={1} style={styles.pinkBackground}>
          <Typography>25</Typography>
        </Column>
        <Column span={2} style={styles.pinkBackground}>
          <Typography>50</Typography>
        </Column>
        <Column span={1} style={styles.pinkBackground}>
          <Typography>25</Typography>
        </Column>
      </Row>
    </View>
  );
};

export const HalfEmpty = (): ReactElement => {
  return (
    <View>
      <Row>
        <Column span={2} style={styles.pinkBackground}>
          <Typography>50</Typography>
        </Column>
      </Row>
    </View>
  );
};

export const WebWidths = (): ReactElement => {
  return (
    <View>
      <Row>
        <Column span={1} spanDesktop={6} style={styles.pinkBackground}>
          <Typography>50 on web, 25 on mobile</Typography>
        </Column>
      </Row>
    </View>
  );
};

export const InvisibleMobileColumn = (): ReactElement => {
  return (
    <View>
      <Row>
        <Column span={0} spanDesktop={6} style={styles.pinkBackground}>
          <Typography>50 on web, invisible on mobile</Typography>
        </Column>
      </Row>
    </View>
  );
};

export const InvisibleDesktopColumn = (): ReactElement => {
  return (
    <View>
      <Row>
        <Column span={2} spanDesktop={0} style={styles.pinkBackground}>
          <Typography>Invisible on web, 50 on mobile</Typography>
        </Column>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  pinkBackground: {
    backgroundColor: 'pink',
  },
  spacing: {
    marginVertical: 16,
  },
});
