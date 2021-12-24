import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import { StatisticCard } from './StatisticCard';

import { getWidth } from '../utils/dimensions';
import { flattenStyles } from '../utils/styles';

jest.mock('../utils/dimensions');

describe('React Components / StatisticCard', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders a default StatisticCard that features a header', () => {
    const mockHeading = 'Test';
    const { getByText, getByTestId } = render(
      <StatisticCard heading={mockHeading} />,
    );

    const rootEl = getByTestId(StatisticCard.testIds.ROOT);
    const statisticCard = getByText(mockHeading);

    expect(rootEl).toBeDefined();
    expect(statisticCard).toBeDefined();
  });

  it('accepts styles override', () => {
    const mockHeading = 'Test';
    const style = { margin: 1000 };

    const { getByTestId } = render(
      <StatisticCard heading={mockHeading} style={style} />,
    );

    const rootEl = getByTestId(StatisticCard.testIds.ROOT);

    expect(rootEl.props.style[1]).toEqual(style);
  });

  it('can optionally render a description', () => {
    const mockHeading = 'Test';
    const mockDescription = 'Description';

    const { queryByText, rerender, getByText } = render(
      <StatisticCard heading={mockHeading} />,
    );

    const undefinedDescEl = queryByText(mockDescription);

    expect(undefinedDescEl).toBe(null);

    rerender(
      <StatisticCard heading={mockHeading} description={mockDescription} />,
    );

    const descEl = getByText(mockDescription);

    expect(descEl).toBeDefined();
  });

  it('renders a locked icon where required', () => {
    const mockHeading = 'Test';
    const { getByTestId } = render(
      <StatisticCard isLocked heading={mockHeading} />,
    );

    const lockedEl = getByTestId(StatisticCard.testIds.LOCK);

    expect(lockedEl).toBeDefined();
  });

  it('renders error message when required', () => {
    const mockHeading = 'Error Box';
    const { getByTestId } = render(
      <StatisticCard hasError heading={mockHeading} />,
    );

    const errorEl = getByTestId(StatisticCard.testIds.ERROR);

    expect(errorEl).toBeDefined();
  });

  it('does not render a button unless you pass an onPress handler', () => {
    const mockHeading = 'Test';
    const mockHandle = jest.fn();
    const mockAdditionalStatistics = [{ label: 'Messages', value: 20 }];

    const { queryByTestId, rerender, getByTestId } = render(
      <StatisticCard
        heading={mockHeading}
        additionalStatistics={mockAdditionalStatistics}
      />,
    );

    const undefinedButtonEl = queryByTestId(StatisticCard.testIds.CTA);

    expect(undefinedButtonEl).toBe(null);

    rerender(
      <StatisticCard
        heading={mockHeading}
        buttonLabel="Call us to upgrade"
        buttonOnPress={mockHandle}
        additionalStatistics={mockAdditionalStatistics}
      />,
    );

    const buttonEl = getByTestId(StatisticCard.testIds.CTA);

    expect(buttonEl).toBeDefined();
  });

  it('does not render additionalStatistics by default', () => {
    const mockHeading = 'Test';
    const mockAdditionalStatistics = [
      { label: 'Messages', value: 20 },
      { label: 'Reviews', value: 54 },
      { label: 'Notification', value: 12 },
    ];
    const { queryByTestId, rerender, getByTestId } = render(
      <StatisticCard heading={mockHeading} />,
    );

    const undefinedStatsEl = queryByTestId(
      StatisticCard.testIds.ADDITIONAL_STATS,
    );

    expect(undefinedStatsEl).toBe(null);

    rerender(
      <StatisticCard
        heading={mockHeading}
        additionalStatistics={mockAdditionalStatistics}
      />,
    );

    const statsEl = getByTestId(StatisticCard.testIds.ADDITIONAL_STATS);

    expect(statsEl).toBeDefined();
  });

  it('renders a larger statistic circle based on device width', () => {
    (getWidth as jest.Mock).mockReturnValue(750);

    const mockHeading = 'Test';
    const { getByTestId, rerender } = render(
      <StatisticCard heading={mockHeading} />,
    );

    const statEl = getByTestId(StatisticCard.testIds.STATISTIC);

    const elementsStyle = flattenStyles(statEl);

    expect(elementsStyle.height).toEqual(104);
    expect(elementsStyle.width).toEqual(104);

    (getWidth as jest.Mock).mockReturnValue(400);

    rerender(<StatisticCard heading={mockHeading} />);

    const reStatEl = getByTestId(StatisticCard.testIds.STATISTIC);

    const reElementsStyle = flattenStyles(reStatEl);

    expect(reElementsStyle.height).toEqual(80);
    expect(reElementsStyle.width).toEqual(80);
  });
});
