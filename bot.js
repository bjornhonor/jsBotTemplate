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
    console.log(`Bot iniciado com sucesso com ${client.users.size} usuários, em ${client.channels.size} canais e em ${client.guilds.size} servidores`)
    client.user.setActivity(`cagando em ${client.guilds.size} servidores`)
}) 

client.on("messageCreate", (message) => {
    const args = message.content.toLowerCase()
    if (args == "bom dia"){
        message.reply("Vai tomar no cu!")
    }
})

const geralId = "695849153430814754"
client.on("guildMemberAdd", (member) =>{
    member.guild.channels.cache.get(geralId).send(`Bem vindo <@${member.id}>`)

})
//695849153430814754

// client.on("message", async message =>{
//     if(message.author.bot) return;

//     const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//     const comando = args.shift().toLowerCase(); 
    
//     if (comando === "ping"){
//         const m = await message.channel.send(`ping: ${message.createdTimestamp} ms`);
//         //m.edit(`ping: ${message.createdTimestamp} ms`);
//     }
// })

//login atraves do token no config.json
client.login(config.token)