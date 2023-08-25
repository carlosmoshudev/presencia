import { config as InitializeEnv } from "dotenv";

import "./class/discord";
import * as color from "./color";
import client from "./bot";

InitializeEnv();
const OAuth = process.env.TOKEN;
const separator = "\r\n| ============================ |\r\n";

if (OAuth === undefined || OAuth === null) {
  console.error("Bot token is missing. Make sure to set it in your .env file.");
  process.exit(1);
}

client
  .login(OAuth)
  .then(() => console.log(color.green, separator))
  .catch(console.error);
