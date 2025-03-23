import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '../../configuration.json';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'enable',
    description: 'Enable the Auto-Mod system in the server.'
  },
  code: `
$onlyIf[$guildOwnerID[$guildID]==$authorID;$interactionReply[
  $ephemeral
  $description[$crossmark Only the owner of the server is able to enable the Auto-Mod system.]
  $color[${configuration.colors.error}]
]]

$ifx[
  $if[$getGuildVar[AutoMod_Enabled;$guildID;false]==false;
    $setGuildVar[AutoMod_Enabled;true;$guildID]

    $interactionReply[
      $ephemeral
      $description[$checkmark The Auto-Mod system has successfully been enabled.]
      $color[${configuration.colors.success}]
    ]
  ]
  $elseif[$getGuildVar[AutoMod_Enabled;$guildID;false]==true;
    $interactionReply[
      $ephemeral
      $description[$crossmark The Auto-Mod system has already been enabled. Use </automod disable:1352943921839210526> to disable it.]
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