import { generateSign } from "./generateSign";
import { sendCommand } from "./sendCommand";

export async function turnOnColorBulbs(deviceIDs: string[]): Promise<void> {
  const { token, sign, t, nonce } = generateSign();
  const command = {
    command: "turnOn",
    parameter: "default",
    commandType: "command",
  };

  await Promise.all(
    deviceIDs.map((deviceId) =>
      sendCommand(deviceId, command, token, sign, t, nonce)
    )
  );
}
