"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("../configuration.json"));
const Function = {
    name: 'AMLogAction',
    params: [
        { name: "author", type: "Number", required: true },
        { name: "reason", type: "String", required: true },
        { name: "trigger", type: "String", required: true }
    ],
    code: `
    $let[LogChannel;$getGuildVar[AutoMod_LogChannel;$guildID;]]
    $onlyIf[$guildChannelExists[$guildID;$env[channel]]==true;]

    $sendMessage[$get[LogChannel];
      $title[<:checkmark:$findApplicationEmoji[automod]> Auto-Mod Action Log]
      $thumbnail[$userAvatar[$env[author]]]
      $addField[Author;<@$authorID> (\`$authorID\`)]
      $addField[Reason;$env[reason]]
      $addField[Trigger;$env[trigger]]
      $footer[$username[$env[author]];$userAvatar]
      $timestamp
      $color[${configuration_json_1.default.colors.main}]

      $addActionRow
        $addButton[AM_Kick_$env[author];Kick;Danger]
        $addButton[AM_Mute_$env[author];Mute;Secondary]
        $addButton[AM_Warn_$env[author];Warn;Secondary]
    ]
  `
};
exports.default = Function;
//# sourceMappingURL=automodLogAction.js.map