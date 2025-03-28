import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '../../../configuration.json';

const ApplicationCommand: IApplicationCommandData = {
  data: {
    type: 1,
    name: 'restrict',
    description: 'Apply Auto-Mod actions to specific channels.',
    options: [
      {
        type: 7,
        name: 'channel',
        description: 'The channel to restrict.',
        required: true,
        channel_types: [0, 11, 12]
      }
    ]
  },
  code: `
$onlyIf[$hasAnyPerms[$guildID;$authorID;Administrator;ManageGuild]==true;$interactionReply[
  $ephemeral
  $description[$crossmark You are missing the \`ManageGuild\` permission to run this command.]
  $color[${configuration.colors.error}]
]]

$onlyIf[$getGuildVar[AutoMod_Enabled;$guildID;false]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The Auto-Mod system is disabled in this server. Use </automod enable:1352943921839210526> to enable it.]
  $color[${configuration.colors.error}]
]]

$onlyIf[$guildChannelExists[$guildID;$option[channel]]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The channel you have provided does not exist in this server.]
  $color[${configuration.colors.error}]
]]

$let[ExcludedChannels;$getGuildVar[AutoMod_ExcludedChannels;$guildID;]]
$arrayLoad[ExcludedChannels;//SEP//;$get[ExcludedChannels]]
  
$onlyIf[$checkContains[$getGuildVar[AutoMod_ExcludedChannels;$guildID;];$option[channel]]==true;$interactionReply[
  $ephemeral
  $description[$crossmark The channel you have provided is not excluded.]
  $color[${configuration.colors.error}]
]]
  
$!jsonDelete[ExcludedChannels;$arrayIndexOf[ExcludedChannels;$option[channel]]]

$setGuildVar[AutoMod_ExcludedChannels;$arrayJoin[ExcludedChannels;//SEP//];$guildID]
  
$interactionReply[
  $ephemeral
  $description[$checkmark The channel you have provided has successfully been restricted with the Auto-Mod actions.]
  $color[${configuration.colors.success}]
]`,
};

export default ApplicationCommand;