import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { Fab } from './Fab';

describe('React Components / Fab', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders default correctly', () => {
    const { getByTestId } = render(<Fab icon="pencil" />);
    const fabComponent = getByTestId(Fab.testIds.ROOT);

    expect(fabComponent).toBeDefined();
  });

  it('accepts different testId', () => {
    const customTestId = 'custom';
    const { getByTestId } = render(<Fab icon="pencil" testID={customTestId} />);
    const fabComponent = getByTestId(customTestId);

    expect(fabComponent).toBeDefined();
  });

  it('accepts custom styles', () => {
    const customStyles = { width: 40 };
    const { getByTestId } = render(<Fab icon="pencil" style={customStyles} />);
    const fabComponent = getByTestId(Fab.testIds.ROOT);

    expect(fabComponent.props.style[1]).toEqual(customStyles);
  });
});
