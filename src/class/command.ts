import { Client, Interaction } from "discord.js";
import type { CommandArgument, SubCommand } from "../types/command-types";

export abstract class Command {
  client: Client;
  name: string;
  aliases: string[];
  description: string;
  usage: string;
  subCommands: SubCommand[];
  parameters: CommandArgument[];
  permission: string;
  category: string;
  production: boolean;
  botPermission: string;
  executionOutput: string;
  abstract execute(slash: Interaction): Promise<void>;
  constructor(client: Client, options: any) {
    this.client = client;
    this.name = options.name;
    this.aliases = options.aliases;
    this.description = options.description;
    this.usage = options.usage;
    this.subCommands = options.subCommands;
    this.parameters = options.parameters;
    this.permission = options.permission;
    this.category = options.category;
    this.production = options.production;
    this.botPermission = options.botPermission;
    this.executionOutput = options.executionOutput;
  }
}

//
