/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    let embed = new Discord.MessageEmbed()
        .setTitle("**Member count**")
        .setDescription(message.guild.memberCount)
        .setColor(3447003)
        .setTimestamp()
        .setFooter(`© 2023 Apple Development`);
    await message.channel.send(embed);
};

module.exports.help = {
    name: "membercount"
};