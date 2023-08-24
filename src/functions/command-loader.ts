import { Client, Collection } from "discord.js";
import { Command } from "../class/command";
import { readdirSync as ReadDir } from "fs";
import { join as Join } from "path";

const root = process.cwd();
const path: string = Join(root, "src", "commands");
const ext: string = ".ts";

export async function LoadCommands(client: Client): Promise<any> {
  const commands: Collection<string, Command> = new Collection();
  const aliases: Collection<string, Command> = new Collection();

  for (const category of ReadDir(path)) {
    for (const file of ReadDir(Join(path, category))) {
      if (file.endsWith(ext)) {
        const cmdClass = await import(Join(path, category, file));
        const cmd: Command = new cmdClass.ConcreteCommand(client);
        
        commands.set(cmd.name, cmd);

        for (const alias of cmd.aliases) {
          aliases.set(alias, cmd);
        }
      }
    }
  }

  return {
    commands,
    aliases,
  };
}

export function LoadCategories(): Collection<string, string> {
  const categories: Collection<string, string> = new Collection();
  ReadDir(path).forEach((category) => {
    categories.set(category, category);
  });
  return categories;
}
//
