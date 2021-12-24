interface Destination {
  destination: string;
  format: string;
}

interface ReturnedConfig {
  platforms: {
    [key: string]: {
      buildPath: string;
      files: Destination[];
      prefix: string;
      transformGroup?: string;
      transforms?: string[];
    };
  };
  source: string[];
}

export const errorMessagesMap = {
  incorrectFileFormat:
    "The source file isn't in the properties/ folder. Please move its location and try again.",
};

/**
 * A function that returns a config object for style dictionary
 * to parse and convert to tokens
 *
 * @param {string} location a path to a json file in the root properties folder
 */
export function getStyleDictionaryConfig(location: string): ReturnedConfig {
  const arr = location.split('/');

  if (arr.length < 3 || arr[0] !== 'properties') {
    throw new Error(errorMessagesMap.incorrectFileFormat);
  }

  const filename = arr[arr.length - 1];
  const sansFilename = arr.slice(0, -1);

  const path = sansFilename.reduce((acc, next) => `${acc}/${next}`);

  const buildPath = `dist/${path.replace('properties/', '')}/`;
  const [filenameSansExtension] = filename.split('.');

  return {
    source: [`${path}/${filename}`],
    platforms: {
      js: {
        prefix: 'token',
        transformGroup: 'react-native',
        buildPath,
        files: [
          {
            destination: `js/${filenameSansExtension}.js`,
            format: 'javascript/es6',
          },
        ],
      },
      ts: {
        prefix: 'token',
        transforms: [
          'attribute/cti',
          'name/cti/camel',
          'size/rem',
          'color/hex',
        ],
        buildPath,
        files: [
          {
            destination: `js/${filenameSansExtension}.d.ts`,
            format: 'typings/es6',
          },
        ],
      },
      json: {
        prefix: 'token',
        transformGroup: 'react-native',
        buildPath,
        files: [
          {
            destination: `json/${filenameSansExtension}.json`,
            format: 'json/flat',
          },
        ],
      },
    },
  };
}
