import {
  DiscordLibrary,
  ExternalFunctions,
  ClientEvents,
  Enums,
} from "./imports";

const { Collection, Client, clientOptions } = DiscordLibrary;
const { SetEnvironmentVariables } = ExternalFunctions;
const { onReady, onMessageCreate, onInteractionCreate } = ClientEvents;
const { ClientEventsNames } = Enums;
const { ready, messageCreate, interactionCreate } = ClientEventsNames;

SetEnvironmentVariables();

const ChatBotClient = new Client(clientOptions);

(ChatBotClient as any).commands = new Collection();
(ChatBotClient as any).aliases = new Collection();
(ChatBotClient as any).categories = new Collection();

ChatBotClient.on(ready, async (_client) => {
  await onReady(_client);
});
ChatBotClient.on(messageCreate, (_message) => {
  onMessageCreate(_message);
});
ChatBotClient.on(interactionCreate, async (_interaction) => {
  await onInteractionCreate(_interaction);
});

ChatBotClient.login(process.env.TOKEN).catch(console.error);
// index.ts
