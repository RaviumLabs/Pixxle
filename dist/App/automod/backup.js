"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationCommand = {
    data: {
        type: 1,
        name: 'backup',
        description: 'Save flagged messages in a secure channel for manual review.',
        options: [
            {
                type: 7,
                name: 'channel',
                description: 'Specify the channel to store flagged messages.',
                required: true,
                channel_types: [0, 11, 12]
            }
        ]
    },
    code: ``,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=backup.js.map