import { Client, Message } from "discord.js"
import { Database as db } from "./db"

import dotenv from 'dotenv'

dotenv.config()

let con = null;


const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", (): void => {
    console.log("Bot Online")
})



db.connect(process.env.DB_HOST,process.env.DB_USERNAME,process.env.DB_PASSWORD, process.env.DB_NAMES).then(
    dbs =>{
        con = dbs

        /**
         * creating table blocked if not exists
         */
        con.run("CREATE TABLE IF NOT EXISTS blocked( id INT(11) NOT NULL PRIMARY KEY auto_increment, blocked_id VARCHAR(30) NOT NULL UNIQUE)");

        /**
         * scraping messages when send to the server
         */
        client.on("messageCreate", async(message:Message)=>{

            const blockedResult = await con.run("SELECT blocked_id from blocked")

            //blocked Ids array
            const blockedIds = [];
            for(let i=0; i<blockedResult.length; i++)
            {
                blockedIds.push(blockedResult[i].blocked_id);
            }   

            //checking if an id is blocked or not
            if(!blockedIds.includes(message.author.id))
            {

                const result = Object();
                result.serverName = message.guild.name;
                result.messageUrl = message.url;
                result.author = message.author.username+"#"+message.author.discriminator;
                result.authorId = message.author.id;
                result.timeOfMention = message.createdAt;
                result.message = message.content;
                console.log(result);
            }

        })
        client.login(process.env.BOT_TOKEN)
    })