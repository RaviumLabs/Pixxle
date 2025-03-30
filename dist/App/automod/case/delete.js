"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationCommand = {
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
exports.default = ApplicationCommand;
//# sourceMappingURL=delete.js.map