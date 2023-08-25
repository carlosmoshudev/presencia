// Import external dependencies
import { config as InitializeEnvironmentVariables } from "dotenv";
import { Client, Collection } from "discord.js";

// Import internal modules
import "./class/discord";
import {
  onReady,
  onInteractionCreate,
  onMessageCreate,
  onMessageDelete,
  onMessageUpdate,
  onMemberAdd,
  onMemberRemove,
  onMemberUpdate,
  onPresenceUpdate,
  onChannelCreate,
  onChannelDelete,
  onChannelUpdate,
  onRoleCreate,
  onRoleDelete,
  onRoleUpdate,
  onError,
  onWarn,
} from "./events/handler";
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
Bot.on("interactionCreate", async itr => await onInteractionCreate(itr));
Bot.on("messageCreate", msg => onMessageCreate(msg));
Bot.on("messageDelete", msg => onMessageDelete(msg));
Bot.on("messageUpdate", (old, msg) => onMessageUpdate(old, msg));
Bot.on("guildMemberAdd", mbr => onMemberAdd(mbr));
Bot.on("guildMemberRemove", mbr => onMemberRemove(mbr));
Bot.on("guildMemberUpdate", (old, mbr) => onMemberUpdate(old, mbr));
Bot.on("presenceUpdate", (old, pres) => onPresenceUpdate(old, pres));
Bot.on("channelCreate", chn => onChannelCreate(chn));
Bot.on("channelDelete", chn => onChannelDelete(chn));
Bot.on("channelUpdate", (old, chn) => onChannelUpdate(old, chn));
Bot.on("roleCreate", role => onRoleCreate(role));
Bot.on("roleDelete", role => onRoleDelete(role));
Bot.on("roleUpdate", (old, role) => onRoleUpdate(old, role));
Bot.on("error", error => onError(error));
Bot.on("warn", warning => onWarn(warning));

// Ensure bot token exists before login
if (process.env.TOKEN === undefined || process.env.TOKEN === null) {
  console.error("Bot token is missing. Make sure to set it in your .env file.");
  process.exit(1);
}

// Login to Discord
Bot.login(process.env.TOKEN)
  .then(() =>
    console.log(`\x1b[32m%s\x1b[0m`, `\r\n| ============================ |\r\n`)
  )
  .catch(console.error);
