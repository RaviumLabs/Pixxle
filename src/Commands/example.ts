import { CommandType, IBaseCommand } from '@tryforge/forgescript';

const Command: IBaseCommand<CommandType> = {
  type: "messageCreate",
  name: "e",
  aliases: [],
  code: `$eval[$message]`,
  unprefixed: false,
};

export default Command;