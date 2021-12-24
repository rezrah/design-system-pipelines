import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { MOBILE_WIDTH_BREAKPOINT, MOBILE_LARGE_WIDTH_BREAKPOINT, } from '../constants';
export const getWidth = () => Dimensions.get('window').width;
// FIXME: Move to hooks folder and write tests
export const useWindowDimensions = () => {
    const [windowData, setWindowData] = useState(Dimensions.get('window'));
    useEffect(() => {
        const onChange = (result) => {
            setWindowData(result.window);
        };
        Dimensions.addEventListener('change', onChange);
        return () => Dimensions.removeEventListener('change', onChange);
    });
    return {
        ...windowData,
        isMobile: windowData.width < MOBILE_WIDTH_BREAKPOINT,
        isLargeMobile: windowData.width < MOBILE_LARGE_WIDTH_BREAKPOINT,
    };
};
//# sourceMappingURL=dimensions.js.map