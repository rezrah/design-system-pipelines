import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { Row, Column } from './Grid';

import { getWidth, useWindowDimensions } from '../utils/dimensions';
import { flattenStyles } from '../utils/styles';

jest.mock('../utils/dimensions');

describe('React Components / Grid', () => {
  const mockLabel = 'test-grid';

  beforeEach(() => {
    (useWindowDimensions as jest.Mock).mockReturnValue({ isMobile: true });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders Row correctly', () => {
    const { getByTestId } = render(
      <Row testID={mockLabel} style={{}}>
        Empty
      </Row>,
    );
    const rowComponent = getByTestId(mockLabel);

    expect(rowComponent).toBeDefined();
  });

  it('renders Row with a maxWidth of 1440', () => {
    const { getByTestId } = render(<Row testID={mockLabel}>Empty</Row>);
    const rowComponent = getByTestId(mockLabel);

    const flattenedStyles = flattenStyles(rowComponent);

    expect(flattenedStyles.maxWidth).toEqual(1440);
  });

  it('renders Column correctly', () => {
    const { getByTestId } = render(
      <Column testID={mockLabel} span={6} style={{}}>
        Content
      </Column>,
    );
    const columnComponent = getByTestId(mockLabel);

    expect(columnComponent).toBeDefined();
  });

  it('renders Row + Column correctly', () => {
    const { getByTestId } = render(
      <Row testID={mockLabel}>
        <Column span={6}>Content</Column>
      </Row>,
    );
    const gridComponent = getByTestId(mockLabel);

    expect(gridComponent).toBeDefined();
  });

  it('renders consistently with a different screen width', () => {
    (getWidth as jest.Mock).mockReturnValue(750);

    const { getByTestId } = render(
      <Row testID={mockLabel}>
        <Column span={12}>test</Column>
      </Row>,
    );
    const rowComponent = getByTestId(mockLabel);

    expect(rowComponent).toBeDefined();
  });

  it('renders Row margins correctly on desktop', () => {
    (useWindowDimensions as jest.Mock).mockReturnValue({
      isMobile: false,
      isLargeMobile: false,
    });

    const { getByTestId } = render(<Row testID={mockLabel}>Empty</Row>);
    const rowComponent = getByTestId(mockLabel);

    const flattenedStyles = flattenStyles(rowComponent);

    expect(flattenedStyles.marginLeft).toEqual(24);
  });

  it('renders Row margins correctly on small mobile devices', () => {
    (useWindowDimensions as jest.Mock).mockReturnValue({
      isMobile: true,
      isLargeMobile: false,
    });

    const { getByTestId } = render(<Row testID={mockLabel}>Empty</Row>);
    const rowComponent = getByTestId(mockLabel);

    const flattenedStyles = flattenStyles(rowComponent);

    expect(flattenedStyles.marginLeft).toEqual(16);
  });

  it('renders Row margins correctly on large mobile devices', () => {
    (useWindowDimensions as jest.Mock).mockReturnValue({
      isMobile: false,
      isLargeMobile: true,
    });

    const { getByTestId } = render(<Row testID={mockLabel}>Empty</Row>);
    const rowComponent = getByTestId(mockLabel);

    const flattenedStyles = flattenStyles(rowComponent);

    expect(flattenedStyles.marginLeft).toEqual(24);
  });

  it('calculates Column flexBasis correctly on desktop', () => {
    (useWindowDimensions as jest.Mock).mockReturnValue({ isMobile: false });

    const { getByTestId } = render(<Column span={6}>Content</Column>);
    const columnComponent = getByTestId(Column.testIds.ROOT);

    const flattenedStyles = flattenStyles(columnComponent);

    expect(flattenedStyles.flexBasis).toMatch('150%');
  });
});
