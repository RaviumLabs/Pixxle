"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command = {
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
exports.default = Command;
//# sourceMappingURL=roleDelete.js.map