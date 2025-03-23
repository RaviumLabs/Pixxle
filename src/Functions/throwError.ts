import { IForgeFunction } from "@tryforge/forgescript";
import configuration from '../configuration.json';

const Function: IForgeFunction = {
    name: 'throwError',
    params: [
        { name: "code", type: "Number", required: true },
        { name: "varToGet", type: "String", required: false },
    ],
    code: `
        $log[ErrorThrew ($parseDate[$getTimestamp;LocaleDate]): { GuildID: $guildID, ErrorCode: $env[code], VarToGet: $env[varToGet], VarResult: $getGuildVar[$env[varToGet];$guildID;Undefined.] }]
        $return[
            $description[$crossmark An error occured, error code \`$env[code]\`. Debug: \`$getGuildVar[$env[varToGet];$guildID;Undefined.]\`]
            $color[${configuration.colors.error}]
        ]
    `
};

export default Function;