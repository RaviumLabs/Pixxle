import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'backup',
    description: 'Save flagged messages in a secure channel for manual review.',
    options: [
      {
        type: 7,
        name: 'channel',
        description: 'Specify the channel to store flagged messages.',
        required: false,
        channel_types: [0, 11, 12]
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;