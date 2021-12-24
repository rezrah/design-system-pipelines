import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

import {
  MOBILE_WIDTH_BREAKPOINT,
  MOBILE_LARGE_WIDTH_BREAKPOINT,
} from '../constants';

type HookReturn = {
  isMobile: boolean;
  isLargeMobile: boolean;
  width: number;
  height: number;
  scale: number;
  fontScale: number;
};

export const getWidth = (): number => Dimensions.get('window').width;

// FIXME: Move to hooks folder and write tests
export const useWindowDimensions = (): HookReturn => {
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
