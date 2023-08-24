// Import external dependencies
import { config as InitializeEnvironmentVariables } from "dotenv";
import { Client, Collection } from "discord.js";

// Import internal modules
import './class/discord';
import { onMessageCreate, onInteractionCreate } from "./events/client";
import { onReady } from "./events/events";
import clientOptions from "./configuration/client-options";

// Initialize environment variables
InitializeEnvironmentVariables();

// Initialize bot
const Bot = new Client(clientOptions);

// Attach custom properties to the Bot client
Object.assign(Bot as any, {
  commands: new Collection(),
  aliases: new Collection(),
  categories: new Collection(),
});

// Register event handlers
Bot.on("ready", async clt => await onReady(clt));
Bot.on("messageCreate", msg => onMessageCreate(msg));
Bot.on("interactionCreate", async cmd => await onInteractionCreate(cmd));

// Ensure bot token exists before login
if (process.env.TOKEN === undefined || process.env.TOKEN === null) {
  console.error("Bot token is missing. Make sure to set it in your .env file.");
  process.exit(1);
}

// Login to Discord
Bot.login(process.env.TOKEN).catch(console.error);
