const { ActivityType } = require("discord.js")
const { url } = require("inspector")

module.exports = (c, client, handeler) => {
console.log(`Logged in as ${c.user.tag}`)

let status = [
    {
    name:(`Helping ${c.guilds.cache.size} servers!`),
    type: ActivityType.Streaming,
    url:("https://www.twitch.tv/mindcleanser/about") 
},
{
    name:(`Slash commands!`),
    type: ActivityType.Streaming,
    url:("https://www.twitch.tv/mindcleanser/about") 
}
]

setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
}, 10000)
}