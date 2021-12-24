import { ReactTestInstance } from 'react-test-renderer';
declare type StyleObj = {
    [key: string]: string | number | {
        [key: string]: string | number;
    };
};
export declare const flattenStyles: (el: ReactTestInstance) => StyleObj;
export {};
