import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '../../../configuration.json';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'role-list',
    description: 'View all excluded roles.'
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

$let[ExcludedRoles;$getGuildVar[AutoMod_ExcludedRoles;$guildID;]]
$arrayLoad[ExcludedRoles;//SEP//;$getGuildVar[AutoMod_ExcludedRoles;$guildID;]]

$onlyIf[$get[ExcludedRoles]!=;$interactionReply[
  $ephemeral
  $description[$crossmark There are no roles excluded from Auto-Mod actions.]
  $color[${configuration.colors.error}]
]]

$interactionReply[
  $ephemeral
  $title[Excluded Roles]
  $description[$if[$arrayLength[ExcludedRoles]>0;- <@&;There are no roles excluded from Auto-Mod actions.]$arrayJoin[ExcludedRoles;>\n- <@&]>]
  $color[${configuration.colors.main}]

  $footer[Auto-Mod : Listing Excluded Roles]
]`,
};

export default ApplicationCommand;