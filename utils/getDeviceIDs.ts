import https from "https";
import { generateSign } from "./generateSign";

export async function getDeviceIDs(): Promise<string[]> {
  const { token, sign, t, nonce } = generateSign();
  const deviceIDs: string[] = [];
  const options: https.RequestOptions = {
    hostname: "api.switch-bot.com",
    port: 443,
    path: `/v1.1/devices`,
    method: "GET",
    headers: {
      Authorization: token!,
      sign,
      nonce,
      t: t.toString(),
      "Content-Type": "application/json",
      "Content-Length": "0",
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
          if (response && response.body) {
            response.body.deviceList.forEach(
              (device: { deviceType: string; deviceId: string }) => {
                if (device.deviceType === "Color Bulb") {
                  deviceIDs.push(device.deviceId);
                }
              }
            );
          }
          console.log("Device IDs:", deviceIDs);
          resolve(deviceIDs);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on("error", (error) => {
      console.error(error);
      reject(error);
    });

    req.end();
  });
}
