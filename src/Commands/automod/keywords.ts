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

$arrayLoad[BlockedKeywords;//SEP//;$getGuildVar[AutoMod_BlockedKeywords;$guildID;]]

$onlyIf[$and[$arrayLength[BlockedKeywords]==1;$arrayAt[BlockedKeywords;0]!=]==true;]

$arrayForEach[BlockedKeywords;Keyword;
  $if[$includes[$message;$env[Keyword]]==true;$!deleteMessages[$channelID;$messageID]
    $let[WarningMessageID;$sendMessage[$channelID;
      $description[$crossmark <@$authorID> The message you have sent contains a blocked keyword by the Auto-Mod.]
      $color[${configuration.colors.error}]
    ;true]]
    $setTimeout[$!deleteMessages[$channelID;$get[WarningMessageID]];5000]
  ;]
]`,
};

export default Command;