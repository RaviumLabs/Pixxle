import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '../../../configuration.json';

const ApplicationCommand: IApplicationCommandData = {
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
  $color[${configuration.colors.error}]
]]

$onlyIf[$getGuildVar[AutoMod_Enabled;$guildID;false]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The Auto-Mod system is disabled in this server. Use </automod enable:1352943921839210526> to enable it.]
  $color[${configuration.colors.error}]
]]

$let[Keyword;$toLowerCase[$option[keyword]]]

$let[BlockedKeywords;$getGuildVar[AutoMod_BlockedKeywords;$guildID;]]
$arrayLoad[BlockedKeywords;//SEP//;$get[BlockedKeywords]]
  
$onlyIf[$arrayIncludes[BlockedKeywords;$get[Keyword]]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The keyword you have provided not blocked. Use </automod keywords list:1352943921839210526> to view the list of blocked keywords.]
  $color[${configuration.colors.error}]
]]
  
$!jsonDelete[BlockedKeywords;$arrayIndexOf[BlockedKeywords;$get[Keyword]]]

$setGuildVar[AutoMod_BlockedKeywords;$arrayJoin[BlockedKeywords;//SEP//];$guildID]
  
$interactionReply[
  $ephemeral
  $description[$checkmark The keyword you have provided has successfully been allowed by the Auto-Mod.]
  $color[${configuration.colors.success}]
]`,
};

export default ApplicationCommand;