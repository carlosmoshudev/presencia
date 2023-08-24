import { Client, Interaction } from "discord.js";
import { Command } from "../../class/command";

export class ConcreteCommand extends Command {
  constructor(client: Client) {
    super(client, {
      name: "ping",
      aliases: ["latency"],
      description: "Comprueba la latencia con el bot.",
      usage: "/ping",
      category: "Monitoring",
      executionOutput: "Pong! Comprobando latencia...",
    });
  }

  async execute(slash: Interaction): Promise<void> {
    const APIlatency: number = slash.client?.ws.ping ?? 0;
    const MessageLatency: number = Date.now() - slash?.createdTimestamp;
    slash.channel
      ?.send(
        `Pong!  :ping_pong: \nLatencia de mensajes: ${MessageLatency}ms\nLatencia de la API: ${APIlatency}ms`
      )
      .catch(console.error);
  }
}
//
