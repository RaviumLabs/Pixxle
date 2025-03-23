import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'delete',
    description: 'Delete a specific violation case from the log.',
    options: [
      {
        type: 4,
        name: 'case_id',
        description: 'The ID of the case to delte.',
        required: true,
        min_value: 0
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;