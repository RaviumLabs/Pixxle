import { IApplicationCommandData } from '@tryforge/forgescript';

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
  code: ``,
};

export default ApplicationCommand;