import { Client, Collection } from "discord.js";

import { config } from "dotenv";

import { onReady, onMessageCreate, onInteractionCreate } from "./events/client";

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
  onInteractionCreate,
};

export const Enums = {
  ClientEventsNames: {
    ready: "ready",
    messageCreate: "messageCreate",
    interactionCreate: "interactionCreate",
  },
};
export default { DiscordLibrary, ExternalFunctions, ClientEvents, Enums };
//
