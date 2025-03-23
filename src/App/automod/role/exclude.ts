import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'exclude',
    description: 'Exclude specific roles from Auto-Mod actions.',
    options: [
      {
        type: 8,
        name: 'role',
        description: 'The role to exclude.',
        required: true
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;