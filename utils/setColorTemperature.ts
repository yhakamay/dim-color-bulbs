import { generateSign } from "./generateSign";
import { Command, sendCommand } from "./sendCommand";

/**
 * @deprecated
 * This function is deprecated and will be removed in the future because
 * we learned that setting the color temperature when setting the color
 * is not necessary. The color temperature is set automatically when
 * setting the color.
 */
export async function setColorTemperature(
  deviceIDs: string[],
  colorTemperature: number | undefined
): Promise<void> {
  if (colorTemperature !== undefined) {
    const { token, sign, t, nonce } = generateSign();
    const command = {
      command: "setColorTemperature",
      parameter: colorTemperature.toString(),
      commandType: "command",
    } satisfies Command;

    await Promise.all(
      deviceIDs.map((deviceID) =>
        sendCommand(deviceID, command, token, sign, t, nonce)
      )
    );
  }
}
