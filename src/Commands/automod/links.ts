import { CommandType, IBaseCommand } from '@tryforge/forgescript';
import configuration from '../../configuration.json';

const Command: IBaseCommand<CommandType> = {
  type: "messageCreate",
  code: `
$onlyIf[$getGuildVar[AutoMod_Enabled;$guildID;false]==true;]
$onlyIf[$includes[$getGuildVar[AutoMod_ExcludedChannels;$guildID;];$channelID]==false;]

$arrayLoad[UserRoles;/;$memberRoles[$guildID;$authorID;/]]
$arrayForEach[UserRoles;Role;
  $onlyIf[$includes[$getGuildVar[AutoMod_ExcludedRoles;$guildID;];$env[Role]]==false;]
]

$arrayLoad[BlockedLinks;//SEP//;$getGuildVar[AutoMod_BlockedLinks;$guildID;]]
$onlyIf[$arrayAt[BlockedLinks;0]!=;]

$arrayForEach[BlockedLinks;Link;
  $if[$includes[$toLowerCase[$message];$env[Link]]==true;
  
    $!deleteMessages[$channelID;$messageID]

    $if[$getGuildVar[AutoMod_Notify;$guildID;false]==true;
      $let[WarningMessageID;$sendMessage[$channelID;
        $description[$crossmark <@$authorID> The link you have sent is blocked by the Auto-Mod.]
        $color[${configuration.colors.error}]
      ;true]]
      $setTimeout[$!deleteMessages[$channelID;$get[WarningMessageID]];5000]
    ]

    $if[$guildChannelExists[$guildID;$getGuildVar[AutoMod_LogChannel;$guildID;]]==true;
      $sendMessage[$getGuildVar[AutoMod_LogChannel;$guildID;];
        $title[<:checkmark:$findApplicationEmoji[automod]> Auto-Mod Action Log]
        $thumbnail[$userAvatar]
        $addField[Author;<@$authorID> (\`$authorID\`)]
        $addField[Reason;Message contains a link keyword by the Auto-Mod.]
        $addField[Trigger;Link "\`https://$env[Link]/\`"]
        $footer[$username;$userAvatar]
        $timestamp
        $color[${configuration.colors.main}]

        $addActionRow
          $addButton[AM_Kick_$authorID;Kick;Danger]
          $addButton[AM_Mute_$authorID;Mute;Secondary]
          $addButton[AM_Warn_$authorID;Warn;Secondary]
      ]
    ]

  ;]
]`,
};

export default Command;