import { Core, Properties } from 'style-dictionary';

import { errorMessagesMap } from './config';

/**
 * A function that returns a typescript type definition for
 * a given style-dictionary Property
 *
 * @param {Properties} property a style-dictionary property
 */
const inferPropertyType = (property: Properties): string => {
  const { attributes } = property.original || {};

  if (attributes) {
    if (attributes.category === 'size') {
      return `  {
    original: string;
    number: number;
    decimal: number;
    scale: number;
  }`;
    }

    if (attributes.category === 'color') {
      return 'string';
    }
  }

  return typeof property.value;
};

/**
 * A function that returns a function that returns a typescript module definition
 * Formatter for a  given style-dictionary
 *
 * @param {Core} dictionary a style-dictionary
 */
export const generateES6Typings = (location: string) => (
  dictionary: Core,
): string => {
  const arr = location.split('/');

  if (arr.length < 3 || arr[0] !== 'properties') {
    throw new Error(errorMessagesMap.incorrectFileFormat);
  }

  const filename = arr[arr.length - 1];
  const sansFilename = arr.slice(0, -1);

  const path = sansFilename.reduce((acc, next) => `${acc}/${next}`);

  const buildPath = `@cat-home-experts/design-tokens/dist/${path.replace(
    'properties/',
    '',
  )}/`;

  const [filenameSansExtension] = filename.split('.');

  return `declare module '${buildPath}js/${filenameSansExtension}' {
${dictionary.allProperties
  .map(
    (property) =>
      `  export const ${property.name}: ${inferPropertyType(property)};`,
  )
  .join('\n')}
}`;
};
