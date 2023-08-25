import { ActivityType, Client } from "discord.js";
import { LoadCommands, LoadCategories } from "../../functions/command-loader";
import { LoadSlash } from "../../functions/slash-commands";

const presenceText = "Byte Collection"; // Exportar a un archivo de configuración

async function event(client: Client<true>): Promise<void> {
  const collectionsClient = client as any;
  client.user.setPresence({
    activities: [
      {
        name: presenceText,
        type: ActivityType.Custom,
      },
    ],
  });

  await LoadCommands(client).then(commands => {
    collectionsClient.commands = commands.commands;
    collectionsClient.aliases = commands.aliases;
  });
  collectionsClient.categories = LoadCategories();
  await LoadSlash(client);

  const guildsJoined: number = client.guilds.cache.size;
  const commandsLoaded: number = collectionsClient.commands.size;

  console.log(`Información de la sesión:`);
  console.log(
    `\x1b[32m%s\x1b[0m`,
    `[PresencIA] Sesión iniciada`,
    `\x1b[33m${client.user.tag}\x1b[0m`
  );
  console.log(
    `\x1b[32m%s\x1b[0m`,
    `[PresencIA] Bot unido en`,
    `\x1b[33m${guildsJoined}\x1b[0m \x1b[32mservidores\x1b[0m`
  );
  console.log(
    `\x1b[32m%s\x1b[0m`,
    `[PresencIA] Se han cargado`,
    `\x1b[33m${commandsLoaded}\x1b[0m \x1b[32mcomandos\x1b[0m`
  );
}

export default event;
