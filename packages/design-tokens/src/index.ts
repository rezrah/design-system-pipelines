import StyleDictionary from "style-dictionary";
import { getStyleDictionaryConfig } from "./bin/fn/config";
import { generateES6Typings } from "./bin/fn/typings";

/**
 * Self-invoked function that uses style-dictionary to orchestrate
 * the creation of design tokens.
 *
 * Need to create some new tokens?
 *
 * 1) Create a new properties file, following all existing precedents
 * 2) Add the path to sources array below
 * 3) Run the build and 🙏
 */
/* eslint-disable func-names */
(function () {
  const sources = [
    "properties/colours/core/light.json",
    "properties/colours/components/button/light.json",
  ];

  return sources.forEach((location) => {
    const config = getStyleDictionaryConfig(location);
    const ExtendedDictionary = StyleDictionary.extend(config);

    ExtendedDictionary.buildAllPlatforms();
  });
})();
