import { ReactElement } from 'react';
import { ViewStyle } from 'react-native';
import { IconsId } from '@cat-home-experts/iconography/dist/icons';
declare type Statistic = {
    label: string;
    value: number;
};
export declare type StatisticCardProps = {
    /**
     * The main heading for the card
     */
    heading: string;
    /**
     * Additional information
     */
    description?: string;
    /**
     * Overrides the value argument with a lock icon
     */
    isLocked?: boolean;
    /**
     * The primary statistic displayed by the card
     */
    value?: number;
    /**
     * Timestamp or flavour text related to the above value
     */
    subtitle?: string;
    /**
     * Some related statistics
     */
    additionalStatistics?: Statistic[];
    /**
     * Error message
     */
    hasError?: boolean;
    /**
     * CTA button text. Required in order to make the button appear
     */
    buttonLabel?: string;
    /**
     * CTA button handler. Required in order to make the button appear
     */
    buttonOnPress?: () => void;
    /**
     * An optional icon for the CTA. Requries an onPress handler
     */
    buttonIcon?: IconsId;
    /**
     * Variant of button to display
     */
    buttonVariant?: 'secondary' | 'tertiary';
    /**
     * Style overrides
     */
    style?: ViewStyle;
};
export declare function StatisticCard({ isLocked, value, heading, description, subtitle, additionalStatistics, hasError, buttonLabel, buttonOnPress, buttonIcon, buttonVariant, style, }: StatisticCardProps): ReactElement;
export declare namespace StatisticCard {
    var testIds: {
        ROOT: string;
        ERROR: string;
        HEADING: string;
        DESCRIPTION: string;
        STATISTIC: string;
        CTA: string;
        ADDITIONAL_STATS: string;
        ADDITIONAL_STAT: string;
        LOCK: string;
        SUBTITLE: string;
        VALUE: string;
    };
}
export {};
