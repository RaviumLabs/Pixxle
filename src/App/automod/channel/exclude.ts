import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'exclude',
    description: 'Exclude specific channels from Auto-Mod actions.',
    options: [
      {
        type: 7,
        name: 'channel',
        description: 'The channel to exclude.',
        required: true,
        channel_types: [0, 11, 12]
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;