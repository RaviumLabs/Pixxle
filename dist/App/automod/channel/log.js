"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("../../../configuration.json"));
const ApplicationCommand = {
    data: {
        type: 1,
        name: 'log',
        description: 'Define a specific channel where Auto-Mod actions will be logged.',
        options: [
            {
                type: 7,
                name: 'channel',
                description: 'Select the current log channel to remove it.',
                required: true,
                channel_types: [0, 11, 12]
            }
        ]
    },
    code: `
$onlyIf[$hasAnyPerms[$guildID;$authorID;Administrator;ManageGuild]==true;$interactionReply[
  $ephemeral
  $description[$crossmark You are missing the \`ManageGuild\` permission to run this command.]
  $color[${configuration_json_1.default.colors.error}]
]]

$onlyIf[$guildChannelExists[$guildID;$option[channel]]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The channel you have provided does not exist in this server.]
  $color[${configuration_json_1.default.colors.error}]
]]

$ifx[
  $if[$option[channel]!=$getGuildVar[AutoMod_LogChannel;$guildID;];
    $setGuildVar[AutoMod_LogChannel;$option[channel];$guildID]

    $interactionReply[
      $ephemeral
      $description[$checkmark The Auto-Mod system will now log actions in <#$option[channel]>.]
      $color[${configuration_json_1.default.colors.success}]
    ]
  ;
    $deleteGuildVar[AutoMod_LogChannel;$guildID]

    $interactionReply[
      $ephemeral
      $description[$checkmark The Auto-Mod system will no longer log actions.]
      $color[${configuration_json_1.default.colors.error}]
    ]
  ]
]`,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=log.js.map