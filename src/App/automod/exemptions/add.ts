import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'add',
    description: 'Add roles exempt from Auto-Mod actions.',
    options: [
      {
        type: 8,
        name: 'role',
        description: 'Specify the role you want to add to the Auto-Mod exemptions list.',
        required: false
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;