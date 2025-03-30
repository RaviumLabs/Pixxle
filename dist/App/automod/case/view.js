"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationCommand = {
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
exports.default = ApplicationCommand;
//# sourceMappingURL=view.js.map