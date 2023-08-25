// bot
import onReady from "./bot/ready";
// channel
import onChannelCreate from "./channel/create";
import onChannelDelete from "./channel/delete";
import onChannelUpdate from "./channel/update";
// guild - member
import onMemberAdd from "./guild/member-add";
import onMemberRemove from "./guild/member-remove";
import onMemberUpdate from "./guild/member-update";
import onPresenceUpdate from "./guild/presence-update";
// guild - role
import onRoleCreate from "./guild/role-create";
import onRoleDelete from "./guild/role-delete";
import onRoleUpdate from "./guild/role-update";
// interaction
import onInteractionCreate from "./interactions/interaction-create";
import onMessageCreate from "./interactions/message-create";
import onMessageDelete from "./interactions/message-delete";
import onMessageUpdate from "./interactions/message-update";
// status
import onError from "./status/error";
import onWarn from "./status/warn";

export {
  onReady,
  onChannelCreate,
  onChannelDelete,
  onChannelUpdate,
  onMemberAdd,
  onMemberRemove,
  onMemberUpdate,
  onPresenceUpdate,
  onRoleCreate,
  onRoleDelete,
  onRoleUpdate,
  onInteractionCreate,
  onMessageCreate,
  onMessageDelete,
  onMessageUpdate,
  onError,
  onWarn,
};
export default {
  onReady,
  onChannelCreate,
  onChannelDelete,
  onChannelUpdate,
  onMemberAdd,
  onMemberRemove,
  onMemberUpdate,
  onPresenceUpdate,
  onRoleCreate,
  onRoleDelete,
  onRoleUpdate,
  onInteractionCreate,
  onMessageCreate,
  onMessageDelete,
  onMessageUpdate,
  onError,
  onWarn,
};
