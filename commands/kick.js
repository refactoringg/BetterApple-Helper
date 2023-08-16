const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    const user = message.mentions.users.first();
    if (message.author.hasPermission("KICK_MEMBERS")) {
        message.channel.send(`You don't have required permissions, @<${message.author.id}>`);
        return;
    }
    if(user) {
        const member = message.guild.members.resolve(user);
        if (member) {
            /**
             * Ban the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             * Read more about what ban options there are over at
             * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
             */
            member
              .kick()
              .then(() => {
                // We let the message author know we were able to ban the person
                let embed = new Discord.MessageEmbed()
                .setTitle("**Kicked member**")
                .setColor("#0000FF")
                .addField("User", user.tag, false)
                .setTimestamp()
                .setFooter(`© 2023 Apple Development`);
                message.channel.send(embed);
            })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to ban the member,
                // either due to missing permissions or role hierarchy
                message.channel.send('Failed to kick member: ' + err);
                // Log the error
                console.error(err);
            });
        } else {
            // The mentioned user isn't in this guild
            message.channel.send("That user isn't in this guild!");
        }
    } else {
        message.channel.send("User doesn't exist!");
    }
};

module.exports.help = {
    name: "ban"
};