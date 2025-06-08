const { Client } = require("discord.js");

const client = new Client({
    intents:[]
});

const { token } = require("../config.json");

const { CommandKit } = require("commandkit");
const path = require("path");


new CommandKit({
    client,
    eventsPath:  path.join(__dirname, "events"),
    commandsPath: path.join(__dirname, "commands"),
    bulkRegister: true
})

client.login(token);