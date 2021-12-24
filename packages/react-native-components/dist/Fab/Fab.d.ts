import { ReactElement } from 'react';
import { ViewStyle } from 'react-native';
import { IconsId } from '@cat-home-experts/iconography/dist/icons';
export declare type FabProps = {
    /**
     * The Icon for the Fab to contain
     */
    icon: IconsId;
    /**
     * Optional custom testId
     */
    testID?: string;
    /**
     * Custom styles
     */
    style?: ViewStyle | ViewStyle[];
};
export declare function Fab({ icon, testID, style }: FabProps): ReactElement;
export declare namespace Fab {
    var testIds: {
        ROOT: string;
        BUTTON: string;
    };
}
