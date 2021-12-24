import { ReactElement } from 'react';
import { ViewStyle } from 'react-native';
declare type SkeletonProps = {
    /**
     * Height of the skeleton component (defaults to container height)
     */
    height?: number | string;
    /**
     * Width of the skeleton component (defaults to container width)
     */
    width?: number | string;
    /**
     * Assign a testid to the Icon root
     */
    testID?: string;
    /**
     * Override container styles
     */
    outerStyle?: ViewStyle | ViewStyle[];
    /**
     * Override skeleton styles
     */
    innerStyle?: ViewStyle | ViewStyle[];
};
export declare function Skeleton({ height, width, testID, outerStyle, innerStyle, }: SkeletonProps): ReactElement;
export declare namespace Skeleton {
    var testIds: {
        ROOT: string;
        INNER: string;
    };
}
export {};
