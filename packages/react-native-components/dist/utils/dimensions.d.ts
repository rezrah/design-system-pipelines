declare type HookReturn = {
    isMobile: boolean;
    isLargeMobile: boolean;
    width: number;
    height: number;
    scale: number;
    fontScale: number;
};
export declare const getWidth: () => number;
export declare const useWindowDimensions: () => HookReturn;
export {};
