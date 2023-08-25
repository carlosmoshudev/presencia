import { Client, Collection } from "discord.js";

import options from "./configuration/client-options";
import * as events from "./events/handler";

const bot = new Client(options);

Object.assign(bot as any, {
  commands: new Collection(),
  aliases: new Collection(),
  categories: new Collection(),
});

function registerEvents(client: Client): void {
  client.on("ready", events.onReady);
  client.on("channelCreate", events.onChannelCreate);
  client.on("channelDelete", events.onChannelDelete);
  client.on("channelUpdate", events.onChannelUpdate);
  client.on("guildMemberAdd", events.onMemberAdd);
  client.on("guildMemberRemove", events.onMemberRemove);
  client.on("guildMemberUpdate", events.onMemberUpdate);
  client.on("presenceUpdate", events.onPresenceUpdate);
  client.on("roleCreate", events.onRoleCreate);
  client.on("roleDelete", events.onRoleDelete);
  client.on("roleUpdate", events.onRoleUpdate);
  client.on("interactionCreate", events.onInteractionCreate);
  client.on("messageCreate", events.onMessageCreate);
  client.on("messageUpdate", events.onMessageUpdate);
  client.on("messageDelete", events.onMessageDelete);
  client.on("error", events.onError);
  client.on("warn", events.onWarn);
}

registerEvents(bot);

export default bot;
