import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '../../../configuration.json';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'add',
    description: 'Add specific keywords to the Auto-Mod filter.',
    options: [
      {
        type: 3,
        name: 'keyword',
        description: 'The keyword to block.',
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

$onlyIf[$checkContains[$getGuildVar[AutoMod_BlockedKeywords;$guildID;];$get[Keyword]]==false;$interactionReply[
  $ephemeral
  $description[$crossmark The keyword you have provided is already blocked.]
  $color[${configuration.colors.error}]
]]

$let[BlockedKeywords;$getGuildVar[AutoMod_BlockedKeywords;$guildID;]]

$arrayLoad[BlockedKeywords;//SEP//;$get[BlockedKeywords]]
$arrayPush[BlockedKeywords;$get[Keyword]]

$ifx[
  $if[$arrayAt[BlockedKeywords;0]==;
    $arrayShift[BlockedKeywords]
  ]
]

$setGuildVar[AutoMod_BlockedKeywords;$arrayJoin[BlockedKeywords;//SEP//];$guildID]

$interactionReply[
  $ephemeral
  $description[$checkmark The keyword you have provided has successfully been blocked by the Auto-Mod.]
  $color[${configuration.colors.success}]
]`,
};

export default ApplicationCommand;