import { IForgeFunction } from "@tryforge/forgescript";

const Function: IForgeFunction = {
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

export default Function;