import { Client, Interaction } from "discord.js";
import { Command } from "../../class/command";

export class ConcreteCommand extends Command {
  constructor(client: Client) {
    super(client, {
      name: "hola",
      aliases: ["buenas", "saludos"],
      description: "responde mundo",
      usage: "/hola",
      category: "Test",
      executionOutput: "mundo!",
    });
  }

  async execute(slash: Interaction): Promise<void> {
    slash.channel?.send("mundo!").catch(console.error);
  }
}
//
