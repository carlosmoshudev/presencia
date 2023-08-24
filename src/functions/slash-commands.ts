import {
  Client,
  ChannelType,
  SlashCommandBuilder as SlashBuilder,
  SlashCommandSubcommandBuilder as SubSlashBuilder,
  APIApplicationCommandOptionChoice as OptionChoice,
  RESTPostAPIApplicationCommandsJSONBody as JSONCommand,
} from "discord.js";
import { CommandArgument as CmdArg } from "../types/command-types";
import { Command } from "../class/command";

type Builder = SlashBuilder | SubSlashBuilder;

const hasItems = (x: any[] | undefined): boolean => Boolean(x?.length);

export async function LoadSlash(client: Client): Promise<void> {
  const slahsCommands: JSONCommand[] = [];
  (client as any).commands.forEach((cmd: Command) => {
    ProcessCommand(new SlashBuilder(), cmd, slahsCommands);
  });
  client.application?.commands
    .set(slahsCommands)
    .then(() => console.log(`Slash commands loaded!`))
    .catch(console.error);
}

function ProcessCommand(
  builder: Builder,
  cmd: Command,
  commands: JSONCommand[]
): void {
  const { name, description, parameters, subCommands } = cmd;
  builder?.setName(name).setDescription(description);
  parameters?.forEach(arg => ProcessParameter(builder, arg));
  subCommands?.forEach(sub => {
    const { name, description, options } = sub;
    const subBuilder = new SubSlashBuilder()
      .setName(name)
      .setDescription(description);
    options?.forEach(option => ProcessParameter(subBuilder, option));
    (builder as SlashBuilder).addSubcommand(subBuilder);
  });
  commands.push(builder.toJSON() as JSONCommand);
}

function ProcessParameter(builder: Builder, arg: CmdArg): void {
  hasItems(arg.choices)
    ? BuildChoiceOption(builder, arg)
    : BuildOption(builder, arg);
}

function BuildChoiceOption(cmd: Builder, arg: CmdArg): void {
  const { type, name, description, required, choices } = arg;
  switch (type) {
    case "number":
      cmd.addIntegerOption(arg =>
        arg
          .setName(name)
          .setDescription(description)
          .setRequired(required)
          .addChoices(...(choices as Array<OptionChoice<number>>))
      );
      break;
    case "string":
      cmd.addStringOption(option =>
        option
          .setName(name)
          .setDescription(description)
          .setRequired(required)
          .addChoices(...(choices as Array<OptionChoice<string>>))
      );
      break;
    default:
      BuildOption(cmd, arg);
      break;
  }
}
function BuildOption(
  builder: SlashBuilder | SubSlashBuilder,
  cmdArg: CmdArg
): void {
  const { type, name, description, required } = cmdArg;
  switch (type) {
    case "boolean":
      builder.addBooleanOption(arg =>
        arg.setName(name).setDescription(description).setRequired(required)
      );
      break;
    case "category":
      builder.addChannelOption(arg =>
        arg
          .setName(name)
          .setDescription(description)
          .setRequired(required)
          .addChannelTypes(ChannelType.GuildCategory)
      );
      break;
    case "channel":
      builder.addChannelOption(arg =>
        arg
          .setName(name)
          .setDescription(description)
          .setRequired(required)
          .addChannelTypes(ChannelType.GuildText)
      );
      break;
    case "number":
      builder.addIntegerOption(arg =>
        arg.setName(name).setDescription(description).setRequired(required)
      );
      break;
    case "role":
      builder.addRoleOption(arg =>
        arg.setName(name).setDescription(description).setRequired(required)
      );
      break;
    case "string":
      builder.addStringOption(arg =>
        arg.setName(name).setDescription(description).setRequired(required)
      );
      break;
    case "user":
      builder.addUserOption(arg =>
        arg.setName(name).setDescription(description).setRequired(required)
      );
      break;
    default:
      console.error(`Algo ha ido mal con el comando ${builder.name}`);
      break;
  }
}
