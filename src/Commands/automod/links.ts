import { CommandType, IBaseCommand } from '@tryforge/forgescript';
import configuration from '../../configuration.json';

const Command: IBaseCommand<CommandType> = {
  type: "messageCreate",
  code: `
$onlyIf[$includes[$getGuildVar[AutoMod_ExcludedChannels;$guildID;];$channelID]==false;]

$arrayLoad[UserRoles;/;$memberRoles[$guildID;$authorID;/]]
$arrayForEach[UserRoles;Role;
  $onlyIf[$includes[$getGuildVar[AutoMod_ExcludedRoles;$guildID;];$env[Role]]==false;]
]

$arrayLoad[BlockedLinks;//SEP//;$getGuildVar[AutoMod_BlockedLinks;$guildID;]]
$arrayForEach[BlockedLinks;Link;
  $if[$includes[$message;$env[Link]]==true;$!deleteMessages[$channelID;$messageID]
    $let[WarninMessageID;$sendMessage[$channelID;
      $description[$crossmark <@$authorID> The link you have sent is blocked by the Auto-Mod.]
      $color[${configuration.colors.error}]
    ;true]]
    $setTimeout[$!deleteMessages[$channelID;$get[WarninMessageID]];4000]
  ;]
]`,
};

export default Command;