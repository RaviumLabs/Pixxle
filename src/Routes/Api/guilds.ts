module.exports = {
    url: "/api/guilds",
    method: "GET",
    auth: true,
    handler: async function (ctx) {
        const sortedGuildList = ctx.client.guilds.cache
            .sort((a, b) => b.memberCount - a.memberCount)
            .map(guild => ({
                name: guild.name,
                users: guild.memberCount,
                owner: guild.ownerId,
                guildicon: guild.iconURL({ dynamic: true }) || null
            }));

        const guildList = ctx.client.guilds.cache.map(guild => ({
            name: guild.name,
            users: guild.memberCount,
            owner: guild.ownerId,
            guildicon: guild.iconURL({ dynamic: true }) || null
        }));

        ctx.res.send({
            guildCount: ctx.client.guilds.cache.size,
            guilds: guildList,
            sortedGuilds: sortedGuildList

        });
    },
};