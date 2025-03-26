import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'log-remove',
    description: 'Remove a channel from being the Auto-Mod logs channel.',
    options: [
      {
        type: 7,
        name: 'channel',
        description: 'The channel to remove.',
        required: true,
        channel_types: [0, 11, 12]
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;