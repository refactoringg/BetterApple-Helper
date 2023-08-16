/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    const channel = client.channels.cache.find(channel => channel.name === "support")
    let embed2 = new Discord.MessageEmbed()
        .setTitle("**Support ticket opened**")
        .setDescription(`@<${message.author.id}> has opened a support ticket`)
        .addField("Reason", args[1], true)
        .setColor(3447003)
        .setTimestamp()
        .setFooter(`© 2023 Apple Development`);
    channel.send(embed2)

    let embed = new Discord.MessageEmbed()
        .setTitle("**Support ticket opened**")
        .setDescription("Keep your DMs open so you recieve a DM from a moderator")
        .setColor(3447003)
        .setTimestamp()
        .setFooter(`© 2023 Apple Development`);
    await message.channel.send(embed);
};

module.exports.help = {
    name: "ticket"
};