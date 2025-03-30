import { getDeviceIDs } from "./utils/getDeviceIDs";
import { turnOnColorBulbs } from "./utils/turnOnColorBulbs";
import { setColor } from "./utils/setColor";
import { setBrightness } from "./utils/setBrightness";

(async () => {
  const deviceIDs = await getDeviceIDs();
  if (deviceIDs.length === 0) {
    console.error("No Color Bulb devices found.");
    return;
  }

  await turnOnColorBulbs(deviceIDs);
  await setColor(deviceIDs, "255:0:255");
  await setBrightness(deviceIDs, 2);
})();
