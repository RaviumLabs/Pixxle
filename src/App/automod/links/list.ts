import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '../../../configuration.json';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'list',
    description: 'View all allowed and blocked domains.'
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

$let[BlockedLinks;$getGuildVar[AutoMod_BlockedLinks;$guildID;]]
$arrayLoad[BlockedLinks;//SEP//;$getGuildVar[AutoMod_BlockedLinks;$guildID;]]

$onlyIf[$get[BlockedLinks]!=;$interactionReply[
  $ephemeral
  $description[$crossmark There are no links blocked by the Auto-Mod.]
  $color[${configuration.colors.error}]
]]

$interactionReply[
  $ephemeral
  $title[Blocked Links]
  $description[$if[$arrayLength[BlockedLinks]>0;- https://;There are no links blocked by the Auto-Mod.]$arrayJoin[BlockedLinks;\n- https://]]
  $color[${configuration.colors.main}]

  $footer[Auto-Mod : Listing Blocked Links]

  $addActionRow
    $addButton[testd;;Secondary;⬅️]
    $addButton[testdsdsd;Page 1;Secondary;;true]
    $addButton[testdss;;Secondary;➡️]
]
`,
};

export default ApplicationCommand;