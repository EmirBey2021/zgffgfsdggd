const discord = require('discord.js')


exports.run = async(client, message, args) => {

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu Komudu Kullanabilmen İçin \`Üyeleri Yasakla\` Yetkisine Sahip Olmalısın!`);

let kullanıcı = message.mentions.members.first()
if (!kullanıcı) return message.channel.send(`**+ban <@KullanıcıAdı> <Sebep>**`)

let sebep = args.slice(1).join(' ')
if (!sebep) return message.channel.send(`**+ban <@KullanıcıAdı> <Sebep>**`)

message.guild.members.ban(kullanıcı, {
  reason: sebep
})
  message.channel.send(`**${kullanıcı} Sunucudan Banlandı\nBanlayan Kişi: ${message.author}\nSebep:** **${sebep}**`)
  kullanıcı.send(`**${message.guild.name}** Serverinden **${sebep}** Nedeniyle Banlandın!`)

};
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['yasakla'],
  permlevel: 0
}
exports.help = {
  name: 'ban'
}
