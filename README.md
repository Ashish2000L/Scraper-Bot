# A Discord bot to forward feed to other channels
  
Uses webhook to send message  
  
Mor more info see thhis document  
  
## Environment variables
On VPS / PC  
Create a new `.env` file (Or copy the `domo.env` file)  
Put the following values (Replace with your own values)  

```env
BOT_TOKEN=""
BOT_NAME=""
BOT_AVATAR=""
DB_PASSWORD=""
DB_HOST=""
DB_NAME=""
DB_USER=""
AWS_SECRET_ACCESS_KEY=""
AWS_ACCESS_KEY_ID=""
AWS_REGION=""
OWNER_ID=""
```

`BOT_TOKEN` is the discord bot token  
`BOT_NAME` is the bot's name  
`BOT_AVATAR` is the bot's avatar image url  
`DB_PASSWORD`, `DB_HOST`, `DB_NAME`, `DB_USER` is the mysql database login info  
`AWS_SECRET_ACCESS_KEY`, `AWS_ACCESS_KEY_ID`, `AWS_REGION` is the aws dynamodb user data  