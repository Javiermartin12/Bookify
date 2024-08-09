import { auth } from "express-oauth2-jwt-bearer";
import jwksRsa from "jwks-rsa";

import { app } from "../server";

const jwksUrl = `${process.env.AUTH0_ISSUER}.well-known/jwks.json`;

const jwksClient = jwksRsa({
  jwksUri: jwksUrl,
});

export const getKey = (
  header: { kid: string },
  callback: (err: Error | null, key?: string | Buffer) => void
) => {
  jwksClient.getSigningKey(header.kid, (err, key) => {
    if (err) {
      callback(err);
      return;
    }
    const signingKey = key?.getPublicKey();
    callback(null, signingKey);
  });
};

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER,
  tokenSigningAlg: "RS256",
});

app.use(jwtCheck);
