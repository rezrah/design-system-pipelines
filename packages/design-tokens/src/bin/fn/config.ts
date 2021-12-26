interface Destination {
  destination: string;
  format: string;
}

interface StyleDictionaryConfig {
  platforms: {
    [key: string]: {
      buildPath: string;
      files: Destination[];
      prefix?: string;
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
export function getStyleDictionaryConfig(
  location: string
): StyleDictionaryConfig {
  const arr = location.split("/");

  if (arr.length < 3 || arr[0] !== "properties") {
    throw new Error(errorMessagesMap.incorrectFileFormat);
  }

  const filename = arr[arr.length - 1];
  const sansFilename = arr.slice(0, -1);

  const path = sansFilename.reduce((acc, next) => `${acc}/${next}`);

  const buildPath = `dist/${path.replace("properties/", "")}/`;
  const [filenameSansExtension] = filename.split(".");

  return {
    source: [`${path}/${filename}`],
    platforms: {
      scss: {
        buildPath,
        transformGroup: "scss",
        files: [
          {
            format: "scss/map-deep",
            destination: `scss/${filenameSansExtension}.map.deep.scss`,
          },
        ],
      },
      ts: {
        buildPath,
        transformGroup: "js",
        files: [
          {
            format: "javascript/es6",
            destination: `js/${filenameSansExtension}.js`,
          },
          {
            format: "typescript/es6-declarations",
            destination: `js/${filenameSansExtension}.d.ts`,
          },
          {
            format: "javascript/module",
            destination: `js/${filenameSansExtension}.module.js`,
          },
          {
            format: "typescript/module-declarations",
            destination: `js/${filenameSansExtension}.module.d.ts`,
          },
        ],
      },
      json: {
        transformGroup: "react-native",
        buildPath,
        files: [
          {
            destination: `json/${filenameSansExtension}.json`,
            format: "json/flat",
          },
          {
            destination: `json/${filenameSansExtension}.nested.json`,
            format: "json/nested",
          },
        ],
      },
    },
  };
}
