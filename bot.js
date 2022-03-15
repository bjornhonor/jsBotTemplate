//init objetos
const Discord = require("discord.js")
const client = new Discord.Client({ 
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ] 
})
const config = require("./config.json")

client.on("ready", () => {
    console.log(`Bot iniciado com sucesso com ${client.user.size} usuários, em ${client.channels.size} canais e em ${client.guilds.size} servidores`)
    client.user.setActivity(`voce vale tudo, topa qualquer parada`)
}) 

client.on("messageCreate", (message) => {
    const args = message.content.toLowerCase()
    if (args == "bom dia"){
        message.reply("Vai tomar no cu!")
    }
})

client.on("messageCreate", (message) => {
    const con = message.content.toLowerCase()
    if(con == "vadia"){
        message.reply("Olhe o palavreado!")
        message.delete()
    }
})

const geralId = "695849153430814754"
client.on("guildMemberAdd", (member) =>{
    member.guild.channels.cache.get(geralId).send(`Seja Bem vindo ao meu reino<@${member.id}>, voce é o ${Discord.Guild.member.size}`)
})

//login atraves do token no config.json
client.login(config.token)