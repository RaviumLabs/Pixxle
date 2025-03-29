import { IForgeFunction } from "@tryforge/forgescript";
import configuration from '../configuration.json';

const Function: IForgeFunction = {
  name: 'AMLogAction',
  params: [
    { name: "channel", type: "Channel", required: true },
    { name: "type", type: "String", required: true },
    { name: "author", type: "User", required: true },
    { name: "severity", type: "String", required: false }
  ],
  code: `
    $onlyIf[$guildChannelExists[$guildID;$env[channel]]==true;]
    $let[Severity;$if[$env[severity]==;Undefined;$env[severity]]]

    $sendMessage[$env[channel];
        $title[Auto-Mod Action Log]
        $color[${configuration.colors.error}]
    ]
  `
};

export default Function;