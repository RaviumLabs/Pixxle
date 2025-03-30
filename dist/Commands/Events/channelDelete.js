"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command = {
    type: "channelDelete",
    code: `
$c[Auto-Mod : Excluded Channels]
$arrayLoad[ExcludedChannels;//SEP//;$getGuildVar[AutoMod_ExcludedChannels;$guildID;]]
$ifx[
  $if[$arrayIncludes[ExcludedChannels;$oldChannel[id]];
    $!jsonDelete[ExcludedChannels;$arrayIndexOf[ExcludedChannels;$oldChannel[id]]]
    $setGuildVar[AutoMod_ExcludedChannels;$arrayJoin[ExcludedChannels;//SEP//];$guildID]
  ;]
]
`,
};
exports.default = Command;
//# sourceMappingURL=channelDelete.js.map