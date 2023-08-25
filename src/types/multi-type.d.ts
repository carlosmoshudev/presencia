import {
  GuildMember,
  Message,
  PartialGuildMember,
  PartialMessage,
} from "discord.js";

export type MultiMessage = Message | PartialMessage;
export type MultiMember = GuildMember | PartialGuildMember;
