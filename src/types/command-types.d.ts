import type { APIApplicationCommandOptionChoice as iComandOption } from "discord.js";

export interface CommandArgument {
  name: string;
  description: string;
  required: boolean;
  choices?: Array<iComandOption<string>> | Array<iComandOption<number>>;
  type:
    | "string"
    | "number"
    | "boolean"
    | "user"
    | "channel"
    | "role"
    | "category";
}

export interface SubCommand {
  name: string;
  description: string;
  options?: CommandArgument[];
}
//
