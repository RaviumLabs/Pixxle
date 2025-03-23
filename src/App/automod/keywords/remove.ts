import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'remove',
    description: 'Remove a keyword from the Auto-Mod filter.',
    options: [
      {
        type: 3,
        name: 'keyword',
        description: 'The keyword to remove.',
        required: true
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;