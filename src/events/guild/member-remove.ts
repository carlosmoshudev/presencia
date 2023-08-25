import type { MultiMember } from "../../types/multi-type";

function event(member: MultiMember): void {
    console.log('Se ha ido un miembro');
}

export default event;
