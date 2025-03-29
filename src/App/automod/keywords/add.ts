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
      }, {
        type: 3,
        name: 'severity',
        description: 'Add specific keywords to the Auto-Mod filter.',
        choices: [
            { name: "Low", value: "low" },
            { name: "Medium", value: "medium" },
            { name: "High", value: "high" },
        ]
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

$onlyIf[$isValidLink[$option[domain]]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The link you have provided is not a valid link.]
  $color[${configuration.colors.error}]
]]

$arrayLoad[Link;://;$option[domain]]
$arrayLoad[Domain;/;$arrayAt[Link;1]]

$let[Domain;$toLowerCase[$arrayAt[Domain;0]]]

$onlyIf[$checkContains[$getGuildVar[AutoMod_BlockedLinks;$guildID;];$get[Domain]]==false;$interactionReply[
  $ephemeral
  $description[$crossmark The link you have provided is already blocked.]
  $color[${configuration.colors.error}]
]]

$let[BlockedLinks;$getGuildVar[AutoMod_BlockedLinks;$guildID;]]

$arrayLoad[BlockedLinks;//SEP//;$get[BlockedLinks]]
$arrayPush[BlockedLinks;$get[Domain]]

$ifx[
  $if[$arrayAt[BlockedLinks;0]==;
    $arrayShift[BlockedLinks]
  ]
]

$setGuildVar[AutoMod_BlockedLinks;$arrayJoin[BlockedLinks;//SEP//];$guildID]

$interactionReply[
  $ephemeral
  $description[$checkmark The link you have provided has successfully been blocked by the Auto-Mod.]
  $color[${configuration.colors.success}]
]`,
};

export default ApplicationCommand;