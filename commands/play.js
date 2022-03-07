module.exports = {
  name: 'play',
  aliases: ['p'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    if (message.member.voice.channel.id === "950187127021400165")         
    const string = args.join(' ')
    if (!string) return message.channel.send(`${client.emotes.error} | Please enter a song url or query to search.`)
    client.distube.play(message.member.voice.channel, string, {
      member: message.member,
      textChannel: message.channel,
      message
    })
  }
}
