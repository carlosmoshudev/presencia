import { Role } from "discord.js";

function event(old: Role, role: Role): void {
  console.log("Se ha actualizado un rol");
}

export default event;
