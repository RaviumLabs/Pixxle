import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'restrict',
    description: 'Apply stricter Auto-Mod actions to specific roles.',
    options: [
      {
        type: 7,
        name: 'role',
        description: 'The role to restrict.',
        required: true
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;