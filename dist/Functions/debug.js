"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Function = {
    name: 'debug',
    params: [
        { name: "message", type: "String", required: true },
        { name: "channel", type: "Channel", required: false }
    ],
    code: `
    $let[C;$if[$env[channel]==;$channelID;$env[channel]]]
    $sendMessage[$get[C];$env[message]]
  `
};
exports.default = Function;
//# sourceMappingURL=debug.js.map