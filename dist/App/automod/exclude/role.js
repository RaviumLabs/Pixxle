"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("../../../configuration.json"));
const ApplicationCommand = {
    data: {
        type: 1,
        name: 'role',
        description: 'Exclude specific roles from Auto-Mod actions.',
        options: [
            {
                type: 8,
                name: 'role',
                description: 'The role to exclude.',
                required: true
            }
        ]
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

$onlyIf[$roleExists[$guildID;$option[role]]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The role you have provided does not exist in this server.]
  $color[${configuration_json_1.default.colors.error}]
]]

$let[ExcludedRoles;$getGuildVar[AutoMod_ExcludedRoles;$guildID;]]

$onlyIf[$checkContains[$get[ExcludedRoles];$option[role]]==false;$interactionReply[
  $ephemeral
  $description[$crossmark The role you have provided is already excluded.]
  $color[${configuration_json_1.default.colors.error}]
]]

$arrayLoad[ExcludedRoles;//SEP//;$get[ExcludedRoles]]
$arrayPush[ExcludedRoles;$option[role]]

$ifx[
  $if[$arrayAt[ExcludedRoles;0]==;
    $arrayShift[ExcludedRoles]
  ]
]

$setGuildVar[AutoMod_ExcludedRoles;$arrayJoin[ExcludedRoles;//SEP//];$guildID]

$interactionReply[
  $ephemeral
  $description[$checkmark The role you have provided has successfully been excluded from Auto-Mod actions.]
  $color[${configuration_json_1.default.colors.success}]
]`,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=role.js.map