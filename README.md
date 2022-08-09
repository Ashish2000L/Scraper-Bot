# A Discord bot to forward feed to other channels
  
Uses webhook to send message  
  
Mor more info see thhis document  
  
## Environment variables
On VPS / PC  
Create a new `.env` file
Put the following values (Replace with your own values)  

```env
BOT_TOKEN=""
DB_PASSWORD=""
DB_HOST=""
DB_NAME=""
DB_USER=""
```

`BOT_TOKEN` is the discord bot token  
`DB_PASSWORD`, `DB_HOST`, `DB_NAME`, `DB_USER` is the mysql database login info  

To run this file, please make sure that the nodejs is already avaiable in pc.

First, install all the necessary packages required for this project using below command
```shell
npm install
```

After successful installation, run the project using below command
```shell
    npm start
```

If above command dosen't work, use another command
```shell
    npm run dev
```

