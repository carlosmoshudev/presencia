import { Interaction } from "discord.js";

async function event(
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

export default event;
