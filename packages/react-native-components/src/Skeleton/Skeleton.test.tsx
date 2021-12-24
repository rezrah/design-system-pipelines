import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { Skeleton } from './Skeleton';

describe('React Components / Skeleton', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders default correctly', () => {
    const { getByTestId } = render(<Skeleton />);
    const skeletonElement = getByTestId(Skeleton.testIds.ROOT);

    expect(skeletonElement).toBeDefined();
  });

  it('allows override of height & width', () => {
    const alteredHeight = 90;
    const alteredWidth = 180;

    const { getByTestId } = render(
      <Skeleton height={alteredHeight} width={alteredWidth} />,
    );
    const skeletonElement = getByTestId(Skeleton.testIds.INNER);

    expect(skeletonElement.props.style.height).toBe(alteredHeight);
    expect(skeletonElement.props.style.width).toBe(alteredWidth);
  });

  it('allows override of background colour', () => {
    const alteredColor = 'pink';
    const { getByTestId } = render(
      <Skeleton outerStyle={{ backgroundColor: alteredColor }} />,
    );
    const skeletonElement = getByTestId(Skeleton.testIds.ROOT);

    expect(skeletonElement.props.style[0].backgroundColor).toBe(alteredColor);
  });

  it('allows own testId to be passed', () => {
    const id = 'my-skeleton';
    const { getByTestId } = render(<Skeleton testID={id} />);
    const skeletonElement = getByTestId(id);

    expect(skeletonElement).toBeDefined();
  });
});
