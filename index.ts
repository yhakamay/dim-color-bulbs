import { getDeviceIDs } from "./utils/getDeviceIDs";
import { setColor } from "./utils/setColor";
import { setBrightness } from "./utils/setBrightness";
import { isValidBrightness, isValidColor } from "./utils/validators";

(async () => {
  const deviceIDs = await getDeviceIDs();

  if (deviceIDs.length === 0) {
    console.error("No Color Bulb devices found.");
    return;
  }

  const color: string | undefined = process.argv[2];
  const brightness: number | undefined = parseInt(process.argv[3], 10);

  if (color && !isValidColor(color)) {
    console.error("Invalid color format. Use 'r:g:b' format.");
    process.exit(1);
  }

  if (brightness && !isValidBrightness(brightness)) {
    console.error("Invalid brightness value. Use a number between 1 and 100.");
    process.exit(1);
  }

  if (color) {
    console.info(`Setting color to ${color}`);
  }
  if (brightness) {
    console.info(`Setting brightness to ${brightness}`);
  }

  await setBrightness(deviceIDs, brightness || 100);
  await setColor(deviceIDs, color || "255:255:255");
})();
