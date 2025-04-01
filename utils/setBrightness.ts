import { generateSign } from "./generateSign";
import { Command, sendCommand } from "./sendCommand";

export async function setBrightness(
  deviceIDs: string[],
  brightness: number = 10
): Promise<void> {
  const { token, sign, t, nonce } = generateSign();
  const command = {
    command: "setBrightness",
    parameter: brightness.toString(),
    commandType: "command",
  } satisfies Command;

  await Promise.all(
    deviceIDs.map((deviceId) =>
      sendCommand(deviceId, command, token, sign, t, nonce)
    )
  );
}
