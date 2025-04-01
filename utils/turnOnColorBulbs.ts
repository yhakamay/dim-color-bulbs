import { generateSign } from "./generateSign";
import { Command, sendCommand } from "./sendCommand";

/**
 * @deprecated
 * This function is deprecated and will be removed in the future because
 * we learned that bulbs get turned on when receiving any other commands.
 */
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
