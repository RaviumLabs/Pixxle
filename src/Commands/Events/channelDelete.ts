import { CommandType, IBaseCommand } from '@tryforge/forgescript';

const Command: IBaseCommand<CommandType> = {
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

export default Command;