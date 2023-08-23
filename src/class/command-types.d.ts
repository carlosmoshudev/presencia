import type { APIApplicationCommandOptionChoice } from "discord.js";

export interface Parameter {
  name: string;
  description: string;
  required: boolean;
  choices?: Array<APIApplicationCommandOptionChoice<string>>;
  type:
    | "string"
    | "number"
    | "boolean"
    | "user"
    | "channel"
    | "role"
    | "category";
}

export interface SubCommandOptions {
  name: string;
  description: string;
  options?: Parameter[];
}
//
