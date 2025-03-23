import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'restrict',
    description: 'Apply stricter Auto-Mod actions to specific channels.',
    options: [
      {
        type: 7,
        name: 'channel',
        description: 'The channel to restrict.',
        required: true,
        channel_types: [0, 11, 12]
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;