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

$arrayLoad[BlockedKeywords;//SEP//;$getGuildVar[AutoMod_BlockedKeywords;$guildID;]]

$onlyIf[$arrayAt[BlockedKeywords;0]!=;]

$arrayForEach[BlockedKeywords;Keyword;
  $if[$includes[$toLowerCase[$message];$env[Keyword]]==true;
  
    $!deleteMessages[$channelID;$messageID]
    
    $if[$getGuildVar[AutoMod_Notify;$guildID;false]==true;
      $let[WarningMessageID;$sendMessage[$channelID;
        $description[$crossmark <@$authorID> The message you have sent contains a blocked keyword by the Auto-Mod.]
        $color[${configuration.colors.error}]
        ;true]]
      $setTimeout[$!deleteMessages[$channelID;$get[WarningMessageID]];5000]
    ]
    
    $if[$guildChannelExists[$guildID;$getGuildVar[AutoMod_LogChannel;$guildID;]]==true;
      $sendMessage[$getGuildVar[AutoMod_LogChannel;$guildID;];
        $title[<:checkmark:$findApplicationEmoji[automod]> Auto-Mod Action Log]
        $thumbnail[$userAvatar]
        $addField[Author;<@$authorID> (\`$authorID\`)]
        $addField[Reason;Message contains a blocked keyword by the Auto-Mod.]
        $addField[Trigger;Keyword "\`$env[Keyword]\`"]
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