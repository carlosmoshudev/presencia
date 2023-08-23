import { Client, ClientOptions, Collection } from "discord.js";
import { Command } from "./command";
export class ExtendedClient {
  public client: Client<boolean>;
  public commands: Collection<string, Command>;
  public aliases: Collection<string, Command>;
  public categories: Collection<string, string[]>;

  constructor(options: ClientOptions) {
    this.client = new Client(options);
    this.commands = new Collection();
    this.aliases = new Collection();
    this.categories = new Collection();
  }
}
