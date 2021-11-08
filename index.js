

// use wiki: https://aoi.leref.ga/functions
// you have like every function there you can just paste the code here



const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "YOURTOKEN", //Discord Bot Token
prefix: "PREFIX", //Discord Bot Prefix
intents: "all" //Discord Intents
})

//Events
bot.onMessage()

//add your commands here
bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})

bot.command({
    name: "hello",
    code: `Hi there!`
    })

   


// this maybe need to be at the end
//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})