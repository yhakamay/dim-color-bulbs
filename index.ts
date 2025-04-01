import { getDeviceIDs } from "./utils/getDeviceIDs";
import { turnOnColorBulbs } from "./utils/turnOnColorBulbs";
import { setColor } from "./utils/setColor";
import { setBrightness } from "./utils/setBrightness";
import { setColorTemperature } from "./utils/setColorTemprature";
import {
  isValidBrightness,
  isValidColor,
  isValidColorTemperature,
} from "./utils/validators";

(async () => {
  const deviceIDs = await getDeviceIDs();

  if (deviceIDs.length === 0) {
    console.error("No Color Bulb devices found.");
    return;
  }

  const color: string | undefined = process.argv[2];
  const brightness: number | undefined = parseInt(process.argv[3], 10);
  const colorTemperature: number | undefined = parseInt(process.argv[4], 10);

  if (color && !isValidColor(color)) {
    console.error("Invalid color format. Use 'r:g:b' format.");
    process.exit(1);
  }

  if (brightness && !isValidBrightness(brightness)) {
    console.error("Invalid brightness value. Use a number between 1 and 100.");
    process.exit(1);
  }

  if (colorTemperature && !isValidColorTemperature(colorTemperature)) {
    console.error(
      "Invalid color temperature value. Use a number between 2700 and 6500."
    );
    process.exit(1);
  }

  if (color) {
    console.info(`Setting color to ${color}`);
  }
  if (brightness) {
    console.info(`Setting brightness to ${brightness}`);
  }
  if (colorTemperature) {
    console.info(`Setting color temperature to ${colorTemperature}`);
  }

  await turnOnColorBulbs(deviceIDs);
  await setColor(deviceIDs, color || "255:255:255");
  await setBrightness(deviceIDs, brightness || 100);
  await setColorTemperature(deviceIDs, colorTemperature || 5000);
})();
