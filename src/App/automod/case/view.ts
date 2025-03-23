import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'view',
    description: 'View details of a specific violation case.',
    options: [
      {
        type: 4,
        name: 'case_id',
        description: 'The ID of the case to view.',
        required: true,
        min_value: 0
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;