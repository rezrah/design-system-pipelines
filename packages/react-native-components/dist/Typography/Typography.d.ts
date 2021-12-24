import { ReactNode, ReactElement } from 'react';
import { TextStyle } from 'react-native';
export declare type TypographyVariants = 'headingXXL' | 'headingXL' | 'headingL' | 'headingM' | 'headingS' | 'headingXS' | 'headingNav' | 'bodyRegular' | 'bodySmall' | 'bodyTiny';
export declare type StyleProps = {
    [key: string]: object;
};
export declare type TypographyProps = {
    /**
     * The style of the Typography component, defaults to bodyTwo
     */
    use?: TypographyVariants;
    /**
     * Override larger devices to use different variant of the same role type (heading to heading, body to body).
     */
    desktopUse?: TypographyVariants;
    /**
     * The content of the Typography component
     */
    children: ReactNode;
    /**
     * Text to display instructions for blindness accessibility features.
     */
    accessibilityLabel?: string;
    /**
     * Assign a testid to the Typography root
     */
    testId?: string;
    /**
     * Override styles
     */
    style?: TextStyle | TextStyle[];
    /**
     * Will use default primary brand colour
     */
    isBranded?: boolean;
    /**
     * Will use secondary brand colour
     */
    isBrandedSecondary?: boolean;
    /**
     * Is disabled / inactive
     */
    isDisabled?: boolean;
    /**
     * Applies an inverse colour to the text
     */
    isInverse?: boolean;
    /**
     * Applies a muted colour to the text
     */
    isMuted?: boolean;
    /**
     * Emphasized with a bold font-weight
     */
    isEmphasized?: boolean;
    /**
     * Create line wrapping restriction. default: undefined
     */
    numberOfLines?: number | undefined;
    /**
     * Enabled in conjuction with numberOfLines.
     */
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
    /**
     * Enables text centering
     */
    isCentred?: boolean;
    /**
     * Can turn off font scaling. default: true
     */
    allowFontScaling?: boolean;
};
export declare function Typography({ children, use, accessibilityLabel, testId, style, isBranded, isBrandedSecondary, isDisabled, isInverse, isMuted, isEmphasized, numberOfLines, isCentred, desktopUse, ellipsizeMode, allowFontScaling, }: TypographyProps): ReactElement;
export declare namespace Typography {
    var testIds: {
        ROOT: string;
    };
}
export declare const styles: {
    branded: {
        color: string;
    };
    brandedSecondary: {
        color: string;
    };
    default: {
        color: string;
    };
    desktopheadingXXL: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    desktopheadingXL: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    desktopheadingL: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    desktopheadingM: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    desktopheadingS: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    desktopheadingXS: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    desktopheadingNav: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    mobileheadingXXL: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    mobileheadingXL: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    mobileheadingL: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    mobileheadingM: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    mobileheadingS: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    mobileheadingXS: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    mobileheadingNav: {
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    bodyRegular: {
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
    };
    bodySmall: {
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
    };
    bodyTiny: {
        fontSize: number;
        lineHeight: number;
        letterSpacing: number;
        fontFamily: string;
    };
    disabled: {
        color: string;
    };
    emphasized: {
        fontFamily: string;
    };
    inverted: {
        color: string;
    };
    muted: {
        color: string;
    };
    centre: {
        textAlign: "center";
    };
};
