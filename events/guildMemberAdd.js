const Discord = require("discord.js");

module.exports = (client, member) => {
  let guild = client.guilds.get("1140723333621629051");
  let memberCount = guild.memberCount;

  if (memberCount == 70) {
    const channel = client.channels.cache.find(
      (channel) => channel.name == "welcome"
    );
    let embed2 = new Discord.MessageEmbed()
      .setTitle(`**REACHED GOAL! ${memberCount}**`)
      .setDescription(`Congratulations, @<${member.id}>!`)
      .setColor(3447003)
      .setTimestamp()
      .setFooter(`© 2023 Apple Development`);
    channel.send(embed2);
  }
  if(memberCount == 100) {
    const channel = client.channels.cache.find(
        (channel) => channel.name == "welcome"
      );
      let embed2 = new Discord.MessageEmbed()
        .setTitle(`**REACHED GOAL! ${memberCount}**`)
        .setDescription(`Congratulations, @<${member.id}>!`)
        .setColor(3447003)
        .setTimestamp()
        .setFooter(`© 2023 Apple Development`);
      channel.send(embed2);
  }
};
