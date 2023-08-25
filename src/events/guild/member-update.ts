import type { MultiMember } from "../../types/multi-type";
function event(old: MultiMember, member: MultiMember): void {
  console.log("Se ha actualizado un miembro");
}

export default event;
