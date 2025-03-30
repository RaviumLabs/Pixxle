import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '../../configuration.json';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'notify',
    description: 'Enable or disable user notifications for flagged messages.',
    options: [
      {
        type: 3,
        name: 'status',
        description: 'Enable or disable notifications.',
        required: true,
        choices: [
            { name: "On", value: "on" },
            { name: "Off", value: "off" }
        ]
      }
    ]
  },
  code: `
$onlyIf[$hasAnyPerms[$guildID;$authorID;Administrator;ManageGuild]==true;$interactionReply[
  $ephemeral
  $description[$crossmark You are missing the \`ManageGuild\` permission to run this command.]
  $color[${configuration.colors.error}]
]]

$ifx[
  $if[$option[status]==on;
    $if[$getGuildVar[AutoMod_Notify;$guildID;false]==false;
      $setGuildVar[AutoMod_Notify;true;$guildID]

      $interactionReply[
        $ephemeral
        $description[$checkmark The Auto-Mod system will now notify users after taking actions.]
        $color[${configuration.colors.success}]
      ]
    ;
      $interactionReply[
        $ephemeral
        $description[$crossmark The Auto-Mod system is already notifying users after taking actions.]
        $color[${configuration.colors.error}]
      ]
    ]
  ]

  $elseIf[$option[status]==off;
    $if[$getGuildVar[AutoMod_Notify;$guildID;false]==true;
      $setGuildVar[AutoMod_Notify;false;$guildID]

      $interactionReply[
        $ephemeral
        $description[$checkmark The Auto-Mod system will no longer notify users after taking actions.]
        $color[${configuration.colors.success}]
      ]
    ;
      $interactionReply[
        $ephemeral
        $description[$crossmark The Auto-Mod system is not notifying users after taking actions by default.]
        $color[${configuration.colors.error}]
      ]
    ]
  ]
]`,
};

export default ApplicationCommand;