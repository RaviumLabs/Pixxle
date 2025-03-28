import { CommandType, IBaseCommand } from '@tryforge/forgescript';
import configuration from '../../configuration.json';

const Command: IBaseCommand<CommandType> = {
  type: "roleDelete",
  code: `
$c[Auto-Mod : Excluded Roles]
$arrayLoad[ExcludedRoles;//SEP//;$getGuildVar[AutoMod_ExcludedRoles;$guildID;]]
$ifx[
  $if[$arrayIncludes[ExcludedRoles;$oldRole[id]];
    $!jsonDelete[ExcludedRoles;$arrayIndexOf[ExcludedRoles;$oldRole[id]]]
    $setGuildVar[AutoMod_ExcludedRoles;$arrayJoin[ExcludedRoles;//SEP//];$guildID]
  ;]
]
`,
};

export default Command;