"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("../../../configuration.json"));
const ApplicationCommand = {
    data: {
        type: 1,
        name: 'list',
        description: 'View all allowed and blocked domains.'
    },
    code: `
$onlyIf[$hasAnyPerms[$guildID;$authorID;Administrator;ManageGuild]==true;$interactionReply[
  $ephemeral
  $description[$crossmark You are missing the \`ManageGuild\` permission to run this command.]
  $color[${configuration_json_1.default.colors.error}]
]]

$onlyIf[$getGuildVar[AutoMod_Enabled;$guildID;false]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The Auto-Mod system is disabled in this server. Use </automod enable:1352943921839210526> to enable it.]
  $color[${configuration_json_1.default.colors.error}]
]]

$let[BlockedLinks;$getGuildVar[AutoMod_BlockedLinks;$guildID;]]
$arrayLoad[BlockedLinks;//SEP//;$getGuildVar[AutoMod_BlockedLinks;$guildID;]]

$onlyIf[$get[BlockedLinks]!=;$interactionReply[
  $ephemeral
  $description[$crossmark There are no links blocked by the Auto-Mod.]
  $color[${configuration_json_1.default.colors.error}]
]]

$interactionReply[
  $ephemeral
  $title[Blocked Links]
  $description[$if[$arrayLength[BlockedLinks]>0;- https://;There are no links blocked by the Auto-Mod.]$arrayJoin[BlockedLinks;\n- https://]]
  $color[${configuration_json_1.default.colors.main}]

  $footer[Auto-Mod : Listing Blocked Links]
]`,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=list.js.map