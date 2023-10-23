import { NhostClient } from "@nhost/nhost-js";
const myNhostClient = new NhostClient({
  authUrl: process.env.NHOST_AUTH_URL || "http://localhost:4000",
  graphqlUrl: process.env.GRAPHQL_URL || "http://localhost:4000",
  storageUrl: "http://localhost:8080",
  functionsUrl: "http://localhost:5000",
  autoSignIn: true,
  autoRefreshToken: true,
});
export const nhost = myNhostClient;
