import { generateSign } from "./generateSign";
import { Command, sendCommand } from "./sendCommand";

export async function turnOnColorBulbs(deviceIDs: string[]): Promise<void> {
  const { token, sign, t, nonce } = generateSign();
  const command = {
    command: "turnOn",
    parameter: "default",
    commandType: "command",
  } satisfies Command;

  await Promise.all(
    deviceIDs.map((deviceId) =>
      sendCommand(deviceId, command, token, sign, t, nonce)
    )
  );
}
