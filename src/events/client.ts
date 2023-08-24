import { Interaction, Message } from "discord.js";

export function onMessageCreate(message: Message<boolean>): void {
  console.log(`Message received!`);
}

export async function onInteractionCreate(
  interaction: Interaction
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
