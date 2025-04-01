import https from "https";

export type Command = {
  command:
    | "turnOn"
    | "turnOff"
    | "toggle"
    | "setBrightness"
    | "setColor"
    | "setColorTemperature";
  parameter: number | string;
  commandType: "command";
};

export function sendCommand(
  deviceId: string,
  command: Command,
  token: string,
  sign: string,
  t: number,
  nonce: string
): Promise<void> {
  const options: https.RequestOptions = {
    hostname: "api.switch-bot.com",
    port: 443,
    path: `/v1.1/devices/${deviceId}/commands`,
    method: "POST",
    headers: {
      Authorization: token!,
      sign,
      nonce,
      t: t.toString(),
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(JSON.stringify(command)).toString(),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const response = JSON.parse(data);
          console.log(`Response for device ${deviceId}:`, response);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on("error", (error) => {
      console.error(`Error for device ${deviceId}:`, error);
      reject(error);
    });

    req.write(JSON.stringify(command));
    req.end();
  });
}
