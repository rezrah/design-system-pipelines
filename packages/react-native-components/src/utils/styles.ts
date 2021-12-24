/* eslint-disable no-param-reassign */
import { ReactTestInstance } from 'react-test-renderer';

type StyleObj = {
  [key: string]:
    | string
    | number
    | {
        [key: string]: string | number;
      };
};

export const flattenStyles = (el: ReactTestInstance): StyleObj =>
  el.props.style.reduce((acc: StyleObj, memo: StyleObj) => {
    acc = {
      ...acc,
      ...(memo
        ? Object.entries(memo).reduce((accX, [key, val]) => {
            accX[key] = val;
            return accX;
          }, {})
        : {}),
    };

    return acc;
  }, {});
