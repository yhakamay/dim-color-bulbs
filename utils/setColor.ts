import { generateSign } from "./generateSign";
import { sendCommand } from "./sendCommand";

export async function setColor(
  deviceIDs: string[],
  color: string = "255:0:255"
): Promise<void> {
  const { token, sign, t, nonce } = generateSign();
  const command = {
    command: "setColor",
    parameter: color,
    commandType: "command",
  };

  await Promise.all(
    deviceIDs.map((deviceId) =>
      sendCommand(deviceId, command, token, sign, t, nonce)
    )
  );
}
