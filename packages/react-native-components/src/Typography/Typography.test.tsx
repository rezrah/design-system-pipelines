import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import {
  tokenColorTextSecondary,
  tokenColorTextDisabled,
  tokenColorTextInverse,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

import {
  tokenColorBrandPrimaryDefault,
  tokenColorBrandSecondaryDefault,
} from '@cat-home-experts/design-tokens/dist/colours/brand/light/js/brand';
import { Typography, styles } from './Typography';

import { flattenStyles } from '../utils/styles';
import { getWidth } from '../utils/dimensions';

jest.mock('../utils/dimensions');

describe('React Components / Typography', () => {
  const text = 'text';

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders default correctly', () => {
    const { getByTestId } = render(<Typography>{text}</Typography>);
    const typographyComponent = getByTestId(Typography.testIds.ROOT);

    expect(typographyComponent).toBeDefined();
    expect(typographyComponent.props.style[1]).toEqual(styles.bodyRegular);
  });

  it('renders correct styles on variant change', () => {
    (getWidth as jest.Mock).mockReturnValue(750);
    const { getByTestId } = render(
      <Typography use="headingXXL">{text}</Typography>,
    );
    const typographyComponent = getByTestId(Typography.testIds.ROOT);

    expect(typographyComponent).toBeDefined();

    expect(typographyComponent.props.style[1]).toEqual(
      styles.desktopheadingXXL,
    );
  });

  it('allows auto font scaling to be turned off', () => {
    const { getByTestId } = render(
      <Typography allowFontScaling={false}>{text}</Typography>,
    );
    const typographyComponent = getByTestId(Typography.testIds.ROOT);

    expect(typographyComponent).toBeDefined();
    expect(typographyComponent.props.allowFontScaling).toEqual(false);
  });

  it('allows brand colours to be used', () => {
    const { getByTestId } = render(
      <Typography use="headingXXL" isBranded>
        {text}
      </Typography>,
    );
    const typographyComponent = getByTestId(Typography.testIds.ROOT);
    const flattendStyles = flattenStyles(typographyComponent);

    expect(flattendStyles.color).toEqual(tokenColorBrandPrimaryDefault);
  });

  it('allows inverted styles', () => {
    const { getByTestId } = render(
      <Typography use="headingXXL" isInverse>
        {text}
      </Typography>,
    );
    const typographyComponent = getByTestId(Typography.testIds.ROOT);
    const flattendStyles = flattenStyles(typographyComponent);

    expect(flattendStyles.color).toEqual(tokenColorTextInverse);
  });

  it('allows secondary brand colours to be used', () => {
    const { getByTestId } = render(
      <Typography use="headingXXL" isBrandedSecondary>
        {text}
      </Typography>,
    );
    const typographyComponent = getByTestId(Typography.testIds.ROOT);
    const flattendStyles = flattenStyles(typographyComponent);

    expect(flattendStyles.color).toEqual(tokenColorBrandSecondaryDefault);
  });

  it('allows disabled colours to be used', () => {
    const { getByTestId } = render(
      <Typography use="headingXXL" isDisabled>
        {text}
      </Typography>,
    );
    const typographyComponent = getByTestId(Typography.testIds.ROOT);
    const flattendStyles = flattenStyles(typographyComponent);

    expect(flattendStyles.color).toEqual(tokenColorTextDisabled);
  });

  it('allows muted colours to be used', () => {
    const { getByTestId } = render(
      <Typography use="headingXXL" isMuted>
        {text}
      </Typography>,
    );
    const typographyComponent = getByTestId(Typography.testIds.ROOT);
    const flattendStyles = flattenStyles(typographyComponent);

    expect(flattendStyles.color).toEqual(tokenColorTextSecondary);
  });

  it('assigns an accessibility role of header when heading used', () => {
    const accessibilityRole = 'header';
    const { getByRole } = render(
      <Typography use="headingXXL" accessibilityLabel={accessibilityRole}>
        {text}
      </Typography>,
    );
    const typographyComponent = getByRole(accessibilityRole);

    expect(typographyComponent).toBeDefined();
  });

  it('accepts an accessibility label', () => {
    const accessibilityLabel = 'important info';
    const { getAllByA11yLabel } = render(
      <Typography accessibilityLabel={accessibilityLabel}>{text}</Typography>,
    );
    const typographyComponent = getAllByA11yLabel(accessibilityLabel);

    expect(typographyComponent).toBeDefined();
  });

  it('can set desktop heading variants to differ from mobile variants', () => {
    (getWidth as jest.Mock).mockReturnValue(750);
    const { getByTestId } = render(
      <Typography use="headingXL" desktopUse="headingXXL">
        {text}
      </Typography>,
    );
    const typographyComponent = getByTestId(Typography.testIds.ROOT);

    expect(typographyComponent).toBeDefined();

    expect(typographyComponent.props.style[1]).toEqual(
      styles.desktopheadingXXL,
    );
  });

  it('can set desktop body variants to differ from mobile variants', () => {
    (getWidth as jest.Mock).mockReturnValue(750);
    const { getByTestId } = render(
      <Typography use="bodySmall" desktopUse="bodyRegular">
        {text}
      </Typography>,
    );
    const typographyComponent = getByTestId(Typography.testIds.ROOT);

    expect(typographyComponent.props.style[1]).toEqual(styles.bodyRegular);
  });

  it("won't override if device isn't desktop and useDesktop prop is selected", () => {
    (getWidth as jest.Mock).mockReturnValue(320);
    const { getByTestId } = render(
      <Typography use="headingXL" desktopUse="headingXXL">
        {text}
      </Typography>,
    );
    const typographyComponent = getByTestId(Typography.testIds.ROOT);

    expect(typographyComponent).toBeDefined();

    expect(typographyComponent.props.style[1]).toEqual(styles.mobileheadingXL);
  });

  it('allows styles to be overridden', () => {
    const newStyles = {
      fontSize: 300,
    };
    const { getByTestId } = render(
      <Typography style={newStyles}>{text}</Typography>,
    );
    const typographyComponent = getByTestId(Typography.testIds.ROOT);
    const flattendStyles = flattenStyles(typographyComponent);

    expect(flattendStyles.fontSize).toEqual(newStyles.fontSize);
  });

  it('changes style based user being on a mobile', () => {
    (getWidth as jest.Mock).mockReturnValue(330);
    const { getByTestId } = render(
      <Typography use="headingXL">{text}</Typography>,
    );

    const typographyComponent = getByTestId(Typography.testIds.ROOT);

    expect(typographyComponent.props.style[1]).toEqual(styles.mobileheadingXL);
  });

  it('allows truncation of the text using an optional prop', () => {
    (getWidth as jest.Mock).mockReturnValue(320);

    const longText = 'This is very long text, lets trim this down a lot';
    const expectedEllipsis = 'tail';
    const expectedLines = 1;

    const { getByText } = render(
      <Typography
        use="headingXL"
        numberOfLines={expectedLines}
        ellipsizeMode={expectedEllipsis}
      >
        {longText}
      </Typography>,
    );

    const typographyComponent = getByText(longText);

    expect(typographyComponent.props.numberOfLines).toBe(expectedLines);
    expect(typographyComponent.props.ellipsizeMode).toBe(expectedEllipsis);
  });
});
