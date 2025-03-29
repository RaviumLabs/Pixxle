import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '../../../configuration.json';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'list',
    description: 'View all currently filtered keywords.'
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

$let[BlockedKeywords;$getGuildVar[AutoMod_BlockedKeywords;$guildID;]]
$arrayLoad[BlockedKeywords;//SEP//;$getGuildVar[AutoMod_BlockedKeywords;$guildID;]]

$onlyIf[$get[BlockedKeywords]!=;$interactionReply[
  $ephemeral
  $description[$crossmark There are no keywords blocked by the Auto-Mod.]
  $color[${configuration.colors.error}]
]]

$interactionReply[
  $ephemeral
  $title[Blocked Keywords]
  $description[$if[$arrayLength[BlockedKeywords]>0;- ;There are no keywords blocked by the Auto-Mod.]$arrayJoin[BlockedKeywords;\n- ]]
  $color[${configuration.colors.main}]

  $footer[Auto-Mod : Listing Blocked Keywords]
]`,
};

export default ApplicationCommand;