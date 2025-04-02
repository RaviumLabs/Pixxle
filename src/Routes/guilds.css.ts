import { join } from 'path';

module.exports = {
    url: '/guilds.css',
    method: 'GET',
    auth: true,
    handler: async function (ctx) {
        ctx.res.sendFile(join(__dirname, "../../public/Guilds/guilds.css"));
    },
};