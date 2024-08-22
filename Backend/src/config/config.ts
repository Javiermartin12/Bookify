import dotenv from "dotenv";
dotenv.config();

type TConfig = {
  [key: string]: EnviromentConfig;
};
type EnviromentConfig = {
  app: AppConfig;
  db: DbConfig;
  auth: AuthConfig;
};
type AppConfig = {
  PORT: string | number;
};
type DbConfig = {
  URI: string;
};
type AuthConfig = {
  audience: string;
  issuer: string;
};

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const ENV = process.env.NODE_ENV ?? "development";
const CONFIG: TConfig = {
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    db: {
      URI: process.env.MONGODB_URI || "mongodb://localhost:27017",
    },
    auth: {
      audience: process.env.AUTH0_AUDIENCE || "null",
      issuer: process.env.AUTH0_ISSUER || "null",
    },
  },
  production: {
    app: {
      PORT: process.env.PORT || 8080,
    },
    db: {
      URI: process.env.MONGODB_URI || "mongodb://localhost:27017",
    },
    auth: {
      audience: process.env.AUTH0_AUDIENCE || "null",
      issuer: process.env.AUTH0_ISSUER || "null",
    },
  },
};
export default CONFIG[ENV];
