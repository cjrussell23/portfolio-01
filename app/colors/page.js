"use client";

import tailwindConfig from "../../tailwind.config"; // Assuming your Tailwind config is in the same directory
import { useState, useEffect, use } from "react";
import { SketchPicker } from "react-color";
import { useTheme } from "next-themes";

const ColorPalette = () => {
  const { theme } = useTheme();
  const colors = tailwindConfig.theme.extend.colors;
  const [computedStyles, setComputedStyles] = useState({});

  /**
   * @param {string} color The color from the tailwind config. Eg. "hsl(var(--background) / <alpha-value> )"
   */
  const getHex = (color) => {
    const cssVar = color.match(/var\(([^)]+)\)/)[1];
    const hex = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`${cssVar}`);
    return hex;
  };

  useEffect(() => {
    const computedStyles = () => {
      const styles = {};
      for (let [key, value] of Object.entries(colors)) {
        if (typeof value === "string") {
          styles[key] = getHex(value);
        }
        if (typeof value === "object") {
          styles[key] = {
            DEFAULT: getHex(value.DEFAULT),
            foreground: getHex(value.foreground),
          };
        }
      }
      return styles;
    };
    setComputedStyles(computedStyles);
  }, [theme]);

  return (
    <div className="tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-justify-center tw-gap-4 tw-p-4">
      <div className="tw-grid tw-grid-cols-4 tw-gap-4 tw-p-4">
        {Object.entries(colors).map(([key, value]) => (
          <div
            key={key}
            className="tw-flex tw-size-full tw-flex-col tw-justify-between tw-gap-4 tw-rounded-md tw-bg-slate-300 tw-p-4 dark:tw-bg-slate-800"
          >
            <div>{key}</div>
            <div>
              {typeof value === "object" ? (
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <ColorPreview
                    hslValue={computedStyles[key]?.DEFAULT}
                    colorName={"DEFAULT"}
                  />
                  <ColorPreview
                    hslValue={computedStyles[key]?.foreground}
                    colorName={"foreground"}
                  />
                </div>
              ) : (
                <ColorPreview hslValue={computedStyles[key]} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;

/**
 * @param {string} hslValue The HSL value of the color in string format. Eg. "180deg 8% 15%"
 * @param {string} colorName The name of the color. Eg. "primary"
 */
function ColorPreview({ hslValue, colorName }) {
  if (!colorName) colorName = "Color";

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState(hslValue);

  useEffect(() => {
    setCurrentColor(parseHSL(hslValue));
  }, [hslValue]);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const parseHSL = (hslString) => {
    if (!hslString) return { h: 0, s: 0, l: 0 };
    if (typeof hslString !== "string") return { h: 0, s: 0, l: 0 };
    const [h, s, l] = hslString.split(" ");
    return {
      h: parseInt(h, 10),
      s: parseInt(s.replace("%", ""), 10),
      l: parseInt(l.replace("%", ""), 10),
    };
  };

  const getStyle = (color) => {
    if (!color) return;
    if (color.l > 50) {
      return {
        backgroundColor: `hsl(${color.h}, ${color.s}%, ${color.l}%)`,
        color: "black",
      };
    } else {
      return {
        backgroundColor: `hsl(${color.h}, ${color.s}%, ${color.l}%)`,
        color: "white",
      };
    }
  };

  return (
    <div>
      <button
        className="tw-rounded-md tw-p-2"
        onClick={handleClick}
        style={getStyle(currentColor)}
      >{`${colorName}: ${hslValue}`}</button>
      {displayColorPicker ? (
        <div style={{ position: "absolute", zIndex: "2" }}>
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={handleClose}
          />
          <SketchPicker color={currentColor} onChangeComplete={() => {}} />
        </div>
      ) : null}
    </div>
  );
}
