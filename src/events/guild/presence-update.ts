import { Presence } from "discord.js";

function event(old: Presence | null, presence: Presence): void {
    console.log('Se ha actualizado la presencia de un usuario');
}

export default event;
