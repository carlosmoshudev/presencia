import { ActivityType, Client } from "discord.js";
import { LoadCommands, LoadCategories } from "../functions/command-loader";
import { LoadSlash } from "../functions/slash-commands";

async function event(client: Client<true>): Promise<void> {
  const bot = client as any;
  client.user.setPresence({
    activities: [
      {
        name: "Byte Collection",
        type: ActivityType.Custom,
      },
    ],
  });

  await LoadCommands(client).then(cmds => {
    bot.commands = cmds.commands;
    bot.aliases = cmds.aliases;
  });
  bot.categories = LoadCategories();
  await LoadSlash(client);

  const guildsJoined: number = client.guilds.cache.size;
  const commandsLoaded: number = (client as any).commands.size;

  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Serving ${guildsJoined} guilds!`);
  console.log(`Loaded ${commandsLoaded} commands!`);
}

export default event;
