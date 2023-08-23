import { Collection } from "discord.js";
import { ExtendedClient } from "./class/discord";
import { config } from "dotenv";
import clientOptions from "./configuration/client-options";
config();

const chatBot: ExtendedClient = new ExtendedClient(clientOptions);
const { client } = chatBot;

chatBot.commands = new Collection();
chatBot.aliases = new Collection();
chatBot.categories = new Collection();

client.on("ready", () => {
  console.log(`Logged in!`);
});

client.login(process.env.TOKEN).catch(console.error);
// --snip--
