"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("../../configuration.json"));
const Command = {
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
        $color[${configuration_json_1.default.colors.error}]
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
        $color[${configuration_json_1.default.colors.main}]

        $addActionRow
          $addButton[AM_Kick_$authorID;Kick;Danger]
          $addButton[AM_Mute_$authorID;Mute;Secondary]
          $addButton[AM_Warn_$authorID;Warn;Secondary]
      ]
    ]

  ;]
]`,
};
exports.default = Command;
//# sourceMappingURL=keywords.js.map