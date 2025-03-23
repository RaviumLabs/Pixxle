import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '../../configuration.json';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'disable',
    description: 'Disable the Auto-Mod system in the server.'
  },
  code: `
$onlyIf[$guildOwnerID[$guildID]==$authorID;$interactionReply[
  $ephemeral
  $description[$crossmark Only the owner of the server is able to disable the Auto-Mod system.]
  $color[${configuration.colors.error}]
]]

$ifx[
  $if[$getGuildVar[AutoMod_Enabled;$guildID;false]==true;
    $setGuildVar[AutoMod_Enabled;false;$guildID]

    $interactionReply[
      $ephemeral
      $description[$checkmark The Auto-Mod system has successfully been disabled.]
      $color[${configuration.colors.success}]
    ]
  ]
  $elseif[$getGuildVar[AutoMod_Enabled;$guildID;false]==false;
    $interactionReply[
      $ephemeral
      $description[$crossmark The Auto-Mod system has already been disabled. Use </automod enable:1352943921839210526> to enable it.]
      $color[${configuration.colors.error}]
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

export default ApplicationCommand;