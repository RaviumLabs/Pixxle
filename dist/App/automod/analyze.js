"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationCommand = {
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
exports.default = ApplicationCommand;
//# sourceMappingURL=analyze.js.map