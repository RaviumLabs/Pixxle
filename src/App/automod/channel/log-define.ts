import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'log-define',
    description: 'Define a specific channel where Auto-Mod actions will be sent.',
    options: [
      {
        type: 7,
        name: 'channel',
        description: 'The channel to define as Auto-Mod logs channel.',
        required: true,
        channel_types: [0, 11, 12]
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;