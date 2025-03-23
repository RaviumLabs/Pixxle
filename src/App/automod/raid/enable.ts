import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'enable',
    description: 'Enable anti-raid protection with customizable thresholds.',
    options: [
      {
        type: 3,
        name: 'threshold',
        description: 'Set the maximum joins or messages per minute (deafault: 0).',
        required: false
      }, {
        type: 3,
        name: 'action',
        description: 'Specify the action to take during a raid.',
        required: false,
        choices: [
            { name: "Lockdown", value: "lockdown" },
            { name: "Mute", value: "mute" },
            { name: "Kick", value: "kick" }
        ]
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;