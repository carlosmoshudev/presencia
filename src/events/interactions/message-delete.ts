import type { MultiMessage } from "../../types/multi-type";

function event(message: MultiMessage): void {
  console.log("Se ha borrado un mensaje");
}

export default event;
