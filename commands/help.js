const Discord = require('discord.js')

module.exports = {
  name: 'help',
  aliases: ['h', 'cmd', 'command'],
  run: async (client, message) => {
    if (message.member.voice.channel.id === "950187127021400165")         
    message.channel.send({
      embeds: [
        new Discord.MessageEmbed()
          .setTitle('Commands')
          .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(', '))
          .setColor('BLURPLE')
      ]
    })
  }
}
