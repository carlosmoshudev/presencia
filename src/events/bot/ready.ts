import { ActivityType, Client } from "discord.js";
import { LoadCommands, LoadCategories } from "../../functions/command-loader";
import { LoadSlash } from "../../functions/slash-commands";

async function event(client: Client<true>): Promise<void> {
  const bot = client as any;
  client.user.setPresence({
    activities: [
      {
        name: "Byte Collection", // extraer a un archivo de configuracion
        type: ActivityType.Custom,
      },
    ],
  });

  await LoadCommands(client).then(cmds => {
    bot.commands = cmds.commands;
    bot.aliases = cmds.aliases;
  });
  bot.categories = LoadCategories();
  await LoadSlash(client);

  const guildsJoined: number = client.guilds.cache.size;
  const commandsLoaded: number = (client as any).commands.size;

    console.log(`Información de la sesión:`);
  console.log(`\x1b[32m%s\x1b[0m`,`[PresencIA] Sesión iniciada`,`\x1b[33m${client.user.tag}\x1b[0m`);
  console.log(`\x1b[32m%s\x1b[0m`,`[PresencIA] Bot unido en`,`\x1b[33m${guildsJoined}\x1b[0m \x1b[32mservidores\x1b[0m`);
  console.log(`\x1b[32m%s\x1b[0m`,`[PresencIA] Se han cargado`,`\x1b[33m${commandsLoaded}\x1b[0m \x1b[32mcomandos\x1b[0m`);
}

export default event;
