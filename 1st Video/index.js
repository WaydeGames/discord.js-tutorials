const Discord = require('discord.js')

const config = require('./config.json')

const client = new Discord.Client()

client.on('ready', () => {
    console.log('The client is ready!')
})

client.on('message', msg => {
    if(msg.content === 'ping') {
        msg.reply('Pong!')
    }
})

client.login(config.token)
