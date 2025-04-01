// Check if the color is valid
// Format: "{0-255}:{0-255}:{0-255}"
// https://github.com/OpenWonderLabs/SwitchBotAPI/blob/main/README.md#color-bulb-2
export function isValidColor(color: string): boolean {
  return /^\d{1,3}:\d{1,3}:\d{1,3}$/.test(color);
}

// Check if the brightness is valid
// Format: {1-100}
// https://github.com/OpenWonderLabs/SwitchBotAPI/blob/main/README.md#color-bulb-2
export function isValidBrightness(brightness: number): boolean {
  return !isNaN(brightness) && brightness >= 1 && brightness <= 100;
}

// Check if the color temperature is valid
// Format: {2700-6500}
// https://github.com/OpenWonderLabs/SwitchBotAPI/blob/main/README.md#color-bulb-2
/**
 * @deprecated
 * This function is deprecated and will be removed in the future because
 * the associated command is deprecated.
 */
export function isValidColorTemperature(colorTemperature: number): boolean {
  return (
    !isNaN(colorTemperature) &&
    colorTemperature >= 2700 &&
    colorTemperature <= 6500
  );
}
