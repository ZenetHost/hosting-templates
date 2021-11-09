// docs: https://dbdts.leref.ga/ <-- You can see the documentation here
const dbd = require("dbd.ts")

const bot = new dbd.Bot({
    intents: ["GUILDS", "GUILD_MESSAGES"], //Discord Intents
    prefix: "YOURPREFIX" //Discord Client Prefix
})


bot.addEvent([
    "onMessage"
])

// commands here
bot.commands.add({
    type: "basicCommand",
    name: "ping",
    code: "Pong! $pingms"
})

bot.login("YOURPREFIX")