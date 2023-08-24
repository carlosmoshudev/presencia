import { 
    Client, 
    Collection 
} from "discord.js";

import { 
    config 
} from "dotenv";

import { 
    onReady, 
    onMessageCreate 
} from "./events/client";

import clientOptions from "./configuration/client-options";

export const DiscordLibrary = {
  Client,
  Collection,
  clientOptions,
};

export const ExternalFunctions = {
  SetEnvironmentVariables: config,
};

export const ClientEvents = {
  onReady,
  onMessageCreate,
};

export const Enums = {
    ClientEventsNames: {
        ready: "ready",
        messageCreate: "messageCreate",
    },
}
export default { DiscordLibrary, ExternalFunctions, ClientEvents, Enums };
//
