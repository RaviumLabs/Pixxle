"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("../../../configuration.json"));
const ApplicationCommand = {
    data: {
        type: 1,
        name: 'remove',
        description: 'Remove a keyword from the Auto-Mod filter.',
        options: [
            {
                type: 3,
                name: 'keyword',
                description: 'The keyword to remove.',
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

$let[Keyword;$toLowerCase[$option[keyword]]]

$let[BlockedKeywords;$getGuildVar[AutoMod_BlockedKeywords;$guildID;]]
$arrayLoad[BlockedKeywords;//SEP//;$get[BlockedKeywords]]
  
$onlyIf[$arrayIncludes[BlockedKeywords;$get[Keyword]]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The keyword you have provided not blocked. Use </automod keywords list:1352943921839210526> to view the list of blocked keywords.]
  $color[${configuration_json_1.default.colors.error}]
]]
  
$!jsonDelete[BlockedKeywords;$arrayIndexOf[BlockedKeywords;$get[Keyword]]]

$setGuildVar[AutoMod_BlockedKeywords;$arrayJoin[BlockedKeywords;//SEP//];$guildID]
  
$interactionReply[
  $ephemeral
  $description[$checkmark The keyword you have provided has successfully been allowed by the Auto-Mod.]
  $color[${configuration_json_1.default.colors.success}]
]`,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=remove.js.map