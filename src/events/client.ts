import { ActivityType, Client, Interaction, Message } from "discord.js";
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

export async function onInteractionCreate(
  interaction: Interaction,
): Promise<void> {
  if (!interaction.isChatInputCommand()) return;
  const { client } = interaction;
  const command = (client as any).commands.get(interaction.commandName);
  if (command === null || command === undefined) return;
  await command.execute(interaction);
  interaction
    .reply({
      ephemeral: true,
      content: command.executionOutput,
      allowedMentions: {
        repliedUser: false,
      },
      components: [],
      embeds: [],
      files: [],
      fetchReply: false,
      flags: 64,
      tts: false,
    })
    .catch(console.error);
}

//
