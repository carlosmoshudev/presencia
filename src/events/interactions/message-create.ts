import { Message } from "discord.js";

function event(message: Message<boolean>): void {
  console.log(`Message received!`);
}

export default event;

//
