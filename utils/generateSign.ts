import crypto from "crypto";

export function generateSign(): {
  token: string;
  sign: string;
  t: number;
  nonce: string;
} {
  const token: string | undefined = process.env.TOKEN;
  const secret: string | undefined = process.env.SECRET;

  if (!token || !secret) {
    console.error(
      "TOKEN and/or SECRET are missing. Run with --env-file=.env.local to load environment variables from .env.local file."
    );
    process.exit(1);
  }

  const t = Date.now();
  const nonce = crypto.randomUUID();
  const data = `${token}${t}${nonce}`;
  const sign = crypto
    .createHmac("sha256", secret!)
    .update(data)
    .digest("base64");

  return { token, sign, t, nonce };
}
