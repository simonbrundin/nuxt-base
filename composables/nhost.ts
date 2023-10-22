import { NhostClient } from "@nhost/nhost-js";
const myNhostClient = new NhostClient({
  authUrl: process.env.NHOST_AUTH_URL, // http://localhost:4000
  graphqlUrl: "localhost:8080", // http://localhost:8080
  autoSignIn: true,
  autoRefreshToken: true,
});
export const nhost = myNhostClient;
