import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'warnings',
    description: 'View all warnings issued to a specific user.',
    options: [
      {
        type: 6,
        name: 'user',
        description: 'The user whose warnings you want to view.',
        required: true
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;