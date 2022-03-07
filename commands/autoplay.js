module.exports = {
  name: 'autoplay',
  inVoiceChannel: true,
  run: async (client, message) => {
if (message.member.voice.channel.id === "950187127021400165");  
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    const autoplay = queue.toggleAutoplay()
    message.channel.send(`${client.emotes.success} | AutoPlay: \`${autoplay ? 'On' : 'Off'}\``)
  }
}
