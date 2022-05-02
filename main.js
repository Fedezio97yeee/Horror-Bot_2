const Discord = require("discord.js");

const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_INVITES", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "GUILD_PRESENCES", "GUILD_SCHEDULED_EVENTS", "GUILD_VOICE_STATES", "GUILD_WEBHOOKS"]}
);

client.login('OTcwNzQwOTkwNjk4NzM3NjY3.YnAW_w.2mlhncIY8GMk5eVgruEHYAYxy7E');

client.on("ready", () => {
    console.log("Horror-Bot ONLINE")
})

client.on("guildMemberAdd", (member) => {
    console.log("Ciao Ziiii" + `${member}`)
})

