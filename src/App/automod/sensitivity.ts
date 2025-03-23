import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'sensitivity',
    description: 'Adjust Auto-Mod sensitivity levels (low, medium, high).',
    options: [
      {
        type: 3,
        name: 'severity',
        description: 'Choose a predefined sensitivity level settings.',
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