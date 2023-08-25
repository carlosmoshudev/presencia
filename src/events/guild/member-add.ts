import { GuildMember } from "discord.js";

function event(member: GuildMember): void {
    console.log('Se ha unido un miembro');
}

export default event;
