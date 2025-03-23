import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'add',
    description: 'Add specific keywords to the Auto-Mod filter.',
    options: [
      {
        type: 3,
        name: 'keyword',
        description: 'The keyword to block.',
        required: true
      }, {
        type: 3,
        name: 'severity',
        description: 'Add specific keywords to the Auto-Mod filter.',
        choices: [
            { name: "Low", value: "low" },
            { name: "Medium", value: "medium" },
            { name: "High", value: "high" },
        ]
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;