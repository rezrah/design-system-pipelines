import { ReactElement, ReactNode } from 'react';
import { ViewStyle } from 'react-native';
declare type RowProps = {
    /**
     * Children
     */
    children: ReactNode;
    /**
     * Assign a testid to the row container
     */
    testID?: string;
    /**
     * Style overrides
     */
    style?: ViewStyle;
};
export declare function Row({ children, testID, style }: RowProps): ReactElement;
export declare namespace Row {
    var testIds: {
        ROOT: string;
    };
}
interface RowStyles {
    container: ViewStyle;
}
export declare const containerStyles: RowStyles;
export {};
