"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationCommand = {
    data: {
        type: 1,
        name: 'response',
        description: 'Set custom responses for flagged messages.',
        options: [
            {
                type: 3,
                name: 'action',
                description: 'Specify the action to take.',
                required: true,
                choices: [
                    { name: "Delete", value: "delete" },
                    { name: "Mute", value: "mute" },
                    { name: "Ban", value: "ban" },
                    { name: "Kick", value: "kick" }
                ]
            }, {
                type: 3,
                name: 'message',
                description: 'The custom message to respond with.',
                required: true,
                max_length: 200,
                min_length: 5
            }
        ]
    },
    code: ``,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=response.js.map