"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("../configuration.json"));
const Function = {
    name: 'throwError',
    params: [
        { name: "code", type: "Number", required: true },
        { name: "varToGet", type: "String", required: false },
    ],
    code: `
        $log[ErrorThrew ($parseDate[$getTimestamp;LocaleDate]): { GuildID: $guildID, ErrorCode: $env[code], VarToGet: $env[varToGet], VarResult: $getGuildVar[$env[varToGet];$guildID;Undefined.] }]
        $return[
            $description[$crossmark An error occured, error code \`$env[code]\`. Debug: \`$getGuildVar[$env[varToGet];$guildID;Undefined.]\`]
            $color[${configuration_json_1.default.colors.error}]
        ]
    `
};
exports.default = Function;
//# sourceMappingURL=throwError.js.map