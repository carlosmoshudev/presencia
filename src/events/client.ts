import { ActivityType, Client, Message } from "discord.js";
import { LoadCommands, LoadCategories } from "../functions/command-loader";
import { LoadSlash } from "../functions/slash-commands";
export async function onReady(client: Client<true>): Promise<void> {
  client.user.setPresence({
    activities: [
      {
        name: "Byte Collection",
        type: ActivityType.Custom,
      },
    ],
  });

  await LoadCommands(client).then((cmds) => {
    (client as any).commands = cmds.commands;
    (client as any).aliases = cmds.aliases;
  });
  (client as any).categories = LoadCategories();
  await LoadSlash(client);

  const guildsJoined: number = client.guilds.cache.size;
  const commandsLoaded: number = (client as any).commands.size;

  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Serving ${guildsJoined} guilds!`);
  console.log(`Loaded ${commandsLoaded} commands!`);
}

export function onMessageCreate(message: Message<boolean>): void {
  console.log(`Message received!`);
}

//
