import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'clearwarnings',
    description: 'Clear all Auto-Mod warnings from a specific user.',
    options: [
      {
        type: 6,
        name: 'user',
        description: 'The user whose Auto-Mod warnings you want to clear.',
        required: true
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;