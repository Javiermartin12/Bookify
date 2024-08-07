import config from "../config/config";
import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
  audience: config.auth.audience,
  issuerBaseURL: config.auth.issuer,
  tokenSigningAlg: "RS256",
});
