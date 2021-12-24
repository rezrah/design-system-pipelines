import { ReactElement, ReactNode } from 'react';
import { ViewStyle } from 'react-native';
declare type ColumnProps = {
    /**
     * Children
     */
    children: ReactNode;
    /**
     * Number of columns to take (1-2)
     */
    span: number;
    /**
     * Number of columns to take on tablets & desktop (1-12)
     */
    spanDesktop?: number;
    /**
     * Assign a testid to the column
     */
    testID?: string;
    /**
     * Style overrides
     */
    style?: ViewStyle;
};
export declare function Column({ children, span, spanDesktop, testID, style, }: ColumnProps): ReactElement;
export declare namespace Column {
    var testIds: {
        ROOT: string;
    };
}
interface ColumnStyles {
    container: ViewStyle;
}
export declare const columnStyles: ColumnStyles;
export {};
