import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

console.log("Database running");
getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "ignite-challenge-database-queries";
  createConnection({
      ...options,
  });
});