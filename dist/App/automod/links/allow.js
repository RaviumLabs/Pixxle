"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("../../../configuration.json"));
const ApplicationCommand = {
    data: {
        type: 1,
        name: 'allow',
        description: 'Add domains to the allowlist to link sharing.',
        options: [
            {
                type: 3,
                name: 'domain',
                description: 'The domain to allow.',
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

$onlyIf[$isValidLink[$option[domain]]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The link you have provided is not a valid link.]
  $color[${configuration_json_1.default.colors.error}]
]]

$arrayLoad[Link;://;$option[domain]]
$arrayLoad[Domain;/;$arrayAt[Link;1]]
$let[Domain;$toLowerCase[$arrayAt[Domain;0]]]

$let[BlockedLinks;$getGuildVar[AutoMod_BlockedLinks;$guildID;]]
$arrayLoad[BlockedLinks;//SEP//;$get[BlockedLinks]]
  
$onlyIf[$arrayIncludes[BlockedLinks;$get[Domain]]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The link you have provided not blocked. Use </automod links list:1352943921839210526> to view the list of blocked links.]
  $color[${configuration_json_1.default.colors.error}]
]]
  
$!jsonDelete[BlockedLinks;$arrayIndexOf[BlockedLinks;$get[Domain]]]

$setGuildVar[AutoMod_BlockedLinks;$arrayJoin[BlockedLinks;//SEP//];$guildID]
  
$interactionReply[
  $ephemeral
  $description[$checkmark The link you have provided has successfully been allowed by the Auto-Mod.]
  $color[${configuration_json_1.default.colors.success}]
]`,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=allow.js.map