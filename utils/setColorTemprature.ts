import { generateSign } from "./generateSign";
import { sendCommand } from "./sendCommand";

export async function setColorTemperature(
  deviceIDs: string[],
  colorTemperature: number | undefined
): Promise<void> {
  if (colorTemperature) {
    const { token, sign, t, nonce } = generateSign();
    const command = {
      command: "setColorTemperature",
      parameter: colorTemperature.toString(),
      commandType: "command",
    };

    await Promise.all(
      deviceIDs.map((deviceID) =>
        sendCommand(deviceID, command, token, sign, t, nonce)
      )
    );
  }
}
