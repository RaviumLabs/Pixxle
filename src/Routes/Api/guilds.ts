import { join } from 'path';

module.exports = {
    url: "/api/guilds",
    method: "GET",
    auth: true,
    handler: async function (ctx) {
        const guildList = ctx.client.guilds.cache
            .sort((a, b) => b.memberCount - a.memberCount)
            .map(guild => ({
                name: guild.name,
                users: guild.memberCount,
                owner: guild.ownerId,
                guildicon: guild.iconURL({ dynamic: true }) || null
            }));
        
        const botPing = ctx.client.uptime

        ctx.res.send({
            guildCount: ctx.client.guilds.cache.size,
            guilds: guildList,
            ping: botPing
        });
    },
};