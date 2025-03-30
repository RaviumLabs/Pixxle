"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationCommand = {
    data: {
        type: 1,
        name: 'report',
        description: 'Generate a detailed report of the flagged messages and actions.',
        options: [
            {
                type: 3,
                name: 'duration',
                description: 'Specify the time frame for the report (e.g., 1d, 7d).',
                required: false
            }, {
                type: 6,
                name: 'user',
                description: 'Filter the report for a specific user.',
                required: false
            }
        ]
    },
    code: ``,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=report.js.map