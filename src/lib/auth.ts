import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoUri = process.env.BETTER_AUTH_DB_URL;
const secret = process.env.BETTER_AUTH_SECRET;
const baseURL = process.env.BETTER_AUTH_URL || "https://acme-six-lilac.vercel.app";

if (!mongoUri) throw new Error("BETTER_AUTH_DB_URL is not defined");
if (!secret) throw new Error("BETTER_AUTH_SECRET is not defined");

const client = new MongoClient(mongoUri);
const db = client.db();

export const auth = betterAuth({
  baseURL,
  secret,

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7,    // 7 days
    updateAge: 60 * 60 * 24,        // refresh every 24h
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,               // 5 min
    },
  },

  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },

  database: mongodbAdapter(db, { client }),
});