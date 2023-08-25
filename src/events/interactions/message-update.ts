import type { MultiMessage } from "../../types/multi-type";
function event(old: MultiMessage, message: MultiMessage): void {
  console.log("Se ha actualizado un mensaje");
}

export default event;
