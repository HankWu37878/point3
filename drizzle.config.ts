import dotenv from "dotenv";
import type { Config } from "drizzle-kit";

// Load environment variables from .env.local
dotenv.config({ path: "./.env.local" });

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL must be defined in .env.local");
}

const config: Config = {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url: process.env.POSTGRES_URL },
};

export default config;
