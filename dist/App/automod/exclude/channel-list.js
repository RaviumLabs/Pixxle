"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("../../../configuration.json"));
const ApplicationCommand = {
    data: {
        type: 1,
        name: 'channel-list',
        description: 'View all excluded channels.'
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

$let[ExcludedChannels;$getGuildVar[AutoMod_ExcludedChannels;$guildID;]]
$arrayLoad[ExcludedChannels;//SEP//;$getGuildVar[AutoMod_ExcludedChannels;$guildID;]]

$onlyIf[$get[ExcludedChannels]!=;$interactionReply[
  $ephemeral
  $description[$crossmark There are no channels excluded from Auto-Mod actions.]
  $color[${configuration_json_1.default.colors.error}]
]]

$interactionReply[
  $ephemeral
  $title[Excluded Channels]
  $description[$if[$arrayLength[ExcludedChannels]>0;- <#;There are no channels excluded from Auto-Mod actions.]$arrayJoin[ExcludedChannels;>\n- <#]>]
  $color[${configuration_json_1.default.colors.main}]

  $footer[Auto-Mod : Listing Excluded Channels]
]`,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=channel-list.js.map