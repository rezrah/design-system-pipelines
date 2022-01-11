require("dotenv").config();
import StyleDictionary from "style-dictionary";
import { getStyleDictionaryConfig } from "./bin/fn/config";
import fetch from "node-fetch";
import { figmaRGBToHex, figmaRGBToWebRGB } from "@figma-plugin/helpers";

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
(async function () {
  const useFigmaApi = Boolean(process.env.USE_FIGMA_API === "true");

  const sources = [
    "properties/colours/core/light.json",
    "properties/colours/components/button/light.json",
  ];

  const properties = await getFileData();
  const inputData = useFigmaApi ? properties : sources;

  return sources.forEach((location) => {
    const config = getStyleDictionaryConfig(location, useFigmaApi, inputData);
    const ExtendedDictionary = StyleDictionary.extend(config);

    ExtendedDictionary.buildAllPlatforms();
  });
})();

type FigmaLayerTypes = "CANVAS" | "GROUP" | "FRAME" | "INSTANCE";

async function getFileData() {
  if (!process.env.FIGMA_FILE_ID) throw new Error("FIGMA_FILE_ID is required.");
  if (!process.env.FIGMA_TOKEN) throw new Error("FIGMA_TOKEN is required.");

  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${process.env.FIGMA_FILE_ID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Figma-Token": process.env.FIGMA_TOKEN,
        },
      }
    );

    const { document } = await response.json();

    const { children: buttonData } = document.children
      .find(
        (child: { type: FigmaLayerTypes; name: string }) =>
          child.type === "CANVAS" && child.name === "Buttons"
      )
      .children.find(
        (child: { type: FigmaLayerTypes; name: string }) =>
          child.type === "FRAME" && child.name === "Design to code"
      )
      .children.find(
        (child: { type: FigmaLayerTypes; name: string }) =>
          child.type === "FRAME" && child.name === "DESIGN_TO_CODE"
      );

    const buttonVariants = buttonData.reduce(
      (acc: { [key: string]: {} }, item: any) => {
        acc[item.name.toLowerCase()] = {};

        return acc;
      },
      {}
    );

    const getFgColor = (instance: any) => {
      const rgba = instance.children[0].children.find(
        (layer: any) => layer.name === "buttonText" && layer.type === "TEXT"
      ).fills[0].color;

      return figmaRGBToHex(rgba);
    };

    const getBgColor = (instance: any) => {
      const [{ color }] =
        instance.background.length > 0
          ? instance.background
          : instance.children[0].background;
      return figmaRGBToHex(color);
    };

    const getBorderColor = (instance: any) => {
      const [
        {
          opacity,
          color: { r, g, b, a },
        },
      ] =
        instance.strokes.length > 0
          ? instance.strokes
          : instance.children[0].strokes;

      return `rgba(${figmaRGBToWebRGB({ r, g, b, a: opacity }).join(",")})`;
    };

    const getShadowColor = (instance: any) => {
      const validInstanceEffects =
        instance.effects.length > 0
          ? instance.effects
          : instance.children[0].effects;

      if (
        !validInstanceEffects.some(
          (effect: any) => effect.type === "DROP_SHADOW"
        )
      ) {
        return "none";
      }

      const {
        offset: { x, y },
        radius,
        color: { r, g, b, a },
      } = validInstanceEffects.find(
        (effect: any) => effect.type === "DROP_SHADOW"
      );

      const rgba = figmaRGBToWebRGB({ r, g, b, a }).join(",");

      return `${x}px ${y}px ${radius}px rgba(${rgba})`;
    };

    buttonData.forEach((variant: any) => {
      const variantName = variant.name.toLowerCase();
      const instances = variant.children.filter(
        (item: any) => item.type === "INSTANCE"
      );

      const defaultInstance = instances.find(
        (instance: any) => instance.name === "Default"
      );

      const hoverInstance = instances.find(
        (instance: any) => instance.name === "Hover"
      );

      const activeInstance = instances.find(
        (instance: any) => instance.name === "Selected"
      );

      const focusInstance = instances.find(
        (instance: any) => instance.name === "Focus"
      );

      buttonVariants[variantName] = {
        text: { value: getFgColor(defaultInstance) },
        bg: { value: getBgColor(defaultInstance) },
        border: { value: getBorderColor(defaultInstance) },
        shadow: { value: getShadowColor(defaultInstance) },
        insetShadow: { value: "inset 0 1px 0 rgba(255,255,255,0.25)" },
        hoverText: { value: getFgColor(hoverInstance) },
        hoverBg: { value: getBgColor(hoverInstance) },
        hoverBorder: { value: getBorderColor(hoverInstance) },
        activeBg: { value: getBgColor(activeInstance) },
        activeBorder: { value: getBorderColor(activeInstance) },
        selectedBg: { value: getBgColor(activeInstance) },
        focusBg: { value: getBgColor(focusInstance) },
        focusBorder: { value: getBorderColor(focusInstance) },
        focusShadow: { value: getShadowColor(focusInstance) },
        shadowActive: { value: "inset 0 0.15em 0.3em rgba(27,31,36,0.15)" },
        shadowInputFocus: { value: "0 0 0 0.2em rgba(9,105,218,0.3)" },
        counterBg: { value: "rgba(27,31,36,0.08)" },
      };
    });

    return { btn: { ...buttonVariants } };
  } catch (error) {
    throw new Error(`Figma file data retrieval failed, ${error}`);
  }
}
