export interface JwtHeader {
  kid: string;
}

export interface JwtPayload {
  sub: string;
  name?: string;
  email?: string;
}
