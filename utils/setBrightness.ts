import { generateSign } from "./generateSign";
import { sendCommand } from "./sendCommand";

export async function setBrightness(
  deviceIDs: string[],
  brightness: number = 10
): Promise<void> {
  const { token, sign, t, nonce } = generateSign();
  const command = {
    command: "setBrightness",
    parameter: brightness.toString(),
    commandType: "command",
  };

  await Promise.all(
    deviceIDs.map((deviceId) =>
      sendCommand(deviceId, command, token, sign, t, nonce)
    )
  );
}
