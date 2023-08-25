import { Message } from "discord.js";

export function onMessageCreate(message: Message<boolean>): void {
  console.log(`Message received!`);
}


//
