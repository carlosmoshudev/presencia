import { Channel } from "discord.js";

function event(old: Channel, channel: Channel): void {
  console.log("Se ha actualizado un canal");
}

export default event;
