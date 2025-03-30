"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("../../configuration.json"));
const ApplicationCommand = {
    data: {
        type: 1,
        name: 'disable',
        description: 'Disable the Auto-Mod system in the server.'
    },
    code: `
$onlyIf[$guildOwnerID[$guildID]==$authorID;$interactionReply[
  $ephemeral
  $description[$crossmark Only the owner of the server is able to disable the Auto-Mod system.]
  $color[${configuration_json_1.default.colors.error}]
]]

$ifx[
  $if[$getGuildVar[AutoMod_Enabled;$guildID;false]==true;
    $setGuildVar[AutoMod_Enabled;false;$guildID]

    $interactionReply[
      $ephemeral
      $description[$checkmark The Auto-Mod system has successfully been disabled.]
      $color[${configuration_json_1.default.colors.success}]
    ]
  ]
  $elseif[$getGuildVar[AutoMod_Enabled;$guildID;false]==false;
    $interactionReply[
      $ephemeral
      $description[$crossmark The Auto-Mod system has already been disabled. Use </automod enable:1352943921839210526> to enable it.]
      $color[${configuration_json_1.default.colors.error}]
    ]
  ]
  
  $else[
    $interactionReply[
      $ephemeral
      $throwError[520;AutoMod_Enabled]
    ]
  ]
]`,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=disable.js.map