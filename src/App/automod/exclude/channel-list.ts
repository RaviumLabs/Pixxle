import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '../../../configuration.json';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'channel-list',
    description: 'View all excluded channels.'
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

$let[ExcludedChannels;$getGuildVar[AutoMod_ExcludedChannels;$guildID;]]
$arrayLoad[ExcludedChannels;//SEP//;$getGuildVar[AutoMod_ExcludedChannels;$guildID;]]

$onlyIf[$get[ExcludedChannels]!=;$interactionReply[
  $ephemeral
  $description[$crossmark There are no channels excluded from Auto-Mod actions.]
  $color[${configuration.colors.error}]
]]

$interactionReply[
  $ephemeral
  $title[Excluded Channels]
  $description[$if[$arrayLength[ExcludedChannels]>0;- <#;There are no channels excluded from Auto-Mod actions.]$arrayJoin[ExcludedChannels;>\n- <#]>]
  $color[${configuration.colors.main}]

  $footer[Auto-Mod : Listing Excluded Channels]
]`,
};

export default ApplicationCommand;