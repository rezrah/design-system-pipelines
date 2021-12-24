import { getStyleDictionaryConfig, errorMessagesMap } from './config';

describe('Design tokens / getStyleDictionaryConfig', () => {
  it('returns a valid config, with the required formats', () => {
    const input = 'properties/to/nowhere.ext';
    const output = getStyleDictionaryConfig(input);

    const expectedFormats = ['js', 'ts', 'json'];

    expect(Object.keys(output.platforms)).toMatchObject(expectedFormats);
  });

  it("throws an error if the input location doesn't contain a folder", () => {
    const input = 'nowhere.ext';

    expect(() => getStyleDictionaryConfig(input)).toThrowError(
      errorMessagesMap.incorrectFileFormat,
    );
  });

  it("throws an error if the input location doesn't originate from the root properties folder", () => {
    const input = 'not-properties/uh/oh/nowhere.ext';

    expect(() => getStyleDictionaryConfig(input)).toThrowError(
      errorMessagesMap.incorrectFileFormat,
    );
  });

  it('creates the correct build destination path', () => {
    const input = 'properties/path/to/here/nowhere.ext';
    const output = getStyleDictionaryConfig(input);

    const expectedBuildPath = 'dist/path/to/here/';

    const [key] = Object.keys(output.platforms);

    expect(output.platforms[key].buildPath).toBe(expectedBuildPath);
  });

  it('creates the correct format and file destination path', () => {
    const filename = 'nowhere.ext';
    const [nameOnly] = filename.split('.');
    const input = `properties/path/to/here/${filename}`;
    const output = getStyleDictionaryConfig(input);

    const [key] = Object.keys(output.platforms);
    const expectedOutputPath = `${key}/${nameOnly}.${key}`;

    expect(output.platforms[key].files[0].destination).toBe(expectedOutputPath);
  });
});
