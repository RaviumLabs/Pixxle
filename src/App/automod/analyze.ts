import { IApplicationCommandData } from '@tryforge/forgescript';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'analyze',
    description: 'Analyze server activity for violations during a specific time frame.',
    options: [
      {
        type: 3,
        name: 'type',
        description: 'Choose the type of violations to focus on.',
        required: false,
        choices: [
            { name: "Spam", value: "spam" },
            { name: "Profanity", value: "profanity" },
            { name: "All", value: "all" },
        ]
      }
    ]
  },
  code: ``,
};

export default ApplicationCommand;